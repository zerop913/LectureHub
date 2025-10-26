import { Lecture } from "@/types";

export const brokenAuthenticationLecture: Lecture = {
  id: "broken-authentication-lecture",
  title: "Нарушенная аутентификация (Broken Authentication)",
  description:
    "Подробное изучение уязвимостей аутентификации: слабые пароли, управление сессиями, многофакторная аутентификация и методы защиты",
  groupId: "web-security",
  createdAt: new Date("2025-11-01"),
  updatedAt: new Date("2025-11-01"),
  tags: [
    "web-security",
    "Authentication",
    "OWASP",
    "Sessions",
    "Passwords",
    "безопасность",
  ],
  difficulty: "intermediate",
  duration: 4,

  slides: [
    {
      id: "slide-1",
      title: "Нарушенная аутентификация (Broken Authentication)",
      type: "title",
      content:
        "Угрозы аутентификации и методы защиты современных веб-приложений",
      keyPoints: [
        {
          title: "Что такое нарушенная аутентификация",
          description: "Понимание механизмов атак на системы входа",
        },
        {
          title: "Слабые пароли и политики",
          description: "Проблемы паролей и их безопасное хранение",
        },
        {
          title: "Управление сессиями",
          description: "Безопасная работа с токенами и сессиями",
        },
        {
          title: "Многофакторная аутентификация",
          description: "Реализация MFA для повышения безопасности",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое нарушенная аутентификация?",
      type: "content",
      content:
        "Нарушенная аутентификация — это класс уязвимостей, который позволяет злоумышленникам получить несанкционированный доступ к учетным записям пользователей или административным функциям. Эти уязвимости возникают, когда функции аутентификации и управления сессиями реализованы неправильно, что позволяет компрометировать пароли, ключи, токены сессий или использовать другие недостатки реализации для временного или постоянного получения личности других пользователей. Согласно OWASP Top 10 2021, нарушенная аутентификация входит в категорию A07:2021 – Identification and Authentication Failures. Последствия успешной атаки могут включать полную компрометацию учетных записей, кражу персональных данных, финансовое мошенничество, а в случае административных аккаунтов — полный контроль над приложением.",
    },

    {
      id: "slide-3",
      title: "Типы атак на аутентификацию",
      type: "list",
      content: "Основные векторы атак на системы аутентификации:",
      items: [
        "Credential Stuffing — использование украденных учетных данных из утечек других сервисов",
        "Brute Force — перебор паролей или комбинаций логин-пароль",
        "Dictionary Attack — использование словарей популярных паролей",
        "Session Hijacking — перехват и использование чужих сессий",
        "Session Fixation — навязывание жертве известного идентификатора сессии",
        "Weak Password Recovery — эксплуатация слабых механизмов восстановления пароля",
        "Insufficient Session Expiration — использование не истекших сессий после выхода",
        "Predictable Session IDs — предсказуемость идентификаторов сессий",
      ],
    },

    {
      id: "slide-4",
      title: "Статистика и последствия",
      type: "two-column",
      content: "Масштаб проблемы нарушенной аутентификации",
      leftContent: {
        title: "Статистика атак",
        items: [
          "81% утечек связаны со слабыми паролями",
          "Credential Stuffing атаки растут на 300% ежегодно",
          "Средний ущерб от взлома аккаунта: $4.24M",
          "95% пользователей переиспользуют пароли",
        ],
      },
      rightContent: {
        title: "Последствия для бизнеса",
        items: [
          "Кража персональных данных пользователей",
          "Финансовые потери и мошенничество",
          "Репутационный ущерб компании",
          "Штрафы за нарушение GDPR/ПДн",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Проблема слабых паролей",
      type: "content",
      content:
        "Слабые пароли остаются одной из главных проблем безопасности. Исследования показывают, что пользователи часто выбирают легко запоминающиеся, но небезопасные пароли: популярные слова, последовательности цифр, даты рождения. Проблема усугубляется переиспользованием паролей на разных сервисах — когда один сервис взламывают, злоумышленники получают доступ ко всем аккаунтам пользователя. Самые популярные пароли включают '123456', 'password', 'qwerty', имена и простые слова. Даже требования к сложности паролей не всегда помогают: пользователи создают предсказуемые шаблоны вроде 'Password1!'. Брутфорс простого 8-символьного пароля из букв и цифр занимает несколько часов на современном оборудовании.",
    },

    {
      id: "slide-6",
      title: "Топ-10 худших паролей 2024",
      type: "code",
      content: "Самые популярные (и самые опасные) пароли:",
      codeExample: {
        language: "text",
        title: "Most Common Passwords 2024",
        code: `1.  123456          - Взламывается мгновенно
2.  password        - Взламывается мгновенно
3.  123456789       - Взламывается мгновенно
4.  12345678        - Взламывается мгновенно
5.  qwerty          - Взламывается мгновенно
6.  abc123          - Взламывается мгновенно
7.  111111          - Взламывается мгновенно
8.  admin           - Взламывается мгновенно
9.  letmein         - Взламывается мгновенно
10. welcome         - Взламывается мгновенно

Статистика использования:
- 23% пользователей используют "123456"
- 73% паролей содержат словарные слова
- 49% людей используют один пароль для всего
- Средняя длина пароля: 8 символов

Время взлома современным GPU:
- 8 символов (только цифры):        0.024 секунды
- 8 символов (буквы lowercase):     7 минут
- 8 символов (буквы + цифры):       7 часов
- 8 символов (all characters):      7 дней
- 12 символов (all characters):     34,000 лет`,
      },
    },

    {
      id: "slide-7",
      title: "Политики паролей",
      type: "title",
      content: "Современные подходы к управлению паролями",
      keyPoints: [
        {
          title: "NIST Guidelines",
          description: "Рекомендации по созданию безопасных паролей",
        },
        {
          title: "Минимальные требования",
          description: "Длина, сложность, проверка на утечки",
        },
        {
          title: "Password Managers",
          description: "Использование менеджеров паролей",
        },
        {
          title: "Проверка компрометации",
          description: "Интеграция с Have I Been Pwned",
        },
      ],
    },

    {
      id: "slide-8",
      title: "Рекомендации NIST по паролям",
      type: "list",
      content: "Современные стандарты безопасности паролей (NIST SP 800-63B):",
      items: [
        "Минимум 8 символов для обычных пользователей, 12+ для администраторов",
        "НЕ требовать обязательную смену пароля по времени без причины",
        "НЕ требовать обязательные спецсимволы и цифры (приводит к предсказуемым паролям)",
        "Проверять пароли на наличие в списках скомпрометированных (Have I Been Pwned)",
        "Разрешать использование всех ASCII и Unicode символов, включая пробелы",
        "Показывать требования к паролю во время создания",
        "Разрешать копирование/вставку паролей (для Password Managers)",
        "Использовать показ/скрытие пароля вместо повторного ввода",
        "Ограничивать количество неудачных попыток входа (rate limiting)",
        "Использовать MFA для повышения безопасности",
      ],
    },

    {
      id: "slide-9",
      title: "Хеширование паролей",
      type: "content",
      content:
        "Пароли никогда не должны храниться в открытом виде. Вместо этого используется криптографическое хеширование — необратимое преобразование пароля в уникальную строку фиксированной длины. При проверке пароля вычисляется хеш введенного пароля и сравнивается с сохраненным. Простые хеш-функции (MD5, SHA-1) уже не подходят для паролей, так как современные GPU могут вычислять миллиарды хешей в секунду. Для паролей используются специальные медленные алгоритмы: bcrypt, scrypt, Argon2. Они включают 'соль' (salt) — случайное значение, уникальное для каждого пароля, что делает невозможным использование радужных таблиц. Также они имеют настраиваемую 'стоимость' (cost factor) — чем выше значение, тем медленнее вычисление хеша, что затрудняет брутфорс.",
    },

    {
      id: "slide-10",
      title: "Безопасное хеширование в Node.js",
      type: "code",
      content: "Использование bcrypt для хеширования паролей:",
      codeExample: {
        language: "javascript",
        title: "Password Hashing with bcrypt",
        code: `const bcrypt = require('bcrypt');

// ============ РЕГИСТРАЦИЯ ============
async function registerUser(username, password) {
  // Генерация соли и хеширование пароля
  // saltRounds = 12 (рекомендуется 10-12, больше = медленнее)
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  // Сохранение в БД
  await db.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, hashedPassword]
  );
  
  console.log('Пароль сохранен безопасно');
  // Хеш выглядит так: 
  // $2b$12$K1wHhXXXXXXXXXXXXXXXXeO.YJ5YwYYYYYYYYYYYYYYYY
  // $2b$ - алгоритм bcrypt
  // 12 - cost factor (2^12 = 4096 раундов)
  // Остальное - соль + хеш
}

// ============ ВХОД ============
async function loginUser(username, password) {
  // Получаем хеш из БД
  const [rows] = await db.query(
    'SELECT password FROM users WHERE username = ?',
    [username]
  );
  
  if (rows.length === 0) {
    return { success: false, message: 'Пользователь не найден' };
  }
  
  const hashedPassword = rows[0].password;
  
  // Сравниваем введенный пароль с хешем
  const match = await bcrypt.compare(password, hashedPassword);
  
  if (match) {
    return { success: true, message: 'Вход выполнен' };
  } else {
    return { success: false, message: 'Неверный пароль' };
  }
}

// ============ ПРОВЕРКА СИЛЫ ПАРОЛЯ ============
function validatePassword(password) {
  const errors = [];
  
  // Минимальная длина
  if (password.length < 12) {
    errors.push('Пароль должен быть минимум 12 символов');
  }
  
  // Проверка на популярные пароли
  const commonPasswords = ['password', '123456', 'qwerty'];
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push('Пароль слишком распространенный');
  }
  
  // Проверка на повторяющиеся символы
  if (/(.)\\1{2,}/.test(password)) {
    errors.push('Слишком много повторяющихся символов');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// ============ ИНТЕГРАЦИЯ С HAVE I BEEN PWNED ============
const crypto = require('crypto');
const axios = require('axios');

async function checkPwnedPassword(password) {
  // SHA-1 хеш пароля
  const hash = crypto
    .createHash('sha1')
    .update(password)
    .digest('hex')
    .toUpperCase();
  
  // Отправляем только первые 5 символов хеша (k-anonymity)
  const prefix = hash.substring(0, 5);
  const suffix = hash.substring(5);
  
  const response = await axios.get(
    \`https://api.pwnedpasswords.com/range/\${prefix}\`
  );
  
  // Проверяем, есть ли наш хеш в ответе
  const hashes = response.data.split('\\n');
  const found = hashes.some(line => line.startsWith(suffix));
  
  return found;
}

// ============ ПОЛНАЯ РЕГИСТРАЦИЯ С ПРОВЕРКАМИ ============
async function secureRegister(username, password) {
  // 1. Проверка силы пароля
  const validation = validatePassword(password);
  if (!validation.valid) {
    return { success: false, errors: validation.errors };
  }
  
  // 2. Проверка на компрометацию
  const isPwned = await checkPwnedPassword(password);
  if (isPwned) {
    return { 
      success: false, 
      errors: ['Этот пароль найден в утечках данных. Выберите другой.']
    };
  }
  
  // 3. Хеширование и сохранение
  const hashedPassword = await bcrypt.hash(password, 12);
  await db.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, hashedPassword]
  );
  
  return { success: true };
}`,
      },
    },

    {
      id: "slide-11",
      title: "Безопасное хеширование в PHP",
      type: "code",
      content: "Использование password_hash для защиты паролей:",
      codeExample: {
        language: "php",
        title: "Password Hashing in PHP",
        code: `<?php
// ============ РЕГИСТРАЦИЯ ============
function registerUser($username, $password) {
    global $pdo;
    
    // password_hash автоматически генерирует соль
    // PASSWORD_BCRYPT - алгоритм bcrypt
    // cost = 12 (чем выше, тем медленнее и безопаснее)
    $options = ['cost' => 12];
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT, $options);
    
    // Сохранение в БД
    $stmt = $pdo->prepare('
        INSERT INTO users (username, password) 
        VALUES (:username, :password)
    ');
    
    $stmt->execute([
        ':username' => $username,
        ':password' => $hashedPassword
    ]);
    
    return true;
}

// ============ ВХОД ============
function loginUser($username, $password) {
    global $pdo;
    
    // Получаем хеш из БД
    $stmt = $pdo->prepare('
        SELECT id, password FROM users 
        WHERE username = :username
    ');
    
    $stmt->execute([':username' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$user) {
        return ['success' => false, 'message' => 'Пользователь не найден'];
    }
    
    // Проверяем пароль
    if (password_verify($password, $user['password'])) {
        // Проверяем, нужно ли обновить хеш (изменился алгоритм/cost)
        if (password_needs_rehash($user['password'], PASSWORD_BCRYPT, ['cost' => 12])) {
            $newHash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
            
            $updateStmt = $pdo->prepare('
                UPDATE users SET password = :password WHERE id = :id
            ');
            
            $updateStmt->execute([
                ':password' => $newHash,
                ':id' => $user['id']
            ]);
        }
        
        return ['success' => true, 'userId' => $user['id']];
    } else {
        return ['success' => false, 'message' => 'Неверный пароль'];
    }
}

// ============ ПРОВЕРКА СИЛЫ ПАРОЛЯ ============
function validatePassword($password) {
    $errors = [];
    
    // Минимальная длина
    if (strlen($password) < 12) {
        $errors[] = 'Пароль должен быть минимум 12 символов';
    }
    
    // Проверка на популярные пароли
    $commonPasswords = ['password', '123456', 'qwerty', 'admin'];
    if (in_array(strtolower($password), $commonPasswords)) {
        $errors[] = 'Пароль слишком распространенный';
    }
    
    // Проверка на повторяющиеся символы
    if (preg_match('/(.)\\\\1{2,}/', $password)) {
        $errors[] = 'Слишком много повторяющихся символов';
    }
    
    // Проверка на последовательности
    if (preg_match('/012|123|234|345|456|567|678|789|890/', $password)) {
        $errors[] = 'Избегайте простых последовательностей';
    }
    
    return [
        'valid' => empty($errors),
        'errors' => $errors
    ];
}

// ============ ПРОВЕРКА НА PWNED PASSWORDS ============
function checkPwnedPassword($password) {
    // SHA-1 хеш пароля
    $hash = strtoupper(sha1($password));
    
    // k-anonymity: отправляем только первые 5 символов
    $prefix = substr($hash, 0, 5);
    $suffix = substr($hash, 5);
    
    $url = "https://api.pwnedpasswords.com/range/$prefix";
    $response = file_get_contents($url);
    
    if ($response === false) {
        // Не смогли проверить - лучше пропустить, чем заблокировать
        return false;
    }
    
    // Ищем наш суффикс в ответе
    $hashes = explode("\n", $response);
    foreach ($hashes as $line) {
        if (strpos($line, $suffix) === 0) {
            return true; // Найден в утечках
        }
    }
    
    return false; // Безопасен
}

// ============ ПОЛНАЯ БЕЗОПАСНАЯ РЕГИСТРАЦИЯ ============
function secureRegister($username, $password) {
    // 1. Проверка силы пароля
    $validation = validatePassword($password);
    if (!$validation['valid']) {
        return [
            'success' => false,
            'errors' => $validation['errors']
        ];
    }
    
    // 2. Проверка на компрометацию
    if (checkPwnedPassword($password)) {
        return [
            'success' => false,
            'errors' => ['Этот пароль найден в утечках. Выберите другой.']
        ];
    }
    
    // 3. Регистрация
    registerUser($username, $password);
    
    return ['success' => true];
}

// ============ ИСПОЛЬЗОВАНИЕ ARGON2 (PHP 7.2+) ============
function modernPasswordHash($password) {
    // Argon2 - победитель Password Hashing Competition 2015
    // Более безопасен, чем bcrypt
    $options = [
        'memory_cost' => 65536, // 64 MB
        'time_cost' => 4,       // 4 итерации
        'threads' => 2          // 2 потока
    ];
    
    return password_hash($password, PASSWORD_ARGON2ID, $options);
}
?>`,
      },
    },

    {
      id: "slide-12",
      title: "Управление сессиями",
      type: "content",
      content:
        "После успешной аутентификации пользователю выдается сессия — временный идентификатор, который позволяет не вводить пароль при каждом запросе. Неправильное управление сессиями создает множество уязвимостей. Session ID должен быть случайным, непредсказуемым и достаточно длинным (минимум 128 бит энтропии). Сессии должны иметь разумное время жизни и истекать после периода неактивности. При выходе пользователя сессия должна быть полностью уничтожена на сервере. Особенно критично управление сессиями для административных аккаунтов — их сессии должны быть короче и требовать повторной аутентификации для критичных операций. Сессии должны быть привязаны к IP-адресу и User-Agent для защиты от угона.",
    },

    {
      id: "slide-13",
      title: "Безопасные сессии в Express.js",
      type: "code",
      content: "Настройка безопасных сессий с express-session:",
      codeExample: {
        language: "javascript",
        title: "Secure Session Management in Express",
        code: `const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const redis = require('redis');
const crypto = require('crypto');

const app = express();

// Создаем Redis клиент для хранения сессий
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});

// БЕЗОПАСНАЯ КОНФИГУРАЦИЯ СЕССИЙ
app.use(session({
  store: new RedisStore({ client: redisClient }),
  
  // Секретный ключ для подписи cookie (должен быть в .env)
  secret: process.env.SESSION_SECRET, // Минимум 32 случайных символа
  
  // Имя cookie (не используйте дефолтное 'connect.sid')
  name: 'sessionId',
  
  // Настройки cookie
  cookie: {
    secure: true,        // Только HTTPS
    httpOnly: true,      // Недоступен для JavaScript
    sameSite: 'strict',  // Защита от CSRF
    maxAge: 1000 * 60 * 60 * 2, // 2 часа
    domain: 'example.com' // Только ваш домен
  },
  
  // Не пересоздавать неизмененную сессию
  resave: false,
  
  // Не сохранять пустые сессии
  saveUninitialized: false,
  
  // Регенерация ID сессии
  rolling: true, // Обновлять maxAge при каждом запросе
}));

// ============ MIDDLEWARE ДЛЯ ПРОВЕРКИ СЕССИИ ============
function validateSession(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  
  // Проверка привязки к IP (опционально, может ломаться за прокси)
  if (req.session.ip && req.session.ip !== req.ip) {
    req.session.destroy();
    return res.status(401).json({ error: 'Подозрительная активность' });
  }
  
  // Проверка User-Agent
  if (req.session.userAgent && req.session.userAgent !== req.headers['user-agent']) {
    req.session.destroy();
    return res.status(401).json({ error: 'Подозрительная активность' });
  }
  
  // Обновление времени последней активности
  req.session.lastActivity = Date.now();
  
  next();
}

// ============ ВХОД ============
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Проверка учетных данных (используйте bcrypt.compare)
  const user = await authenticateUser(username, password);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверные учетные данные' });
  }
  
  // Регенерация ID сессии после входа (защита от Session Fixation)
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка создания сессии' });
    }
    
    // Сохранение данных пользователя в сессии
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.role = user.role;
    req.session.ip = req.ip;
    req.session.userAgent = req.headers['user-agent'];
    req.session.createdAt = Date.now();
    req.session.lastActivity = Date.now();
    
    res.json({ 
      success: true, 
      user: { 
        id: user.id, 
        username: user.username,
        role: user.role
      } 
    });
  });
});

// ============ ВЫХОД ============
app.post('/logout', (req, res) => {
  // Полное уничтожение сессии
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка выхода' });
    }
    
    // Очистка cookie
    res.clearCookie('sessionId');
    res.json({ success: true });
  });
});

// ============ ЗАЩИЩЕННЫЙ МАРШРУТ ============
app.get('/profile', validateSession, async (req, res) => {
  const user = await getUserById(req.session.userId);
  res.json({ user });
});

// ============ АДМИНИСТРАТИВНЫЕ ДЕЙСТВИЯ ============
// Требуют повторной аутентификации
app.post('/admin/delete-user', validateSession, async (req, res) => {
  // Проверка роли
  if (req.session.role !== 'admin') {
    return res.status(403).json({ error: 'Недостаточно прав' });
  }
  
  // Требуем повторного ввода пароля для критичных действий
  const { password, targetUserId } = req.body;
  
  const user = await getUserById(req.session.userId);
  const passwordValid = await bcrypt.compare(password, user.password);
  
  if (!passwordValid) {
    return res.status(401).json({ error: 'Неверный пароль' });
  }
  
  // Выполняем действие
  await deleteUser(targetUserId);
  
  res.json({ success: true });
});

// ============ АВТОМАТИЧЕСКИЙ ВЫХОД ПО НЕАКТИВНОСТИ ============
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 минут

app.use((req, res, next) => {
  if (req.session.userId && req.session.lastActivity) {
    const inactive = Date.now() - req.session.lastActivity;
    
    if (inactive > SESSION_TIMEOUT) {
      req.session.destroy();
      return res.status(401).json({ 
        error: 'Сессия истекла из-за неактивности' 
      });
    }
  }
  
  next();
});

// ============ СПИСОК АКТИВНЫХ СЕССИЙ ============
app.get('/account/sessions', validateSession, async (req, res) => {
  const userId = req.session.userId;
  
  // Получаем все сессии пользователя из Redis
  const sessions = await getAllUserSessions(userId);
  
  res.json({
    current: req.sessionID,
    sessions: sessions.map(s => ({
      id: s.id,
      createdAt: s.createdAt,
      lastActivity: s.lastActivity,
      ip: s.ip,
      userAgent: s.userAgent,
      isCurrent: s.id === req.sessionID
    }))
  });
});

// ============ ОТЗЫВ КОНКРЕТНОЙ СЕССИИ ============
app.delete('/account/sessions/:sessionId', validateSession, async (req, res) => {
  const { sessionId } = req.params;
  
  // Проверяем, что сессия принадлежит текущему пользователю
  const session = await getSessionById(sessionId);
  
  if (!session || session.userId !== req.session.userId) {
    return res.status(404).json({ error: 'Сессия не найдена' });
  }
  
  // Удаляем сессию из Redis
  await redisClient.del(\`sess:\${sessionId}\`);
  
  res.json({ success: true });
});

// ============ ОТЗЫВ ВСЕХ СЕССИЙ (КРОМЕ ТЕКУЩЕЙ) ============
app.post('/account/logout-all', validateSession, async (req, res) => {
  const userId = req.session.userId;
  const currentSessionId = req.sessionID;
  
  // Получаем все сессии пользователя
  const sessions = await getAllUserSessions(userId);
  
  // Удаляем все, кроме текущей
  for (const session of sessions) {
    if (session.id !== currentSessionId) {
      await redisClient.del(\`sess:\${session.id}\`);
    }
  }
  
  res.json({ success: true });
});

// ============ ГЕНЕРАЦИЯ БЕЗОПАСНОГО SESSION SECRET ============
// Используйте это только один раз для генерации, затем сохраните в .env
function generateSessionSecret() {
  return crypto.randomBytes(64).toString('hex');
}

// Пример: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`,
      },
    },

    {
      id: "slide-14",
      title: "Атаки на сессии: Session Hijacking",
      type: "content",
      content:
        "Session Hijacking (угон сессии) — это атака, при которой злоумышленник получает действительный идентификатор сессии жертвы и использует его для получения несанкционированного доступа. Это может произойти через перехват трафика (если не используется HTTPS), XSS-атаки (если cookie доступен для JavaScript), физический доступ к устройству, или через malware. После получения Session ID атакующий может выдавать себя за легитимного пользователя. Особенно опасно, если сессия принадлежит администратору — злоумышленник получает полный контроль над приложением. Защита включает: использование HTTPS, флаг httpOnly для cookies, привязку сессии к IP и User-Agent, регулярную ротацию Session ID, короткое время жизни сессий.",
    },

    {
      id: "slide-15",
      title: "Session Fixation Attack",
      type: "code",
      content: "Атака фиксации сессии и защита от неё:",
      codeExample: {
        language: "javascript",
        title: "Session Fixation Attack & Prevention",
        code: `// ============ КАК РАБОТАЕТ SESSION FIXATION ============

/*
Шаг 1: Злоумышленник получает валидный Session ID
GET /login
Сервер отвечает: Set-Cookie: sessionId=abc123...

Шаг 2: Злоумышленник отправляет жертве ссылку с этим ID
https://example.com/login?sessionId=abc123
или через XSS: document.cookie = "sessionId=abc123"

Шаг 3: Жертва переходит по ссылке и входит в систему
Сервер НЕ меняет Session ID, просто привязывает его к user

Шаг 4: Злоумышленник использует известный ему Session ID
Cookie: sessionId=abc123
Результат: Злоумышленник авторизован как жертва!
*/

// ============ УЯЗВИМЫЙ КОД ============
app.post('/login-vulnerable', async (req, res) => {
  const { username, password } = req.body;
  const user = await authenticateUser(username, password);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверные данные' });
  }
  
  // ОПАСНО! Не меняем Session ID после входа
  req.session.userId = user.id;
  
  res.json({ success: true });
});

// ============ БЕЗОПАСНЫЙ КОД ============
app.post('/login-secure', async (req, res) => {
  const { username, password } = req.body;
  const user = await authenticateUser(username, password);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверные данные' });
  }
  
  // ЗАЩИТА: Регенерируем Session ID после входа
  const oldSessionId = req.sessionID;
  
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка сессии' });
    }
    
    // Теперь у нас новый Session ID
    req.session.userId = user.id;
    req.session.username = user.username;
    
    console.log(\`Session ID changed: \${oldSessionId} -> \${req.sessionID}\`);
    
    res.json({ success: true });
  });
});

// ============ ДОПОЛНИТЕЛЬНАЯ ЗАЩИТА ============
// Запретить установку Session ID через URL параметры
app.use((req, res, next) => {
  // Если Session ID пришел в URL - игнорируем его
  if (req.query.sessionId || req.query.PHPSESSID) {
    delete req.query.sessionId;
    delete req.query.PHPSESSID;
  }
  
  next();
});

// ============ ПРИВЯЗКА К IP И USER-AGENT ============
app.post('/login-extra-secure', async (req, res) => {
  const { username, password } = req.body;
  const user = await authenticateUser(username, password);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверные данные' });
  }
  
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка сессии' });
    }
    
    // Сохраняем отпечаток браузера
    req.session.userId = user.id;
    req.session.fingerprint = {
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      acceptLanguage: req.headers['accept-language'],
      acceptEncoding: req.headers['accept-encoding']
    };
    
    res.json({ success: true });
  });
});

// Проверка отпечатка при каждом запросе
app.use((req, res, next) => {
  if (req.session.userId && req.session.fingerprint) {
    const currentFingerprint = {
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      acceptLanguage: req.headers['accept-language'],
      acceptEncoding: req.headers['accept-encoding']
    };
    
    // Сравниваем отпечатки
    if (JSON.stringify(req.session.fingerprint) !== 
        JSON.stringify(currentFingerprint)) {
      
      console.log('Session hijacking attempt detected!');
      req.session.destroy();
      return res.status(401).json({ 
        error: 'Подозрительная активность. Войдите снова.' 
      });
    }
  }
  
  next();
});`,
      },
    },

    {
      id: "slide-16",
      title: "JWT токены",
      type: "content",
      content:
        "JSON Web Tokens (JWT) — это популярная альтернатива серверным сессиям, особенно для API и микросервисов. JWT представляет собой самодостаточный токен, который содержит закодированные данные пользователя и подпись для проверки подлинности. Токен состоит из трех частей: header (алгоритм и тип), payload (данные пользователя), signature (подпись). Основное преимущество — stateless архитектура: серверу не нужно хранить сессии. Однако JWT имеет свои проблемы безопасности: токены нельзя отозвать до истечения срока действия, они могут быть украдены через XSS если хранятся в localStorage, алгоритм 'none' может быть использован для обхода проверки подписи. Важно использовать сильные алгоритмы (RS256, ES256), короткий срок жизни токенов и refresh tokens для обновления.",
    },

    {
      id: "slide-17",
      title: "Безопасная работа с JWT",
      type: "code",
      content: "Реализация JWT аутентификации с refresh tokens:",
      codeExample: {
        language: "javascript",
        title: "Secure JWT Implementation",
        code: `const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Секретные ключи (должны быть в .env)
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET; // 256+ бит
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// Время жизни токенов
const ACCESS_TOKEN_EXPIRY = '15m';   // 15 минут
const REFRESH_TOKEN_EXPIRY = '7d';   // 7 дней

// ============ ГЕНЕРАЦИЯ ТОКЕНОВ ============
function generateAccessToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
    role: user.role,
    // НЕ включайте пароли, номера карт и другие чувствительные данные!
  };
  
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
    algorithm: 'HS256',
    issuer: 'your-app-name',
    audience: 'your-app-users'
  });
}

function generateRefreshToken(user) {
  // Refresh token содержит минимум данных
  const payload = {
    userId: user.id,
    tokenId: crypto.randomBytes(16).toString('hex') // Уникальный ID токена
  };
  
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
    algorithm: 'HS256'
  });
}

// ============ ВХОД С ВЫДАЧЕЙ ТОКЕНОВ ============
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Аутентификация
  const user = await authenticateUser(username, password);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверные учетные данные' });
  }
  
  // Генерируем токены
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  
  // Сохраняем refresh token в БД для возможности отзыва
  await db.query(
    'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)',
    [user.id, refreshToken, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
  );
  
  // Отправляем refresh token в httpOnly cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 дней
  });
  
  // Access token отправляем в ответе (клиент хранит в памяти, не в localStorage!)
  res.json({
    accessToken,
    user: {
      id: user.id,
      username: user.username,
      role: user.role
    }
  });
});

// ============ MIDDLEWARE ДЛЯ ПРОВЕРКИ ACCESS TOKEN ============
function authenticateToken(req, res, next) {
  // Получаем токен из заголовка Authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }
  
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Токен истек' });
      }
      return res.status(403).json({ error: 'Невалидный токен' });
    }
    
    // Сохраняем данные пользователя в req
    req.user = payload;
    next();
  });
}

// ============ ОБНОВЛЕНИЕ ACCESS TOKEN ============
app.post('/refresh', async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  
  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token не предоставлен' });
  }
  
  // Проверяем, существует ли токен в БД (не отозван ли)
  const [rows] = await db.query(
    'SELECT * FROM refresh_tokens WHERE token = ? AND expires_at > NOW()',
    [refreshToken]
  );
  
  if (rows.length === 0) {
    return res.status(403).json({ error: 'Невалидный refresh token' });
  }
  
  // Верифицируем токен
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (err, payload) => {
    if (err) {
      // Если токен скомпрометирован - удаляем все токены пользователя
      await db.query('DELETE FROM refresh_tokens WHERE user_id = ?', [rows[0].user_id]);
      return res.status(403).json({ error: 'Невалидный токен' });
    }
    
    // Получаем пользователя
    const user = await getUserById(payload.userId);
    
    if (!user) {
      return res.status(403).json({ error: 'Пользователь не найден' });
    }
    
    // Генерируем новый access token
    const newAccessToken = generateAccessToken(user);
    
    res.json({ accessToken: newAccessToken });
  });
});

// ============ ВЫХОД (ОТЗЫВ REFRESH TOKEN) ============
app.post('/logout', authenticateToken, async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  
  if (refreshToken) {
    // Удаляем refresh token из БД
    await db.query('DELETE FROM refresh_tokens WHERE token = ?', [refreshToken]);
  }
  
  // Очищаем cookie
  res.clearCookie('refreshToken');
  
  res.json({ success: true });
});

// ============ ОТЗЫВ ВСЕХ ТОКЕНОВ ПОЛЬЗОВАТЕЛЯ ============
app.post('/logout-all', authenticateToken, async (req, res) => {
  // Удаляем все refresh токены пользователя
  await db.query('DELETE FROM refresh_tokens WHERE user_id = ?', [req.user.userId]);
  
  res.clearCookie('refreshToken');
  res.json({ success: true });
});

// ============ ЗАЩИЩЕННЫЙ МАРШРУТ ============
app.get('/profile', authenticateToken, async (req, res) => {
  const user = await getUserById(req.user.userId);
  res.json({ user });
});

// ============ ПРОВЕРКА РОЛИ ============
function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ error: 'Недостаточно прав' });
    }
    next();
  };
}

app.delete('/admin/users/:id', authenticateToken, requireRole('admin'), async (req, res) => {
  await deleteUser(req.params.id);
  res.json({ success: true });
});

// ============ ОЧИСТКА ИСТЕКШИХ ТОКЕНОВ (CRON JOB) ============
async function cleanupExpiredTokens() {
  await db.query('DELETE FROM refresh_tokens WHERE expires_at < NOW()');
}

// Запускать каждый день
setInterval(cleanupExpiredTokens, 24 * 60 * 60 * 1000);

// ============ ГЕНЕРАЦИЯ БЕЗОПАСНЫХ СЕКРЕТОВ ============
// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`,
      },
    },

    {
      id: "slide-18",
      title: "JWT: Распространенные ошибки",
      type: "list",
      content: "Типичные проблемы безопасности при работе с JWT:",
      items: [
        "Хранение токенов в localStorage — уязвимо к XSS атакам. Используйте память приложения или httpOnly cookies",
        "Использование алгоритма 'none' — позволяет создавать неподписанные токены. Всегда проверяйте алгоритм",
        "Слишком долгий срок жизни access tokens — компрометированный токен действует до истечения срока",
        "Отсутствие механизма отзыва — JWT нельзя отозвать. Обязательно используйте refresh tokens с хранением в БД",
        "Включение чувствительных данных в payload — JWT легко декодировать. Не храните пароли, ПДн",
        "Использование слабых секретных ключей — короткий секрет можно взломать брутфорсом",
        "Неправильная валидация 'alg' — атака алгоритм confusion (HS256 vs RS256)",
        "Отсутствие проверки audience и issuer — токен может быть использован в другом приложении",
      ],
    },

    {
      id: "slide-19",
      title: "Многофакторная аутентификация (MFA)",
      type: "content",
      content:
        "Многофакторная аутентификация (MFA/2FA) добавляет дополнительный уровень защиты после ввода пароля. Даже если злоумышленник узнал пароль, без второго фактора он не сможет войти. Существует три типа факторов аутентификации: что-то, что вы знаете (пароль), что-то, что у вас есть (телефон, токен), что-то, чем вы являетесь (биометрия). Наиболее распространенные методы MFA: TOTP (Time-based One-Time Password) — коды из приложений типа Google Authenticator, SMS-коды (менее безопасны из-за SIM-swapping), аппаратные токены (YubiKey, WebAuthn), резервные коды для восстановления доступа. MFA должна быть обязательной для администраторов и опциональной для обычных пользователей. Важно предусмотреть процедуру восстановления доступа при потере второго фактора.",
    },

    {
      id: "slide-20",
      title: "Реализация TOTP (Google Authenticator)",
      type: "code",
      content: "Двухфакторная аутентификация с использованием TOTP:",
      codeExample: {
        language: "javascript",
        title: "TOTP Two-Factor Authentication",
        code: `const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

// ============ ГЕНЕРАЦИЯ СЕКРЕТА ДЛЯ ПОЛЬЗОВАТЕЛЯ ============
app.post('/2fa/setup', authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  
  // Генерируем уникальный секрет для пользователя
  const secret = speakeasy.generateSecret({
    name: \`YourApp (\${req.user.username})\`, // Отображается в приложении
    issuer: 'YourApp',
    length: 32 // Длина секрета в байтах
  });
  
  // Сохраняем временно (пока пользователь не подтвердит)
  await db.query(
    'UPDATE users SET totp_secret_temp = ? WHERE id = ?',
    [secret.base32, userId]
  );
  
  // Генерируем QR-код для сканирования
  const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url);
  
  res.json({
    secret: secret.base32, // На случай если QR не работает
    qrCode: qrCodeUrl
  });
});

// ============ ПОДТВЕРЖДЕНИЕ НАСТРОЙКИ 2FA ============
app.post('/2fa/verify-setup', authenticateToken, async (req, res) => {
  const { token } = req.body; // 6-значный код из приложения
  const userId = req.user.userId;
  
  // Получаем временный секрет
  const [rows] = await db.query(
    'SELECT totp_secret_temp FROM users WHERE id = ?',
    [userId]
  );
  
  if (!rows[0] || !rows[0].totp_secret_temp) {
    return res.status(400).json({ error: '2FA не настроена' });
  }
  
  const secret = rows[0].totp_secret_temp;
  
  // Проверяем код
  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
    window: 2 // Допускаем ±1 временной интервал (30 сек)
  });
  
  if (!verified) {
    return res.status(400).json({ error: 'Неверный код' });
  }
  
  // Генерируем резервные коды (на случай потери телефона)
  const backupCodes = [];
  for (let i = 0; i < 10; i++) {
    const code = crypto.randomBytes(4).toString('hex').toUpperCase();
    backupCodes.push(code);
  }
  
  // Хешируем резервные коды перед сохранением
  const hashedBackupCodes = await Promise.all(
    backupCodes.map(code => bcrypt.hash(code, 10))
  );
  
  // Активируем 2FA
  await db.query(\`
    UPDATE users 
    SET totp_secret = ?, 
        totp_secret_temp = NULL, 
        totp_enabled = TRUE,
        backup_codes = ?
    WHERE id = ?
  \`, [secret, JSON.stringify(hashedBackupCodes), userId]);
  
  res.json({
    success: true,
    backupCodes: backupCodes // Показываем пользователю ОДИН РАЗ
  });
});

// ============ ВХОД С 2FA ============
app.post('/login-2fa', async (req, res) => {
  const { username, password, totpToken } = req.body;
  
  // Шаг 1: Проверка пароля
  const user = await authenticateUser(username, password);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверные учетные данные' });
  }
  
  // Шаг 2: Проверяем, включена ли 2FA
  if (user.totp_enabled) {
    if (!totpToken) {
      return res.status(200).json({ 
        requires2fa: true,
        message: 'Введите код из приложения'
      });
    }
    
    // Проверяем TOTP код
    const verified = speakeasy.totp.verify({
      secret: user.totp_secret,
      encoding: 'base32',
      token: totpToken,
      window: 2
    });
    
    if (!verified) {
      // Возможно это резервный код?
      const backupCodeValid = await verifyBackupCode(user.id, totpToken);
      
      if (!backupCodeValid) {
        return res.status(401).json({ error: 'Неверный код 2FA' });
      }
    }
  }
  
  // Шаг 3: Создаем сессию
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка создания сессии' });
    }
    
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.role = user.role;
    
    res.json({ 
      success: true,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  });
});

// ============ ПРОВЕРКА РЕЗЕРВНОГО КОДА ============
async function verifyBackupCode(userId, code) {
  const [rows] = await db.query(
    'SELECT backup_codes FROM users WHERE id = ?',
    [userId]
  );
  
  if (!rows[0] || !rows[0].backup_codes) {
    return false;
  }
  
  const backupCodes = JSON.parse(rows[0].backup_codes);
  
  // Проверяем каждый хеш
  for (let i = 0; i < backupCodes.length; i++) {
    const match = await bcrypt.compare(code, backupCodes[i]);
    
    if (match) {
      // Удаляем использованный код
      backupCodes.splice(i, 1);
      
      await db.query(
        'UPDATE users SET backup_codes = ? WHERE id = ?',
        [JSON.stringify(backupCodes), userId]
      );
      
      return true;
    }
  }
  
  return false;
}

// ============ ОТКЛЮЧЕНИЕ 2FA ============
app.post('/2fa/disable', authenticateToken, async (req, res) => {
  const { password, totpToken } = req.body;
  const userId = req.user.userId;
  
  // Требуем пароль И код 2FA для отключения
  const user = await getUserById(userId);
  const passwordValid = await bcrypt.compare(password, user.password);
  
  if (!passwordValid) {
    return res.status(401).json({ error: 'Неверный пароль' });
  }
  
  const totpValid = speakeasy.totp.verify({
    secret: user.totp_secret,
    encoding: 'base32',
    token: totpToken,
    window: 2
  });
  
  if (!totpValid) {
    return res.status(401).json({ error: 'Неверный код 2FA' });
  }
  
  // Отключаем 2FA
  await db.query(\`
    UPDATE users 
    SET totp_enabled = FALSE, 
        totp_secret = NULL, 
        backup_codes = NULL 
    WHERE id = ?
  \`, [userId]);
  
  res.json({ success: true });
});

// ============ ГЕНЕРАЦИЯ НОВЫХ РЕЗЕРВНЫХ КОДОВ ============
app.post('/2fa/regenerate-backup-codes', authenticateToken, async (req, res) => {
  const { totpToken } = req.body;
  const userId = req.user.userId;
  
  // Проверяем 2FA код
  const user = await getUserById(userId);
  
  const verified = speakeasy.totp.verify({
    secret: user.totp_secret,
    encoding: 'base32',
    token: totpToken,
    window: 2
  });
  
  if (!verified) {
    return res.status(401).json({ error: 'Неверный код 2FA' });
  }
  
  // Генерируем новые коды
  const backupCodes = [];
  for (let i = 0; i < 10; i++) {
    const code = crypto.randomBytes(4).toString('hex').toUpperCase();
    backupCodes.push(code);
  }
  
  const hashedBackupCodes = await Promise.all(
    backupCodes.map(code => bcrypt.hash(code, 10))
  );
  
  await db.query(
    'UPDATE users SET backup_codes = ? WHERE id = ?',
    [JSON.stringify(hashedBackupCodes), userId]
  );
  
  res.json({
    success: true,
    backupCodes: backupCodes
  });
});`,
      },
    },

    {
      id: "slide-21",
      title: "Rate Limiting и защита от брутфорса",
      type: "content",
      content:
        "Rate Limiting (ограничение частоты запросов) — критически важная защита от брутфорс атак на пароли. Без ограничений злоумышленник может делать тысячи попыток входа в секунду. Существует несколько стратегий: ограничение по IP-адресу (проблема с общими IP за NAT), ограничение по имени пользователя (защищает конкретные аккаунты), прогрессивные задержки (каждая неудачная попытка увеличивает задержку), временная блокировка после N неудачных попыток, CAPTCHA после нескольких неудачных попыток. Важно логировать  все неудачные попытки входа для анализа атак. Rate limiting должен применяться не только к login endpoint, но и к password reset, registration, API endpoints. Рекомендуется использовать распределенное хранилище (Redis) для rate limiting в кластерных системах.",
    },

    {
      id: "slide-22",
      title: "Реализация Rate Limiting",
      type: "code",
      content: "Защита от брутфорса с помощью rate limiting:",
      codeExample: {
        language: "javascript",
        title: "Rate Limiting Implementation",
        code: `const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const redis = require('redis');

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});

// ============ БАЗОВЫЙ RATE LIMITER ДЛЯ ВСЕГО API ============
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // Максимум 100 запросов
  message: 'Слишком много запросов с этого IP, попробуйте позже',
  standardHeaders: true, // Возвращает info в headers \`RateLimit-*\`
  legacyHeaders: false,
});

app.use(generalLimiter);

// ============ СТРОГИЙ LIMITER ДЛЯ LOGIN ============
const loginLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'rl:login:' // Префикс для ключей в Redis
  }),
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 5, // Максимум 5 попыток
  skipSuccessfulRequests: true, // Не считать успешные попытки
  handler: (req, res) => {
    res.status(429).json({
      error: 'Слишком много неудачных попыток входа. Попробуйте через 15 минут.'
    });
  }
});

app.post('/login', loginLimiter, async (req, res) => {
  // ... логика входа
});

// ============ КОМБИНИРОВАННЫЙ RATE LIMITING ============
// По IP + по username
async function advancedRateLimiting(req, res, next) {
  const { username } = req.body;
  const ip = req.ip;
  
  const ipKey = \`ratelimit:ip:\${ip}\`;
  const userKey = \`ratelimit:user:\${username}\`;
  
  // Проверяем ограничения по IP
  const ipAttempts = await redisClient.get(ipKey);
  if (ipAttempts && parseInt(ipAttempts) > 10) {
    return res.status(429).json({
      error: 'Слишком много попыток с вашего IP. Попробуйте через 30 минут.'
    });
  }
  
  // Проверяем ограничения по username
  const userAttempts = await redisClient.get(userKey);
  if (userAttempts && parseInt(userAttempts) > 5) {
    return res.status(429).json({
      error: 'Этот аккаунт временно заблокирован из-за множества неудачных попыток входа.'
    });
  }
  
  next();
}

app.post('/login-protected', advancedRateLimiting, async (req, res) => {
  const { username, password } = req.body;
  const ip = req.ip;
  
  const user = await authenticateUser(username, password);
  
  if (!user) {
    // Увеличиваем счетчики при неудачной попытке
    const ipKey = \`ratelimit:ip:\${ip}\`;
    const userKey = \`ratelimit:user:\${username}\`;
    
    await redisClient.incr(ipKey);
    await redisClient.expire(ipKey, 30 * 60); // 30 минут
    
    await redisClient.incr(userKey);
    await redisClient.expire(userKey, 30 * 60);
    
    // Логируем попытку
    await logFailedLogin(username, ip);
    
    return res.status(401).json({ error: 'Неверные учетные данные' });
  }
  
  // Успешный вход - очищаем счетчики
  const ipKey = \`ratelimit:ip:\${ip}\`;
  const userKey = \`ratelimit:user:\${username}\`;
  await redisClient.del(ipKey);
  await redisClient.del(userKey);
  
  // Создаем сессию
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка создания сессии' });
    }
    
    req.session.userId = user.id;
    res.json({ success: true, user });
  });
});

// ============ ПРОГРЕССИВНАЯ ЗАДЕРЖКА ============
async function progressiveDelay(req, res, next) {
  const { username } = req.body;
  const userKey = \`delay:user:\${username}\`;
  
  const attempts = await redisClient.get(userKey);
  const attemptCount = attempts ? parseInt(attempts) : 0;
  
  // Задержка растет экспоненциально: 0s, 1s, 2s, 4s, 8s...
  const delay = Math.min(Math.pow(2, attemptCount) * 1000, 30000); // Максимум 30 сек
  
  if (delay > 0) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  next();
}

app.post('/login-with-delay', progressiveDelay, async (req, res) => {
  const { username, password } = req.body;
  const userKey = \`delay:user:\${username}\`;
  
  const user = await authenticateUser(username, password);
  
  if (!user) {
    // Увеличиваем счетчик неудачных попыток
    await redisClient.incr(userKey);
    await redisClient.expire(userKey, 60 * 60); // 1 час
    
    return res.status(401).json({ error: 'Неверные учетные данные' });
  }
  
  // Успешный вход - сбрасываем счетчик
  await redisClient.del(userKey);
  
  // ... создание сессии
});

// ============ CAPTCHA ПОСЛЕ НЕУДАЧНЫХ ПОПЫТОК ============
async function checkCaptchaRequired(req, res, next) {
  const { username } = req.body;
  const userKey = \`captcha:user:\${username}\`;
  
  const attempts = await redisClient.get(userKey);
  const attemptCount = attempts ? parseInt(attempts) : 0;
  
  // После 3 неудачных попыток требуем CAPTCHA
  if (attemptCount >= 3) {
    const { captchaToken } = req.body;
    
    if (!captchaToken) {
      return res.status(400).json({
        error: 'Требуется пройти проверку CAPTCHA',
        captchaRequired: true
      });
    }
    
    // Проверяем CAPTCHA (например, Google reCAPTCHA)
    const captchaValid = await verifyCaptcha(captchaToken);
    
    if (!captchaValid) {
      return res.status(400).json({
        error: 'Неверная CAPTCHA',
        captchaRequired: true
      });
    }
  }
  
  next();
}

async function verifyCaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: \`secret=\${secretKey}&response=\${token}\`
  });
  
  const data = await response.json();
  return data.success && data.score > 0.5; // reCAPTCHA v3
}

// ============ ЛОГИРОВАНИЕ ПОДОЗРИТЕЛЬНОЙ АКТИВНОСТИ ============
async function logFailedLogin(username, ip) {
  await db.query(\`
    INSERT INTO failed_logins (username, ip_address, attempted_at)
    VALUES (?, ?, NOW())
  \`, [username, ip]);
  
  // Проверяем паттерны атак
  const recentAttempts = await db.query(\`
    SELECT COUNT(*) as count 
    FROM failed_logins 
    WHERE ip_address = ? 
    AND attempted_at > DATE_SUB(NOW(), INTERVAL 1 HOUR)
  \`, [ip]);
  
  if (recentAttempts[0].count > 20) {
    console.warn(\`POTENTIAL ATTACK from IP: \${ip} - \${recentAttempts[0].count} attempts\`);
    
    // Можно отправить уведомление администратору
    await sendSecurityAlert({
      type: 'brute_force_attempt',
      ip: ip,
      attempts: recentAttempts[0].count
    });
  }
}

// ============ БЛОКИРОВКА ПОДОЗРИТЕЛЬНЫХ IP ============
const suspiciousIPs = new Set();

async function checkSuspiciousIP(req, res, next) {
  const ip = req.ip;
  
  if (suspiciousIPs.has(ip)) {
    return res.status(403).json({
      error: 'Ваш IP заблокирован из-за подозрительной активности'
    });
  }
  
  next();
}

// Автоматическая блокировка при превышении лимита
async function autoBlockIP(ip) {
  suspiciousIPs.add(ip);
  
  // Сохраняем в Redis с TTL
  await redisClient.setex(\`blocked:ip:\${ip}\`, 24 * 60 * 60, '1'); // 24 часа
  
  console.warn(\`IP \${ip} has been automatically blocked\`);
}

// ============ LIMITER ДЛЯ PASSWORD RESET ============
const passwordResetLimiter = rateLimit({
  store: new RedisStore({ client: redisClient }),
  windowMs: 60 * 60 * 1000, // 1 час
  max: 3, // Максимум 3 попытки сброса
  message: 'Слишком много запросов на сброс пароля. Попробуйте через час.'
});

app.post('/password-reset', passwordResetLimiter, async (req, res) => {
  // ... логика сброса пароля
});

// ============ LIMITER ДЛЯ РЕГИСТРАЦИИ ============
const registrationLimiter = rateLimit({
  store: new RedisStore({ client: redisClient }),
  windowMs: 60 * 60 * 1000, // 1 час
  max: 5, // Максимум 5 регистраций с одного IP
  message: 'Слишком много попыток регистрации'
});

app.post('/register', registrationLimiter, async (req, res) => {
  // ... логика регистрации
});`,
      },
    },

    {
      id: "slide-23",
      title: "Восстановление пароля",
      type: "content",
      content:
        "Механизм восстановления пароля часто является слабым звеном в системе аутентификации. Распространенные ошибки: использование предсказуемых токенов восстановления, отправка нового пароля в открытом виде, секретные вопросы с легко угадываемыми ответами, отсутствие срока действия токенов, возможность перебора токенов. Безопасный процесс восстановления должен включать: генерацию криптографически стойкого случайного токена, ограниченный срок действия (15-30 минут), одноразовое использование токена, отправку ссылки на email (не пароля), rate limiting для защиты от перебора, уведомление пользователя о всех попытках восстановления. Токен должен быть достаточно длинным (минимум 32 байта) и храниться в хешированном виде.",
    },

    {
      id: "slide-24",
      title: "Безопасное восстановление пароля",
      type: "code",
      content: "Реализация безопасного механизма сброса пароля:",
      codeExample: {
        language: "javascript",
        title: "Secure Password Reset",
        code: `const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Настройка email транспорта
const mailTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// ============ ЗАПРОС НА СБРОС ПАРОЛЯ ============
app.post('/password-reset/request', async (req, res) => {
  const { email } = req.body;
  
  // Валидация email
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Невалидный email' });
  }
  
  // Проверяем существование пользователя
  const [users] = await db.query(
    'SELECT id, email, username FROM users WHERE email = ?',
    [email]
  );
  
  // ВАЖНО: Всегда возвращаем success, даже если пользователь не найден
  // Это предотвращает enumeration атаки (проверку существования email)
  if (users.length === 0) {
    return res.json({
      success: true,
      message: 'Если этот email зарегистрирован, вы получите письмо'
    });
  }
  
  const user = users[0];
  
  // Генерируем криптографически стойкий токен
  const resetToken = crypto.randomBytes(32).toString('hex');
  
  // Хешируем токен перед сохранением
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  
  // Срок действия токена - 30 минут
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);
  
  // Сохраняем в БД
  await db.query(\`
    INSERT INTO password_reset_tokens 
    (user_id, token_hash, expires_at, created_at)
    VALUES (?, ?, ?, NOW())
  \`, [user.id, hashedToken, expiresAt]);
  
  // Формируем ссылку для сброса
  const resetUrl = \`https://yourapp.com/password-reset/confirm?token=\${resetToken}\`;
  
  // Отправляем email
  await mailTransport.sendMail({
    from: 'noreply@yourapp.com',
    to: user.email,
    subject: 'Сброс пароля',
    html: \`
      <h2>Сброс пароля</h2>
      <p>Здравствуйте, \${user.username}!</p>
      <p>Вы запросили сброс пароля. Перейдите по ссылке ниже:</p>
      <a href="\${resetUrl}">Сбросить пароль</a>
      <p>Ссылка действительна в течение 30 минут.</p>
      <p>Если вы не запрашивали сброс пароля, проигнорируйте это письмо.</p>
      <p><small>IP: \${req.ip} | Время: \${new Date().toISOString()}</small></p>
    \`
  });
  
  // Логируем запрос
  await db.query(\`
    INSERT INTO security_log (user_id, action, ip_address, created_at)
    VALUES (?, 'password_reset_requested', ?, NOW())
  \`, [user.id, req.ip]);
  
  res.json({
    success: true,
    message: 'Если этот email зарегистрирован, вы получите письмо'
  });
});

// ============ ПОДТВЕРЖДЕНИЕ ТОКЕНА И СБРОС ПАРОЛЯ ============
app.post('/password-reset/confirm', async (req, res) => {
  const { token, newPassword } = req.body;
  
  if (!token || !newPassword) {
    return res.status(400).json({ error: 'Токен и новый пароль обязательны' });
  }
  
  // Валидация нового пароля
  const passwordValidation = validatePassword(newPassword);
  if (!passwordValidation.valid) {
    return res.status(400).json({ errors: passwordValidation.errors });
  }
  
  // Проверка на pwned password
  const isPwned = await checkPwnedPassword(newPassword);
  if (isPwned) {
    return res.status(400).json({
      error: 'Этот пароль найден в утечках данных'
    });
  }
  
  // Хешируем полученный токен
  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  
  // Проверяем токен в БД
  const [tokens] = await db.query(\`
    SELECT t.id, t.user_id, t.expires_at, u.email
    FROM password_reset_tokens t
    JOIN users u ON u.id = t.user_id
    WHERE t.token_hash = ? 
    AND t.used = FALSE
    AND t.expires_at > NOW()
  \`, [hashedToken]);
  
  if (tokens.length === 0) {
    return res.status(400).json({
      error: 'Невалидный или истекший токен'
    });
  }
  
  const resetRequest = tokens[0];
  
  // Хешируем новый пароль
  const hashedPassword = await bcrypt.hash(newPassword, 12);
  
  // Обновляем пароль
  await db.query(
    'UPDATE users SET password = ? WHERE id = ?',
    [hashedPassword, resetRequest.user_id]
  );
  
  // Помечаем токен как использованный
  await db.query(
    'UPDATE password_reset_tokens SET used = TRUE WHERE id = ?',
    [resetRequest.id]
  );
  
  // Удаляем все активные сессии пользователя (для безопасности)
  await db.query(
    'DELETE FROM refresh_tokens WHERE user_id = ?',
    [resetRequest.user_id]
  );
  
  // Отправляем уведомление об успешном сбросе
  await mailTransport.sendMail({
    from: 'noreply@yourapp.com',
    to: resetRequest.email,
    subject: 'Пароль успешно изменен',
    html: \`
      <h2>Пароль изменен</h2>
      <p>Ваш пароль был успешно изменен.</p>
      <p>Если это были не вы, немедленно свяжитесь с поддержкой.</p>
      <p><small>IP: \${req.ip} | Время: \${new Date().toISOString()}</small></p>
    \`
  });
  
  // Логируем изменение
  await db.query(\`
    INSERT INTO security_log (user_id, action, ip_address, created_at)
    VALUES (?, 'password_changed', ?, NOW())
  \`, [resetRequest.user_id, req.ip]);
  
  res.json({
    success: true,
    message: 'Пароль успешно изменен'
  });
});

// ============ ОЧИСТКА ИСТЕКШИХ ТОКЕНОВ (CRON JOB) ============
async function cleanupExpiredResetTokens() {
  await db.query(\`
    DELETE FROM password_reset_tokens 
    WHERE expires_at < NOW() OR used = TRUE
  \`);
}

// Запускать каждый час
setInterval(cleanupExpiredResetTokens, 60 * 60 * 1000);

// ============ ПРОВЕРКА ВАЛИДНОСТИ ТОКЕНА (ДЛЯ UI) ============
app.get('/password-reset/validate', async (req, res) => {
  const { token } = req.query;
  
  if (!token) {
    return res.status(400).json({ valid: false });
  }
  
  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  
  const [tokens] = await db.query(\`
    SELECT id FROM password_reset_tokens 
    WHERE token_hash = ? 
    AND used = FALSE 
    AND expires_at > NOW()
  \`, [hashedToken]);
  
  res.json({ valid: tokens.length > 0 });
});

// ============ ОТМЕНА ВСЕХ ТОКЕНОВ ПОЛЬЗОВАТЕЛЯ ============
app.post('/password-reset/cancel-all', authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  
  // Помечаем все активные токены как использованные
  await db.query(\`
    UPDATE password_reset_tokens 
    SET used = TRUE 
    WHERE user_id = ? AND used = FALSE
  \`, [userId]);
  
  res.json({ success: true });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}`,
      },
    },

    {
      id: "slide-25",
      title: "Best Practices: Чек-лист безопасности",
      type: "list",
      content: "Контрольный список для безопасной аутентификации:",
      items: [
        "✓ Используйте bcrypt/Argon2 для хеширования паролей с cost factor 12+",
        "✓ Требуйте минимум 12 символов для паролей, проверяйте на pwned passwords",
        "✓ Регенерируйте Session ID после входа (защита от Session Fixation)",
        "✓ Используйте httpOnly, secure, sameSite флаги для cookies",
        "✓ Реализуйте rate limiting на login, password reset, registration",
        "✓ Храните сессии/refresh tokens в Redis с автоматическим истечением",
        "✓ Для JWT: короткий срок жизни access tokens (15 мин), refresh tokens в httpOnly cookies",
        "✓ Реализуйте MFA для администраторов, опционально для пользователей",
        "✓ Логируйте все события безопасности (неудачные входы, смены паролей)",
        "✓ Используйте HTTPS для всех страниц (не только для login)",
        "✓ Отправляйте уведомления о подозрительной активности",
        "✓ Реализуйте автоматический logout при неактивности",
      ],
    },

    {
      id: "slide-26",
      title: "Распространенные ошибки",
      type: "two-column",
      content: "Что НЕ нужно делать при реализации аутентификации:",
      leftContent: {
        title: "Критические ошибки",
        items: [
          "Хранение паролей в открытом виде или MD5/SHA-1",
          "Использование предсказуемых Session ID",
          "Отсутствие rate limiting на login",
          "Хранение JWT в localStorage (XSS уязвимость)",
          "Отправка паролей по email",
        ],
      },
      rightContent: {
        title: "Плохие практики",
        items: [
          "Показ 'пользователь не существует' vs 'неверный пароль'",
          "Слишком длинный срок жизни сессий (недели/месяцы)",
          "Отсутствие логирования событий безопасности",
          "Игнорирование рекомендаций NIST",
          "Обязательная смена пароля каждые 30 дней",
        ],
      },
    },

    {
      id: "slide-27",
      title: "Инструменты тестирования",
      type: "list",
      content: "Инструменты для проверки безопасности аутентификации:",
      items: [
        "Burp Suite — перехват и модификация запросов, тестирование session management",
        "OWASP ZAP — автоматическое сканирование уязвимостей аутентификации",
        "Hydra — брутфорс паролей для проверки rate limiting",
        "John the Ripper / Hashcat — проверка стойкости хешей паролей",
        "Have I Been Pwned API — проверка паролей на компрометацию",
        "JWT.io — декодирование и анализ JWT токенов",
        "Postman — тестирование API endpoints и session management",
        "Browser DevTools — анализ cookies, localStorage, session storage",
      ],
    },

    {
      id: "slide-28",
      title: "Мониторинг и реагирование",
      type: "content",
      content:
        "Эффективная безопасность аутентификации требует постоянного мониторинга и быстрого реагирования на инциденты. Важно отслеживать паттерны: множественные неудачные попытки входа, попытки входа из необычных локаций, одновременные входы с разных IP, массовые запросы на сброс паролей. Настройте алерты для администраторов при обнаружении подозрительной активности. Ведите детальные логи всех событий безопасности с сохранением IP-адресов, User-Agent, временных меток. Периодически анализируйте логи на предмет атак. Имейте план реагирования на инциденты: что делать при массовом взломе аккаунтов, как уведомить пользователей, как принудительно сбросить скомпрометированные сессии. Регулярно проводите security audit и penetration testing.",
    },

    {
      id: "slide-29",
      title: "Современные тренды",
      type: "list",
      content: "Новые подходы к аутентификации:",
      items: [
        "Passwordless authentication — вход без пароля через magic links или биометрию",
        "WebAuthn / FIDO2 — стандарт аутентификации через аппаратные токены (YubiKey)",
        "Social Login (OAuth) — вход через Google, GitHub, но с рисками privacy",
        "Passkeys — замена паролей криптографическими ключами (Apple, Google, Microsoft)",
        "Risk-based authentication — адаптивная аутентификация на основе контекста",
        "Zero Trust Architecture — проверка при каждом запросе, не доверять даже внутри сети",
        "Continuous authentication — постоянная проверка поведения пользователя",
        "Biometric authentication — отпечатки, Face ID (но проблемы с privacy)",
      ],
    },

    {
      id: "slide-30",
      title: "Заключение",
      type: "conclusion",
      content:
        "Безопасная аутентификация — это фундамент защиты веб-приложений. Даже небольшие ошибки в реализации могут привести к массовым взломам",
      keyTakeaways: [
        "Хеширование паролей с bcrypt/Argon2 — обязательное требование, никогда не храните пароли в открытом виде",
        "Rate limiting и защита от брутфорса должны быть реализованы для всех критичных endpoints",
        "Правильное управление сессиями предотвращает Session Hijacking и Fixation атаки",
        "Многофакторная аутентификация значительно повышает безопасность аккаунтов",
        "Логирование и мониторинг позволяют быстро обнаружить и отреагировать на атаки",
        "Следуйте современным стандартам (NIST, OWASP) и регулярно обновляйте знания",
      ],
    },
  ],
};
