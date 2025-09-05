"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Lecture, NavigationState, Slide } from "@/types";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, X, Home, Maximize } from "lucide-react";
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
          <div className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-16">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl tracking-tight">
                {slide.title}
              </h1>

              {slide.content && (
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {slide.content}
                </p>
              )}
            </div>

            {slide.keyPoints && (
              <div
                className={cn(
                  "grid gap-6 max-w-6xl w-full",
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
                    className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "list":
        return (
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {slide.title}
              </h2>
              {slide.content && (
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {slide.content}
                </p>
              )}
            </div>

            {slide.items && (
              <div className="space-y-4">
                {slide.items.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 leading-relaxed text-lg pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "two-column":
        return (
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {slide.title}
              </h2>
              {slide.content && (
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {slide.content}
                </p>
              )}
            </div>

            {slide.leftContent && slide.rightContent && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-black rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                      {slide.leftContent.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {slide.leftContent.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-md flex items-center justify-center text-xs font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-800 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-black rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                      {slide.rightContent.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {slide.rightContent.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-md flex items-center justify-center text-xs font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-800 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "code":
        return (
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {slide.title}
              </h2>
              {slide.content && (
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {slide.content}
                </p>
              )}
            </div>

            {slide.codeExample && (
              <div className="relative">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  {slide.codeExample.title && (
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">
                          {slide.codeExample.title}
                        </span>
                      </div>
                    </div>
                  )}
                  <pre className="p-6 overflow-x-auto bg-gray-50">
                    <code className="text-sm font-mono text-gray-800 leading-loose">
                      {slide.codeExample.code}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        );

      case "conclusion":
        return (
          <div className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {slide.title}
              </h2>
              {slide.content && (
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {slide.content}
                </p>
              )}
            </div>

            {slide.keyTakeaways && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 text-center tracking-tight">
                  Ключевые выводы
                </h3>
                <div
                  className={cn(
                    "grid gap-6",
                    slide.keyTakeaways.length === 1
                      ? "grid-cols-1 max-w-2xl mx-auto"
                      : slide.keyTakeaways.length === 2
                      ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
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
                      className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-gray-800 leading-relaxed pt-1">
                          {takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="min-h-[70vh] flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {slide.title}
              </h2>
              <div className="p-8 bg-white border border-gray-200 rounded-xl">
                <div className="text-lg text-gray-800 whitespace-pre-wrap leading-relaxed">
                  {slide.content}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-['Geist',system-ui,sans-serif] antialiased">
      <div className="w-full h-px bg-gray-200">
        <div
          className="h-full bg-gray-900 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={exitPresentation}
              className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Выйти
            </Button>

            <div className="h-4 w-px bg-gray-200" />

            <div>
              <h1 className="text-lg font-light text-gray-900 truncate max-w-md">
                {lecture.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="text-right">
              <div className="text-sm font-mono text-gray-500">
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
              <Maximize className="w-4 h-4 mr-2" />
              Полный экран
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 md:px-12 lg:px-16 py-12 pb-28 bg-gray-50">
        <SlideRenderer slide={currentSlide} />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200">
        <div className="px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={navigationState.currentSlide === 0}
            className={cn(
              "h-10 px-4 font-medium transition-all duration-200 rounded-lg",
              navigationState.currentSlide === 0
                ? "opacity-40 cursor-not-allowed text-gray-400"
                : "text-gray-700 hover:text-black hover:bg-gray-100"
            )}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>

          <div className="hidden md:flex text-sm text-gray-500 font-medium font-mono">
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
              "h-10 px-4 font-medium transition-all duration-200 rounded-lg",
              navigationState.currentSlide === navigationState.totalSlides - 1
                ? "opacity-40 cursor-not-allowed text-gray-400"
                : "text-gray-700 hover:text-black hover:bg-gray-100"
            )}
          >
            Далее
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
