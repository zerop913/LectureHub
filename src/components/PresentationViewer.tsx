"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Lecture, NavigationState, Slide } from "@/types";
import { Button } from "@/components/ui/Button";
import { CodePreview } from "@/components/CodePreview";
import { MarkdownText } from "@/utils/markdown";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Home,
  Maximize,
  Eye,
} from "lucide-react";
import { cn } from "@/utils/helpers";

interface PresentationViewerProps {
  lecture: Lecture;
}

export function PresentationViewer({ lecture }: PresentationViewerProps) {
  const router = useRouter();
  const [navigationState, setNavigationState] = useState<NavigationState>({
    currentSlide: 0,
    totalSlides: lecture.slides.length,
    isFullscreen: false,
  });
  const [codePreview, setCodePreview] = useState<{
    isOpen: boolean;
    code: string;
    language: string;
    title?: string;
  }>({
    isOpen: false,
    code: "",
    language: "",
    title: "",
  });

  const currentSlide = lecture.slides[navigationState.currentSlide];
  const progress =
    ((navigationState.currentSlide + 1) / navigationState.totalSlides) * 100;

  const goToSlide = useCallback(
    (slideIndex: number) => {
      if (slideIndex >= 0 && slideIndex < navigationState.totalSlides) {
        setNavigationState((prev) => ({
          ...prev,
          currentSlide: slideIndex,
        }));
      }
    },
    [navigationState.totalSlides]
  );

  const nextSlide = useCallback(() => {
    goToSlide(navigationState.currentSlide + 1);
  }, [navigationState.currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(navigationState.currentSlide - 1);
  }, [navigationState.currentSlide, goToSlide]);

  const exitPresentation = useCallback(() => {
    router.back();
  }, [router]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setNavigationState((prev) => ({ ...prev, isFullscreen: true }));
    } else {
      document.exitFullscreen();
      setNavigationState((prev) => ({ ...prev, isFullscreen: false }));
    }
  }, []);

  const openCodePreview = useCallback(
    (code: string, language: string, title?: string) => {
      setCodePreview({
        isOpen: true,
        code,
        language,
        title,
      });
    },
    []
  );

  const closeCodePreview = useCallback(() => {
    setCodePreview((prev) => ({ ...prev, isOpen: false }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
        case " ":
          event.preventDefault();
          nextSlide();
          break;
        case "Escape":
          exitPresentation();
          break;
        case "f":
        case "F11":
          event.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, exitPresentation, toggleFullscreen]);

  const SlideRenderer = ({ slide }: { slide: Slide }) => {
    switch (slide.type) {
      case "title":
        return (
          <div className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-16 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-100 opacity-30 blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-200 opacity-20 blur-3xl"></div>
            </div>

            <div className="space-y-12 relative z-10">
              {/* Main title with decorative elements */}
              <div className="relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] max-w-5xl tracking-tight relative">
                  <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
              </div>

              {slide.content && (
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-0.5 h-full bg-gradient-to-b from-gray-400 to-transparent"></div>
                  <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light italic">
                    <MarkdownText>{slide.content}</MarkdownText>
                  </p>
                </div>
              )}
            </div>

            {slide.keyPoints && (
              <div
                className={cn(
                  "grid gap-8 max-w-6xl w-full relative z-10",
                  slide.keyPoints.length === 1
                    ? "grid-cols-1 max-w-2xl"
                    : slide.keyPoints.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-4xl"
                    : slide.keyPoints.length === 3
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : slide.keyPoints.length === 4
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                    : slide.keyPoints.length === 5
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
                    : slide.keyPoints.length === 6
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                )}
              >
                {slide.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group relative p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-100 to-transparent opacity-50"></div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg">
                          {index + 1}
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-300 rounded-full opacity-60"></div>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-4 text-xl tracking-tight leading-tight">
                      {point.title}
                    </h3>

                    <div className="relative">
                      <div className="absolute -left-2 top-0 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
                      <p className="text-gray-600 text-base leading-relaxed pl-4">
                        <MarkdownText>{point.description}</MarkdownText>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "list":
        return (
          <div className="max-w-5xl mx-auto space-y-16 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-gray-200 to-gray-100 opacity-30 rotate-12"></div>
            </div>

            <div className="text-center space-y-8 relative z-10">
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                  <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h2>
                {/* Decorative underline */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
              </div>

              {slide.content && (
                <div className="relative max-w-4xl mx-auto">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-gray-200 to-transparent"></div>
                  <p className="text-xl text-gray-600 leading-relaxed font-light pl-8">
                    <MarkdownText>{slide.content}</MarkdownText>
                  </p>
                </div>
              )}
            </div>

            {slide.items && (
              <div className="space-y-6 relative z-10">
                {slide.items.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4 w-16 h-16 border border-gray-300 rounded-full"></div>
                      <div className="absolute bottom-4 right-8 w-8 h-8 bg-gray-200 rounded-md rotate-45"></div>
                    </div>

                    <div className="relative flex items-start gap-6">
                      {/* Enhanced number badge */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                          {index + 1}
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-300 rounded-full opacity-70"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gray-400 rounded-full opacity-50"></div>
                      </div>

                      {/* Content with decorative elements */}
                      <div className="flex-1 relative">
                        <div className="absolute -left-4 top-0 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
                        <p className="text-gray-800 leading-relaxed text-lg font-medium tracking-tight pl-6">
                          <MarkdownText>{item}</MarkdownText>
                        </p>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-gray-50/20 to-gray-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "two-column":
        return (
          <div className="max-w-7xl mx-auto space-y-16 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-gray-200 to-transparent"></div>
              <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 opacity-40 rotate-12"></div>
            </div>

            <div className="text-center space-y-8 relative z-10">
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                  <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h2>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
              </div>

              {slide.content && (
                <div className="relative max-w-4xl mx-auto">
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    <MarkdownText>{slide.content}</MarkdownText>
                  </p>
                </div>
              )}
            </div>

            {slide.leftContent && slide.rightContent && (
              <div className="relative">
                {/* Central divider with decorative elements */}
                <div className="absolute left-1/2 top-8 bottom-8 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden lg:block"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-gray-300 hidden lg:block"></div>
                <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 opacity-60 hidden lg:block"></div>
                <div className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-500 opacity-40 hidden lg:block"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                  <div className="space-y-8 relative">
                    {/* Left column header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-2 h-12 bg-gradient-to-b from-gray-900 to-gray-600 rounded-full"></div>
                      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                        {slide.leftContent.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {slide.leftContent.items.map((item, index) => (
                        <div
                          key={index}
                          className="group relative p-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                        >
                          {/* Background decoration */}
                          <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-50"></div>

                          <div className="flex items-start gap-4 relative">
                            <div className="flex-shrink-0 relative">
                              <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gray-300 rounded-full opacity-70"></div>
                            </div>

                            <div className="flex-1">
                              <div className="relative">
                                <div className="absolute -left-2 top-0 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
                                <p className="text-gray-800 leading-relaxed font-medium pl-4">
                                  <MarkdownText>{item}</MarkdownText>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 relative">
                    {/* Right column header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-2 h-12 bg-gradient-to-b from-gray-900 to-gray-600 rounded-full"></div>
                      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                        {slide.rightContent.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {slide.rightContent.items.map((item, index) => (
                        <div
                          key={index}
                          className="group relative p-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                        >
                          {/* Background decoration */}
                          <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-50"></div>

                          <div className="flex items-start gap-4 relative">
                            <div className="flex-shrink-0 relative">
                              <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gray-300 rounded-full opacity-70"></div>
                            </div>

                            <div className="flex-1">
                              <div className="relative">
                                <div className="absolute -left-2 top-0 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
                                <p className="text-gray-800 leading-relaxed font-medium pl-4">
                                  <MarkdownText>{item}</MarkdownText>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "code":
        return (
          <div className="max-w-6xl mx-auto space-y-16 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-16 h-16 border border-gray-200 opacity-30 rotate-12"></div>
              <div className="absolute bottom-20 right-16 w-12 h-12 bg-gray-100 opacity-40"></div>
            </div>

            <div className="text-center space-y-8 relative z-10">
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                  <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h2>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
              </div>

              {slide.content && (
                <div className="relative max-w-4xl mx-auto">
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    <MarkdownText>{slide.content}</MarkdownText>
                  </p>
                </div>
              )}
            </div>

            {slide.codeExample && (
              <div className="relative z-10">
                <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  {/* Enhanced header */}
                  {slide.codeExample.title && (
                    <div className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 px-8 py-6 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex gap-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                            <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                          </div>
                          <div className="w-px h-6 bg-gray-300"></div>
                          <span className="text-gray-700 font-semibold tracking-tight">
                            {slide.codeExample.title}
                          </span>
                        </div>

                        {/* Preview button and decorative elements */}
                        <div className="flex items-center gap-4">
                          {slide.codeExample &&
                            ["html", "css", "javascript", "js"].includes(
                              slide.codeExample.language.toLowerCase()
                            ) && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  openCodePreview(
                                    slide.codeExample!.code,
                                    slide.codeExample!.language,
                                    slide.codeExample!.title
                                  )
                                }
                                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-gray-300 rounded-lg"
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                Предпросмотр
                              </Button>
                            )}

                          <div className="flex items-center gap-2 opacity-40">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Header decoration */}
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                  )}

                  {/* Enhanced code block */}
                  <div className="relative">
                    {/* Custom Line numbers background */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-gray-100 border-r border-gray-200 flex flex-col py-8">
                      {slide.codeExample.code.split("\n").map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center h-6 text-xs text-gray-400 font-mono"
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </div>
                      ))}
                    </div>

                    {/* Code content with syntax highlighting */}
                    <div className="pl-20 pr-8 py-8 bg-gradient-to-br from-gray-50 to-white overflow-x-auto">
                      <SyntaxHighlighter
                        language={slide.codeExample.language.toLowerCase()}
                        style={oneLight}
                        showLineNumbers={false}
                        customStyle={{
                          margin: 0,
                          padding: 0,
                          background: "transparent",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          fontFamily:
                            "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
                          letterSpacing: "0.025em",
                          border: "none",
                          borderRadius: "0",
                        }}
                        codeTagProps={{
                          style: {
                            fontFamily:
                              "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
                            background: "transparent",
                            color: "#1F2937",
                          },
                        }}
                      >
                        {slide.codeExample.code}
                      </SyntaxHighlighter>
                    </div>

                    {/* Decorative code elements */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-30">
                      <div className="w-6 h-6 border border-gray-300 rounded opacity-50"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded-sm opacity-60"></div>
                    </div>
                  </div>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg opacity-40 rotate-12"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-tl from-gray-300 to-gray-200 rounded-full opacity-50"></div>
              </div>
            )}
          </div>
        );

      case "conclusion":
        return (
          <div className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto space-y-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-16 left-16 w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-100 opacity-20 blur-3xl"></div>
              <div className="absolute bottom-16 right-16 w-96 h-96 bg-gradient-to-tl from-gray-300 to-gray-200 opacity-15 blur-3xl"></div>
            </div>

            <div className="text-center space-y-12 relative z-10">
              <div className="relative">
                {/* Decorative top line */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

                <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight relative">
                  <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h2>

                {/* Decorative bottom line */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
              </div>

              {slide.content && (
                <div className="relative max-w-4xl mx-auto">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 via-gray-300 to-transparent"></div>
                  <p className="text-2xl text-gray-600 leading-relaxed font-light italic pl-8">
                    <MarkdownText>{slide.content}</MarkdownText>
                  </p>
                </div>
              )}
            </div>

            {slide.keyTakeaways && (
              <div className="space-y-12 relative z-10">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight relative inline-block">
                    Ключевые выводы
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800"></div>
                  </h3>
                </div>

                <div
                  className={cn(
                    "grid gap-8",
                    slide.keyTakeaways.length === 1
                      ? "grid-cols-1 max-w-3xl mx-auto"
                      : slide.keyTakeaways.length === 2
                      ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
                      : slide.keyTakeaways.length === 3
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : slide.keyTakeaways.length === 4
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  )}
                >
                  {slide.keyTakeaways.map((takeaway, index) => (
                    <div
                      key={index}
                      className="group relative p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl hover:border-gray-400 hover:shadow-2xl hover:scale-105 transition-all duration-400 overflow-hidden"
                    >
                      {/* Background decorations */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-100 to-transparent opacity-50 rounded-bl-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-50 to-transparent opacity-60 rounded-tr-3xl"></div>

                      <div className="relative flex items-start gap-6">
                        {/* Enhanced number badge */}
                        <div className="flex-shrink-0 relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-3xl flex items-center justify-center text-2xl font-black shadow-xl">
                            {index + 1}
                          </div>
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-300 rounded-full opacity-60"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gray-400 rounded-full opacity-50"></div>
                        </div>

                        {/* Content with enhanced styling */}
                        <div className="flex-1 relative">
                          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-200 to-transparent"></div>
                          <p className="text-gray-800 leading-relaxed text-lg font-medium tracking-tight pl-6">
                            <MarkdownText>{takeaway}</MarkdownText>
                          </p>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-gray-50/30 to-gray-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-3xl"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Final decorative element */}
            <div className="flex justify-center relative z-10">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-[70vh] flex flex-col justify-center max-w-6xl mx-auto relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-100 opacity-25 blur-2xl"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tl from-gray-300 to-gray-200 opacity-20 blur-2xl"></div>
            </div>

            <div className="space-y-16 relative z-10">
              {/* Title Section */}
              <div className="text-center">
                <div className="relative">
                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight relative">
                    <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h2>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
                </div>
              </div>

              {/* Content Section - Minimalist Approach */}
              <div className="max-w-4xl mx-auto">
                <div className="relative group">
                  {/* Subtle side accent */}
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200 rounded-full"></div>

                  {/* Clean content container */}
                  <div className="pl-12 pr-8 py-8">
                    <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light whitespace-pre-wrap tracking-wide">
                      <MarkdownText>{slide.content || ""}</MarkdownText>
                    </div>
                  </div>

                  {/* Subtle bottom accent line */}
                  <div className="ml-12 mt-6 w-16 h-0.5 bg-gradient-to-r from-gray-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col font-['Geist',system-ui,sans-serif] antialiased relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-gray-350 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gray-350 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="w-full h-1 bg-gray-200 relative">
        <div
          className="h-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 transition-all duration-700 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 rounded-full"></div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-6 lg:space-x-8 min-w-0 flex-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={exitPresentation}
              className="text-gray-500 hover:text-gray-900 font-medium transition-colors flex-shrink-0"
            >
              <Home className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Выйти</span>
            </Button>

            <div className="h-4 w-px bg-gray-200 hidden sm:block" />

            <div className="min-w-0 flex-1">
              <h1 className="text-sm sm:text-base lg:text-lg font-light text-gray-900 truncate">
                {lecture.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6 lg:space-x-8 flex-shrink-0">
            <div className="text-right">
              <div className="text-xs sm:text-sm font-mono text-gray-500">
                {String(navigationState.currentSlide + 1).padStart(2, "0")} /{" "}
                {String(navigationState.totalSlides).padStart(2, "0")}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              <Maximize className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Полный экран</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12 pb-20 sm:pb-24 lg:pb-28 relative">
        {/* Subtle background pattern for main content */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-gray-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-lg opacity-30 rotate-12"></div>
        </div>

        <div className="relative z-10">
          <SlideRenderer slide={currentSlide} />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200">
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-3 sm:py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={navigationState.currentSlide === 0}
            className={cn(
              "h-8 sm:h-10 px-2 sm:px-4 font-medium transition-all duration-200 rounded-lg",
              navigationState.currentSlide === 0
                ? "opacity-40 cursor-not-allowed text-gray-400"
                : "text-gray-700 hover:text-black hover:bg-gray-100"
            )}
          >
            <ChevronLeft className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Назад</span>
          </Button>

          <div className="flex text-xs sm:text-sm text-gray-500 font-medium font-mono">
            {String(navigationState.currentSlide + 1).padStart(2, "0")} /{" "}
            {String(navigationState.totalSlides).padStart(2, "0")}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={
              navigationState.currentSlide === navigationState.totalSlides - 1
            }
            className={cn(
              "h-8 sm:h-10 px-2 sm:px-4 font-medium transition-all duration-200 rounded-lg",
              navigationState.currentSlide === navigationState.totalSlides - 1
                ? "opacity-40 cursor-not-allowed text-gray-400"
                : "text-gray-700 hover:text-black hover:bg-gray-100"
            )}
          >
            <span className="hidden sm:inline">Далее</span>
            <ChevronRight className="w-4 h-4 sm:ml-2" />
          </Button>
        </div>
      </footer>

      {/* Code Preview Modal */}
      <CodePreview
        isOpen={codePreview.isOpen}
        onClose={closeCodePreview}
        code={codePreview.code}
        language={codePreview.language}
        title={codePreview.title}
      />
    </div>
  );
}
