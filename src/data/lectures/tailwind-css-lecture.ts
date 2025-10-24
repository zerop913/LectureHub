import { Lecture } from "@/types";

export const tailwindCSSLecture: Lecture = {
  id: "tailwind-css-lecture",
  title: "TailwindCSS: Utility-First подход к стилизации",
  description:
    "Изучение современного CSS-фреймворка TailwindCSS. Курс охватывает utility-классы, конфигурацию, адаптивный дизайн, темизацию и лучшие практики работы с фреймворком.",
  groupId: "user-interfaces",
  createdAt: new Date("2025-10-25"),
  updatedAt: new Date("2025-10-25"),
  tags: ["user-interfaces", "css", "tailwind", "фреймворк", "utility-first"],
  difficulty: "intermediate",
  duration: 4.5,

  slides: [
    {
      id: "slide-1",
      title: "TailwindCSS: Utility-First подход к стилизации",
      type: "title",
      content: "Современный CSS-фреймворк для быстрой разработки интерфейсов",
      keyPoints: [
        {
          title: "Что такое TailwindCSS",
          description: "Понимание философии utility-first CSS",
        },
        {
          title: "Преимущества и недостатки",
          description: "Когда стоит использовать Tailwind",
        },
        {
          title: "Установка и настройка",
          description: "Начало работы с фреймворком",
        },
        {
          title: "Практическое применение",
          description: "Создание реальных компонентов",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое TailwindCSS?",
      type: "content",
      content:
        '**TailwindCSS** — это utility-first CSS-фреймворк, который предоставляет низкоуровневые утилитарные классы для создания пользовательских дизайнов непосредственно в HTML.\n\n**Философия Utility-First:**\nВместо написания кастомного CSS или использования готовых компонентов (как в Bootstrap), Tailwind предлагает набор маленьких, композируемых утилит, которые можно комбинировать для создания любого дизайна.\n\n**Основные принципы:**\n• **Композиция вместо наследования** — собирайте компоненты из утилит\n• **Никакого неиспользуемого CSS** — PurgeCSS удаляет неиспользованные классы\n• **Полная кастомизация** — все настраивается через конфигурацию\n• **Быстрая разработка** — не нужно придумывать имена классов\n• **Консистентность** — дизайн-система из коробки\n\n**Отличие от традиционного CSS:**\nhtml\n<!-- Традиционный подход -->\n<style>\n  .card {\n    background-color: white;\n    padding: 1.5rem;\n    border-radius: 0.5rem;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n  }\n</style>\n<div class="card">Контент</div>\n\n<!-- Tailwind подход -->\n<div class="bg-white p-6 rounded-lg shadow-md">Контент</div>\n\n\n**Ключевые особенности:**\n• Встроенная дизайн-система с цветами, отступами, шрифтами\n• Адаптивные модификаторы (md:, lg:, xl:)\n• Поддержка темной темы\n• JIT (Just-in-Time) компилятор для мгновенной генерации стилей\n• Плагины для расширения функциональности',
    },

    {
      id: "slide-3",
      title: "Преимущества и недостатки TailwindCSS",
      type: "two-column",
      content:
        "Понимание плюсов и минусов поможет принять решение о применении Tailwind в проекте",
      leftContent: {
        title: "Преимущества",
        items: [
          "Быстрая разработка — не нужно переключаться между HTML и CSS",
          "Маленький размер финального бандла (благодаря PurgeCSS)",
          "Консистентный дизайн — все отступы, цвета из дизайн-системы",
          "Нет конфликтов имён классов — всё предсказуемо",
          "Легко делать адаптивный дизайн (префиксы md:, lg:)",
          "Отличная документация и сообщество",
          "Простая темизация и кастомизация",
          "IDE поддержка через IntelliSense",
          "Не нужно придумывать имена классов",
          "Легко рефакторить — весь стиль в одном месте",
        ],
      },
      rightContent: {
        title: "Недостатки",
        items: [
          "Длинные строки классов в HTML",
          "Кривая обучения — нужно запомнить классы",
          "HTML становится менее читаемым",
          "Сложно применить при работе с legacy кодом",
          "Повторение классов для похожих элементов",
          "Не подходит для очень кастомных дизайнов",
          "Требует настройки сборки проекта",
          "Может показаться 'грязным' традиционалистам",
        ],
      },
    },

    {
      id: "slide-4",
      title: "Установка TailwindCSS",
      type: "code",
      content:
        "Существует несколько способов начать работу с Tailwind. Рассмотрим установку через npm — самый популярный способ для продакшн-проектов.",
      codeExample: {
        language: "bash",
        title: "Установка через npm",
        code: `# 1. Установка Tailwind и зависимостей
npm install -D tailwindcss postcss autoprefixer

# 2. Создание конфигурационных файлов
npx tailwindcss init -p

# Это создаст два файла:
# - tailwind.config.js (конфигурация Tailwind)
# - postcss.config.js (конфигурация PostCSS)`,
      },
    },

    {
      id: "slide-5",
      title: "Конфигурация Tailwind",
      type: "code",
      content:
        "Файл tailwind.config.js — основной файл настройки. Здесь указываются пути к файлам для PurgeCSS, кастомные цвета, шрифты, отступы и другие параметры.",
      codeExample: {
        language: "javascript",
        title: "tailwind.config.js",
        code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  // Пути к файлам для сканирования классов
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  
  // Темная тема
  darkMode: 'class', // или 'media'
  
  theme: {
    extend: {
      // Кастомные цвета
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        brand: '#ff6b6b',
      },
      
      // Кастомные шрифты
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      
      // Дополнительные отступы
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Кастомные брейкпоинты
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  
  // Плагины
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}`,
      },
    },

    {
      id: "slide-6",
      title: "Подключение Tailwind в CSS",
      type: "code",
      content:
        "После установки и настройки нужно подключить директивы Tailwind в основной CSS файл проекта.",
      codeExample: {
        language: "css",
        title: "src/styles/main.css",
        code: `/* Базовые стили Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Кастомные глобальные стили */
@layer base {
  h1 {
    @apply text-4xl font-bold;
  }
  
  h2 {
    @apply text-3xl font-semibold;
  }
  
  a {
    @apply text-blue-600 hover:text-blue-800;
  }
}

/* Кастомные компоненты */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }
}

/* Кастомные утилиты */
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
}`,
      },
    },

    {
      id: "slide-7",
      title: "CDN версия для быстрого старта",
      type: "code",
      content:
        "Для быстрого прототипирования можно использовать CDN версию. Это не рекомендуется для продакшна, но отлично подходит для обучения и экспериментов.",
      codeExample: {
        language: "html",
        title: "Подключение через CDN",
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CDN пример</title>
    
    <!-- Tailwind CSS через CDN (только для разработки!) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Опциональная конфигурация -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              clifford: '#da373d',
            }
          }
        }
      }
    </script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-4xl font-bold text-blue-600">
            Привет, Tailwind!
        </h1>
        <p class="mt-4 text-gray-700">
            Это простой пример использования Tailwind через CDN
        </p>
    </div>
</body>
</html>`,
      },
    },

    {
      id: "slide-8",
      title: "Базовые утилитарные классы: Цвета",
      type: "content",
      content:
        "Tailwind предоставляет обширную палитру цветов с градациями от 50 до 950. Каждый цвет имеет 10 оттенков для создания консистентного дизайна.\n\n**Цветовые классы:**\n\n**text-{color}-{shade}** — цвет текста\n• `text-gray-500` — серый текст средней насыщенности\n• `text-blue-600` — синий текст\n• `text-red-500` — красный текст\n\n**bg-{color}-{shade}** — цвет фона\n• `bg-white` — белый фон\n• `bg-gray-100` — светло-серый фон\n• `bg-blue-500` — синий фон\n\n**border-{color}-{shade}** — цвет границы\n• `border-gray-300` — серая граница\n• `border-blue-500` — синяя граница\n\n**Доступные цвета:**\n• **Нейтральные:** slate, gray, zinc, neutral, stone\n• **Основные:** red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose\n\n**Прозрачность:**\n• Можно добавить прозрачность через `/` синтаксис\n• `bg-blue-500/50` — синий фон с 50% прозрачностью\n• `text-gray-900/75` — текст с 75% непрозрачностью\n\n**Специальные цвета:**\n• `text-inherit` — наследует цвет от родителя\n• `text-current` — использует текущий цвет\n• `text-transparent` — прозрачный текст\n• `bg-black` — чёрный (#000)\n• `bg-white` — белый (#fff)",
    },

    {
      id: "slide-9",
      title: "Примеры цветовых классов",
      type: "code",
      content:
        "Практические примеры использования цветов в Tailwind. Обратите внимание на консистентность оттенков и простоту применения.",
      codeExample: {
        language: "html",
        title: "Работа с цветами",
        code: `<!-- Цвет текста -->
<p class="text-gray-600">Обычный текст</p>
<p class="text-blue-500">Синий текст</p>
<p class="text-red-600">Красный текст</p>

<!-- Цвет фона -->
<div class="bg-gray-100 p-4">Светлый фон</div>
<div class="bg-blue-500 text-white p-4">Синий фон</div>
<div class="bg-gradient-to-r from-purple-400 to-pink-600 p-4">
  Градиентный фон
</div>

<!-- Границы -->
<div class="border-2 border-gray-300 p-4">Серая граница</div>
<div class="border-4 border-blue-500 p-4">Толстая синяя граница</div>

<!-- Прозрачность -->
<div class="bg-black/50 text-white p-4">
  Полупрозрачный чёрный фон
</div>
<div class="bg-blue-500/25 p-4">
  Очень прозрачный синий фон
</div>

<!-- Ховер эффекты -->
<button class="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
  Наведи на меня
</button>

<!-- Кастомные цвета (из конфига) -->
<div class="bg-brand text-white p-4">
  Брендовый цвет
</div>`,
      },
    },

    {
      id: "slide-10",
      title: "Отступы: Padding и Margin",
      type: "content",
      content:
        "Tailwind использует систему spacing на основе rem единиц. По умолчанию шкала идёт от 0 до 96, где каждый шаг равен 0.25rem (4px при font-size: 16px).\n\n**Padding (внутренние отступы):**\n\n**p-{size}** — отступ со всех сторон\n• `p-4` — padding: 1rem (16px)\n• `p-8` — padding: 2rem (32px)\n\n**px-{size}** / **py-{size}** — горизонтальный/вертикальный\n• `px-4` — padding-left и padding-right: 1rem\n• `py-2` — padding-top и padding-bottom: 0.5rem\n\n**pt/pr/pb/pl-{size}** — отдельные стороны\n• `pt-4` — padding-top: 1rem\n• `pr-2` — padding-right: 0.5rem\n• `pb-8` — padding-bottom: 2rem\n• `pl-6` — padding-left: 1.5rem\n\n**Margin (внешние отступы):**\n\n**m-{size}** — отступ со всех сторон\n• `m-4` — margin: 1rem\n• `m-auto` — margin: auto (центрирование)\n\n**mx-{size}** / **my-{size}** — горизонтальный/вертикальный\n• `mx-auto` — margin-left и margin-right: auto\n• `my-4` — margin-top и margin-bottom: 1rem\n\n**mt/mr/mb/ml-{size}** — отдельные стороны\n• `mt-8` — margin-top: 2rem\n• `mb-4` — margin-bottom: 1rem\n\n**Отрицательные значения:**\n• `-m-4` — margin: -1rem\n• `-mt-2` — margin-top: -0.5rem\n\n**Spacing шкала:**\n• 0 = 0, 1 = 0.25rem, 2 = 0.5rem, 3 = 0.75rem\n• 4 = 1rem, 5 = 1.25rem, 6 = 1.5rem, 8 = 2rem\n• 10 = 2.5rem, 12 = 3rem, 16 = 4rem, 20 = 5rem\n• 24 = 6rem, 32 = 8rem, 40 = 10rem, 48 = 12rem",
    },

    {
      id: "slide-11",
      title: "Примеры отступов",
      type: "code",
      content:
        "Практическое применение padding и margin в Tailwind. Система spacing делает отступы консистентными по всему проекту.",
      codeExample: {
        language: "html",
        title: "Работа с отступами",
        code: `<!-- Padding со всех сторон -->
<div class="p-4 bg-gray-200">Отступ 1rem</div>
<div class="p-8 bg-gray-200">Отступ 2rem</div>

<!-- Горизонтальный и вертикальный padding -->
<div class="px-6 py-3 bg-blue-100">
  Горизонтальный 1.5rem, вертикальный 0.75rem
</div>

<!-- Отдельные стороны -->
<div class="pt-8 pr-4 pb-2 pl-6 bg-green-100">
  Разные отступы с каждой стороны
</div>

<!-- Margin для разделения элементов -->
<div class="mb-4 bg-gray-300 p-4">Первый блок</div>
<div class="mb-4 bg-gray-300 p-4">Второй блок</div>
<div class="bg-gray-300 p-4">Третий блок</div>

<!-- Центрирование блока -->
<div class="w-1/2 mx-auto bg-purple-200 p-4">
  Центрированный блок
</div>

<!-- Отрицательные отступы -->
<div class="bg-gray-200 p-4">
  <div class="-mt-8 bg-white p-4 shadow">
    Блок выходит за границы родителя
  </div>
</div>

<!-- Комбинация отступов -->
<div class="m-4 p-6 bg-blue-100 rounded">
  Внешний отступ 1rem, внутренний 1.5rem
</div>`,
      },
    },

    {
      id: "slide-12",
      title: "Размеры: Width и Height",
      type: "content",
      content:
        "Tailwind предоставляет классы для управления шириной и высотой элементов. Есть фиксированные значения, проценты и специальные модификаторы.\n\n**Width (ширина):**\n\n**w-{size}** — фиксированная ширина\n• `w-0` — width: 0\n• `w-64` — width: 16rem (256px)\n• `w-96` — width: 24rem (384px)\n\n**w-{fraction}** — дробная ширина\n• `w-1/2` — width: 50%\n• `w-1/3` — width: 33.333%\n• `w-2/3` — width: 66.666%\n• `w-1/4` — width: 25%\n• `w-3/4` — width: 75%\n\n**Специальные значения:**\n• `w-full` — width: 100%\n• `w-screen` — width: 100vw\n• `w-auto` — width: auto\n• `w-fit` — width: fit-content\n• `w-min` — width: min-content\n• `w-max` — width: max-content\n\n**Min/Max width:**\n• `min-w-0` — min-width: 0\n• `min-w-full` — min-width: 100%\n• `max-w-xs` — max-width: 20rem (320px)\n• `max-w-sm` — max-width: 24rem (384px)\n• `max-w-md` — max-width: 28rem (448px)\n• `max-w-lg` — max-width: 32rem (512px)\n• `max-w-xl` — max-width: 36rem (576px)\n• `max-w-7xl` — max-width: 80rem (1280px)\n\n**Height (высота):**\n\n**h-{size}** — фиксированная высота\n• `h-64` — height: 16rem\n• `h-screen` — height: 100vh\n• `h-full` — height: 100%\n• `h-auto` — height: auto\n\n**Min/Max height:**\n• `min-h-screen` — min-height: 100vh\n• `max-h-full` — max-height: 100%",
    },

    {
      id: "slide-13",
      title: "Примеры размеров",
      type: "code",
      content:
        "Использование классов ширины и высоты для создания различных макетов и компонентов.",
      codeExample: {
        language: "html",
        title: "Работа с размерами",
        code: `<!-- Фиксированная ширина -->
<div class="w-64 h-32 bg-blue-200">
  Ширина 16rem, высота 8rem
</div>

<!-- Дробная ширина -->
<div class="flex gap-4">
  <div class="w-1/2 bg-green-200 p-4">50%</div>
  <div class="w-1/2 bg-blue-200 p-4">50%</div>
</div>

<div class="flex gap-4 mt-4">
  <div class="w-1/3 bg-red-200 p-4">33.33%</div>
  <div class="w-1/3 bg-green-200 p-4">33.33%</div>
  <div class="w-1/3 bg-blue-200 p-4">33.33%</div>
</div>

<!-- Полная ширина -->
<div class="w-full bg-purple-200 p-4">
  100% ширины родителя
</div>

<!-- Ширина экрана -->
<div class="w-screen bg-yellow-200 p-4">
  100% ширины окна браузера
</div>

<!-- Максимальная ширина с центрированием -->
<div class="max-w-4xl mx-auto bg-gray-200 p-4">
  Максимум 56rem, центрирован
</div>

<!-- Высота экрана -->
<div class="h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl">
  Полная высота экрана
</div>

<!-- Минимальная высота -->
<div class="min-h-screen bg-gray-100 p-4">
  Минимум на весь экран
</div>`,
      },
    },

    {
      id: "slide-14",
      title: "Типографика: Шрифты и текст",
      type: "content",
      content:
        "Tailwind предоставляет полный контроль над типографикой — от размера шрифта до высоты строки и межбуквенного расстояния.\n\n**Размер шрифта (font-size):**\n• `text-xs` — 0.75rem (12px)\n• `text-sm` — 0.875rem (14px)\n• `text-base` — 1rem (16px)\n• `text-lg` — 1.125rem (18px)\n• `text-xl` — 1.25rem (20px)\n• `text-2xl` — 1.5rem (24px)\n• `text-3xl` — 1.875rem (30px)\n• `text-4xl` — 2.25rem (36px)\n• `text-5xl` — 3rem (48px)\n• `text-9xl` — 8rem (128px)\n\n**Жирность шрифта (font-weight):**\n• `font-thin` — 100\n• `font-light` — 300\n• `font-normal` — 400\n• `font-medium` — 500\n• `font-semibold` — 600\n• `font-bold` — 700\n• `font-black` — 900\n\n**Семейство шрифтов (font-family):**\n• `font-sans` — системный sans-serif\n• `font-serif` — системный serif\n• `font-mono` — моноширинный шрифт\n\n**Стиль текста:**\n• `italic` — курсив\n• `not-italic` — обычный\n\n**Выравнивание (text-align):**\n• `text-left` — влево\n• `text-center` — по центру\n• `text-right` — вправо\n• `text-justify` — по ширине\n\n**Высота строки (line-height):**\n• `leading-none` — 1\n• `leading-tight` — 1.25\n• `leading-normal` — 1.5\n• `leading-relaxed` — 1.625\n• `leading-loose` — 2\n\n**Межбуквенное расстояние (letter-spacing):**\n• `tracking-tighter` — -0.05em\n• `tracking-tight` — -0.025em\n• `tracking-normal` — 0\n• `tracking-wide` — 0.025em\n• `tracking-wider` — 0.05em\n\n**Декорация текста:**\n• `underline` — подчёркнутый\n• `line-through` — зачёркнутый\n• `no-underline` — без подчёркивания\n\n**Трансформация текста:**\n• `uppercase` — ВЕРХНИЙ РЕГИСТР\n• `lowercase` — нижний регистр\n• `capitalize` — Первая Буква Заглавная",
    },

    {
      id: "slide-15",
      title: "Примеры типографики",
      type: "code",
      content: "Практические примеры работы с текстом и шрифтами в Tailwind.",
      codeExample: {
        language: "html",
        title: "Стилизация текста",
        code: `<!-- Размеры шрифта -->
<h1 class="text-4xl font-bold">Крупный заголовок</h1>
<h2 class="text-3xl font-semibold">Средний заголовок</h2>
<h3 class="text-2xl font-medium">Маленький заголовок</h3>
<p class="text-base">Обычный текст параграфа</p>
<small class="text-sm text-gray-600">Мелкий текст</small>

<!-- Жирность -->
<p class="font-light">Тонкий текст (300)</p>
<p class="font-normal">Обычный текст (400)</p>
<p class="font-semibold">Полужирный (600)</p>
<p class="font-bold">Жирный текст (700)</p>

<!-- Выравнивание -->
<p class="text-left">Текст слева</p>
<p class="text-center">Текст по центру</p>
<p class="text-right">Текст справа</p>

<!-- Стили текста -->
<p class="italic">Курсивный текст</p>
<p class="underline">Подчёркнутый текст</p>
<p class="line-through">Зачёркнутый текст</p>

<!-- Трансформация -->
<p class="uppercase">верхний регистр</p>
<p class="lowercase">НИЖНИЙ РЕГИСТР</p>
<p class="capitalize">первая буква заглавная</p>

<!-- Высота строки и трекинг -->
<p class="leading-tight tracking-tight">Плотный текст с узкими буквами
</p>
<p class="leading-relaxed tracking-wide">
  Просторный текст с широкими буквами
</p>

<!-- Комбинированные стили -->
<h1 class="text-5xl font-bold text-center text-gray-800 mb-4">
  Главный заголовок
</h1>
<p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
  Описательный текст с хорошей читаемостью
</p>

<!-- Цитата -->
<blockquote class="text-xl italic font-serif text-gray-700 border-l-4 border-gray-300 pl-4">
  "Это красивая цитата"
</blockquote>`,
      },
    },

    {
      id: "slide-16",
      title: "Flexbox в Tailwind",
      type: "content",
      content:
        "Tailwind делает работу с Flexbox невероятно простой и интуитивной. Все свойства flexbox доступны через утилитарные классы.\n\n**Создание flex-контейнера:**\n• `flex` — display: flex\n• `inline-flex` — display: inline-flex\n\n**Направление (flex-direction):**\n• `flex-row` — горизонтально (по умолчанию)\n• `flex-row-reverse` — горизонтально в обратном порядке\n• `flex-col` — вертикально\n• `flex-col-reverse` — вертикально в обратном порядке\n\n**Перенос (flex-wrap):**\n• `flex-wrap` — разрешить перенос\n• `flex-wrap-reverse` — перенос в обратном порядке\n• `flex-nowrap` — без переноса (по умолчанию)\n\n**Justify Content (главная ось):**\n• `justify-start` — в начало\n• `justify-end` — в конец\n• `justify-center` — по центру\n• `justify-between` — space-between\n• `justify-around` — space-around\n• `justify-evenly` — space-evenly\n\n**Align Items (поперечная ось):**\n• `items-start` — в начало\n• `items-end` — в конец\n• `items-center` — по центру\n• `items-baseline` — по базовой линии\n• `items-stretch` — растянуть (по умолчанию)\n\n**Align Self (отдельный элемент):**\n• `self-auto` — auto\n• `self-start` — в начало\n• `self-end` — в конец\n• `self-center` — по центру\n• `self-stretch` — растянуть\n\n**Flex свойства элементов:**\n• `flex-1` — flex: 1 1 0% (растёт и сжимается)\n• `flex-auto` — flex: 1 1 auto\n• `flex-initial` — flex: 0 1 auto\n• `flex-none` — flex: none\n\n**Gap (расстояние между элементами):**\n• `gap-4` — gap: 1rem\n• `gap-x-4` — column-gap: 1rem\n• `gap-y-2` — row-gap: 0.5rem",
    },

    {
      id: "slide-17",
      title: "Примеры Flexbox",
      type: "code",
      content:
        "Практические примеры использования Flexbox в Tailwind для создания типичных макетов.",
      codeExample: {
        language: "html",
        title: "Flexbox макеты",
        code: `<!-- Горизонтальное меню -->
<nav class="flex justify-between items-center bg-gray-800 text-white p-4">
  <div class="font-bold text-xl">Логотип</div>
  <div class="flex gap-4">
    <a href="#" class="hover:text-gray-300">Главная</a>
    <a href="#" class="hover:text-gray-300">О нас</a>
    <a href="#" class="hover:text-gray-300">Контакты</a>
  </div>
</nav>

<!-- Центрирование по обеим осям -->
<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold">Центрированный контент</h2>
  </div>
</div>

<!-- Карточки в ряд -->
<div class="flex gap-4 p-4">
  <div class="flex-1 bg-blue-100 p-6 rounded">Карточка 1</div>
  <div class="flex-1 bg-green-100 p-6 rounded">Карточка 2</div>
  <div class="flex-1 bg-purple-100 p-6 rounded">Карточка 3</div>
</div>

<!-- Вертикальный layout -->
<div class="flex flex-col h-screen">
  <header class="bg-gray-800 text-white p-4">Шапка</header>
  <main class="flex-1 bg-gray-100 p-4">Контент</main>
  <footer class="bg-gray-800 text-white p-4">Подвал</footer>
</div>

<!-- Адаптивная сетка с переносом -->
<div class="flex flex-wrap gap-4 p-4">
  <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-200 p-4 rounded">
    Элемент 1
  </div>
  <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-200 p-4 rounded">
    Элемент 2
  </div>
  <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-200 p-4 rounded">
    Элемент 3
  </div>
</div>

<!-- Sidebar layout -->
<div class="flex h-screen">
  <aside class="w-64 bg-gray-800 text-white p-4">
    Боковая панель
  </aside>
  <main class="flex-1 bg-gray-100 p-4">
    Основной контент
  </main>
</div>`,
      },
    },

    {
      id: "slide-18",
      title: "Grid в Tailwind",
      type: "content",
      content:
        "CSS Grid в Tailwind позволяет создавать сложные двумерные макеты с минимальным количеством кода.\n\n**Создание grid-контейнера:**\n• `grid` — display: grid\n• `inline-grid` — display: inline-grid\n\n**Колонки (grid-template-columns):**\n• `grid-cols-1` — 1 колонка\n• `grid-cols-2` — 2 колонки\n• `grid-cols-3` — 3 колонки\n• `grid-cols-4` — 4 колонки\n• `grid-cols-12` — 12 колонок (как Bootstrap)\n• `grid-cols-none` — нет шаблона\n\n**Ряды (grid-template-rows):**\n• `grid-rows-1` — 1 ряд\n• `grid-rows-2` — 2 ряда\n• `grid-rows-6` — 6 рядов\n• `grid-rows-none` — нет шаблона\n\n**Column Span (сколько колонок занимает):**\n• `col-span-1` — занимает 1 колонку\n• `col-span-2` — занимает 2 колонки\n• `col-span-full` — на всю ширину\n\n**Column Start/End:**\n• `col-start-1` — начинается с 1 линии\n• `col-end-3` — заканчивается на 3 линии\n\n**Row Span:**\n• `row-span-1` — занимает 1 ряд\n• `row-span-2` — занимает 2 ряда\n• `row-span-full` — на всю высоту\n\n**Gap:**\n• `gap-4` — gap: 1rem (между колонками и рядами)\n• `gap-x-4` — column-gap: 1rem\n• `gap-y-2` — row-gap: 0.5rem\n\n**Auto Flow:**\n• `grid-flow-row` — заполнение по рядам\n• `grid-flow-col` — заполнение по колонкам\n• `grid-flow-dense` — плотная упаковка\n\n**Auto Columns/Rows:**\n• `auto-cols-auto` — auto\n• `auto-cols-min` — min-content\n• `auto-cols-max` — max-content\n• `auto-cols-fr` — 1fr",
    },

    {
      id: "slide-19",
      title: "Примеры Grid",
      type: "code",
      content:
        "Создание различных макетов с использованием CSS Grid в Tailwind.",
      codeExample: {
        language: "html",
        title: "Grid макеты",
        code: `<!-- Простая сетка 3 колонки -->
<div class="grid grid-cols-3 gap-4 p-4">
  <div class="bg-blue-200 p-4 rounded">1</div>
  <div class="bg-blue-200 p-4 rounded">2</div>
  <div class="bg-blue-200 p-4 rounded">3</div>
  <div class="bg-blue-200 p-4 rounded">4</div>
  <div class="bg-blue-200 p-4 rounded">5</div>
  <div class="bg-blue-200 p-4 rounded">6</div>
</div>

<!-- Адаптивная сетка -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  <div class="bg-green-200 p-4 rounded">Карточка 1</div>
  <div class="bg-green-200 p-4 rounded">Карточка 2</div>
  <div class="bg-green-200 p-4 rounded">Карточка 3</div>
  <div class="bg-green-200 p-4 rounded">Карточка 4</div>
</div>

<!-- Элемент на несколько колонок -->
<div class="grid grid-cols-4 gap-4 p-4">
  <div class="col-span-2 bg-purple-200 p-4 rounded">
    Занимает 2 колонки
  </div>
  <div class="bg-purple-200 p-4 rounded">1 колонка</div>
  <div class="bg-purple-200 p-4 rounded">1 колонка</div>
  <div class="col-span-full bg-purple-300 p-4 rounded">
    На всю ширину
  </div>
</div>

<!-- Dashboard layout -->
<div class="grid grid-cols-12 gap-4 p-4 h-screen">
  <!-- Sidebar -->
  <aside class="col-span-2 bg-gray-800 text-white p-4 rounded">
    Меню
  </aside>
  
  <!-- Main content -->
  <main class="col-span-10">
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-blue-100 p-4 rounded">Виджет 1</div>
      <div class="bg-green-100 p-4 rounded">Виджет 2</div>
      <div class="bg-purple-100 p-4 rounded">Виджет 3</div>
    </div>
  </main>
</div>

<!-- Сложный макет -->
<div class="grid grid-cols-3 grid-rows-3 gap-4 p-4 h-96">
  <div class="col-span-2 row-span-2 bg-red-200 p-4 rounded">
    Главный блок
  </div>
  <div class="bg-blue-200 p-4 rounded">A</div>
  <div class="bg-green-200 p-4 rounded">B</div>
  <div class="row-span-2 bg-purple-200 p-4 rounded">Боковой</div>
  <div class="col-span-2 bg-yellow-200 p-4 rounded">Подвал</div>
</div>`,
      },
    },

    {
      id: "slide-20",
      title: "Адаптивный дизайн: Breakpoints",
      type: "content",
      content:
        'Одна из самых мощных особенностей Tailwind — встроенная поддержка адаптивного дизайна через префиксы breakpoints.\n\n**Стандартные breakpoints:**\n• **sm:** 640px — маленькие планшеты\n• **md:** 768px — планшеты\n• **lg:** 1024px — ноутбуки\n• **xl:** 1280px — десктопы\n• **2xl:** 1536px — большие экраны\n\n**Принцип Mobile-First:**\nTailwind использует mobile-first подход. Классы без префикса применяются на всех размерах, а с префиксом — от указанного размера и выше.\n\n**Синтаксис:**\nhtml\n<!-- Без префикса = для всех размеров -->\n<div class="text-sm">\n\n<!-- С префиксом = от breakpoint и больше -->\n<div class="sm:text-base md:text-lg lg:text-xl">\n\n\n**Как это работает:**\n• `text-sm` — текст маленький на всех экранах\n• `sm:text-base` — с 640px текст становится базовым\n• `md:text-lg` — с 768px текст становится большим\n• `lg:text-xl` — с 1024px текст становится очень большим\n\n**Примеры применения:**\n\n**Скрытие/показ элементов:**\n• `hidden md:block` — скрыт на мобильных, виден на планшетах+\n• `block md:hidden` — виден на мобильных, скрыт на планшетах+\n\n**Изменение layout:**\n• `flex-col md:flex-row` — вертикально на мобильных, горизонтально на планшетах+\n\n**Изменение размеров:**\n• `w-full md:w-1/2 lg:w-1/3` — полная ширина → 50% → 33%\n\n**Padding/Margin:**\n• `p-4 md:p-6 lg:p-8` — отступы растут с размером экрана\n\n**Grid колонки:**\n• `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` — 1 → 2 → 4 колонки',
    },

    {
      id: "slide-21",
      title: "Примеры адаптивного дизайна",
      type: "code",
      content:
        "Практическое применение breakpoints для создания адаптивных макетов.",
      codeExample: {
        language: "html",
        title: "Адаптивные компоненты",
        code: `<!-- Адаптивная навигация -->
<nav class="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white">
  <div class="text-2xl font-bold mb-4 md:mb-0">Лого</div>
  <div class="flex flex-col md:flex-row gap-2 md:gap-4">
    <a href="#" class="hover:text-gray-300">Главная</a>
    <a href="#" class="hover:text-gray-300">О нас</a>
    <a href="#" class="hover:text-gray-300">Контакты</a>
  </div>
</nav>

<!-- Адаптивная сетка карточек -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
  <div class="bg-white rounded-lg shadow p-6">
    <h3 class="text-lg font-semibold mb-2">Карточка</h3>
    <p class="text-gray-600">Контент карточки</p>
  </div>
  <!-- ... больше карточек -->
</div>

<!-- Адаптивный текст -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
  Заголовок растёт с экраном
</h1>

<!-- Sidebar исчезает на мобильных -->
<div class="flex">
  <aside class="hidden lg:block w-64 bg-gray-100 p-4">
    Боковая панель (только на больших экранах)
  </aside>
  <main class="flex-1 p-4">
    Основной контент
  </main>
</div>

<!-- Изменение padding -->
<div class="p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-100">
  Отступы увеличиваются на больших экранах
</div>

<!-- Контейнер с максимальной шириной -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <!-- Контент центрирован с адаптивными отступами -->
  </div>
</div>

<!-- Hero секция -->
<section class="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
  <div class="text-center px-4">
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      Большой заголовок
    </h1>
    <p class="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
      Описание, которое масштабируется
    </p>
  </div>
</section>`,
      },
    },

    {
      id: "slide-22",
      title: "Состояния: Hover, Focus, Active",
      type: "content",
      content:
        'Tailwind предоставляет модификаторы для различных состояний элементов. Это позволяет легко добавлять интерактивность без написания дополнительного CSS.\n\n**Hover (наведение курсора):**\n• `hover:bg-blue-700` — изменение фона при наведении\n• `hover:text-white` — изменение цвета текста\n• `hover:scale-105` — увеличение при наведении\n• `hover:shadow-lg` — появление тени\n\n**Focus (фокус на элементе):**\n• `focus:outline-none` — убрать outline\n• `focus:ring-2` — добавить ring (внешнее кольцо)\n• `focus:ring-blue-500` — цвет ring\n• `focus:border-blue-500` — изменение границы\n\n**Active (момент клика):**\n• `active:bg-blue-800` — цвет при клике\n• `active:scale-95` — уменьшение при клике\n\n**Disabled (отключенное состояние):**\n• `disabled:opacity-50` — полупрозрачность\n• `disabled:cursor-not-allowed` — курсор "запрещено"\n\n**Visited (для ссылок):**\n• `visited:text-purple-600` — цвет посещённой ссылки\n\n**Group hover:**\nИзменение дочернего элемента при наведении на родителя:\nhtml\n<div class="group">\n  <p class="group-hover:text-blue-500">Изменится при наведении на div</p>\n</div>\n\n\n**Peer состояния:**\nИзменение элемента в зависимости от состояния соседа:\nhtml\n<input class="peer" type="checkbox" />\n<label class="peer-checked:text-blue-500">Изменится когда checkbox отмечен</label>\n\n\n**First/Last/Odd/Even:**\n• `first:mt-0` — первый элемент\n• `last:mb-0` — последний элемент\n• `odd:bg-gray-100` — нечётные элементы\n• `even:bg-white` — чётные элементы\n\n**Before/After:**\n• `before:content-[\'\']` — псевдоэлемент before\n• `after:content-[\'→\']` — псевдоэлемент after',
    },

    {
      id: "slide-23",
      title: "Примеры интерактивных состояний",
      type: "code",
      content:
        "Создание интерактивных компонентов с помощью модификаторов состояний.",
      codeExample: {
        language: "html",
        title: "Интерактивность с Tailwind",
        code: `<!-- Интерактивная кнопка -->
<button class="
  bg-blue-500 hover:bg-blue-700 active:bg-blue-800
  text-white font-bold py-2 px-4 rounded
  transform hover:scale-105 active:scale-95
  transition duration-150 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
">
  Нажми меня
</button>

<!-- Отключенная кнопка -->
<button 
  disabled
  class="
    bg-gray-300 text-gray-500
    py-2 px-4 rounded
    cursor-not-allowed
    disabled:opacity-50
  "
>
  Отключена
</button>

<!-- Интерактивная карточка -->
<div class="
  group
  bg-white rounded-lg shadow-md
  hover:shadow-xl hover:-translate-y-2
  transition-all duration-300 ease-in-out
  p-6 cursor-pointer
">
  <h3 class="text-xl font-bold group-hover:text-blue-600 transition-colors">
    Заголовок карточки
  </h3>
  <p class="text-gray-600 mt-2">
    Наведите на карточку
  </p>
</div>

<!-- Инпут с фокусом -->
<input 
  type="text"
  placeholder="Введите текст"
  class="
    w-full px-4 py-2 border border-gray-300 rounded
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    transition duration-200
  "
/>

<!-- Ссылка с эффектами -->
<a href="#" class="
  text-blue-600 hover:text-blue-800
  underline hover:no-underline
  transition-colors duration-200
">
  Ссылка с эффектом
</a>

<!-- Чекбокс с peer -->
<div class="flex items-center gap-2">
  <input 
    type="checkbox" 
    id="terms" 
    class="peer"
  />
  <label 
    for="terms"
    class="peer-checked:text-green-600 peer-checked:font-bold transition-all"
  >
    Согласен с условиями
  </label>
</div>

<!-- Список с zebra striping -->
<ul class="divide-y divide-gray-200">
  <li class="py-3 hover:bg-gray-50 odd:bg-gray-100">Элемент 1</li>
  <li class="py-3 hover:bg-gray-50 odd:bg-gray-100">Элемент 2</li>
  <li class="py-3 hover:bg-gray-50 odd:bg-gray-100">Элемент 3</li>
  <li class="py-3 hover:bg-gray-50 odd:bg-gray-100">Элемент 4</li>
</ul>`,
      },
    },

    {
      id: "slide-24",
      title: "Переходы и анимации",
      type: "content",
      content:
        "Tailwind включает утилиты для создания плавных переходов и простых анимаций без написания кастомного CSS.\n\n**Transition (переходы):**\n• `transition` — transition для всех свойств\n• `transition-none` — без переходов\n• `transition-all` — все свойства\n• `transition-colors` — только цвета\n• `transition-opacity` — только прозрачность\n• `transition-shadow` — только тени\n• `transition-transform` — только трансформации\n\n**Duration (длительность):**\n• `duration-75` — 75ms\n• `duration-100` — 100ms\n• `duration-150` — 150ms\n• `duration-200` — 200ms\n• `duration-300` — 300ms\n• `duration-500` — 500ms\n• `duration-700` — 700ms\n• `duration-1000` — 1000ms (1s)\n\n**Timing Function (функция времени):**\n• `ease-linear` — линейная\n• `ease-in` — ускорение\n• `ease-out` — замедление\n• `ease-in-out` — ускорение и замедление\n\n**Delay (задержка):**\n• `delay-75` — задержка 75ms\n• `delay-100` — задержка 100ms\n• `delay-150` — задержка 150ms\n• `delay-300` — задержка 300ms\n\n**Встроенные анимации:**\n• `animate-none` — без анимации\n• `animate-spin` — вращение (для лоадеров)\n• `animate-ping` — пульсация (для уведомлений)\n• `animate-pulse` — мягкая пульсация\n• `animate-bounce` — подпрыгивание\n\n**Transform (трансформации):**\n• `scale-{number}` — масштабирование (50, 75, 90, 95, 100, 105, 110, 125, 150)\n• `rotate-{deg}` — вращение (1, 2, 3, 6, 12, 45, 90, 180)\n• `translate-x-{size}` — сдвиг по X\n• `translate-y-{size}` — сдвиг по Y\n• `skew-x-{deg}` — наклон по X\n• `skew-y-{deg}` — наклон по Y\n\n**Transform Origin:**\n• `origin-center` — центр\n• `origin-top` — верх\n• `origin-bottom` — низ\n• `origin-left` — лево\n• `origin-right` — право",
    },

    {
      id: "slide-25",
      title: "Примеры переходов и анимаций",
      type: "code",
      content: "Создание плавных и привлекательных анимаций с Tailwind.",
      codeExample: {
        language: "html",
        title: "Анимации в Tailwind",
        code: `<!-- Плавный переход цвета -->
<button class="
  bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded
  transition-colors duration-300 ease-in-out
">
  Плавное изменение цвета
</button>

<!-- Масштабирование при наведении -->
<div class="
  w-32 h-32 bg-purple-500 rounded-lg
  transform hover:scale-110
  transition-transform duration-200 ease-out
  cursor-pointer
">
</div>

<!-- Карточка с множеством эффектов -->
<div class="
  bg-white rounded-lg shadow-md p-6
  transform hover:-translate-y-2 hover:shadow-xl
  transition-all duration-300 ease-in-out
  cursor-pointer
">
  <h3 class="text-xl font-bold">Интерактивная карточка</h3>
  <p class="text-gray-600 mt-2">Наведите для эффекта</p>
</div>

<!-- Лоадер (вращающийся спиннер) -->
<div class="flex justify-center">
  <div class="
    w-12 h-12 border-4 border-blue-500 border-t-transparent
    rounded-full animate-spin
  "></div>
</div>

<!-- Пульсирующий индикатор -->
<div class="relative inline-flex">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">
    Уведомления
  </button>
  <span class="
    absolute top-0 right-0 -mt-1 -mr-1
    flex h-3 w-3
  ">
    <span class="
      animate-ping absolute inline-flex h-full w-full
      rounded-full bg-red-400 opacity-75
    "></span>
    <span class="
      relative inline-flex rounded-full h-3 w-3 bg-red-500
    "></span>
  </span>
</div>

<!-- Подпрыгивающая стрелка -->
<div class="flex flex-col items-center">
  <p>Прокрутите вниз</p>
  <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>
</div>

<!-- Появление с задержкой -->
<div class="space-y-2">
  <div class="
    bg-gray-200 p-4 rounded
    transform translate-x-0 opacity-100
    transition-all duration-500 delay-100
  ">
    Элемент 1
  </div>
  <div class="
    bg-gray-200 p-4 rounded
    transform translate-x-0 opacity-100
    transition-all duration-500 delay-200
  ">
    Элемент 2
  </div>
  <div class="
    bg-gray-200 p-4 rounded
    transform translate-x-0 opacity-100
    transition-all duration-500 delay-300
  ">
    Элемент 3
  </div>
</div>

<!-- Плавное появление текста -->
<p class="
  opacity-0 hover:opacity-100
  transition-opacity duration-700
">
  Наведите чтобы увидеть этот текст
</p>`,
      },
    },

    {
      id: "slide-26",
      title: "Тени и эффекты",
      type: "content",
      content:
        "Tailwind предоставляет утилиты для добавления теней и различных визуальных эффектов, которые придают глубину интерфейсу.\n\n**Box Shadow (тени блоков):**\n• `shadow-sm` — маленькая тень\n• `shadow` — обычная тень (по умолчанию)\n• `shadow-md` — средняя тень\n• `shadow-lg` — большая тень\n• `shadow-xl` — очень большая тень\n• `shadow-2xl` — огромная тень\n• `shadow-inner` — внутренняя тень\n• `shadow-none` — без тени\n\n**Цвет тени:**\n• `shadow-blue-500/50` — синяя тень с 50% прозрачностью\n• `shadow-red-500` — красная тень\n\n**Opacity (прозрачность):**\n• `opacity-0` — полностью прозрачный (0%)\n• `opacity-5` — 5%\n• `opacity-10` — 10%\n• `opacity-25` — 25%\n• `opacity-50` — 50%\n• `opacity-75` — 75%\n• `opacity-100` — полностью непрозрачный (100%)\n\n**Blur (размытие):**\n• `blur-none` — без размытия\n• `blur-sm` — маленькое размытие\n• `blur` — обычное размытие\n• `blur-md` — среднее размытие\n• `blur-lg` — большое размытие\n• `blur-xl` — очень большое размытие\n• `blur-2xl` — огромное размытие\n• `blur-3xl` — максимальное размытие\n\n**Backdrop Blur (размытие фона):**\n• `backdrop-blur-sm` — размытие фона (для стеклянного эффекта)\n• `backdrop-blur-md` — среднее размытие фона\n• `backdrop-blur-lg` — большое размытие фона\n\n**Brightness (яркость):**\n• `brightness-0` — чёрный\n• `brightness-50` — тёмный\n• `brightness-100` — нормальный\n• `brightness-150` — светлый\n• `brightness-200` — очень светлый\n\n**Contrast (контраст):**\n• `contrast-0` — без контраста\n• `contrast-50` — низкий контраст\n• `contrast-100` — нормальный\n• `contrast-150` — высокий контраст\n\n**Grayscale (чёрно-белое):**\n• `grayscale` — полностью чёрно-белое\n• `grayscale-0` — цветное",
    },

    {
      id: "slide-27",
      title: "Примеры теней и эффектов",
      type: "code",
      content:
        "Использование теней и визуальных эффектов для создания современного дизайна.",
      codeExample: {
        language: "html",
        title: "Тени и эффекты",
        code: `<!-- Карточки с разными тенями -->
<div class="grid grid-cols-3 gap-4 p-4">
  <div class="bg-white p-6 rounded shadow-sm">
    <h3 class="font-bold">Малая тень</h3>
  </div>
  <div class="bg-white p-6 rounded shadow-md">
    <h3 class="font-bold">Средняя тень</h3>
  </div>
  <div class="bg-white p-6 rounded shadow-xl">
    <h3 class="font-bold">Большая тень</h3>
  </div>
</div>

<!-- Карточка с hover эффектом тени -->
<div class="
  bg-white p-6 rounded-lg
  shadow-md hover:shadow-2xl
  transition-shadow duration-300
  cursor-pointer
">
  <h3 class="text-xl font-bold">Наведите на меня</h3>
  <p class="text-gray-600 mt-2">Тень увеличится</p>
</div>

<!-- Цветная тень -->
<button class="
  bg-blue-500 text-white px-6 py-3 rounded-lg
  shadow-lg shadow-blue-500/50
  hover:shadow-xl hover:shadow-blue-500/80
  transition-all duration-300
">
  Синяя тень
</button>

<!-- Стеклянный эффект (glassmorphism) -->
<div class="relative h-64 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg overflow-hidden">
  <div class="
    absolute inset-0 flex items-center justify-center
  ">
    <div class="
      bg-white/20 backdrop-blur-md
      border border-white/30
      rounded-xl p-8
      shadow-xl
    ">
      <h3 class="text-white text-2xl font-bold">
        Стеклянный эффект
      </h3>
      <p class="text-white/90 mt-2">
        Backdrop blur создаёт эффект матового стекла
      </p>
    </div>
  </div>
</div>

<!-- Прозрачность -->
<div class="space-y-2">
  <div class="bg-blue-500 text-white p-4 rounded opacity-100">
    Непрозрачный (100%)
  </div>
  <div class="bg-blue-500 text-white p-4 rounded opacity-75">
    75% непрозрачности
  </div>
  <div class="bg-blue-500 text-white p-4 rounded opacity-50">
    50% непрозрачности
  </div>
  <div class="bg-blue-500 text-white p-4 rounded opacity-25">
    25% непрозрачности
  </div>
</div>

<!-- Размытое изображение на фоне -->
<div class="relative h-96 overflow-hidden rounded-lg">
  <img 
    src="background.jpg" 
    alt="Background"
    class="absolute inset-0 w-full h-full object-cover blur-sm"
  />
  <div class="relative z-10 flex items-center justify-center h-full">
    <div class="bg-white/90 p-8 rounded-lg shadow-xl">
      <h2 class="text-3xl font-bold">Контент поверх размытого фона</h2>
    </div>
  </div>
</div>

<!-- Фильтры изображений -->
<div class="grid grid-cols-3 gap-4">
  <img src="photo.jpg" alt="Normal" class="rounded" />
  <img src="photo.jpg" alt="Grayscale" class="rounded grayscale hover:grayscale-0 transition duration-300" />
  <img src="photo.jpg" alt="High Contrast" class="rounded contrast-150 brightness-110" />
</div>`,
      },
    },

    {
      id: "slide-28",
      title: "Borders и Rounded",
      type: "content",
      content:
        "Утилиты для работы с границами и скруглением углов позволяют создавать разнообразные формы элементов.\n\n**Border Width (толщина границы):**\n• `border` — border: 1px (по умолчанию)\n• `border-0` — без границы\n• `border-2` — 2px\n• `border-4` — 4px\n• `border-8` — 8px\n\n**Отдельные стороны:**\n• `border-t-4` — верхняя граница 4px\n• `border-r-2` — правая граница 2px\n• `border-b` — нижняя граница 1px\n• `border-l-0` — нет левой границы\n\n**Border Color:**\n• `border-gray-300` — серая граница\n• `border-blue-500` — синяя граница\n• `border-transparent` — прозрачная граница\n\n**Border Style:**\n• `border-solid` — сплошная (по умолчанию)\n• `border-dashed` — пунктирная\n• `border-dotted` — точечная\n• `border-double` — двойная\n• `border-none` — без границы\n\n**Border Radius (скругление углов):**\n• `rounded-none` — без скругления (0)\n• `rounded-sm` — маленькое скругление (0.125rem)\n• `rounded` — обычное скругление (0.25rem)\n• `rounded-md` — среднее (0.375rem)\n• `rounded-lg` — большое (0.5rem)\n• `rounded-xl` — очень большое (0.75rem)\n• `rounded-2xl` — огромное (1rem)\n• `rounded-3xl` — максимальное (1.5rem)\n• `rounded-full` — полный круг/овал (9999px)\n\n**Отдельные углы:**\n• `rounded-t-lg` — верхние углы\n• `rounded-r-lg` — правые углы\n• `rounded-b-lg` — нижние углы\n• `rounded-l-lg` — левые углы\n• `rounded-tl-lg` — верхний левый\n• `rounded-tr-lg` — верхний правый\n• `rounded-br-lg` — нижний правый\n• `rounded-bl-lg` — нижний левый\n\n**Divide (границы между элементами):**\n• `divide-y` — горизонтальные границы между элементами\n• `divide-x` — вертикальные границы\n• `divide-gray-200` — цвет границ\n• `divide-solid` — стиль границ",
    },

    {
      id: "slide-29",
      title: "Примеры границ и скругления",
      type: "code",
      content: "Создание различных форм и стилей границ элементов.",
      codeExample: {
        language: "html",
        title: "Границы и скругление",
        code: `<!-- Различные стили границ -->
<div class="space-y-4 p-4">
  <div class="border-2 border-gray-300 p-4 rounded">
    Обычная сплошная граница
  </div>
  
  <div class="border-2 border-dashed border-blue-500 p-4 rounded">
    Пунктирная граница
  </div>
  
  <div class="border-4 border-dotted border-green-500 p-4 rounded">
    Точечная граница
  </div>
  
  <div class="border-4 border-double border-purple-500 p-4 rounded">
    Двойная граница
  </div>
</div>

<!-- Граница только снизу (подчёркивание) -->
<div class="border-b-2 border-gray-300 pb-2 mb-4">
  Заголовок с линией снизу
</div>

<!-- Разные скругления -->
<div class="grid grid-cols-4 gap-4 p-4">
  <div class="bg-blue-500 text-white p-4 rounded-none text-center">
    none
  </div>
  <div class="bg-blue-500 text-white p-4 rounded text-center">
    default
  </div>
  <div class="bg-blue-500 text-white p-4 rounded-lg text-center">
    lg
  </div>
  <div class="bg-blue-500 text-white p-4 rounded-full text-center">
    full
  </div>
</div>

<!-- Круглые аватары -->
<div class="flex gap-4 items-center">
  <img 
    src="avatar1.jpg" 
    alt="Avatar" 
    class="w-16 h-16 rounded-full border-2 border-blue-500"
  />
  <img 
    src="avatar2.jpg" 
    alt="Avatar" 
    class="w-16 h-16 rounded-full border-4 border-green-500"
  />
</div>

<!-- Карточка с частичным скруглением -->
<div class="bg-white shadow-lg overflow-hidden rounded-t-2xl">
  <img src="image.jpg" alt="Card" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="text-xl font-bold">Заголовок</h3>
    <p class="text-gray-600">Скруглены только верхние углы</p>
  </div>
</div>

<!-- Список с разделителями -->
<ul class="divide-y divide-gray-200 border border-gray-200 rounded-lg">
  <li class="p-4 hover:bg-gray-50">Элемент 1</li>
  <li class="p-4 hover:bg-gray-50">Элемент 2</li>
  <li class="p-4 hover:bg-gray-50">Элемент 3</li>
</ul>

<!-- Кнопка с обводкой -->
<button class="
  border-2 border-blue-500 text-blue-500
  hover:bg-blue-500 hover:text-white
  px-6 py-2 rounded-lg
  transition-all duration-300
">
  Outline Button
</button>

<!-- Badge с цветной обводкой -->
<span class="
  inline-block px-3 py-1
  border border-green-500 text-green-500
  rounded-full text-sm
">
  Новое
</span>`,
      },
    },

    {
      id: "slide-30",
      title: "Темная тема (Dark Mode)",
      type: "content",
      content:
        "Tailwind имеет встроенную поддержку тёмной темы через префикс `dark:`. Это позволяет легко создавать интерфейсы, адаптирующиеся под предпочтения пользователя.\n\n**Настройка в конфиге:**\njavascript\nmodule.exports = {\n  darkMode: 'class', // или 'media'\n  // ...\n}\n\n\n**Два режима:**\n\n**1. 'media'** — автоматически использует системные настройки:\n• Переключается автоматически при изменении темы ОС\n• Использует медиа-запрос `@media (prefers-color-scheme: dark)`\n\n**2. 'class'** — ручное управление через класс:\n• Требует добавления класса `dark` к элементу (обычно `<html>`)\n• Даёт полный контроль над переключением темы\n• Можно сохранять выбор пользователя в localStorage\n\n**Синтаксис:**\nhtml\n<!-- Светлая тема: белый фон, тёмный текст -->\n<!-- Тёмная тема: тёмный фон, светлый текст -->\n<div class=\"bg-white dark:bg-gray-800 text-gray-900 dark:text-white\">\n  Контент адаптируется под тему\n</div>\n\n\n**Примеры применения:**\n• `dark:bg-gray-900` — тёмный фон\n• `dark:text-white` — светлый текст\n• `dark:border-gray-700` — тёмная граница\n• `dark:hover:bg-gray-700` — комбинация с hover\n\n**Лучшие практики:**\n• Используйте `gray-50` для светлого фона, `gray-900` для тёмного\n• Для текста: `gray-900` (светлая) / `gray-100` (тёмная)\n• Для вторичного текста: `gray-600` / `gray-400`\n• Проверяйте контрастность цветов в обеих темах",
    },

    {
      id: "slide-31",
      title: "Реализация тёмной темы",
      type: "code",
      content: "Практическая реализация переключаемой тёмной темы с Tailwind.",
      codeExample: {
        language: "html",
        title: "Dark Mode пример",
        code: `<!-- HTML структура -->
<!DOCTYPE html>
<html lang="ru" class="dark">
<head>
  <meta charset="UTF-8">
  <title>Dark Mode Example</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class'
    }
  </script>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-200">
  
  <!-- Навигация -->
  <nav class="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Мой Сайт</h1>
      
      <!-- Кнопка переключения темы -->
      <button 
        onclick="toggleDarkMode()"
        class="
          p-2 rounded-lg
          bg-gray-200 dark:bg-gray-700
          hover:bg-gray-300 dark:hover:bg-gray-600
          transition-colors duration-200
        "
      >
        <span class="dark:hidden">🌙</span>
        <span class="hidden dark:inline">☀️</span>
      </button>
    </div>
  </nav>

  <!-- Контент -->
  <main class="container mx-auto p-4">
    <!-- Карточка -->
    <div class="
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-lg shadow-lg
      p-6 mb-4
    ">
      <h2 class="text-xl font-bold mb-2">
        Заголовок карточки
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        Это описание карточки, которое адаптируется под тему
      </p>
    </div>

    <!-- Кнопки -->
    <div class="flex gap-4 mb-4">
      <button class="
        bg-blue-500 dark:bg-blue-600
        hover:bg-blue-600 dark:hover:bg-blue-700
        text-white px-4 py-2 rounded
        transition-colors duration-200
      ">
        Основная кнопка
      </button>
      
      <button class="
        border border-gray-300 dark:border-gray-600
        text-gray-700 dark:text-gray-300
        hover:bg-gray-100 dark:hover:bg-gray-800
        px-4 py-2 rounded
        transition-colors duration-200
      ">
        Вторичная кнопка
      </button>
    </div>

    <!-- Инпут -->
    <input 
      type="text"
      placeholder="Введите текст"
      class="
        w-full px-4 py-2 rounded
        bg-white dark:bg-gray-800
        border border-gray-300 dark:border-gray-600
        text-gray-900 dark:text-white
        placeholder-gray-500 dark:placeholder-gray-400
        focus:outline-none focus:ring-2 
        focus:ring-blue-500 dark:focus:ring-blue-600
        transition-colors duration-200
      "
    />
  </main>

  <script>
    // Переключение темы
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      
      // Сохранение в localStorage
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('darkMode', isDark);
    }

    // Загрузка сохранённой темы
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      document.documentElement.classList.add('dark');
    }
  </script>
</body>
</html>`,
      },
    },

    {
      id: "slide-32",
      title: "Директива @apply",
      type: "content",
      content:
        "Директива `@apply` позволяет извлекать повторяющиеся утилитарные классы в кастомные CSS классы. Это полезно для создания переиспользуемых компонентов.\n\n**Когда использовать @apply:**\n• Когда один и тот же набор классов повторяется много раз\n• Для создания компонентов, которые нельзя вынести в отдельные файлы\n• Когда строка классов становится слишком длинной\n\n**Синтаксис:**\ncss\n@layer components {\n  .btn-primary {\n    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;\n  }\n}\n\n\n**Слои (Layers):**\n\n**@layer base** — базовые стили:\ncss\n@layer base {\n  h1 {\n    @apply text-4xl font-bold;\n  }\n}\n\n\n**@layer components** — компоненты:\ncss\n@layer components {\n  .card {\n    @apply bg-white rounded-lg shadow-md p-6;\n  }\n}\n\n\n**@layer utilities** — кастомные утилиты:\ncss\n@layer utilities {\n  .text-shadow {\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n}\n\n\n**Важные замечания:**\n• Не злоупотребляйте @apply — это противоречит философии Tailwind\n• Используйте его только для действительно повторяющихся паттернов\n• Предпочитайте компоненты (React, Vue) вместо @apply где возможно\n• @apply работает только с утилитарными классами Tailwind\n\n**Пример плохого использования:**\ncss\n/* Плохо - слишком специфично */\n.my-special-div {\n  @apply bg-blue-500 text-white p-4 rounded shadow-md hover:bg-blue-700;\n}\n\n\n**Пример хорошего использования:**\ncss\n/* Хорошо - переиспользуемая кнопка */\n.btn {\n  @apply px-4 py-2 rounded font-medium transition-colors;\n}\n\n.btn-primary {\n  @apply bg-blue-500 hover:bg-blue-700 text-white;\n}\n\n.btn-secondary {\n  @apply bg-gray-200 hover:bg-gray-300 text-gray-800;\n}\n",
    },

    {
      id: "slide-33",
      title: "Примеры @apply",
      type: "code",
      content:
        "Практическое применение директивы @apply для создания переиспользуемых компонентов.",
      codeExample: {
        language: "css",
        title: "Использование @apply",
        code: `/* В файле styles.css */

/* Базовые стили */
@layer base {
  h1 {
    @apply text-4xl font-bold text-gray-900 dark:text-white mb-4;
  }
  
  h2 {
    @apply text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-3;
  }
  
  p {
    @apply text-gray-700 dark:text-gray-300 leading-relaxed mb-4;
  }
  
  a {
    @apply text-blue-600 dark:text-blue-400 hover:underline;
  }
}

/* Компоненты */
@layer components {
  /* Кнопки */
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-all duration-200;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  }
  
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white;
    @apply focus:ring-blue-500;
  }
  
  .btn-secondary {
    @apply bg-gray-200 hover:bg-gray-300 text-gray-800;
    @apply dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white;
    @apply focus:ring-gray-500;
  }
  
  .btn-danger {
    @apply bg-red-500 hover:bg-red-700 text-white;
    @apply focus:ring-red-500;
  }
  
  /* Карточки */
  .card {
    @apply bg-white dark:bg-gray-800 rounded-lg shadow-md;
    @apply border border-gray-200 dark:border-gray-700;
    @apply p-6;
  }
  
  .card-hover {
    @apply card;
    @apply hover:shadow-xl hover:-translate-y-1;
    @apply transition-all duration-300;
  }
  
  /* Инпуты */
  .input {
    @apply w-full px-4 py-2 rounded-lg;
    @apply bg-white dark:bg-gray-800;
    @apply border border-gray-300 dark:border-gray-600;
    @apply text-gray-900 dark:text-white;
    @apply placeholder-gray-500 dark:placeholder-gray-400;
    @apply focus:outline-none focus:ring-2 focus:ring-blue-500;
    @apply transition-colors duration-200;
  }
  
  /* Badge */
  .badge {
    @apply inline-block px-2 py-1 rounded-full text-xs font-semibold;
  }
  
  .badge-success {
    @apply badge bg-green-100 text-green-800;
    @apply dark:bg-green-900 dark:text-green-200;
  }
  
  .badge-warning {
    @apply badge bg-yellow-100 text-yellow-800;
    @apply dark:bg-yellow-900 dark:text-yellow-200;
  }
  
  .badge-danger {
    @apply badge bg-red-100 text-red-800;
    @apply dark:bg-red-900 dark:text-red-200;
  }
}

/* Кастомные утилиты */
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .text-shadow-lg {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}`,
      },
    },

    {
      id: "slide-34",
      title: "HTML с кастомными классами",
      type: "code",
      content: "Использование созданных через @apply компонентов в HTML.",
      codeExample: {
        language: "html",
        title: "Применение кастомных классов",
        code: `<!-- Кнопки -->
<div class="flex gap-4">
  <button class="btn btn-primary">
    Основная кнопка
  </button>
  
  <button class="btn btn-secondary">
    Вторичная кнопка
  </button>
  
  <button class="btn btn-danger">
    Удалить
  </button>
</div>

<!-- Карточки -->
<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="card-hover">
    <h3 class="text-xl font-bold mb-2">Карточка 1</h3>
    <p>Контент с hover эффектом</p>
    <span class="badge-success mt-2">Новое</span>
  </div>
  
  <div class="card">
    <h3 class="text-xl font-bold mb-2">Карточка 2</h3>
    <p>Обычная карточка</p>
    <span class="badge-warning mt-2">Важно</span>
  </div>
  
  <div class="card">
    <h3 class="text-xlfont-bold mb-2">Карточка 3</h3>
    <p>Ещё один пример</p>
    <span class="badge-danger mt-2">Срочно</span>
  </div>
</div>

<!-- Форма -->
<form class="card max-w-md mx-auto mt-8">
  <h2 class="text-2xl font-bold mb-4">Форма регистрации</h2>
  
  <div class="mb-4">
    <label class="block mb-2">Email</label>
    <input type="email" class="input" placeholder="your@email.com" />
  </div>
  
  <div class="mb-4">
    <label class="block mb-2">Пароль</label>
    <input type="password" class="input" placeholder="••••••••" />
  </div>
  
  <button type="submit" class="btn btn-primary w-full">
    Зарегистрироваться
  </button>
</form>

<!-- Заголовки (используют базовые стили) -->
<div class="card mt-8">
  <h1>Главный заголовок</h1>
  <h2>Подзаголовок</h2>
  <p>
    Это параграф с автоматическими стилями.
    <a href="#">Ссылка</a> также стилизована.
  </p>
</div>`,
      },
    },

    {
      id: "slide-35",
      title: "Практический пример: Создание карточки товара",
      type: "code",
      content:
        "Создадим полноценную карточку товара с использованием всех изученных техник Tailwind.",
      codeExample: {
        language: "html",
        title: "Карточка товара",
        code: `<div class="max-w-sm mx-auto">
  <!-- Карточка товара -->
  <div class="
    group
    bg-white dark:bg-gray-800
    rounded-xl shadow-lg overflow-hidden
    transform hover:-translate-y-2 hover:shadow-2xl
    transition-all duration-300
  ">
    <!-- Изображение -->
    <div class="relative overflow-hidden">
      <img 
        src="product.jpg" 
        alt="Product"
        class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      
      <!-- Badge -->
      <span class="
        absolute top-4 right-4
        bg-red-500 text-white
        px-3 py-1 rounded-full text-sm font-bold
      ">
        -20%
      </span>
      
      <!-- Иконка избранного -->
      <button class="
        absolute top-4 left-4
        bg-white/80 backdrop-blur-sm
        hover:bg-white
        p-2 rounded-full
        transition-all duration-200
      ">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>
    </div>
    
    <!-- Контент -->
    <div class="p-6">
      <!-- Категория -->
      <span class="
        inline-block
        bg-blue-100 dark:bg-blue-900
        text-blue-800 dark:text-blue-200
        text-xs px-2 py-1 rounded-full
        mb-2
      ">
        Электроника
      </span>
      
      <!-- Название -->
      <h3 class="
        text-xl font-bold
        text-gray-900 dark:text-white
        mb-2 group-hover:text-blue-600
        transition-colors duration-200
      ">
        Беспроводные наушники
      </h3>
      
      <!-- Описание -->
      <p class="
        text-gray-600 dark:text-gray-400
        text-sm mb-4 line-clamp-2
      ">
        Премиальные наушники с активным шумоподавлением и 30 часами автономной работы
      </p>
      
      <!-- Рейтинг -->
      <div class="flex items-center mb-4">
        <!-- Звёзды -->
        <div class="flex text-yellow-400">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
          <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
          <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
          <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
          <svg class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        </div>
        <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
          4.0 (128 отзывов)
        </span>
      </div>
      
      <!-- Цена и кнопка -->
      <div class="flex items-center justify-between">
        <div>
          <span class="
            text-2xl font-bold
            text-gray-900 dark:text-white
          ">
            7 999 ₽
          </span>
          <span class="
            ml-2 text-sm
            text-gray-500 dark:text-gray-400
            line-through
          ">
            9 999 ₽
          </span>
        </div>
        
        <button class="
          bg-blue-500 hover:bg-blue-600
          active:bg-blue-700
          text-white font-semibold
          px-6 py-2 rounded-lg
          transform hover:scale-105 active:scale-95
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ">
          Купить
        </button>
      </div>
    </div>
  </div>
</div>`,
      },
    },

    {
      id: "slide-36",
      title: "Практический пример: Dashboard",
      type: "code",
      content:
        "Создание компактной панели управления (dashboard) с графиками и статистикой.",
      codeExample: {
        language: "html",
        title: "Dashboard макет",
        code: `<div class="min-h-screen bg-gray-100 dark:bg-gray-900">
  <!-- Навигация -->
  <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
        </div>
        <div class="flex items-center gap-4">
          <button class="
            p-2 rounded-lg
            hover:bg-gray-100 dark:hover:bg-gray-700
            transition-colors
          ">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </button>
          <img 
            src="avatar.jpg" 
            alt="Avatar"
            class="w-8 h-8 rounded-full border-2 border-blue-500"
          />
        </div>
      </div>
    </div>
  </nav>

  <!-- Основной контент -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Статистические карточки -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Карточка 1 -->
      <div class="
        bg-white dark:bg-gray-800
        rounded-lg shadow-md p-6
        border-l-4 border-blue-500
      ">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Всего пользователей
            </p>
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
              2,543
            </h3>
            <p class="text-sm text-green-600 mt-2">
              ↑ 12% за месяц
            </p>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Карточка 2 -->
      <div class="
        bg-white dark:bg-gray-800
        rounded-lg shadow-md p-6
        border-l-4 border-green-500
      ">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Доход
            </p>
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
              $45,231
            </h3>
            <p class="text-sm text-green-600 mt-2">
              ↑ 8% за месяц
            </p>
          </div>
          <div class="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
            <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Карточка 3 -->
      <div class="
        bg-white dark:bg-gray-800
        rounded-lg shadow-md p-6
        border-l-4 border-yellow-500
      ">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Заказы
            </p>
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
              1,423
            </h3>
            <p class="text-sm text-red-600 mt-2">
              ↓ 3% за месяц
            </p>
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
            <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Карточка 4 -->
      <div class="
        bg-white dark:bg-gray-800
        rounded-lg shadow-md p-6
        border-l-4 border-purple-500
      ">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Конверсия
            </p>
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
              3.2%
            </h3>
            <p class="text-sm text-green-600 mt-2">
              ↑ 0.5% за месяц
            </p>
          </div>
          <div class="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Графики -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- График продаж -->
      <div class="
        bg-white dark:bg-gray-800
        rounded-lg shadow-md p-6
      ">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Продажи за неделю
        </h3>
        <div class="h-64 flex items-end justify-between gap-2">
          <div class="flex-1 bg-blue-500 rounded-t h-3/4"></div>
          <div class="flex-1 bg-blue-500 rounded-t h-1/2"></div>
          <div class="flex-1 bg-blue-500 rounded-t h-full"></div>
          <div class="flex-1 bg-blue-500 rounded-t h-2/3"></div>
          <div class="flex-1 bg-blue-500 rounded-t h-4/5"></div>
          <div class="flex-1 bg-blue-500 rounded-t h-1/2"></div>
          <div class="flex-1 bg-blue-500 rounded-t h-3/5"></div>
        </div>
      </div>

      <!-- Последние заказы -->
      <div class="
        bg-white dark:bg-gray-800
        rounded-lg shadow-md p-6
      ">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Последние заказы
        </h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span class="text-blue-600 dark:text-blue-400 font-semibold">#1</span>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">Заказ #3421</p>
                <p class="text-sm text-gray-500">2 минуты назад</p>
              </div>
            </div>
            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
              Выполнен
            </span>
          </div>
          <!-- Ещё заказы... -->
        </div>
      </div>
    </div>
  </main>
</div>`,
      },
    },

    {
      id: "slide-37",
      title: "Полезные плагины Tailwind",
      type: "list",
      content:
        "Официальные и популярные плагины, расширяющие возможности Tailwind:",
      items: [
        "@tailwindcss/forms — красивая стилизация форм из коробки",
        "@tailwindcss/typography — стили для контента (блоги, статьи)",
        "@tailwindcss/line-clamp — обрезка текста по количеству строк",
        "@tailwindcss/aspect-ratio — контроль соотношения сторон",
        "tailwindcss-animate — дополнительные анимации",
        "daisyUI — библиотека готовых компонентов для Tailwind",
        "Headless UI — несстилизованные доступные компоненты (от создателей Tailwind)",
        "Tailwind UI — премиум библиотека компонентов (платная)",
        "Flowbite — open-source библиотека компонентов",
        "Meraki UI — коллекция красивых компонентов",
      ],
    },

    {
      id: "slide-38",
      title: "Установка плагинов",
      type: "code",
      content: "Пример установки и подключения популярных плагинов Tailwind.",
      codeExample: {
        language: "bash",
        title: "Установка плагинов",
        code: `# Установка официальных плагинов
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/line-clamp
npm install -D @tailwindcss/aspect-ratio

# Установка дополнительных плагинов
npm install -D daisyui
npm install -D @headlessui/react  # для React
npm install -D flowbite`,
      },
    },

    {
      id: "slide-39",
      title: "Подключение плагинов в конфиге",
      type: "code",
      content: "Настройка tailwind.config.js для использования плагинов.",
      codeExample: {
        language: "javascript",
        title: "tailwind.config.js с плагинами",
        code: `module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Официальные плагины
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    
    // Сторонние плагины
    require('daisyui'),
    require('flowbite/plugin'),
  ],
  
  // Конфигурация DaisyUI (опционально)
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}`,
      },
    },

    {
      id: "slide-40",
      title: "Оптимизация и Production Build",
      type: "content",
      content:
        "Правильная настройка Tailwind для продакшна критически важна для производительности сайта.\n\n**PurgeCSS (встроен в Tailwind):**\nTailwind автоматически удаляет неиспользуемые классы в production сборке. Для этого нужно правильно настроить `content` в конфиге:\n\njavascript\nmodule.exports = {\n  content: [\n    './src/**/*.{html,js,jsx,ts,tsx,vue}',\n    './pages/**/*.{html,js,jsx,ts,tsx}',\n    './components/**/*.{html,js,jsx,ts,tsx}',\n  ],\n}\n\n\n**Важные моменты:**\n• Укажите ВСЕ пути к файлам с классами Tailwind\n• Не используйте динамическую конкатенацию классов:\n  javascript\n  // ❌ Плохо - PurgeCSS не найдёт эти классы\n  <div class={`text-${color}-500`}>\n  \n  // ✅ Хорошо - полные имена классов\n  <div class={color === 'red' ? 'text-red-500' : 'text-blue-500'}>\n  \n\n**Safelist (белый список):**\nЕсли классы генерируются динамически, добавьте их в safelist:\njavascript\nmodule.exports = {\n  safelist: [\n    'text-red-500',\n    'text-blue-500',\n    'bg-green-500',\n    {\n      pattern: /bg-(red|green|blue)-(100|200|300)/,\n    },\n  ],\n}\n\n\n**Минификация:**\nTailwind автоматически минифицирует CSS в production mode.\n\n**Размер бандла:**\n• Development: ~3-4 MB (все классы)\n• Production: обычно 5-15 KB (только используемые классы)\n\n**JIT Mode (Just-in-Time):**\nВключен по умолчанию в Tailwind v3+. Генерирует классы по требованию:\n• Мгновенная сборка\n• Все варианты доступны (любые значения)\n• Одинаковый размер в dev и prod\n\n**Кеширование:**\nНастройте кеширование для быстрой пересборки:\njavascript\nmodule.exports = {\n  cache: true, // включено по умолчанию\n}\n",
    },

    {
      id: "slide-41",
      title: "Сравнение: Tailwind vs традиционный CSS",
      type: "two-column",
      content:
        "Понимание различий поможет выбрать правильный подход для проекта",
      leftContent: {
        title: "Традиционный CSS",
        items: [
          "Пишете кастомный CSS отдельно от HTML",
          "Придумываете имена классов (BEM, SMACSS)",
          "Сложно поддерживать консистентность",
          "Неиспользуемый CSS накапливается",
          "Нужно переключаться между файлами",
          "Полный контроль над стилями",
          "Подходит для уникальных дизайнов",
          "Не требует сборки",
          "Меньше HTML-кода",
          "Легче для новичков",
        ],
      },
      rightContent: {
        title: "Tailwind CSS",
        items: [
          "Утилиты прямо в HTML",
          "Не нужно придумывать имена классов",
          "Встроенная дизайн-система",
          "PurgeCSS удаляет неиспользуемое",
          "Всё в одном месте",
          "Ограничен предопределёнными утилитами",
          "Идеален для типовых интерфейсов",
          "Требует настройки сборки",
          "Длинные строки классов",
          "Кривая обучения (нужно знать классы)",
        ],
      },
    },

    {
      id: "slide-42",
      title: "Когда использовать Tailwind",
      type: "two-column",
      content:
        "Tailwind не универсальное решение. Важно понимать, когда его стоит использовать",
      leftContent: {
        title: "Tailwind подходит",
        items: [
          "Быстрая разработка MVP или прототипов",
          "Командная разработка (консистентность)",
          "Типовые интерфейсы (admin панели, dashboards)",
          "Компонентный подход (React, Vue, Svelte)",
          "Когда нужна встроенная дизайн-система",
          "Адаптивные интерфейсы",
          "Проекты с множеством похожих элементов",
        ],
      },
      rightContent: {
        title: "Tailwind не подходит",
        items: [
          "Очень кастомные, уникальные дизайны",
          "Проекты без сборки (простые лендинги)",
          "Когда команда против utility-first",
          "Legacy проекты с существующим CSS",
          "Маркетинговые сайты с уникальным дизайном",
          "Если предпочитаете CSS-in-JS",
          "Маленькие проекты где CSS проще",
        ],
      },
    },

    {
      id: "slide-43",
      title: "Лучшие практики Tailwind",
      type: "list",
      content: "Рекомендации для эффективной работы с Tailwind CSS:",
      items: [
        "Используйте компоненты (React, Vue) вместо @apply где возможно",
        "Настройте свою палитру цветов в theme.extend вместо переопределения",
        "Группируйте похожие классы: сначала layout, потом стили, затем интерактивность",
        "Используйте prettier-plugin-tailwindcss для автосортировки классов",
        "Не бойтесь длинных строк — читаемость важнее краткости",
        "Создавайте переиспользуемые компоненты, а не @apply классы",
        "Используйте VS Code расширение 'Tailwind CSS IntelliSense'",
        "Настройте content paths правильно для PurgeCSS",
        "Избегайте динамической конкатенации имён классов",
        "Документируйте кастомные настройки в tailwind.config.js",
        "Используйте @layer для организации кастомных стилей",
        "Тестируйте темную тему на ранних этапах",
      ],
    },

    {
      id: "slide-44",
      title: "Интеграция с фреймворками",
      type: "content",
      content:
        "Tailwind отлично интегрируется с современными JavaScript фреймворками.\n\n**React / Next.js:**\nbash\n# Next.js (Tailwind включен по умолчанию)\nnpx create-next-app@latest my-app --typescript --tailwind\n\n# Для существующего React проекта\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\n\njsx\n// Компонент React с Tailwind\ninterface ButtonProps {\n  children: React.ReactNode;\n  variant?: 'primary' | 'secondary';\n}\n\nfunction Button({ children, variant = 'primary' }: ButtonProps) {\n  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';\n  const variantClasses = {\n    primary: 'bg-blue-500 hover:bg-blue-700 text-white',\n    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',\n  };\n  \n  return (\n    <button className={`${baseClasses} ${variantClasses[variant]}`}>\n      {children}\n    </button>\n  );\n}\n\n\n**Vue.js / Nuxt:**\nbash\n# Nuxt 3 (Tailwind модуль)\nnpm install -D @nuxtjs/tailwindcss\n\n# Добавить в nuxt.config.ts\nmodules: ['@nuxtjs/tailwindcss']\n\n\nvue\n<template>\n  <button \n    :class=\"[\n      'px-4 py-2 rounded-lg font-medium',\n      variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200'\n    ]\"\n  >\n    <slot />\n  </button>\n</template>\n\n\n**Svelte / SvelteKit:**\nbash\nnpx sv create my-app\n# Выберите Tailwind CSS при установке\n\n\n**Angular:**\nbash\nng add @ng-neat/tailwind\n\n\n**Общие советы:**\n• Используйте библиотеки компонентов: Headless UI, Radix UI\n• Создавайте wrapper-компоненты для часто используемых элементов\n• Используйте условные классы для динамических стилей\n• Применяйте clsx или classnames для удобной работы с классами",
    },
    {
      id: "slide-45",
      title: "Пример React компонентов с Tailwind",
      type: "code",
      content:
        "Создание переиспользуемых компонентов в React с использованием Tailwind.",
      codeExample: {
        language: "jsx",
        title: "React + Tailwind компоненты",
        code: `import { useState } from 'react';

// Кнопка
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

function Button({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`}
    >
      {children}
    </button>
  );
}

// Карточка
interface CardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

function Card({ title, description, image, badge }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <Button variant="primary">Подробнее</Button>
      </div>
    </div>
  );
}

// Модальное окно
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Использование
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Мои компоненты
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Товар 1"
            description="Описание товара"
            image="/product1.jpg"
            badge="Новинка"
          />
        </div>
        
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => setIsModalOpen(true)}
        >
          Открыть модалку
        </Button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Заголовок модалки"
        >
          <p>Содержимое модального окна</p>
        </Modal>
      </div>
    </div>
  );
}`,
      },
    },
    {
      id: "slide-46",
      title: "Полезные утилиты и трюки",
      type: "content",
      content:
        'Малоизвестные, но полезные возможности Tailwind.\n\n**Arbitrary Values (произвольные значения):**\nМожно использовать любые значения через квадратные скобки:\nhtml\n<div class="w-[137px] h-[344px] top-[117px]"></div>\n<div class="bg-[#1da1f2] text-[17px]"></div>\n<div class="grid-cols-[200px_1fr_300px]"></div>\n\n\n**Важное значение (!):**\nДобавить `!` для `!important`:\nhtml\n<div class="!text-red-500">Всегда красный</div>\n\n\n**Группировка с *:**\nПрименить стили ко всем дочерним элементам:\nhtml\n<div class="*:rounded-full *:border *:border-sky-100">\n  <p>Все дети получат эти стили</p>\n  <span>И этот тоже</span>\n</div>\n\n\n**Space и Divide:**\nРасстояния между элементами:\nhtml\n<div class="space-y-4">\n  <!-- Вертикальное расстояние между детьми -->\n</div>\n\n<div class="divide-y divide-gray-200">\n  <!-- Горизонтальные границы между детьми -->\n</div>\n\n\n**Ring (внешнее кольцо):**\nАльтернатива outline, лучше для focus states:\nhtml\n<input class="focus:ring-2 focus:ring-blue-500" />\n\n\n**Aspect Ratio:**\nПоддержание соотношения сторон:\nhtml\n<div class="aspect-video">16:9</div>\n<div class="aspect-square">1:1</div>\n\n\n**Backdrop Filters:**\nФильтры для фона элемента:\nhtml\n<div class="backdrop-blur-sm backdrop-brightness-50"></div>\n\n\n**Break Words:**\nКонтроль переноса текста:\nhtml\n<p class="break-words">Длинныйтекстбудетперенесён</p>\n<p class="truncate">Текст обрежется с многоточием...</p>\n<p class="line-clamp-3">Текст обрезан на 3 строки</p>\n\n\n**Mix Blend Mode:**\nРежимы наложения:\nhtml\n<div class="mix-blend-multiply"></div>\n',
    },

    {
      id: "slide-47",
      title: "Debugging и Dev Tools",
      type: "content",
      content:
        "Инструменты для отладки и работы с Tailwind.\n\n**VS Code расширения:**\n• **Tailwind CSS IntelliSense** — автодополнение классов\n• **Tailwind Fold** — сворачивание длинных строк классов\n• **Headwind** — сортировка классов\n• **Prettier Plugin Tailwind** — автоматическая сортировка\n\n**Браузерные инструменты:**\n• **Tailwind DevTools** (Chrome extension) — отладка в браузере\n• Встроенный DevTools браузера для инспекции классов\n\n**Онлайн инструменты:**\n• **Tailwind Play** (play.tailwindcss.com) — песочница онлайн\n• **Tailwind Components** — коллекция готовых компонентов\n• **Tailwind Toolbox** — бесплатные шаблоны\n• **Tailwind Cheat Sheet** — справочник по классам\n\n**Отладка в коде:**\nhtml\n<!-- Временные визуальные границы для отладки -->\n<div class=\"border-2 border-red-500\">\n  Отладочная граница\n</div>\n\n<!-- Показать сетку для отладки layout -->\n<div class=\"bg-red-500 bg-opacity-10\">\n  Цветной фон для видимости\n</div>\n\n\n**Конфиг для отладки:**\njavascript\nmodule.exports = {\n  // Показывать все варианты в dev mode\n  mode: 'jit',\n  // Логирование\n  plugins: [\n    function({ addUtilities }) {\n      console.log('Custom plugin loaded');\n    },\n  ],\n}\n\n\n**Проверка сборки:**\nbash\n# Посмотреть размер финального CSS\nnpx tailwindcss -i input.css -o output.css --minify\ndu -h output.css\n",
    },

    {
      id: "slide-48",
      title: "Частые ошибки и решения",
      type: "two-column",
      content: "Типичные проблемы при работе с Tailwind и способы их решения",
      leftContent: {
        title: "Проблема",
        items: [
          "Стили не применяются",
          "Классы удаляются в production",
          "Цвета не работают",
          "Hover/Focus не работают",
          "Очень длинные строки классов",
          "Конфликт с другим CSS",
          "Медленная компиляция",
          "Не работает темная тема",
        ],
      },
      rightContent: {
        title: "Решение",
        items: [
          "Проверьте content paths в конфиге",
          "Не используйте динамическую конкатенацию классов",
          "Убедитесь что цвет есть в палитре",
          "Проверьте порядок слоёв (@layer)",
          "Создайте компоненты или используйте @apply",
          "Используйте @layer для порядка CSS",
          "Включите JIT mode (включён по умолчанию в v3)",
          "Добавьте class='dark' на <html> элемент",
        ],
      },
    },

    {
      id: "slide-49",
      title: "Ресурсы для изучения",
      type: "list",
      content: "Полезные ресурсы для углублённого изучения Tailwind CSS:",
      items: [
        "Официальная документация: tailwindcss.com/docs",
        "Tailwind Play: play.tailwindcss.com — онлайн песочница",
        "Tailwind UI: tailwindui.com — премиум компоненты (платно)",
        "Headless UI: headlessui.com — несстилизованные компоненты",
        "Hero Icons: heroicons.com — набор иконок от создателей Tailwind",
        "Tailwind Components: tailwindcomponents.com — бесплатные компоненты",
        "Awesome Tailwind CSS: github.com — коллекция ресурсов",
        "DaisyUI: daisyui.com — библиотека компонентов",
        "Flowbite: flowbite.com — компоненты и шаблоны",
        "Tailwind Toolbox: tailwindtoolbox.com — шаблоны и компоненты",
      ],
    },

    {
      id: "slide-50",
      title: "Заключение: Преимущества Tailwind",
      type: "content",
      content:
        "**Почему Tailwind стал популярным:**\n\nTailwind CSS революционизировал подход к стилизации веб-приложений, предложив utility-first методологию, которая решает многие проблемы традиционного CSS.\n\n**Ключевые преимущества:**\n\n**1. Скорость разработки**\nНе нужно переключаться между HTML и CSS файлами. Всё происходит в одном месте, что значительно ускоряет процесс.\n\n**2. Консистентность дизайна**\nВстроенная дизайн-система обеспечивает единообразие: цвета, отступы, размеры шрифтов — всё из предопределённой шкалы.\n\n**3. Маленький размер бандла**\nБлагодаря PurgeCSS, в продакшн попадают только используемые классы. Финальный CSS обычно 5-15 KB.\n\n**4. Отличная документация**\nОдна из лучших документаций среди CSS фреймворков. Всё описано подробно с примерами.\n\n**5. Активное сообщество**\nОгромное количество плагинов, компонентов, шаблонов и ресурсов от сообщества.\n\n**6. Простая кастомизация**\nВсё настраивается через tailwind.config.js — цвета, отступы, breakpoints, шрифты.\n\n**Когда использовать:**\n• Быстрая разработка и прототипирование\n• Командная разработка\n• Компонентные фреймворки (React, Vue, Svelte)\n• Проекты, требующие консистентности\n• Адаптивные интерфейсы\n\n**Следующие шаги:**\n• Практикуйтесь — создавайте реальные проекты\n• Изучите Headless UI для доступных компонентов\n• Освойте Tailwind UI паттерны\n• Экспериментируйте с плагинами\n• Создайте свою кастомную дизайн-систему\n\nTailwind — это не замена CSS, а инструмент, который делает работу с CSS более продуктивной и приятной!",
    },
  ],
};
