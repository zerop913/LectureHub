"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { X, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/utils/helpers";

interface CodePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  language: string;
  title?: string;
}

export function CodePreview({
  isOpen,
  onClose,
  code,
  language,
  title,
}: CodePreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const canPreview = ["html", "css", "javascript", "js"].includes(
    language.toLowerCase()
  );

  useEffect(() => {
    if (isOpen && canPreview && iframeRef.current) {
      const iframe = iframeRef.current;
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;

      if (iframeDoc) {
        let htmlContent = "";

        switch (language.toLowerCase()) {
          case "html":
            htmlContent = `
              <!DOCTYPE html>
              <html lang="ru">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Предпросмотр HTML</title>
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                    background: #fff;
                    color: #333;
                  }
                  * {
                    box-sizing: border-box;
                  }
                </style>
              </head>
              <body>
                ${code}
              </body>
              </html>
            `;
            break;

          case "css":
            htmlContent = `
              <!DOCTYPE html>
              <html lang="ru">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Предпросмотр CSS</title>
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                    background: #fff;
                    color: #333;
                  }
                  * {
                    box-sizing: border-box;
                  }
                  ${code}
                </style>
              </head>
              <body>
                <div class="demo-container">
                  <h1>Пример заголовка</h1>
                  <p>Пример параграфа с текстом для демонстрации стилей.</p>
                  <div class="box">Div элемент</div>
                  <button>Кнопка</button>
                  <ul>
                    <li>Элемент списка 1</li>
                    <li>Элемент списка 2</li>
                    <li>Элемент списка 3</li>
                  </ul>
                </div>
              </body>
              </html>
            `;
            break;

          case "javascript":
          case "js":
            htmlContent = `
              <!DOCTYPE html>
              <html lang="ru">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Предпросмотр JavaScript</title>
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                    background: #fff;
                    color: #333;
                  }
                  #output {
                    background: #f8f9fa;
                    border: 2px solid #e9ecef;
                    border-radius: 8px;
                    padding: 16px;
                    margin-top: 20px;
                    min-height: 100px;
                    white-space: pre-wrap;
                    font-family: 'Courier New', monospace;
                  }
                  button {
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin: 4px;
                  }
                  button:hover {
                    background: #0056b3;
                  }
                  input {
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    margin: 4px;
                  }
                </style>
              </head>
              <body>
                <h1>JavaScript Демо</h1>
                <p>Результат выполнения кода:</p>
                <div id="output"></div>
                
                <script>
                  // Перехватываем console.log для отображения в output
                  const output = document.getElementById('output');
                  const originalLog = console.log;
                  console.log = function(...args) {
                    originalLog.apply(console, args);
                    output.textContent += args.join(' ') + '\\n';
                  };
                  
                  // Пользовательский код
                  try {
                    ${code}
                  } catch (error) {
                    output.textContent += 'Ошибка: ' + error.message + '\\n';
                  }
                </script>
              </body>
              </html>
            `;
            break;
        }

        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();
      }
    }
  }, [isOpen, code, language, canPreview]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !canPreview) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className={cn(
          "bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in zoom-in-95",
          isFullscreen ? "w-full h-full" : "w-[90vw] h-[80vh] max-w-6xl"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {title || `Предпросмотр ${language.toUpperCase()}`}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-white">
          <div className="w-full h-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-inner">
            <iframe
              ref={iframeRef}
              className="w-full h-full border-0"
              title="Code Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Предпросмотр {language.toUpperCase()} кода
          </div>

          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-gray-600"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4 mr-2" />
                  Обычный размер
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4 mr-2" />
                  Полный экран
                </>
              )}
            </Button>

            <Button variant="secondary" size="sm" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
