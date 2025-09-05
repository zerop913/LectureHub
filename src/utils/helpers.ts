import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatDuration(hours: number): string {
  if (hours < 1) {
    const minutes = Math.round(hours * 60);
    return `${minutes} мин`;
  }
  const wholeHours = Math.floor(hours);
  const remainingMinutes = Math.round((hours - wholeHours) * 60);
  return remainingMinutes > 0
    ? `${wholeHours}ч ${remainingMinutes}м`
    : `${wholeHours}ч`;
}

export function getDifficultyLabel(difficulty: string): string {
  const labels = {
    beginner: "Начальный",
    intermediate: "Средний",
    advanced: "Продвинутый",
  };
  return labels[difficulty as keyof typeof labels] || difficulty;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
