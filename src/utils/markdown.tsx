import React from "react";

/**
 * Утилита для обработки простой markdown-разметки в тексте
 * Поддерживает:
 * - **жирный текст**
 * - *курсив*
 * - `код`
 */
export function parseMarkdown(text: string): React.ReactNode[] {
  if (!text) return [];

  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);

  return tokens.map((token, index) => {
    // Жирный текст **text**
    if (token.startsWith("**") && token.endsWith("**")) {
      const content = token.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-gray-900">
          {content}
        </strong>
      );
    }

    // Курсив *text*
    if (
      token.startsWith("*") &&
      token.endsWith("*") &&
      !token.startsWith("**")
    ) {
      const content = token.slice(1, -1);
      return (
        <em key={index} className="italic">
          {content}
        </em>
      );
    }

    // Инлайн код `text`
    if (token.startsWith("`") && token.endsWith("`")) {
      const content = token.slice(1, -1);
      return (
        <code
          key={index}
          className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono border"
        >
          {content}
        </code>
      );
    }

    // Обычный текст
    return token;
  });
}

/**
 * Компонент для рендеринга текста с markdown-разметкой
 */
interface MarkdownTextProps {
  children: string;
  className?: string;
}

export function MarkdownText({ children, className = "" }: MarkdownTextProps) {
  const parsed = parseMarkdown(children);

  return <span className={className}>{parsed}</span>;
}
