import { Lecture } from "@/types";

export const htmlCssBasicsAndBestPractices: Lecture = {
  id: "html-css-basics-best-practices",
  title: "Основы верстки: Практический подход к HTML и CSS",
  description:
    "Практическое руководство для начинающих: когда использовать какие теги, где искать информацию, разница между id и class, и другие важные концепции для успешной верстки компонентов и макетов.",
  groupId: "user-interfaces",
  createdAt: new Date("2025-11-15"),
  updatedAt: new Date("2025-11-15"),
  tags: [
    "user-interfaces",
    "основы",
    "верстка",
    "best-practices",
    "начинающим",
  ],
  difficulty: "beginner",
  duration: 3.5,

  slides: [
    {
      id: "slide-1",
      title: "Основы верстки: Практический подход к HTML и CSS",
      type: "title",
      content:
        "Практическое руководство: как правильно верстать и где искать информацию",
      keyPoints: [
        {
          title: "Когда использовать какие теги",
          description: "Практические правила выбора HTML элементов",
        },
        {
          title: "ID vs Class",
          description: "Понимание разницы и правильное применение",
        },
        {
          title: "Где искать информацию",
          description: "Надежные источники знаний по верстке",
        },
        {
          title: "Практические паттерны",
          description: "Готовые решения для типичных задач",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Главное правило: Начинайте с div",
      type: "content",
      content:
        "**Не бойтесь использовать div!**\n\nМногие новички думают, что нужно сразу использовать «правильные» семантические теги. Это не так.\n\n**Правило для начинающих:**\n• Начинайте ВСЕГДА с `<div>` и классов\n• Пишите работающий код\n• Потом, если нужно, заменяйте на семантические теги\n\n**Почему так:**\n• Div — универсальный контейнер, работает везде\n• Не нужно помнить десятки тегов\n• Фокус на структуре, а не на названиях\n• Семантика важна для SEO, но для учебных проектов не критична\n\n**На практике:**\n90% современной верстки — это div с классами. Даже опытные разработчики используют div для большинства блоков.\n\n**Когда использовать другие теги:**\n• `<button>` — для кнопок (важно для доступности)\n• `<a>` — для ссылок\n• `<img>` — для картинок\n• `<input>`, `<form>` — для форм\n• Остальное — можно div\n\nНе усложняйте себе жизнь на начальном этапе!",
    },

    {
      id: "slide-3",
      title: "Базовая структура любой страницы",
      type: "code",
      content:
        "Вот шаблон, который вы можете использовать для ЛЮБОГО проекта. Просто копируйте и меняйте под свои нужды.",
      codeExample: {
        language: "html",
        title: "Стартовый шаблон для всех проектов",
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Название вашего проекта</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Всё содержимое страницы идёт сюда -->
    
    <div class="container">
        <h1>Заголовок</h1>
        <p>Текст</p>
    </div>
    
</body>
</html>`,
      },
    },

    {
      id: "slide-4",
      title: "ID vs Class: Главное различие",
      type: "two-column",
      content:
        "Самый частый вопрос новичков. Вот простое правило, которое работает в 99% случаев:",
      leftContent: {
        title: "ID (идентификатор)",
        items: [
          "Используется ОДИН РАЗ на странице",
          "Пишется с решёткой: #main-header",
          "Для уникальных элементов",
          "Примеры: шапка, подвал, главное меню",
          "НЕ используйте для стилей",
          "Используйте для JavaScript",
        ],
      },
      rightContent: {
        title: "Class (класс)",
        items: [
          "Можно использовать МНОГО РАЗ",
          "Пишется с точкой: .button",
          "Для повторяющихся элементов",
          "Примеры: кнопки, карточки, блоки",
          "ВСЕГДА используйте для стилей",
          "Один элемент может иметь несколько классов",
        ],
      },
    },

    {
      id: "slide-5",
      title: "ID vs Class: Практические примеры",
      type: "code",
      content:
        "Давайте посмотрим на конкретных примерах, когда что использовать.",
      codeExample: {
        language: "html",
        title: "Правильное использование ID и Class",
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- ID - для уникальных элементов (шапка одна на странице) -->
    <div id="header">
        <h1>Мой сайт</h1>
    </div>
    
    <!-- Class - для повторяющихся элементов -->
    <!-- У нас может быть много кнопок -->
    <button class="btn">Кнопка 1</button>
    <button class="btn">Кнопка 2</button>
    <button class="btn">Кнопка 3</button>
    
    <!-- Один элемент может иметь НЕСКОЛЬКО классов -->
    <button class="btn btn-large btn-primary">Большая синяя кнопка</button>
    
    <!-- Карточки товаров - используем класс, так как их много -->
    <div class="card">
        <h3>Товар 1</h3>
        <p>Описание</p>
    </div>
    
    <div class="card">
        <h3>Товар 2</h3>
        <p>Описание</p>
    </div>
    
    <!-- ID для главного контейнера (он один) -->
    <div id="footer">
        <p>© 2025 Мой сайт</p>
    </div>
    
</body>
</html>`,
      },
    },

    {
      id: "slide-6",
      title: "CSS для ID и Class",
      type: "code",
      content:
        "Обратите внимание: мы стилизуем ТОЛЬКО через классы, даже если у элемента есть ID.",
      codeExample: {
        language: "css",
        title: "style.css - правильный подход",
        code: `/* ❌ ПЛОХО - не стилизуем через ID */
#header {
    background-color: blue;  /* НЕ ДЕЛАЙТЕ ТАК */
}

/* ✅ ХОРОШО - используем классы для стилей */
.header {
    background-color: #2c3e50;
    padding: 20px;
    color: white;
}

/* Базовая кнопка */
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

/* Модификаторы кнопки (дополнительные классы) */
.btn-large {
    padding: 15px 30px;
    font-size: 18px;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
}

/* Карточка - переиспользуемый компонент */
.card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}`,
      },
    },

    {
      id: "slide-7",
      title: "Правильный HTML с классами",
      type: "code",
      content:
        "Вот как должен выглядеть ваш HTML. Даже если есть ID (для JavaScript), мы добавляем класс для стилей.",
      codeExample: {
        language: "html",
        title: "Правильная структура",
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Шапка: есть ID для JS, но стилизуем через класс -->
    <div id="header" class="header">
        <div class="container">
            <h1 class="logo">МойСайт</h1>
            <nav class="nav">
                <a href="#" class="nav-link">Главная</a>
                <a href="#" class="nav-link">О нас</a>
                <a href="#" class="nav-link">Контакты</a>
            </nav>
        </div>
    </div>
    
    <!-- Основной контент -->
    <div class="main-content">
        <div class="container">
            
            <!-- Секция с карточками -->
            <div class="cards-section">
                <h2 class="section-title">Наши товары</h2>
                
                <div class="cards-grid">
                    <div class="card">
                        <div class="card-image">
                            <img src="product1.jpg" alt="Товар 1">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">Товар 1</h3>
                            <p class="card-text">Описание товара</p>
                            <p class="card-price">1999 ₽</p>
                            <button class="btn btn-primary">Купить</button>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-image">
                            <img src="product2.jpg" alt="Товар 2">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">Товар 2</h3>
                            <p class="card-text">Описание товара</p>
                            <p class="card-price">2499 ₽</p>
                            <button class="btn btn-primary">Купить</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    
    <!-- Подвал -->
    <div id="footer" class="footer">
        <div class="container">
            <p class="footer-text">© 2025 МойСайт. Все права защищены.</p>
        </div>
    </div>
    
</body>
</html>`,
      },
    },

    {
      id: "slide-8",
      title: "Правило именования классов",
      type: "content",
      content:
        "**Как называть классы, чтобы не запутаться:**\n\n**1. Называйте по смыслу, а не по внешнему виду**\n❌ Плохо: `.red-button`, `.big-text`\n✅ Хорошо: `.btn-primary`, `.title`\n\n**Почему:** Если дизайн изменится (синяя кнопка вместо красной), название останется актуальным.\n\n**2. Используйте префиксы для связанных элементов**\n\n.card\n.card-image\n.card-title\n.card-content\n.card-price\n\n\n**3. Модификаторы через двойной дефис**\n\n.btn\n.btn--large\n.btn--primary\n\n\n**4. Состояния через одно тире**\n\n.menu-item\n.menu-item-active\n.menu-item-disabled\n\n\n**5. Используйте английский язык**\n❌ `.кнопка`, `.карточка`\n✅ `.button`, `.card`\n\n**6. Короткие, но понятные названия**\n❌ `.main-navigation-menu-item-link`\n✅ `.nav-link`",
    },

    {
      id: "slide-9",
      title: "Примеры хороших и плохих названий",
      type: "two-column",
      content:
        "Учитесь на примерах. Слева — плохие названия, справа — хорошие:",
      leftContent: {
        title: "❌ Плохие названия",
        items: [
          ".krasivaya-knopka (русский язык)",
          ".div1, .div2 (непонятно что внутри)",
          ".red-background (описывает стиль)",
          ".button123 (цифры без смысла)",
          ".b, .x, .temp (слишком короткие)",
          ".ThisIsMyButtonClass (неправильный стиль)",
        ],
      },
      rightContent: {
        title: "✅ Хорошие названия",
        items: [
          ".btn-primary (по смыслу)",
          ".card, .card-header (понятная структура)",
          ".bg-dark (общепринятое сокращение)",
          ".product-1 (осмысленная цифра)",
          ".container, .wrapper (общепринятые)",
          ".btn-submit (kebab-case стиль)",
        ],
      },
    },

    {
      id: "slide-10",
      title: "Где искать информацию: Надежные источники",
      type: "content",
      content:
        "**Топ-5 источников для изучения HTML и CSS:**\n\n**1. MDN Web Docs (developer.mozilla.org)**\n• Самый надежный и полный справочник\n• На русском и английском языках\n• Примеры кода и объяснения\n• Информация о поддержке браузерами\n\n**2. Can I Use (caniuse.com)**\n• Проверка поддержки CSS/HTML в браузерах\n• Перед использованием нового свойства проверяйте тут\n• Показывает процент пользователей с поддержкой\n\n**3. CSS-Tricks (css-tricks.com)**\n• Статьи и туториалы\n• Практические примеры\n• Решения типичных проблем\n\n**4. W3Schools (w3schools.com)**\n• Для быстрого поиска синтаксиса\n• Интерактивные примеры\n• Удобно для новичков\n\n**5. Stack Overflow (stackoverflow.com)**\n• Для решения конкретных проблем\n• Ответы на вопросы от сообщества\n• Ищите на английском языке\n\n**Как искать:**\n• Google: `mdn css flexbox`\n• Google: `how to center div css`\n• Stack Overflow: добавляйте `[html]` или `[css]` к запросу",
    },

    {
      id: "slide-11",
      title: "Как правильно искать решение проблемы",
      type: "list",
      content: "Пошаговая инструкция: как найти ответ на свой вопрос о верстке",
      items: [
        "Сформулируйте проблему одним предложением на английском",
        "Добавьте ключевые слова: css, html, flexbox, grid и т.д.",
        "Проверьте первые 3-5 результатов в Google",
        "Ищите решения на MDN, CSS-Tricks, Stack Overflow",
        "Открывайте примеры в CodePen или JSFiddle",
        "Копируйте код и адаптируйте под свою задачу",
        "Если не работает — проверьте синтаксис (точка, запятая, скобки)",
        "Используйте DevTools браузера (F12) для отладки",
      ],
    },

    {
      id: "slide-12",
      title: "Базовая структура любого компонента",
      type: "content",
      content:
        '**Любой компонент состоит из 3 частей:**\n\n**1. Контейнер (обёртка)**\nВнешний `div` с классом — определяет размеры и отступы\n\n**2. Содержимое**\nВнутренние элементы — картинки, текст, кнопки\n\n**3. Стили**\nCSS классы для оформления\n\n**Универсальная схема:**\nhtml\n<div class="component">\n    <div class="component-header">Заголовок</div>\n    <div class="component-body">Содержимое</div>\n    <div class="component-footer">Подвал</div>\n</div>\n\n\n**Эту схему можно применить к чему угодно:**\n• Карточка товара\n• Форма регистрации\n• Меню навигации\n• Модальное окно\n• Статья блога\n\nПросто меняйте названия классов и содержимое!',
    },

    {
      id: "slide-13",
      title: "Пример: Карточка товара (структура)",
      type: "code",
      content:
        "Давайте создадим карточку товара. Обратите внимание на структуру: всё логично и понятно.",
      codeExample: {
        language: "html",
        title: "HTML карточки",
        code: `<!-- Карточка товара -->
<div class="product-card">
    
    <!-- Изображение -->
    <div class="product-card-image">
        <img src="product.jpg" alt="Название товара">
    </div>
    
    <!-- Содержимое -->
    <div class="product-card-body">
        <h3 class="product-card-title">Название товара</h3>
        <p class="product-card-description">
            Краткое описание товара в несколько строк
        </p>
    </div>
    
    <!-- Подвал с ценой и кнопкой -->
    <div class="product-card-footer">
        <span class="product-card-price">1999 ₽</span>
        <button class="btn btn-primary">В корзину</button>
    </div>
    
</div>`,
      },
    },

    {
      id: "slide-14",
      title: "Пример: Карточка товара (стили)",
      type: "code",
      content:
        "А вот CSS для этой карточки. Всё просто и понятно — каждый класс отвечает за свою часть.",
      codeExample: {
        language: "css",
        title: "CSS карточки",
        code: `/* Сама карточка */
.product-card {
    width: 300px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Изображение */
.product-card-image {
    width: 100%;
    height: 200px;
}

.product-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Содержимое */
.product-card-body {
    padding: 20px;
}

.product-card-title {
    font-size: 20px;
    color: #2c3e50;
    margin-bottom: 10px;
}

.product-card-description {
    font-size: 14px;
    color: #7f8c8d;
    line-height: 1.5;
}

/* Подвал */
.product-card-footer {
    padding: 20px;
    border-top: 1px solid #ecf0f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-card-price {
    font-size: 24px;
    color: #27ae60;
    font-weight: bold;
}

/* Кнопка */
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
}`,
      },
    },

    {
      id: "slide-15",
      title: "Важные CSS свойства, которые нужно знать",
      type: "content",
      content:
        "**Топ-10 свойств, которые решают 90% задач:**\n\n**1. display** — тип отображения\n• `block` — блочный элемент\n• `flex` — для выравнивания элементов\n• `none` — скрыть элемент\n\n**2. width, height** — размеры\n• В пикселях: `width: 300px`\n• В процентах: `width: 100%`\n\n**3. padding** — внутренний отступ\n• `padding: 20px` — со всех сторон\n• `padding: 20px 40px` — верх/низ, лево/право\n\n**4. margin** — внешний отступ\n• То же самое, что padding, но снаружи\n• `margin: 0 auto` — центрирование\n\n**5. background-color** — цвет фона\n• `background-color: white`\n\n**6. color** — цвет текста\n• `color: #333`\n\n**7. font-size** — размер шрифта\n• `font-size: 16px`\n\n**8. border** — граница\n• `border: 1px solid #ddd`\n\n**9. border-radius** — скругление углов\n• `border-radius: 8px`\n\n**10. box-shadow** — тень\n• `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`",
    },

    {
      id: "slide-16",
      title: "Flexbox: Выравнивание элементов",
      type: "content",
      content:
        "**Flexbox — это ваш лучший друг для раскладки элементов.**\n\nЗапомните эти 4 свойства — они решают 99% задач:\n\n**1. display: flex**\nДелает контейнер flex-контейнером\n\n**2. justify-content** — по горизонтали\n• `flex-start` — слева (по умолчанию)\n• `center` — по центру\n• `flex-end` — справа\n• `space-between` — с отступами между\n\n**3. align-items** — по вертикали\n• `flex-start` — сверху\n• `center` — по центру\n• `flex-end` — снизу\n\n**4. gap** — расстояние между элементами\n• `gap: 20px` — отступы между всеми детьми\n\n**Вот и всё!** С этими 4 свойствами вы можете:\n• Выровнять по центру (горизонтально и вертикально)\n• Расположить элементы в ряд с отступами\n• Создать меню, карточки, кнопки\n• Сделать адаптивный макет",
    },

    {
      id: "slide-17",
      title: "Flexbox: Практические примеры",
      type: "code",
      content:
        "Вот конкретные примеры использования flexbox. Копируйте и используйте!",
      codeExample: {
        language: "css",
        title: "Типичные задачи с Flexbox",
        code: `/* 1. Выровнять элемент по центру (горизонтально и вертикально) */
.center-box {
    display: flex;
    justify-content: center;  /* по горизонтали */
    align-items: center;      /* по вертикали */
    height: 100vh;            /* на всю высоту экрана */
}

/* 2. Расположить элементы в ряд с отступами */
.cards-container {
    display: flex;
    gap: 20px;  /* отступ между карточками */
}

/* 3. Кнопки по краям (логин справа) */
.header {
    display: flex;
    justify-content: space-between;  /* по краям */
    align-items: center;
}

/* 4. Меню с элементами в ряд */
.menu {
    display: flex;
    gap: 30px;
}

/* 5. Подвал с центрированным текстом */
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}

/* 6. Карточка: цена слева, кнопка справа */
.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`,
      },
    },

    {
      id: "slide-18",
      title: "Container (контейнер): зачем он нужен",
      type: "content",
      content:
        '**Container — это обёртка для контента с ограничением ширины.**\n\n**Зачем нужен:**\n• На больших экранах контент не растягивается на всю ширину\n• Текст остаётся читаемым\n• Контент находится по центру\n\n**Как использовать:**\n1. Создайте класс `.container`\n2. Оберните весь контент в `<div class="container">`\n3. Задайте максимальную ширину и центрирование\n\n**Стандартные ширины:**\n• 1200px — для широких экранов\n• 960px — для средних\n• 100% с padding — для мобильных\n\n**Правило:**\nКонтейнер используется ВНУТРИ секций, а не наоборот:\nhtml\n<div class="header">\n    <div class="container">\n        <!-- контент -->\n    </div>\n</div>\n',
    },

    {
      id: "slide-19",
      title: "Container: код",
      type: "code",
      content: "Вот готовый код контейнера. Используйте его в каждом проекте!",
      codeExample: {
        language: "css",
        title: "Универсальный container",
        code: `/* Контейнер для всего контента */
.container {
    max-width: 1200px;  /* максимальная ширина */
    margin: 0 auto;     /* центрирование */
    padding: 0 20px;    /* отступы по бокам */
}

/* На мобильных устройствах */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;  /* меньше отступы */
    }
}`,
      },
    },

    {
      id: "slide-20",
      title: "Типичная структура страницы",
      type: "code",
      content:
        "Вот как выглядит структура ЛЮБОЙ страницы. Запомните этот паттерн!",
      codeExample: {
        language: "html",
        title: "Универсальная структура",
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Название страницы</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- ШАПКА -->
    <div class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">МойСайт</div>
                <nav class="nav">
                    <a href="#" class="nav-link">Главная</a>
                    <a href="#" class="nav-link">О нас</a>
                    <a href="#" class="nav-link">Контакты</a>
                </nav>
            </div>
        </div>
        </div>
    
    <!-- ОСНОВНОЙ КОНТЕНТ -->
    <div class="main">
        <div class="container">
            
            <!-- Секция с заголовком -->
            <div class="hero-section">
                <h1 class="hero-title">Добро пожаловать</h1>
                <p class="hero-text">Описание сайта</p>
                <button class="btn btn-primary">Начать</button>
            </div>
            
            <!-- Секция с карточками -->
            <div class="cards-section">
                <h2 class="section-title">Наши услуги</h2>
                
                <div class="cards-grid">
                    <div class="card">
                        <h3 class="card-title">Услуга 1</h3>
                        <p class="card-text">Описание</p>
                    </div>
                    
                    <div class="card">
                        <h3 class="card-title">Услуга 2</h3>
                        <p class="card-text">Описание</p>
                    </div>
                    
                    <div class="card">
                        <h3 class="card-title">Услуга 3</h3>
                        <p class="card-text">Описание</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
    <!-- ПОДВАЛ -->
    <div class="footer">
        <div class="container">
            <p class="footer-text">© 2025 МойСайт</p>
        </div>
    </div>
    
</body>
</html>`,
      },
    },

    {
      id: "slide-21",
      title: "CSS для типичной структуры",
      type: "code",
      content:
        "А вот CSS для этой структуры. Обратите внимание: всё через классы, всё понятно!",
      codeExample: {
        language: "css",
        title: "style.css",
        code: `/* Сброс базовых стилей */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}

/* Контейнер */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ====== ШАПКА ====== */
.header {
    background-color: #2c3e50;
    padding: 20px 0;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: white;
    font-size: 24px;
    font-weight: bold;
}

.nav {
    display: flex;
    gap: 30px;
}

.nav-link {
    color: white;
    text-decoration: none;
}

.nav-link:hover {
    color: #3498db;
}

/* ====== ОСНОВНОЙ КОНТЕНТ ====== */
.main {
    padding: 60px 0;
}

/* Hero секция */
.hero-section {
    text-align: center;
    padding: 80px 0;
}

.hero-title {
    font-size: 48px;
    color: #2c3e50;
    margin-bottom: 20px;
}

.hero-text {
    font-size: 20px;
    color: #7f8c8d;
    margin-bottom: 30px;
}

/* Секция с карточками */
.cards-section {
    margin-top: 60px;
}

.section-title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
    color: #2c3e50;
}

.cards-grid {
    display: flex;
    gap: 30px;
}

/* Карточка */
.card {
    flex: 1;  /* равная ширина */
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 24px;
    margin-bottom: 15px;
    color: #2c3e50;
}

.card-text {
    color: #7f8c8d;
    line-height: 1.6;
}

/* Кнопка */
.btn {
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
}

/* ====== ПОДВАЛ ====== */
.footer {
    background-color: #34495e;
    padding: 30px 0;
    margin-top: 60px;
}

.footer-text {
    text-align: center;
    color: white;
}

/* ====== АДАПТИВНОСТЬ ====== */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 20px;
    }
    
    .nav {
        flex-direction: column;
        gap: 15px;
    }
    
    .cards-grid {
        flex-direction: column;
    }
    
    .hero-title {
        font-size: 32px;
    }
}`,
      },
    },

    {
      id: "slide-22",
      title: "Частые ошибки начинающих",
      type: "two-column",
      content: "Учитесь на чужих ошибках, а не на своих!",
      leftContent: {
        title: "❌ Что НЕ надо делать",
        items: [
          "Стилизовать через ID (#header)",
          "Использовать inline-стили (style='')",
          "Писать классы по-русски (.кнопка)",
          "Забывать про box-sizing: border-box",
          "Не использовать container",
          "Не проверять на мобильных устройствах",
        ],
      },
      rightContent: {
        title: "✅ Правильный подход",
        items: [
          "Всегда стилизовать через классы",
          "Стили в отдельном CSS файле",
          "Классы на английском (.button)",
          "Добавить box-sizing для всех элементов",
          "Оборачивать контент в .container",
          "Тестировать на разных размерах (F12 → Device Mode)",
        ],
      },
    },

    {
      id: "slide-23",
      title: "Отладка через DevTools",
      type: "content",
      content:
        "**Самый важный инструмент разработчика — DevTools браузера.**\n\n**Как открыть:**\n• Нажмите F12 в браузере\n• Или правая кнопка мыши → «Просмотреть код»\n\n**Что можно делать:**\n\n**1. Инспектировать элементы**\n• Наведите курсор на код → элемент подсветится на странице\n• Кликните на элемент → увидите его HTML и CSS\n\n**2. Редактировать стили в реальном времени**\n• Измените цвет, размер — увидите сразу\n• Экспериментируйте без изменения файлов\n• Когда нашли нужное — скопируйте в свой CSS\n\n**3. Проверить размеры и отступы**\n• Посмотрите box model (margin, padding, border)\n• Поймёте, почему элемент не на месте\n\n**4. Тестировать на разных устройствах**\n• Нажмите Ctrl+Shift+M (или иконка телефона)\n• Выберите iPhone, iPad, Android\n• Проверьте адаптивность\n\n**5. Смотреть ошибки**\n• Вкладка Console покажет ошибки\n• Красный текст = что-то сломано\n\n**Совет:** Открывайте DevTools ВСЕГДА при верстке!",
    },

    {
      id: "slide-24",
      title: "Пошаговый план создания страницы",
      type: "list",
      content: "Следуйте этому плану — и у вас всё получится!",
      items: [
        "Создайте HTML файл с базовой структурой (<!DOCTYPE html>...)",
        "Подключите CSS файл через <link rel='stylesheet'>",
        "Добавьте * { box-sizing: border-box; } в начало CSS",
        "Создайте класс .container с max-width и margin: 0 auto",
        "Разделите страницу на секции: header, main, footer",
        "Оберните содержимое каждой секции в .container",
        "Используйте flexbox для расположения элементов",
        "Добавьте медиа-запрос для мобильных (max-width: 768px)",
        "Откройте DevTools и проверьте на разных размерах",
        "Исправьте ошибки, доработайте детали",
      ],
    },

    {
      id: "slide-25",
      title: "Шпаргалка: Flexbox",
      type: "code",
      content:
        "Сохраните эту шпаргалку — она закрывает 90% задач по выравниванию!",
      codeExample: {
        language: "css",
        title: "Flexbox: все основные случаи",
        code: `/* 1. По центру (горизонтально и вертикально) */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 2. Элементы в ряд с отступами */
.row-with-gaps {
    display: flex;
    gap: 20px;
}

/* 3. Элементы по краям */
.space-between {
    display: flex;
    justify-content: space-between;
}

/* 4. Элементы в колонку (друг под другом) */
.column {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* 5. Элементы в ряд, но на мобильных в колонку */
.responsive-row {
    display: flex;
    gap: 20px;
}

@media (max-width: 768px) {
    .responsive-row {
        flex-direction: column;
    }
}

/* 6. Один элемент занимает всё свободное место */
.flex-item-grow {
    flex: 1;
}

/* 7. Равные колонки */
.equal-columns {
    display: flex;
    gap: 20px;
}

.equal-columns > * {
    flex: 1;  /* каждый элемент одинаковой ширины */
}`,
      },
    },

    {
      id: "slide-26",
      title: "Шпаргалка: Типичные компоненты",
      type: "code",
      content:
        "Готовые решения для типичных элементов. Копируйте и адаптируйте!",
      codeExample: {
        language: "css",
        title: "Компоненты: кнопка, карточка, badge",
        code: `/* КНОПКА */
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

/* КАРТОЧКА */
.card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
}

/* BADGE (метка) */
.badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.badge-success {
    background-color: #27ae60;
    color: white;
}

.badge-danger {
    background-color: #e74c3c;
    color: white;
}

/* АВАТАР */
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

/* РАЗДЕЛИТЕЛЬ */
.divider {
    height: 1px;
    background-color: #ecf0f1;
    margin: 20px 0;
}`,
      },
    },

    {
      id: "slide-27",
      title: "Цвета: как выбрать палитру",
      type: "content",
      content:
        "**Не нужно быть дизайнером, чтобы выбрать хорошие цвета!**\n\n**Простой подход:**\n\n**1. Используйте готовые палитры**\n• Сайты: coolors.co, colorhunt.co\n• Выберите 3-4 цвета и используйте их везде\n\n**2. Базовая палитра для любого проекта:**\ncss\n:root {\n  --primary: #3498db;    /* Основной (кнопки, ссылки) */\n  --success: #27ae60;    /* Успех */\n  --danger: #e74c3c;     /* Ошибки, удаление */\n  --dark: #2c3e50;       /* Текст, заголовки */\n  --gray: #7f8c8d;       /* Второстепенный текст */\n  --light: #ecf0f1;      /* Фон, разделители */\n  --white: #ffffff;      /* Белый фон */\n}\n\n\n**3. Правило 60-30-10**\n• 60% — основной цвет (обычно светлый фон)\n• 30% — второстепенный цвет (элементы интерфейса)\n• 10% — акцентный цвет (кнопки, важные элементы)\n\n**4. Проверка контрастности**\n• Тёмный текст на светлом фоне\n• Светлый текст на тёмном фоне\n• Проверьте на сайте: webaim.org/resources/contrastchecker",
    },

    {
      id: "slide-28",
      title: "Отступы: система 8px",
      type: "content",
      content:
        "**Система 8px — профессиональный подход к отступам.**\n\n**Суть:**\nВсе отступы кратны 8: 8px, 16px, 24px, 32px, 40px...\n\n**Почему 8:**\n• Большинство экранов имеют чётное разрешение\n• Элементы выравниваются по пиксельной сетке\n• Дизайн выглядит аккуратнее\n\n**Как применять:**\ncss\n/* Маленькие отступы */\npadding: 8px;    /* между близкими элементами */\n\n/* Средние отступы */\npadding: 16px;   /* внутри карточек, кнопок */\n\n/* Большие отступы */\npadding: 24px;   /* между секциями */\nmargin: 32px 0;  /* между блоками */\n\n/* Огромные отступы */\npadding: 48px 0; /* между крупными секциями */\n\n\n**Создайте CSS переменные:**\ncss\n:root {\n  --space-xs: 8px;\n  --space-sm: 16px;\n  --space-md: 24px;\n  --space-lg: 32px;\n  --space-xl: 48px;\n}\n\n.card {\n  padding: var(--space-md);\n  margin-bottom: var(--space-lg);\n}\n\n\n**Правило:** Никогда не используйте «странные» числа (15px, 23px, 37px)",
    },

    {
      id: "slide-29",
      title: "Адаптивность: простой подход",
      type: "content",
      content:
        "**Адаптивность — это когда сайт хорошо выглядит на всех устройствах.**\n\n**Три простых правила:**\n\n**1. Мобильные: всё в колонку**\ncss\n@media (max-width: 768px) {\n    .cards-grid {\n        flex-direction: column;\n    }\n}\n\n\n**2. Уменьшайте размеры на мобильных**\ncss\n@media (max-width: 768px) {\n    h1 { font-size: 28px; }     /* было 48px */\n    .btn { padding: 10px 20px; } /* было 12px 30px */\n}\n\n\n**3. Используйте относительные единицы**\ncss\n.container {\n    width: 90%;              /* вместо фиксированных 1200px */\n    max-width: 1200px;       /* но не больше 1200px */\n}\n\n\n**Точка перелома (breakpoint):**\n• 768px — граница между мобильными и планшетами\n• Всё что меньше 768px = мобильные\n• Всё что больше = планшеты и десктопы\n\n**Тестирование:**\n• F12 → Ctrl+Shift+M → выберите устройство\n• Проверьте iPhone, iPad, разные Android\n• Убедитесь, что всё читаемо и кликабельно",
    },

    {
      id: "slide-30",
      title: "Шпаргалка: Адаптивность",
      type: "code",
      content:
        "Вот готовый код для адаптивности. Используйте в каждом проекте!",
      codeExample: {
        language: "css",
        title: "Базовая адаптивность",
        code: `/* ====== ДЕСКТОП (по умолчанию) ====== */
.cards-grid {
    display: flex;
    gap: 30px;
}

.card {
    flex: 1;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav {
    display: flex;
    gap: 30px;
}

h1 {
    font-size: 48px;
}

.hero-section {
    padding: 80px 0;
}

/* ====== МОБИЛЬНЫЕ (до 768px) ====== */
@media (max-width: 768px) {
    /* Карточки в колонку */
    .cards-grid {
        flex-direction: column;
    }
    
    /* Шапка в колонку */
    .header-content {
        flex-direction: column;
        gap: 20px;
    }
    
    /* Меню в колонку */
    .nav {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    
    /* Уменьшаем размеры */
    h1 {
        font-size: 32px;
    }
    
    .hero-section {
        padding: 40px 0;
    }
    
    /* Контейнер с меньшими отступами */
    .container {
        padding: 0 15px;
    }
}`,
      },
    },

    {
      id: "slide-31",
      title: "Готовый стартовый шаблон",
      type: "code",
      content: "Сохраните этот шаблон и используйте для ВСЕХ новых проектов!",
      codeExample: {
        language: "css",
        title: "starter-template.css",
        code: `/* ====== СБРОС И БАЗОВЫЕ СТИЛИ ====== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* ====== ПЕРЕМЕННЫЕ (настройте под свой проект) ====== */
:root {
    /* Цвета */
    --primary: #3498db;
    --success: #27ae60;
    --danger: #e74c3c;
    --dark: #2c3e50;
    --gray: #7f8c8d;
    --light: #ecf0f1;
    --white: #ffffff;
    
    /* Отступы */
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --space-xl: 48px;
    
    /* Размеры шрифтов */
    --text-sm: 14px;
    --text-base: 16px;
    --text-lg: 20px;
    --text-xl: 24px;
    --text-2xl: 32px;
    --text-3xl: 48px;
}

/* ====== КОНТЕЙНЕР ====== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ====== КНОПКИ ====== */
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: var(--text-base);
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: var(--primary);
    color: var(--white);
}

.btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

/* ====== КАРТОЧКИ ====== */
.card {
    background-color: var(--white);
    border-radius: 8px;
    padding: var(--space-md);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ====== УТИЛИТЫ ====== */
.text-center {
    text-align: center;
}

.flex {
    display: flex;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.gap-sm { gap: var(--space-sm); }
.gap-md { gap: var(--space-md); }
.gap-lg { gap: var(--space-lg); }

/* ====== АДАПТИВНОСТЬ ====== */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
    
    :root {
        --text-3xl: 32px;
        --text-2xl: 28px;
    }
}`,
      },
    },

    {
      id: "slide-32",
      title: "Чек-лист перед сдачей проекта",
      type: "list",
      content:
        "Проверьте эти пункты перед тем, как показать свою работу преподавателю:",
      items: [
        "✅ Все стили в отдельном CSS файле (не inline)",
        "✅ Используются классы, а не ID для стилизации",
        "✅ Есть box-sizing: border-box для всех элементов",
        "✅ Контент обёрнут в .container",
        "✅ Страница проверена на мобильных (F12 → Device Mode)",
        "✅ Все изображения имеют атрибут alt",
        "✅ Нет ошибок в консоли браузера (F12 → Console)",
        "✅ Код отформатирован (нормальные отступы)",
        "✅ Классы названы понятно на английском",
        "✅ Страница открывается в браузере без ошибок",
      ],
    },

    {
      id: "slide-33",
      title: "Полезные расширения для браузера",
      type: "list",
      content: "Установите эти расширения — они сильно упростят жизнь:",
      items: [
        "ColorZilla — узнать цвет любого элемента на странице",
        "WhatFont — узнать шрифт на любом сайте",
        "Pesticide — показывает границы всех элементов (помогает с отладкой)",
        "Lorem Ipsum Generator — быстрая вставка текста-заполнителя",
        "CSS Peeper — извлечение стилей с любого сайта",
        "Responsive Viewer — тестирование на разных устройствах одновременно",
      ],
    },

    {
      id: "slide-34",
      title: "Как учиться дальше",
      type: "content",
      content:
        '**План развития после этой лекции:**\n\n**1. Практика, практика, практика**\n• Сверстайте 5-10 простых страниц\n• Копируйте дизайны с dribbble.com, behance.net\n• Не пытайтесь сразу делать идеально\n\n**2. Изучайте чужой код**\n• Открывайте DevTools на сайтах, которые вам нравятся\n• Смотрите, как сделаны элементы\n• Копируйте подход, а не код дословно\n\n**3. Используйте готовые примеры**\n• CodePen.io — тысячи примеров компонентов\n• Ищите: "CSS card codepen", "CSS button codepen"\n• Адаптируйте под свои задачи\n\n**4. Не бойтесь задавать вопросы**\n• Спрашивайте у преподавателя\n• Ищите на Stack Overflow\n• Пишите в чаты с однокурсниками\n\n**5. Следующие темы для изучения:**\n• CSS Grid (для сложных макетов)\n• CSS анимации\n• Препроцессоры (Sass)\n• Фреймворки (Bootstrap, Tailwind)\n\n**Главное:** Не пытайтесь выучить всё сразу. Освойте базу, делайте проекты, и знания придут с практикой!',
    },

    {
      id: "slide-35",
      title: "Типичные вопросы и ответы",
      type: "content",
      content:
        "**Q: Нужно ли учить все HTML теги?**\nA: Нет! Начните с div, button, a, img, input. Остальное по мере необходимости.\n\n**Q: Почему мой элемент не по центру?**\nA: Используйте Flexbox: display: flex; justify-content: center; align-items: center;\n\n**Q: Как сделать элементы в ряд?**\nA: display: flex; gap: 20px;\n\n**Q: Почему цвет не применяется?**\nA: Проверьте: 1) подключён ли CSS файл, 2) правильно ли написан класс (с точкой в CSS), 3) нет ли ошибок в синтаксисе\n\n**Q: Как посмотреть, какие стили применены?**\nA: F12 → кликните на элемент → справа увидите все стили\n\n**Q: Нужно ли запоминать все свойства CSS?**\nA: Нет! Запомните основные (margin, padding, display, color), остальное ищите по мере надобности.\n\n**Q: Почему на телефоне всё сломалось?**\nA: Добавьте медиа-запрос @media (max-width: 768px) и измените flex-direction на column\n\n**Q: Можно ли смешивать ID и class?**\nA: Да, но для стилей используйте только class!\n\n**Q: Как быстро найти ошибку?**\nA: 1) F12 → Console (ищите красный текст), 2) Проверьте, подключён ли CSS, 3) Используйте DevTools",
    },

    {
      id: "slide-36",
      title: "Финальные советы",
      type: "list",
      content: "Запомните эти правила — они сэкономят вам часы отладки:",
      items: [
        "Всегда начинайте с готового шаблона (слайд 31)",
        "Пишите HTML сначала, CSS потом — не пытайтесь делать всё одновременно",
        "Используйте осмысленные имена классов — через месяц вы забудете, что значит .box1",
        "Открывайте DevTools постоянно — это ваш лучший друг",
        "Не бойтесь копировать код из примеров — так все учатся",
        "Сохраняйте полезные фрагменты кода в отдельный файл snippets.css",
        "Делайте коммиты в Git часто — чтобы можно было откатиться",
        "Тестируйте на мобильных СРАЗУ, а не в конце",
        "Если что-то не работает 15 минут — спросите у кого-нибудь",
        "Главное — практика! Один сверстанный макет лучше десяти прочитанных статей",
      ],
    },

    {
      id: "slide-37",
      title: "Практическое задание",
      type: "content",
      content:
        '**Задание: создать страницу с карточками товаров**\n\n**Требования:**\n\n**1. Структура HTML:**\n• Шапка с логотипом и меню (3 ссылки)\n• Заголовок H1 "Наши товары"\n• 3 карточки товаров в ряд\n• Подвал с копирайтом\n\n**2. Каждая карточка должна содержать:**\n• Изображение товара (можете использовать placeholder: via.placeholder.com/300x200)\n• Название товара (H3)\n• Краткое описание (параграф)\n• Цену\n• Кнопку "Купить"\n\n**3. Требования к CSS:**\n• Используйте только классы\n• Все стили в отдельном файле style.css\n• Контент в .container (max-width: 1200px)\n• Используйте flexbox для расположения элементов\n• Карточки должны иметь тень и скругленные углы\n• При наведении на карточку — увеличение тени\n• При наведении на кнопку — изменение цвета\n\n**4. Адаптивность:**\n• На экранах меньше 768px карточки должны идти в колонку\n• Меню на мобильных тоже в колонку\n\n**Время на выполнение:** 2-3 часа\n\n**Подсказка:** Используйте готовый шаблон из слайда 31 как основу!',
    },

    {
      id: "slide-38",
      title: "Решение задания: HTML",
      type: "code",
      content: "Вот примерное решение задания. Сравните со своим кодом!",
      codeExample: {
        language: "html",
        title: "index.html",
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин товаров</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Шапка -->
    <div class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">Магазин</div>
                <nav class="nav">
                    <a href="#" class="nav-link">Главная</a>
                    <a href="#" class="nav-link">Товары</a>
                    <a href="#" class="nav-link">Контакты</a>
                </nav>
            </div>
        </div>
    </div>
    
    <!-- Основной контент -->
    <div class="main">
        <div class="container">
            
            <h1 class="page-title">Наши товары</h1>
            
            <div class="products-grid">
                
                <!-- Карточка 1 -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x200" alt="Товар 1">
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">Товар 1</h3>
                        <p class="product-description">
                            Описание первого товара. Качественный продукт по доступной цене.
                        </p>
                        <div class="product-footer">
                            <span class="product-price">1999 ₽</span>
                            <button class="btn btn-primary">Купить</button>
                        </div>
                    </div>
                </div>
                
                <!-- Карточка 2 -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x200" alt="Товар 2">
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">Товар 2</h3>
                        <p class="product-description">
                            Описание второго товара. Отличное качество и современный дизайн.
                        </p>
                        <div class="product-footer">
                            <span class="product-price">2499 ₽</span>
                            <button class="btn btn-primary">Купить</button>
                        </div>
                    </div>
                </div>
                
                <!-- Карточка 3 -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x200" alt="Товар 3">
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">Товар 3</h3>
                        <p class="product-description">
                            Описание третьего товара. Лучший выбор для вас.
                        </p>
                        <div class="product-footer">
                            <span class="product-price">3499 ₽</span>
                            <button class="btn btn-primary">Купить</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    
    <!-- Подвал -->
    <div class="footer">
        <div class="container">
            <p class="footer-text">© 2025 Магазин товаров. Все права защищены.</p>
        </div>
    </div>
    
</body>
</html>`,
      },
    },

    {
      id: "slide-39",
      title: "Решение задания: CSS",
      type: "code",
      content: "А вот CSS для этой страницы. Изучите каждую строку!",
      codeExample: {
        language: "css",
        title: "style.css",
        code: `/* ====== СБРОС ====== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}

/* ====== КОНТЕЙНЕР ====== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ====== ШАПКА ====== */
.header {
    background-color: #2c3e50;
    padding: 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: white;
    font-size: 24px;
    font-weight: bold;
}

.nav {
    display: flex;
    gap: 30px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #3498db;
}

/* ====== ОСНОВНОЙ КОНТЕНТ ====== */
.main {
    padding: 60px 0;
}

.page-title {
    text-align: center;
    font-size: 48px;
    color: #2c3e50;
    margin-bottom: 50px;
}

/* ====== СЕТКА ТОВАРОВ ====== */
.products-grid {
    display: flex;
    gap: 30px;
}

/* ====== КАРТОЧКА ТОВАРА ====== */
.product-card {
    flex: 1;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Изображение товара */
.product-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.1);
}

/* Содержимое карточки */
.product-content {
    padding: 20px;
}

.product-title {
    font-size: 24px;
    color: #2c3e50;
    margin-bottom: 12px;
}

.product-description {
    font-size: 14px;
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Подвал карточки */
.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    border-top: 1px solid #ecf0f1;
}

.product-price {
    font-size: 28px;
    color: #27ae60;
    font-weight: bold;
}

/* ====== КНОПКА ====== */
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
    transform: scale(1.05);
}

.btn-primary:active {
    transform: scale(0.98);
}

/* ====== ПОДВАЛ ====== */
.footer {
    background-color: #34495e;
    padding: 30px 0;
    margin-top: 60px;
}

.footer-text {
    text-align: center;
    color: white;
    font-size: 14px;
}

/* ====== АДАПТИВНОСТЬ ====== */
@media (max-width: 768px) {
    /* Шапка в колонку */
    .header-content {
        flex-direction: column;
        gap: 20px;
    }
    
    /* Меню в колонку */
    .nav {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    /* Заголовок меньше */
    .page-title {
        font-size: 32px;
        margin-bottom: 30px;
    }
    
    /* Товары в колонку */
    .products-grid {
        flex-direction: column;
    }
    
    /* Карточка на всю ширину */
    .product-card {
        width: 100%;
    }
    
    /* Контейнер с меньшими отступами */
    .container {
        padding: 0 15px;
    }
    
    .main {
        padding: 40px 0;
    }
}`,
      },
    },

    {
      id: "slide-40",
      title: "Разбор решения: ключевые моменты",
      type: "content",
      content:
        '**Что важно в этом решении:**\n\n**1. Структура HTML**\n• Всё разделено на логические блоки: header, main, footer\n• Каждый блок обёрнут в .container\n• Классы названы понятно: product-card, product-title\n• Используется семантичная вложенность\n\n**2. CSS подход**\n• Всё через классы, ни одного ID\n• Группировка стилей по блокам (комментарии ====)\n• box-sizing: border-box для всех элементов\n• Flexbox для расположения\n\n**3. Интерактивность**\n• transition для плавности\n• :hover эффекты для карточек и кнопок\n• transform для движения элементов\n• Всё анимируется плавно (0.3s ease)\n\n**4. Адаптивность**\n• Один медиа-запрос @media (max-width: 768px)\n• flex-direction: column для мобильных\n• Уменьшение размеров шрифтов и отступов\n• Простой и понятный подход\n\n**5. Что можно улучшить**\n• Добавить CSS переменные для цветов\n• Использовать систему 8px для отступов\n• Добавить больше состояний (loading, error)\n• Оптимизировать изображения\n\n**Главный урок:** Простой, понятный код лучше, чем "умный" и запутанный!',
    },

    {
      id: "slide-41",
      title: "Дополнительные задания для практики",
      type: "list",
      content: "Если справились с основным заданием, попробуйте эти:",
      items: [
        "Добавьте badge 'NEW' или 'SALE' в угол карточки товара",
        "Сделайте так, чтобы на карточках было разное количество звёзд рейтинга",
        "Добавьте форму подписки на новости в подвале (email + кнопка)",
        "Создайте модальное окно с детальной информацией о товаре",
        "Добавьте фильтры товаров слева (боковая панель с чекбоксами)",
        "Реализуйте слайдер с отзывами клиентов",
        "Добавьте sticky header (прилипает при прокрутке)",
        "Сделайте тёмную тему (переключатель в шапке)",
      ],
    },

    {
      id: "slide-42",
      title: "Заключение и следующие шаги",
      type: "content",
      content:
        "**Что вы теперь знаете:**\n\n✅ Когда использовать div, а когда другие теги\n✅ Разницу между ID и class (и почему class лучше)\n✅ Как правильно называть классы\n✅ Где искать информацию (MDN, CSS-Tricks, Stack Overflow)\n✅ Базовую структуру любой страницы\n✅ Как использовать Flexbox для раскладки\n✅ Как делать адаптивный дизайн\n✅ Как отлаживать код через DevTools\n✅ Готовые паттерны для типичных задач\n\n**Что делать дальше:**\n\n1. **Практика (самое важное!)**\n   • Сделайте 5-10 простых страниц\n   • Копируйте дизайны с других сайтов\n   • Экспериментируйте с кодом\n\n2. **Изучите углублённо:**\n   • CSS Grid (для сложных макетов)\n   • CSS анимации (@keyframes)\n   • Препроцессоры (Sass/SCSS)\n   • Методологии (BEM)\n\n3. **Работайте с реальными проектами:**\n   • Сделайте портфолио для себя\n   • Помогите другу с лендингом\n   • Участвуйте в учебных проектах\n\n**Помните:** Программирование — это навык. Чем больше практики, тем лучше результат. Не сдавайтесь, если что-то не получается с первого раза!\n\n**Удачи в обучении! 🚀**",
    },
  ],
};
