import { Lecture } from "@/types";

export const lectureTemplate: Lecture = {
  id: "lecture-template",

  title: "Шаблон лекции",

  description: "Описание того, что будет изучаться в данной лекции",

  groupId: "example-group",

  createdAt: new Date("2025-09-05"),

  updatedAt: new Date("2025-09-05"),

  tags: ["тег1", "тег2", "тег3"],

  // Уровень сложности: 'beginner' | 'intermediate' | 'advanced'
  difficulty: "beginner",

  duration: 0.75,

  slides: [
    {
      id: "slide-1",

      title: "Титульный слайд",

      type: "title",

      content: "Название презентации",

      keyPoints: [
        {
          title: "Первая точка",
          description: "Описание первой ключевой точки",
        },
        {
          title: "Вторая точка",
          description: "Описание второй ключевой точки",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Слайд-список",
      type: "list",
      content: "Вводный текст перед списком",
      items: [
        "Первый пункт списка",
        "Второй пункт списка",
        "Третий пункт списка",
      ],
    },

    {
      id: "slide-3",
      title: "Двухколоночный слайд",
      type: "two-column",
      content: "Описание слайда с двумя колонками",
      leftContent: {
        title: "Левая колонка",
        items: ["Пункт 1 левой колонки", "Пункт 2 левой колонки"],
      },
      rightContent: {
        title: "Правая колонка",
        items: ["Пункт 1 правой колонки", "Пункт 2 правой колонки"],
      },
    },

    {
      id: "slide-4",
      title: "Слайд с кодом",
      type: "code",
      content: "Описание примера кода",
      codeExample: {
        language: "javascript",

        title: "Пример JavaScript кода",

        code: `function example() {
  console.log('Пример кода');
  return 'результат';
}`,
      },
    },

    {
      id: "slide-5",
      title: "Заключительный слайд",
      type: "conclusion",
      content: "Основные выводы по лекции",
      keyTakeaways: [
        "Первый ключевой вывод",
        "Второй ключевой вывод",
        "Третий ключевой вывод",
      ],
    },

    {
      id: "slide-6",
      title: "Обычный слайд",
      type: "content",
      content:
        "Обычный текстовый контент слайда. Можно использовать многострочный текст.",
    },
  ],
};
