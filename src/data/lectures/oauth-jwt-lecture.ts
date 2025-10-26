import { Lecture } from "@/types";

export const oauthJwtLecture: Lecture = {
  id: "oauth-jwt-lecture",
  title: "OAuth 2.0 и JWT: Современная аутентификация для API",
  description:
    "Практическое руководство по реализации OAuth 2.0 и JWT токенов для защиты REST API",
  groupId: "web-security",
  createdAt: new Date("2025-11-01"),
  updatedAt: new Date("2025-11-01"),
  tags: [
    "web-security",
    "JWT",
    "API",
    "Authentication",
    "Authorization",
    "безопасность",
  ],
  difficulty: "intermediate",
  duration: 6,

  slides: [
    {
      id: "slide-1",
      title: "OAuth 2.0 и JWT для API",
      type: "title",
      content:
        "Современные подходы к аутентификации и авторизации в веб-приложениях",
      keyPoints: [
        {
          title: "OAuth 2.0",
          description: "Протокол авторизации для делегирования доступа",
        },
        {
          title: "JWT (JSON Web Tokens)",
          description: "Компактный способ передачи данных между сторонами",
        },
        {
          title: "Практическая реализация",
          description: "Создание защищенного REST API с нуля",
        },
        {
          title: "Best Practices",
          description: "Безопасные паттерны и защита от атак",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое OAuth 2.0?",
      type: "content",
      content:
        "OAuth 2.0 — это протокол авторизации, который позволяет приложениям получать ограниченный доступ к ресурсам пользователя на другом сервисе без передачи пароля. Например, когда вы входите на сайт через 'Войти с Google', используется OAuth 2.0. Протокол определяет четыре роли: Resource Owner (владелец ресурса - пользователь), Client (приложение, запрашивающее доступ), Authorization Server (сервер авторизации), Resource Server (сервер ресурсов с защищенными данными). OAuth 2.0 не является протоколом аутентификации — он про авторизацию (что может делать приложение), а не про идентификацию (кто это). Для аутентификации используется OpenID Connect (OIDC), построенный поверх OAuth 2.0.",
    },

    {
      id: "slide-3",
      title: "OAuth 2.0: Основные потоки (Grant Types)",
      type: "list",
      content: "Четыре основных способа получения токена доступа:",
      items: [
        "Authorization Code — для серверных приложений (самый безопасный). Используется двухэтапная авторизация с exchange code на токен",
        "Implicit Flow — устаревший, для SPA (небезопасен, не использовать!). Токен возвращается сразу в URL",
        "Resource Owner Password Credentials — логин/пароль напрямую (только для доверенных приложений)",
        "Client Credentials — для machine-to-machine коммуникации без участия пользователя",
        "Authorization Code + PKCE — современный стандарт для SPA и мобильных приложений",
      ],
    },

    {
      id: "slide-4",
      title: "Authorization Code Flow: Диаграмма",
      type: "code",
      content: "Как работает самый распространенный OAuth 2.0 flow:",
      codeExample: {
        language: "text",
        title: "OAuth 2.0 Authorization Code Flow",
        code: `1. User → Client: Нажимает "Войти через Google"
   
2. Client → Authorization Server:
   GET /authorize?
     response_type=code&
     client_id=YOUR_CLIENT_ID&
     redirect_uri=https://yourapp.com/callback&
     scope=profile email&
     state=random_string
   
3. Authorization Server → User:
   Показывает форму входа и запрос разрешений
   
4. User → Authorization Server:
   Вводит логин/пароль и соглашается предоставить доступ
   
5. Authorization Server → Client:
   Редирект: https://yourapp.com/callback?
     code=AUTHORIZATION_CODE&
     state=random_string
   
6. Client → Authorization Server:
   POST /token
   Content-Type: application/x-www-form-urlencoded
   
   grant_type=authorization_code&
   code=AUTHORIZATION_CODE&
   redirect_uri=https://yourapp.com/callback&
   client_id=YOUR_CLIENT_ID&
   client_secret=YOUR_CLIENT_SECRET
   
7. Authorization Server → Client:
   {
     "access_token": "eyJhbGciOiJSUzI1NiIs...",
     "token_type": "Bearer",
     "expires_in": 3600,
     "refresh_token": "tGzv3JOkF0XG5Qx2TlKWIA",
     "scope": "profile email"
   }
   
8. Client → Resource Server:
   GET /api/user/profile
   Authorization: Bearer eyJhbGciOiJSUzI1NiIs...
   
9. Resource Server → Client:
   {
     "id": "12345",
     "name": "John Doe",
     "email": "john@example.com"
   }`,
      },
    },

    {
      id: "slide-5",
      title: "Что такое JWT?",
      type: "content",
      content:
        "JSON Web Token (JWT) — это компактный способ безопасной передачи информации между сторонами в формате JSON. JWT состоит из трех частей, разделенных точками: Header (заголовок с типом токена и алгоритмом подписи), Payload (полезные данные - claims), Signature (подпись для проверки целостности). Пример JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c. JWT может быть подписан (JWS) или зашифрован (JWE). Подписанные токены гарантируют целостность данных, но payload можно декодировать. Зашифрованные токены скрывают содержимое. JWT используется для stateless аутентификации — сервер не хранит сессии, вся информация в токене.",
    },

    {
      id: "slide-6",
      title: "Структура JWT",
      type: "code",
      content: "Разбор структуры JSON Web Token:",
      codeExample: {
        language: "javascript",
        title: "JWT Structure",
        code: `// ========== HEADER ==========
// Алгоритм подписи и тип токена (Base64Url encoded)
{
  "alg": "HS256",  // HMAC SHA-256
  "typ": "JWT"
}
// Результат: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

// ========== PAYLOAD ==========
// Данные (claims) - Base64Url encoded
{
  // Registered claims (стандартные)
  "iss": "https://yourapp.com",      // Issuer - кто выдал
  "sub": "user123",                   // Subject - о ком токен
  "aud": "https://api.yourapp.com",   // Audience - для кого
  "exp": 1735689600,                  // Expiration - когда истекает
  "nbf": 1735686000,                  // Not Before - когда начинает действовать
  "iat": 1735686000,                  // Issued At - когда выдан
  "jti": "unique-token-id",           // JWT ID - уникальный ID
  
  // Public claims (публичные)
  "name": "John Doe",
  "email": "john@example.com",
  
  // Private claims (приватные - ваши данные)
  "role": "admin",
  "permissions": ["read", "write", "delete"]
}
// Результат: eyJzdWIiOiJ1c2VyMTIzIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIn0

// ========== SIGNATURE ==========
// Подпись для проверки целостности
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret  // Ваш секретный ключ
)
// Результат: SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// ========== FULL JWT ==========
const jwt = [header, payload, signature].join('.');
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// ========== ВАЖНО ==========
// JWT не зашифрован! Любой может декодировать payload
// Используйте jwt.io для декодирования и отладки
// НИКОГДА не храните чувствительные данные в JWT (пароли, номера карт)
// Signature защищает от подделки, но не от чтения`,
      },
    },

    {
      id: "slide-7",
      title: "Алгоритмы подписи JWT",
      type: "two-column",
      content: "Выбор правильного алгоритма критичен для безопасности:",
      leftContent: {
        title: "Симметричные (HMAC)",
        items: [
          "HS256, HS384, HS512 - один секретный ключ для подписи и проверки",
          "✓ Быстрые и простые",
          "✓ Подходят для внутренних API",
          "✗ Ключ должен быть у всех, кто проверяет токен",
          "✗ Компрометация ключа = все токены скомпрометированы",
        ],
      },
      rightContent: {
        title: "Асимметричные (RSA, ECDSA)",
        items: [
          "RS256, RS384, RS512 - приватный ключ для подписи, публичный для проверки",
          "ES256, ES384, ES512 - на основе эллиптических кривых",
          "✓ Безопаснее - публичный ключ можно распространять",
          "✓ Подходят для distributed systems",
          "✗ Медленнее HMAC",
        ],
      },
    },

    {
      id: "slide-8",
      title: "Практика: Простой JWT сервер",
      type: "code",
      content: "Создаем API с JWT аутентификацией с нуля:",
      codeExample: {
        language: "javascript",
        title: "Simple JWT Authentication API",
        code: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// Секретный ключ (в продакшене - из .env)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-min-32-chars';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh-secret';

// Имитация БД пользователей
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    // Пароль: admin123 (уже захеширован)
    password: '$2b$10$...',
    role: 'admin'
  }
];

// Хранилище refresh токенов (в продакшене - Redis)
const refreshTokens = new Set();

// ========== РЕГИСТРАЦИЯ ==========
app.post('/api/auth/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  // Валидация
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Все поля обязательны' });
  }
  
  if (password.length < 8) {
    return res.status(400).json({ error: 'Пароль минимум 8 символов' });
  }
  
  // Проверка существования
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Пользователь существует' });
  }
  
  // Хеширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Создание пользователя
  const user = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword,
    role: 'user'
  };
  
  users.push(user);
  
  res.status(201).json({
    message: 'Пользователь создан',
    user: { id: user.id, username, email, role: user.role }
  });
});

// ========== ВХОД (LOGIN) ==========
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Поиск пользователя
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверные учетные данные' });
  }
  
  // Проверка пароля
  const validPassword = await bcrypt.compare(password, user.password);
  
  if (!validPassword) {
    return res.status(401).json({ error: 'Неверные учетные данные' });
  }
  
  // Генерация токенов
  const accessToken = jwt.sign(
    {
      userId: user.id,
      username: user.username,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: '15m' }  // 15 минут
  );
  
  const refreshToken = jwt.sign(
    { userId: user.id },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' }  // 7 дней
  );
  
  // Сохраняем refresh token
  refreshTokens.add(refreshToken);
  
  res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
});

// ========== ОБНОВЛЕНИЕ ACCESS TOKEN ==========
app.post('/api/auth/refresh', (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token required' });
  }
  
  // Проверяем, что токен в нашем хранилище
  if (!refreshTokens.has(refreshToken)) {
    return res.status(403).json({ error: 'Invalid refresh token' });
  }
  
  // Верифицируем токен
  jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, payload) => {
    if (err) {
      refreshTokens.delete(refreshToken);
      return res.status(403).json({ error: 'Invalid refresh token' });
    }
    
    // Находим пользователя
    const user = users.find(u => u.id === payload.userId);
    
    if (!user) {
      return res.status(403).json({ error: 'User not found' });
    }
    
    // Генерируем новый access token
    const accessToken = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '15m' }
    );
    
    res.json({ accessToken });
  });
});

// ========== MIDDLEWARE АУТЕНТИФИКАЦИИ ==========
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    
    req.user = user;
    next();
  });
}

// ========== MIDDLEWARE АВТОРИЗАЦИИ ==========
function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
}

// ========== ЗАЩИЩЕННЫЕ МАРШРУТЫ ==========

// Публичный маршрут
app.get('/api/public', (req, res) => {
  res.json({ message: 'This is public data' });
});

// Защищенный маршрут (нужен токен)
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({
    message: 'This is protected data',
    user: req.user
  });
});

// Только для админов
app.get('/api/admin', authenticateToken, requireRole('admin'), (req, res) => {
  res.json({
    message: 'Admin only data',
    users: users.map(u => ({ id: u.id, username: u.username, role: u.role }))
  });
});

// Профиль текущего пользователя
app.get('/api/me', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role
  });
});

// ========== ВЫХОД ==========
app.post('/api/auth/logout', authenticateToken, (req, res) => {
  const { refreshToken } = req.body;
  
  if (refreshToken) {
    refreshTokens.delete(refreshToken);
  }
  
  res.json({ message: 'Logged out successfully' });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
      },
    },

    {
      id: "slide-9",
      title: "Тестирование API с curl",
      type: "code",
      content: "Примеры запросов для тестирования JWT API:",
      codeExample: {
        language: "bash",
        title: "Testing JWT API with curl",
        code: `# ========== РЕГИСТРАЦИЯ ==========
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'

# Ответ:
# {
#   "message": "Пользователь создан",
#   "user": {
#     "id": 2,
#     "username": "testuser",
#     "email": "test@example.com",
#     "role": "user"
#   }
# }

# ========== ВХОД ==========
curl -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "testuser",
    "password": "password123"
  }'

# Ответ:
# {
#   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
#   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
#   "user": {
#     "id": 2,
#     "username": "testuser",
#     "email": "test@example.com",
#     "role": "user"
#   }
# }

# Сохраняем токен
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# ========== ПУБЛИЧНЫЙ МАРШРУТ ==========
curl http://localhost:3000/api/public

# ========== ЗАЩИЩЕННЫЙ МАРШРУТ ==========
curl http://localhost:3000/api/protected \\
  -H "Authorization: Bearer $TOKEN"

# ========== ПРОФИЛЬ ==========
curl http://localhost:3000/api/me \\
  -H "Authorization: Bearer $TOKEN"

# ========== БЕЗ ТОКЕНА (ОШИБКА) ==========
curl http://localhost:3000/api/protected
# { "error": "Access token required" }

# ========== С НЕВЕРНЫМ ТОКЕНОМ (ОШИБКА) ==========
curl http://localhost:3000/api/protected \\
  -H "Authorization: Bearer invalid_token"
# { "error": "Invalid or expired token" }

# ========== ОБНОВЛЕНИЕ ТОКЕНА ==========
REFRESH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

curl -X POST http://localhost:3000/api/auth/refresh \\
  -H "Content-Type: application/json" \\
  -d "{\"refreshToken\": \"$REFRESH_TOKEN\"}"

# Ответ:
# {
#   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
# }

# ========== ВЫХОД ==========
curl -X POST http://localhost:3000/api/auth/logout \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d "{\"refreshToken\": \"$REFRESH_TOKEN\"}"`,
      },
    },

    {
      id: "slide-10",
      title: "OAuth 2.0: Реализация Authorization Server",
      type: "code",
      content: "Создаем свой OAuth 2.0 сервер авторизации:",
      codeExample: {
        language: "javascript",
        title: "OAuth 2.0 Authorization Server",
        code: `const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Конфигурация
const AUTH_SERVER_URL = 'http://localhost:4000';
const JWT_SECRET = 'auth-server-secret';

// Хранилища (в продакшене - БД)
const clients = new Map([
  ['client_123', {
    id: 'client_123',
    secret: 'client_secret_456',
    name: 'My App',
    redirectUris: ['http://localhost:3000/callback']
  }]
]);

const users = new Map([
  ['user1', {
    id: 'user1',
    username: 'john',
    password: 'password123', // В продакшене - хеш
    email: 'john@example.com'
  }]
]);

const authorizationCodes = new Map();
const accessTokens = new Map();
const refreshTokens = new Map();

// ========== ШАБЛОНЫ HTML ==========
const loginPageHTML = (clientName, state, redirectUri, scope) => \`
<!DOCTYPE html>
<html>
<head>
  <title>Вход - OAuth 2.0</title>
  <style>
    body { font-family: Arial; max-width: 400px; margin: 50px auto; }
    input { width: 100%; padding: 10px; margin: 5px 0; }
    button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Вход в систему</h2>
  <p><strong>\${clientName}</strong> запрашивает доступ к вашим данным</p>
  <p>Разрешения: <strong>\${scope}</strong></p>
  <form method="POST" action="/oauth/login">
    <input type="hidden" name="client_id" value="\${clients.values().next().value.id}">
    <input type="hidden" name="redirect_uri" value="\${redirectUri}">
    <input type="hidden" name="state" value="\${state}">
    <input type="hidden" name="scope" value="\${scope}">
    <input type="text" name="username" placeholder="Логин" required>
    <input type="password" name="password" placeholder="Пароль" required>
    <button type="submit">Войти и разрешить</button>
  </form>
</body>
</html>
\`;

// ========== 1. AUTHORIZATION ENDPOINT ==========
// GET /oauth/authorize?response_type=code&client_id=...&redirect_uri=...&scope=...&state=...
app.get('/oauth/authorize', (req, res) => {
  const { response_type, client_id, redirect_uri, scope, state } = req.query;
  
  // Валидация параметров
  if (response_type !== 'code') {
    return res.status(400).send('Unsupported response_type');
  }
  
  const client = clients.get(client_id);
  if (!client) {
    return res.status(400).send('Invalid client_id');
  }
  
  if (!client.redirectUris.includes(redirect_uri)) {
    return res.status(400).send('Invalid redirect_uri');
  }
  
  // Показываем форму входа
  res.send(loginPageHTML(client.name, state, redirect_uri, scope));
});

// ========== 2. ОБРАБОТКА ВХОДА ==========
app.post('/oauth/login', (req, res) => {
  const { username, password, client_id, redirect_uri, state, scope } = req.body;
  
  // Аутентификация пользователя
  const user = Array.from(users.values()).find(u => u.username === username);
  
  if (!user || user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }
  
  // Генерируем authorization code
  const code = crypto.randomBytes(32).toString('hex');
  
  authorizationCodes.set(code, {
    clientId: client_id,
    userId: user.id,
    redirectUri: redirect_uri,
    scope: scope,
    expiresAt: Date.now() + 10 * 60 * 1000, // 10 минут
    used: false
  });
  
  // Редирект обратно с кодом
  const redirectUrl = new URL(redirect_uri);
  redirectUrl.searchParams.append('code', code);
  redirectUrl.searchParams.append('state', state);
  
  res.redirect(redirectUrl.toString());
});

// ========== 3. TOKEN ENDPOINT ==========
// POST /oauth/token
app.post('/oauth/token', (req, res) => {
  const { grant_type, code, redirect_uri, client_id, client_secret, refresh_token } = req.body;
  
  // Проверка клиента
  const client = clients.get(client_id);
  if (!client || client.secret !== client_secret) {
    return res.status(401).json({ error: 'invalid_client' });
  }
  
  if (grant_type === 'authorization_code') {
    // Exchange authorization code за токены
    const authCode = authorizationCodes.get(code);
    
    if (!authCode) {
      return res.status(400).json({ error: 'invalid_grant' });
    }
    
    if (authCode.used) {
      return res.status(400).json({ error: 'code_already_used' });
    }
    
    if (authCode.expiresAt < Date.now()) {
      return res.status(400).json({ error: 'code_expired' });
    }
    
    if (authCode.redirectUri !== redirect_uri) {
      return res.status(400).json({ error: 'invalid_redirect_uri' });
    }
    
    // Помечаем код как использованный
    authCode.used = true;
    
    // Получаем пользователя
    const user = users.get(authCode.userId);
    
    // Генерируем токены
    const accessToken = jwt.sign(
      {
        sub: user.id,
        username: user.username,
        email: user.email,
        scope: authCode.scope,
        client_id: client_id
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    const newRefreshToken = crypto.randomBytes(32).toString('hex');
    
    refreshTokens.set(newRefreshToken, {
      userId: user.id,
      clientId: client_id,
      scope: authCode.scope,
      expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 дней
    });
    
    res.json({
      access_token: accessToken,
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: newRefreshToken,
      scope: authCode.scope
    });
    
  } else if (grant_type === 'refresh_token') {
    // Обновление access token через refresh token
    const refreshData = refreshTokens.get(refresh_token);
    
    if (!refreshData) {
      return res.status(400).json({ error: 'invalid_grant' });
    }
    
    if (refreshData.expiresAt < Date.now()) {
      refreshTokens.delete(refresh_token);
      return res.status(400).json({ error: 'refresh_token_expired' });
    }
    
    if (refreshData.clientId !== client_id) {
      return res.status(400).json({ error: 'invalid_client' });
    }
    
    const user = users.get(refreshData.userId);
    
    // Генерируем новый access token
    const accessToken = jwt.sign(
      {
        sub: user.id,
        username: user.username,
        email: user.email,
        scope: refreshData.scope,
        client_id: client_id
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({
      access_token: accessToken,
      token_type: 'Bearer',
      expires_in: 3600,
      scope: refreshData.scope
    });
    
  } else {
    res.status(400).json({ error: 'unsupported_grant_type' });
  }
});

// ========== 4. USERINFO ENDPOINT ==========
// GET /oauth/userinfo
app.get('/oauth/userinfo', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'missing_token' });
  }
  
  const token = authHeader.substring(7);
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    res.json({
      sub: decoded.sub,
      username: decoded.username,
      email: decoded.email
    });
  } catch (err) {
    res.status(401).json({ error: 'invalid_token' });
  }
});

// ========== 5. TOKEN INTROSPECTION ==========
// POST /oauth/introspect
app.post('/oauth/introspect', (req, res) => {
  const { token, client_id, client_secret } = req.body;
  
  // Проверка клиента
  const client = clients.get(client_id);
  if (!client || client.secret !== client_secret) {
    return res.status(401).json({ error: 'invalid_client' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    res.json({
      active: true,
      sub: decoded.sub,
      username: decoded.username,
      scope: decoded.scope,
      client_id: decoded.client_id,
      exp: decoded.exp,
      iat: decoded.iat
    });
  } catch (err) {
    res.json({ active: false });
  }
});

// ========== 6. TOKEN REVOCATION ==========
// POST /oauth/revoke
app.post('/oauth/revoke', (req, res) => {
  const { token, token_type_hint, client_id, client_secret } = req.body;
  
  // Проверка клиента
  const client = clients.get(client_id);
  if (!client || client.secret !== client_secret) {
    return res.status(401).json({ error: 'invalid_client' });
  }
  
  if (token_type_hint === 'refresh_token' || refreshTokens.has(token)) {
    refreshTokens.delete(token);
  }
  
  // Для access токенов нужна blacklist (Redis)
  
  res.status(200).send();
});

app.listen(4000, () => {
  console.log('OAuth 2.0 Authorization Server running on port 4000');
});
`,
      },
    },

    {
      id: "slide-11",
      title: "OAuth 2.0: Client Application",
      type: "code",
      content: "Приложение-клиент, использующее OAuth 2.0:",
      codeExample: {
        language: "javascript",
        title: "OAuth 2.0 Client",
        code: `const express = require('express');
const axios = require('axios');
const crypto = require('crypto');

const app = express();

// Конфигурация OAuth
const CLIENT_ID = 'client_123';
const CLIENT_SECRET = 'client_secret_456';
const REDIRECT_URI = 'http://localhost:3000/callback';
const AUTH_SERVER_URL = 'http://localhost:4000';
const SCOPE = 'profile email';

// Хранилище state для защиты от CSRF
const pendingStates = new Set();

// ========== ГЛАВНАЯ СТРАНИЦА ==========
app.get('/', (req, res) => {
  res.send(\`
    <!DOCTYPE html>
    <html>
    <head>
      <title>OAuth 2.0 Client</title>
      <style>
        body { font-family: Arial; max-width: 600px; margin: 50px auto; }
        button { padding: 15px 30px; font-size: 16px; cursor: pointer; }
      </style>
    </head>
    <body>
      <h1>OAuth 2.0 Client Demo</h1>
      <p>Нажмите кнопку для входа через OAuth 2.0</p>
      <a href="/login">
        <button>Войти через OAuth 2.0</button>
      </a>
    </body>
    </html>
  \`);
});

// ========== ИНИЦИАЦИЯ OAUTH FLOW ==========
app.get('/login', (req, res) => {
  // Генерируем случайный state для защиты от CSRF
  const state = crypto.randomBytes(32).toString('hex');
  pendingStates.add(state);
  
  // Формируем URL авторизации
  const authUrl = new URL(\`\${AUTH_SERVER_URL}/oauth/authorize\`);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('client_id', CLIENT_ID);
  authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.append('scope', SCOPE);
  authUrl.searchParams.append('state', state);
  
  // Редирект на сервер авторизации
  res.redirect(authUrl.toString());
});

// ========== CALLBACK ==========
app.get('/callback', async (req, res) => {
  const { code, state, error } = req.query;
  
  // Проверка на ошибки
  if (error) {
    return res.status(400).send(\`Authorization error: \${error}\`);
  }
  
  // Проверка state (защита от CSRF)
  if (!state || !pendingStates.has(state)) {
    return res.status(400).send('Invalid state parameter');
  }
  
  pendingStates.delete(state);
  
  // Проверка code
  if (!code) {
    return res.status(400).send('Missing authorization code');
  }
  
  try {
    // ========== EXCHANGE CODE FOR TOKENS ==========
    const tokenResponse = await axios.post(
      \`\${AUTH_SERVER_URL}/oauth/token\`,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    
    const { access_token, refresh_token, expires_in, scope } = tokenResponse.data;
    
    // ========== ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ ==========
    const userResponse = await axios.get(
      \`\${AUTH_SERVER_URL}/oauth/userinfo\`,
      {
        headers: { Authorization: \`Bearer \${access_token}\` }
      }
    );
    
    const user = userResponse.data;
    
    // В реальном приложении: создаем сессию, сохраняем токены
    res.send(\`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Success</title>
        <style>
          body { font-family: Arial; max-width: 600px; margin: 50px auto; }
          pre { background: #f4f4f4; padding: 15px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <h1>✓ Успешная авторизация!</h1>
        
        <h2>Данные пользователя:</h2>
        <pre>\${JSON.stringify(user, null, 2)}</pre>
        
        <h2>Токены:</h2>
        <pre>
Access Token: \${access_token.substring(0, 50)}...
Expires in: \${expires_in} seconds
Scope: \${scope}
Refresh Token: \${refresh_token.substring(0, 30)}...
        </pre>
        
        <p><a href="/protected?token=\${access_token}">Открыть защищенную страницу</a></p>
        <p><a href="/refresh?token=\${refresh_token}">Обновить access token</a></p>
      </body>
      </html>
    \`);
    
  } catch (error) {
    console.error('Token exchange error:', error.response?.data || error.message);
    res.status(500).send('Failed to exchange authorization code');
  }
});

// ========== ЗАЩИЩЕННАЯ СТРАНИЦА ==========
app.get('/protected', async (req, res) => {
  const { token } = req.query;
  
  if (!token) {
    return res.status(401).send('Access token required');
  }
  
  try {
    // Получаем данные пользователя
    const userResponse = await axios.get(
      \`\${AUTH_SERVER_URL}/oauth/userinfo\`,
      {
        headers: { Authorization: \`Bearer \${token}\` }
      }
    );
    
    res.send(\`
      <h1>Protected Resource</h1>
      <p>Authenticated as: \${userResponse.data.username}</p>
      <pre>\${JSON.stringify(userResponse.data, null, 2)}</pre>
    \`);
    
  } catch (error) {
    res.status(401).send('Invalid or expired token');
  }
});

// ========== ОБНОВЛЕНИЕ ТОКЕНА ==========
app.get('/refresh', async (req, res) => {
  const { token } = req.query;
  
  if (!token) {
    return res.status(400).send('Refresh token required');
  }
  
  try {
    const tokenResponse = await axios.post(
      \`\${AUTH_SERVER_URL}/oauth/token\`,
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: token,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    
    const { access_token, expires_in } = tokenResponse.data;
    
    res.send(\`
      <h1>Token Refreshed</h1>
      <p>New Access Token:</p>
      <pre>\${access_token.substring(0, 50)}...</pre>
      <p>Expires in: \${expires_in} seconds</p>
      <p><a href="/protected?token=\${access_token}">Test new token</a></p>
    \`);
    
  } catch (error) {
    res.status(400).send('Failed to refresh token');
  }
});

app.listen(3000, () => {
  console.log('OAuth 2.0 Client running on port 3000');
});`,
      },
    },

    {
      id: "slide-12",
      title: "PKCE: Защита для SPA и Mobile",
      type: "content",
      content:
        "Proof Key for Code Exchange (PKCE, произносится 'pixie') — это расширение OAuth 2.0, которое защищает Authorization Code Flow от атак перехвата кода. Изначально разработано для мобильных приложений, но сейчас рекомендуется для всех публичных клиентов (SPA, мобильные приложения), которые не могут безопасно хранить client_secret. PKCE работает следующим образом: клиент генерирует случайную строку code_verifier (43-128 символов), вычисляет SHA256 хеш от нее и кодирует в base64url - это code_challenge. При запросе авторизации отправляется code_challenge, а при обмене кода на токен - code_verifier. Сервер проверяет, что SHA256(code_verifier) === code_challenge. Злоумышленник, перехвативший authorization code, не сможет обменять его на токен без code_verifier. Поддержка PKCE обязательна для OAuth 2.1.",
    },

    {
      id: "slide-13",
      title: "PKCE: Реализация",
      type: "code",
      content: "Добавление PKCE в OAuth 2.0 flow:",
      codeExample: {
        language: "javascript",
        title: "OAuth 2.0 with PKCE",
        code: `const crypto = require('crypto');

// ========== CLIENT SIDE ==========

// 1. Генерация code_verifier (случайная строка 43-128 символов)
function generateCodeVerifier() {
  return crypto.randomBytes(32).toString('base64url');
}

// 2. Вычисление code_challenge из code_verifier
function generateCodeChallenge(verifier) {
  return crypto
    .createHash('sha256')
    .update(verifier)
    .digest('base64url');
}

// Пример использования в клиенте
app.get('/login-pkce', (req, res) => {
  // Генерируем PKCE параметры
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = generateCodeChallenge(codeVerifier);
  const state = crypto.randomBytes(32).toString('hex');
  
  // Сохраняем code_verifier в сессии (или localStorage для SPA)
  req.session = req.session || {};
  req.session.codeVerifier = codeVerifier;
  req.session.state = state;
  
  // Строим URL авторизации с PKCE
  const authUrl = new URL(\`\${AUTH_SERVER_URL}/oauth/authorize\`);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('client_id', CLIENT_ID);
  authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.append('scope', SCOPE);
  authUrl.searchParams.append('state', state);
  authUrl.searchParams.append('code_challenge', codeChallenge);
  authUrl.searchParams.append('code_challenge_method', 'S256'); // SHA-256
  
  res.redirect(authUrl.toString());
});

// Callback с PKCE
app.get('/callback-pkce', async (req, res) => {
  const { code, state } = req.query;
  
  // Проверка state
  if (state !== req.session.state) {
    return res.status(400).send('Invalid state');
  }
  
  const codeVerifier = req.session.codeVerifier;
  
  try {
    // Обмен code на токены С code_verifier
    const tokenResponse = await axios.post(
      \`\${AUTH_SERVER_URL}/oauth/token\`,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        code_verifier: codeVerifier  // <-- PKCE параметр
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    
    // Очищаем сессию
    delete req.session.codeVerifier;
    delete req.session.state;
    
    res.json(tokenResponse.data);
  } catch (error) {
    res.status(500).send('Token exchange failed');
  }
});

// ========== SERVER SIDE (Authorization Server) ==========

// Хранилище для code challenges
const codeChallenges = new Map();

// Модифицированный /oauth/authorize
app.get('/oauth/authorize', (req, res) => {
  const { 
    response_type, client_id, redirect_uri, scope, state,
    code_challenge, code_challenge_method 
  } = req.query;
  
  // ... стандартные проверки ...
  
  // Если используется PKCE
  if (code_challenge) {
    if (code_challenge_method !== 'S256' && code_challenge_method !== 'plain') {
      return res.status(400).send('Invalid code_challenge_method');
    }
    
    // Сохраняем challenge для последующей проверки
    codeChallenges.set(client_id, {
      challenge: code_challenge,
      method: code_challenge_method
    });
  }
  
  // ... показываем форму входа ...
});

// Модифицированный /oauth/token
app.post('/oauth/token', (req, res) => {
  const { 
    grant_type, code, redirect_uri, client_id, 
    client_secret, code_verifier 
  } = req.body;
  
  if (grant_type === 'authorization_code') {
    const authCode = authorizationCodes.get(code);
    
    if (!authCode) {
      return res.status(400).json({ error: 'invalid_grant' });
    }
    
    // Проверка PKCE
    const challengeData = codeChallenges.get(client_id);
    
    if (challengeData) {
      // PKCE используется - проверяем verifier
      if (!code_verifier) {
        return res.status(400).json({ error: 'code_verifier_required' });
      }
      
      let computedChallenge;
      
      if (challengeData.method === 'S256') {
        // SHA256(code_verifier) в base64url
        computedChallenge = crypto
          .createHash('sha256')
          .update(code_verifier)
          .digest('base64url');
      } else {
        // plain - verifier === challenge
        computedChallenge = code_verifier;
      }
      
      if (computedChallenge !== challengeData.challenge) {
        codeChallenges.delete(client_id);
        return res.status(400).json({ error: 'invalid_code_verifier' });
      }
      
      // PKCE проверка пройдена
      codeChallenges.delete(client_id);
      
    } else if (!client_secret) {
      // Ни PKCE, ни client_secret - ошибка
      return res.status(400).json({ error: 'authentication_required' });
    }
    
    // ... остальная логика выдачи токенов ...
  }
});

// ========== ПРИМЕР ДЛЯ SPA (Frontend) ==========
// В браузере без бэкенда
const PKCEFlow = {
  // Начало flow
  async startLogin() {
    // Генерируем PKCE параметры
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);
    const state = this.generateRandomString();
    
    // Сохраняем в localStorage
    localStorage.setItem('pkce_code_verifier', codeVerifier);
    localStorage.setItem('pkce_state', state);
    
    // Редирект на авторизацию
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: 'your_client_id',
      redirect_uri: window.location.origin + '/callback',
      scope: 'openid profile email',
      state: state,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256'
    });
    
    window.location.href = \`https://auth-server.com/oauth/authorize?\${params}\`;
  },
  
  // Обработка callback
  async handleCallback() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    
    // Проверка state
    const savedState = localStorage.getItem('pkce_state');
    if (state !== savedState) {
      throw new Error('Invalid state');
    }
    
    // Получаем code_verifier
    const codeVerifier = localStorage.getItem('pkce_code_verifier');
    
    // Обмен code на токены
    const response = await fetch('https://auth-server.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: window.location.origin + '/callback',
        client_id: 'your_client_id',
        code_verifier: codeVerifier
      })
    });
    
    const tokens = await response.json();
    
    // Очищаем localStorage
    localStorage.removeItem('pkce_code_verifier');
    localStorage.removeItem('pkce_state');
    
    // Сохраняем токены
    localStorage.setItem('access_token', tokens.access_token);
    
    return tokens;
  },
  
  generateCodeVerifier() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return this.base64UrlEncode(array);
  },
  
  async generateCodeChallenge(verifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return this.base64UrlEncode(new Uint8Array(hash));
  },
  
  base64UrlEncode(array) {
    return btoa(String.fromCharCode(...array))
      .replace(/\\+/g, '-')
      .replace(/\\//g, '_')
      .replace(/=+$/, '');
  },
  
  generateRandomString() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
  }
};`,
      },
    },

    {
      id: "slide-14",
      title: "Безопасность JWT: Распространенные атаки",
      type: "list",
      content: "Критические уязвимости JWT и способы защиты:",
      items: [
        "Algorithm None Attack — изменение 'alg' на 'none' для обхода проверки подписи. Защита: всегда проверяйте alгоритм",
        "Algorithm Confusion — подмена RS256 (асимметричный) на HS256 (симметричный), используя публичный ключ как секрет",
        "Weak Secret — слабый секретный ключ можно подобрать брутфорсом. Используйте минимум 256 бит случайности",
        "Token Sidejacking — кража токена через XSS если хранится в localStorage. Храните в памяти или httpOnly cookies",
        "JWT Injection — внедрение вредоносных данных в claims. Валидируйте все данные из payload",
        "Cross-JWT Confusion — использование токена из одного приложения в другом. Проверяйте aud (audience)",
        "Expired Token Reuse — использование истекших токенов. Всегда проверяйте exp claim",
      ],
    },

    {
      id: "slide-15",
      title: "JWT: Защита от атак",
      type: "code",
      content: "Безопасная имплементация JWT с защитой от атак:",
      codeExample: {
        language: "javascript",
        title: "Secure JWT Implementation",
        code: `const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// ========== БЕЗОПАСНАЯ ГЕНЕРАЦИЯ СЕКРЕТА ==========
// НЕ ИСПОЛЬЗУЙТЕ короткие секреты типа 'secret'!
function generateSecureSecret() {
  // Минимум 256 бит (32 байта)
  return crypto.randomBytes(64).toString('hex');
}

// В .env файле:
// JWT_SECRET=сгенерированный_случайный_секрет_минимум_64_символа
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ISSUER = 'https://yourapp.com';
const JWT_AUDIENCE = 'https://api.yourapp.com';

// ========== БЕЗОПАСНОЕ СОЗДАНИЕ ТОКЕНА ==========
function createSecureToken(user) {
  // Whitelist разрешенных claims
  const payload = {
    sub: user.id,  // Subject - ID пользователя
    username: user.username,
    role: user.role,
    // ❌ НЕ включайте: пароли, номера карт, API ключи, ПДн
  };
  
  const options = {
    algorithm: 'HS256',  // или RS256 для production
    expiresIn: '15m',    // Короткий срок жизни
    issuer: JWT_ISSUER,  // Кто выдал
    audience: JWT_AUDIENCE,  // Для кого предназначен
    jwtid: crypto.randomBytes(16).toString('hex'),  // Уникальный ID токена
    notBefore: '0',  // Когда начинает действовать
  };
  
  return jwt.sign(payload, JWT_SECRET, options);
}

// ========== БЕЗОПАСНАЯ ПРОВЕРКА ТОКЕНА ==========
function verifySecureToken(token) {
  // КРИТИЧНО: Указываем разрешенные алгоритмы
  // Защита от Algorithm None и Algorithm Confusion атак
  const options = {
    algorithms: ['HS256'],  // WHITELIST алгоритмов!
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE,
    clockTolerance: 10,  // Допуск 10 секунд на рассинхронизацию часов
  };
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET, options);
    
    // Дополнительные проверки
    
    // 1. Проверка наличия обязательных claims
    if (!decoded.sub || !decoded.exp) {
      throw new Error('Missing required claims');
    }
    
    // 2. Проверка типов данных
    if (typeof decoded.sub !== 'string') {
      throw new Error('Invalid claim type');
    }
    
    // 3. Проверка формата значений
    if (!/^[a-zA-Z0-9-_]+$/.test(decoded.sub)) {
      throw new Error('Invalid claim format');
    }
    
    // 4. Проверка в blacklist (если используется)
    if (isTokenBlacklisted(decoded.jti)) {
      throw new Error('Token has been revoked');
    }
    
    return decoded;
    
  } catch (error) {
    // Детальное логирование ошибок для мониторинга
    console.error('JWT verification failed:', {
      error: error.message,
      name: error.name,
      token: token.substring(0, 20) + '...'
    });
    
    throw error;
  }
}

// ========== MIDDLEWARE С ЗАЩИТОЙ ==========
function secureAuthMiddleware(req, res, next) {
  // 1. Извлечение токена
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ 
      error: 'missing_token',
      message: 'Authorization header required'
    });
  }
  
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      error: 'invalid_token_format',
      message: 'Use Bearer token format'
    });
  }
  
  const token = authHeader.substring(7);
  
  // 2. Базовая проверка формата
  const parts = token.split('.');
  if (parts.length !== 3) {
    return res.status(401).json({ 
      error: 'malformed_token',
      message: 'Invalid JWT format'
    });
  }
  
  // 3. Проверка на подозрительные паттерны
  try {
    const header = JSON.parse(Buffer.from(parts[0], 'base64url').toString());
    
    // ЗАЩИТА ОТ ALGORITHM NONE ATTACK
    if (!header.alg || header.alg.toLowerCase() === 'none') {
      return res.status(401).json({ 
        error: 'insecure_algorithm',
        message: 'Algorithm "none" is not allowed'
      });
    }
    
    // ЗАЩИТА ОТ ALGORITHM CONFUSION
    if (!['HS256', 'HS384', 'HS512'].includes(header.alg)) {
      return res.status(401).json({ 
        error: 'unsupported_algorithm',
        message: 'Only HMAC algorithms are supported'
      });
    }
    
  } catch (e) {
    return res.status(401).json({ 
      error: 'invalid_token_header',
      message: 'Cannot decode token header'
    });
  }
  
  // 4. Верификация токена
  try {
    const decoded = verifySecureToken(token);
    req.user = decoded;
    next();
    
  } catch (error) {
    // Разные коды ошибок для разных сценариев
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'token_expired',
        message: 'Token has expired',
        expiredAt: error.expiredAt
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        error: 'invalid_token',
        message: 'Token is invalid'
      });
    }
    
    if (error.name === 'NotBeforeError') {
      return res.status(401).json({ 
        error: 'token_not_active',
        message: 'Token is not yet active'
      });
    }
    
    return res.status(401).json({ 
      error: 'authentication_failed',
      message: 'Token verification failed'
    });
  }
}

// ========== BLACKLIST ДЛЯ ОТЗЫВА ТОКЕНОВ ==========
// В продакшене используйте Redis
const tokenBlacklist = new Set();

function revokeToken(jti, exp) {
  tokenBlacklist.add(jti);
  
  // Автоматическое удаление из blacklist после истечения
  const ttl = exp * 1000 - Date.now();
  if (ttl > 0) {
    setTimeout(() => {
      tokenBlacklist.delete(jti);
    }, ttl);
  }
}

function isTokenBlacklisted(jti) {
  return tokenBlacklist.has(jti);
}

// Endpoint для отзыва токена
app.post('/api/auth/revoke', secureAuthMiddleware, (req, res) => {
  const { jti, exp } = req.user;
  revokeToken(jti, exp);
  
  res.json({ message: 'Token revoked successfully' });
});

// ========== ЗАЩИТА ОТ JWT INJECTION ==========
function sanitizePayload(data) {
  // Whitelist разрешенных полей
  const allowedFields = ['sub', 'username', 'role', 'email'];
  const sanitized = {};
  
  for (const field of allowedFields) {
    if (data[field] !== undefined) {
      // Проверка типов
      if (field === 'sub' && typeof data[field] !== 'string') continue;
      if (field === 'role' && !['user', 'admin', 'moderator'].includes(data[field])) continue;
      
      // Экранирование опасных символов
      if (typeof data[field] === 'string') {
        sanitized[field] = data[field]
          .replace(/[<>\"']/g, '') // Удаляем HTML/JS опасные символы
          .substring(0, 255); // Ограничиваем длину
      } else {
        sanitized[field] = data[field];
      }
    }
  }
  
  return sanitized;
}

// ========== RATE LIMITING ДЛЯ JWT ENDPOINTS ==========
const rateLimit = require('express-rate-limit');

const jwtRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // 100 запросов с одного IP
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
  // Отдельные лимиты для разных endpoints
  skip: (req) => {
    // Более строгий лимит для /login
    return false;
  }
});

app.use('/api/auth', jwtRateLimiter);

// ========== МОНИТОРИНГ ПОДОЗРИТЕЛЬНОЙ АКТИВНОСТИ ==========
function detectSuspiciousActivity(req, decoded) {
  const warnings = [];
  
  // 1. Проверка IP-адреса (если сохранен в токене)
  if (decoded.ip && decoded.ip !== req.ip) {
    warnings.push({
      type: 'ip_mismatch',
      expected: decoded.ip,
      actual: req.ip
    });
  }
  
  // 2. Проверка User-Agent
  if (decoded.userAgent && decoded.userAgent !== req.headers['user-agent']) {
    warnings.push({
      type: 'user_agent_mismatch',
      message: 'Different user agent detected'
    });
  }
  
  // 3. Проверка географии (если используется GeoIP)
  // const currentCountry = getCountryFromIP(req.ip);
  // if (decoded.country && decoded.country !== currentCountry) { ... }
  
  // 4. Проверка частоты запросов
  // Если токен используется слишком часто с разных IP
  
  if (warnings.length > 0) {
    console.warn('Suspicious activity detected:', {
      userId: decoded.sub,
      warnings,
      timestamp: new Date().toISOString()
    });
    
    // Опционально: отправить уведомление пользователю
    // или потребовать повторную аутентификацию
  }
  
  return warnings;
}

// ========== БЕЗОПАСНОЕ ХРАНЕНИЕ JWT В FRONTEND ==========
/*
❌ НЕ ХРАНИТЕ В localStorage - уязвимо к XSS
✓ Храните в памяти приложения (переменная)
✓ Или в httpOnly cookies (защищено от XSS)

Пример для React:
*/
const AuthContext = \`
// ❌ ПЛОХО
localStorage.setItem('token', jwt);

// ✓ ХОРОШО - в памяти
const [token, setToken] = useState(null);

// ✓ ХОРОШО - httpOnly cookie (на сервере)
res.cookie('accessToken', jwt, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict',
  maxAge: 15 * 60 * 1000
});
\`;

// ========== ПРИМЕР ИСПОЛЬЗОВАНИЯ АСИММЕТРИЧНОГО АЛГОРИТМА (RS256) ==========
\`const fs = require('fs');

// Генерация ключей (один раз):
// openssl genrsa -out private.key 2048
// openssl rsa -in private.key -pubout -out public.key

const PRIVATE_KEY = fs.readFileSync('./keys/private.key', 'utf8');
const PUBLIC_KEY = fs.readFileSync('./keys/public.key', 'utf8');

function createRS256Token(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    role: user.role
  };
  
  const options = {
    algorithm: 'RS256',  // RSA с SHA-256
    expiresIn: '15m',
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE
  };
  
  return jwt.sign(payload, PRIVATE_KEY, options);
}

function verifyRS256Token(token) {
  const options = {
    algorithms: ['RS256'],  // Только RS256
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE
  };
  
  return jwt.verify(token, PUBLIC_KEY, options);
}

// Преимущества RS256:
// - Можно безопасно распространять PUBLIC_KEY
// - Подходит для microservices (каждый может проверять, только один подписывает)
// - PRIVATE_KEY хранится только на auth сервере

// ========== ТЕСТИРОВАНИЕ БЕЗОПАСНОСТИ ==========
function testJWTSecurity() {
  console.log('Testing JWT Security...');
  
  // 1. Тест: Algorithm None Attack
  try {
    const maliciousToken = Buffer.from(JSON.stringify({
      alg: 'none',
      typ: 'JWT'
    })).toString('base64url') + '.' +
    Buffer.from(JSON.stringify({
      sub: 'hacker',
      role: 'admin'
    })).toString('base64url') + '.';
    
    verifySecureToken(maliciousToken);
    console.log('❌ FAIL: Algorithm none attack succeeded');
  } catch (e) {
    console.log('✓ PASS: Algorithm none attack blocked');
  }
  
  // 2. Тест: Expired Token
  try {
    const expiredToken = jwt.sign(
      { sub: 'user123' },
      JWT_SECRET,
      { expiresIn: '-1s' }
    );
    
    verifySecureToken(expiredToken);
    console.log('❌ FAIL: Expired token accepted');
  } catch (e) {
    console.log('✓ PASS: Expired token rejected');
  }
  
  // 3. Тест: Invalid Signature
  try {
    const validToken = createSecureToken({ id: 'user123', username: 'test', role: 'user' });
    const parts = validToken.split('.');
    const tamperedToken = parts[0] + '.' + parts[1] + '.invalid_signature';
    
    verifySecureToken(tamperedToken);
    console.log('❌ FAIL: Tampered token accepted');
  } catch (e) {
    console.log('✓ PASS: Tampered token rejected');
  }
  
  // 4. Тест: Wrong Audience
  try {
    const wrongAudienceToken = jwt.sign(
      { sub: 'user123' },
      JWT_SECRET,
      {
        algorithm: 'HS256',
        audience: 'https://different-app.com',
        issuer: JWT_ISSUER,
        expiresIn: '15m'
      }
    );
    
    verifySecureToken(wrongAudienceToken);
    console.log('❌ FAIL: Wrong audience accepted');
  } catch (e) {
    console.log('✓ PASS: Wrong audience rejected');
  }
  
  console.log('Security tests completed!');
}

// Запуск тестов
if (require.main === module) {
  testJWTSecurity();
}

module.exports = {
  createSecureToken,
  verifySecureToken,
  secureAuthMiddleware,
  revokeToken,
  isTokenBlacklisted,
  createRS256Token,
  verifyRS256Token
};\``,
      },
    },

    {
      id: "slide-16",
      title: "Сравнение: Sessions vs JWT",
      type: "two-column",
      content: "Когда использовать сессии, а когда JWT:",
      leftContent: {
        title: "Server-Side Sessions",
        items: [
          "✓ Полный контроль — можно мгновенно отозвать",
          "✓ Меньший размер — только session ID в cookie",
          "✓ Проще обновлять данные без перелогина",
          "✓ Подходит для monolithic приложений",
          "✗ Требует хранилище (Redis, БД)",
          "✗ Сложнее масштабировать horizontally",
          "✗ Sticky sessions или shared storage",
        ],
      },
      rightContent: {
        title: "JWT (Stateless)",
        items: [
          "✓ Stateless — не нужно хранилище",
          "✓ Легко масштабировать",
          "✓ Подходит для microservices, API",
          "✓ Cross-domain authentication",
          "✗ Нельзя мгновенно отозвать",
          "✗ Больший размер (data в токене)",
          "✗ Нужен refresh token механизм",
        ],
      },
    },

    {
      id: "slide-17",
      title: "Гибридный подход: Best of Both Worlds",
      type: "content",
      content:
        "Многие современные приложения используют гибридный подход, комбинируя преимущества сессий и JWT. Access Token (JWT) — короткий срок жизни (15 минут), stateless, используется для API запросов. Refresh Token — длинный срок жизни (7-30 дней), хранится на сервере (Redis/БД), позволяет отзывать доступ. Схема работы: клиент получает оба токена при логине, использует access token для запросов, при истечении обменивает refresh token на новый access token, сервер может отозвать refresh token в любой момент. Это решает главные проблемы JWT: можно отзывать через refresh tokens, короткий access token минимизирует риск компрометации, stateless access token не нагружает сервер проверками. Refresh token в httpOnly cookie защищен от XSS, access token в памяти приложения.",
    },

    {
      id: "slide-18",
      title: "Практика: RESTful API с JWT",
      type: "code",
      content: "Полноценный REST API с аутентификацией и авторизацией:",
      codeExample: {
        language: "javascript",
        title: "Complete REST API with JWT",
        code: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

// Конфигурация
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

// Имитация БД
const db = {
  users: [],
  posts: [],
  refreshTokens: new Set()
};

// ========== VALIDATORS ==========
const registerValidators = [
  body('username').isLength({ min: 3, max: 20 }).isAlphanumeric(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 })
];

const loginValidators = [
  body('username').notEmpty(),
  body('password').notEmpty()
];

const postValidators = [
  body('title').isLength({ min: 1, max: 200 }).trim(),
  body('content').isLength({ min: 1, max: 5000 }).trim()
];

// ========== HELPER FUNCTIONS ==========
function generateTokens(user) {
  const accessToken = jwt.sign(
    {
      userId: user.id,
      username: user.username,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  const refreshToken = jwt.sign(
    { userId: user.id },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  return { accessToken, refreshToken };
}

// ========== MIDDLEWARE ==========
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    
    req.user = user;
    next();
  });
}

function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'Insufficient permissions',
        required: roles,
        current: req.user.role
      });
    }
    next();
  };
}

// ========== AUTH ENDPOINTS ==========

// POST /api/auth/register
app.post('/api/auth/register', registerValidators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { username, email, password } = req.body;
  
  // Проверка существования
  if (db.users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  
  if (db.users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  
  // Создание пользователя
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = {
    id: (db.users.length + 1).toString(),
    username,
    email,
    password: hashedPassword,
    role: 'user',
    createdAt: new Date().toISOString()
  };
  
  db.users.push(user);
  
  // Генерация токенов
  const { accessToken, refreshToken } = generateTokens(user);
  db.refreshTokens.add(refreshToken);
  
  res.status(201).json({
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    },
    accessToken,
    refreshToken
  });
});

// POST /api/auth/login
app.post('/api/auth/login', loginValidators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { username, password } = req.body;
  
  const user = db.users.find(u => u.username === username);
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const { accessToken, refreshToken } = generateTokens(user);
  db.refreshTokens.add(refreshToken);
  
  res.json({
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    },
    accessToken,
    refreshToken
  });
});

// POST /api/auth/refresh
app.post('/api/auth/refresh', (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken || !db.refreshTokens.has(refreshToken)) {
    return res.status(403).json({ error: 'Invalid refresh token' });
  }
  
  jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, payload) => {
    if (err) {
      db.refreshTokens.delete(refreshToken);
      return res.status(403).json({ error: 'Invalid refresh token' });
    }
    
    const user = db.users.find(u => u.id === payload.userId);
    
    if (!user) {
      return res.status(403).json({ error: 'User not found' });
    }
    
    const { accessToken } = generateTokens(user);
    
    res.json({ accessToken });
  });
});

// POST /api/auth/logout
app.post('/api/auth/logout', authenticate, (req, res) => {
  const { refreshToken } = req.body;
  
  if (refreshToken) {
    db.refreshTokens.delete(refreshToken);
  }
  
  res.json({ message: 'Logged out successfully' });
});

// ========== USER ENDPOINTS ==========

// GET /api/users/me
app.get('/api/users/me', authenticate, (req, res) => {
  const user = db.users.find(u => u.id === req.user.userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  });
});

// GET /api/users
app.get('/api/users', authenticate, authorize('admin'), (req, res) => {
  const users = db.users.map(u => ({
    id: u.id,
    username: u.username,
    email: u.email,
    role: u.role,
    createdAt: u.createdAt
  }));
  
  res.json({ users, total: users.length });
});

// GET /api/users/:id
app.get('/api/users/:id', authenticate, (req, res) => {
  const user = db.users.find(u => u.id === req.params.id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  // Можно видеть только свой профиль, если не админ
  if (user.id !== req.user.userId && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  });
});

// ========== POST ENDPOINTS ==========

// GET /api/posts - список постов
app.get('/api/posts', (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  
  const posts = db.posts
    .slice(start, end)
    .map(p => ({
      ...p,
      author: db.users.find(u => u.id === p.authorId)?.username
    }));
  
  res.json({
    posts,
    page: parseInt(page),
    limit: parseInt(limit),
    total: db.posts.length
  });
});

// GET /api/posts/:id - один пост
app.get('/api/posts/:id', (req, res) => {
  const post = db.posts.find(p => p.id === req.params.id);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  res.json({
    ...post,
    author: db.users.find(u => u.id === post.authorId)?.username
  });
});

// POST /api/posts - создание поста
app.post('/api/posts', authenticate, postValidators, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { title, content } = req.body;
  
  const post = {
    id: (db.posts.length + 1).toString(),
    title,
    content,
    authorId: req.user.userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  db.posts.push(post);
  
  res.status(201).json({
    ...post,
    author: req.user.username
  });
});

// PUT /api/posts/:id - обновление поста
app.put('/api/posts/:id', authenticate, postValidators, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const post = db.posts.find(p => p.id === req.params.id);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  // Может редактировать только автор или админ
  if (post.authorId !== req.user.userId && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  const { title, content } = req.body;
  post.title = title;
  post.content = content;
  post.updatedAt = new Date().toISOString();
  
  res.json({
    ...post,
    author: db.users.find(u => u.id === post.authorId)?.username
  });
});

// DELETE /api/posts/:id - удаление поста
app.delete('/api/posts/:id', authenticate, (req, res) => {
  const postIndex = db.posts.findIndex(p => p.id === req.params.id);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  const post = db.posts[postIndex];
  
  // Может удалять только автор или админ
  if (post.authorId !== req.user.userId && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  db.posts.splice(postIndex, 1);
  
  res.status(204).send();
});

// ========== ERROR HANDLER ==========
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// ========== START SERVER ==========
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`API Server running on port \${PORT}\`);
  console.log(\`\nAvailable endpoints:
  
AUTH:
  POST   /api/auth/register
  POST   /api/auth/login
  POST   /api/auth/refresh
  POST   /api/auth/logout
  
USERS:
  GET    /api/users/me           (authenticated)
  GET    /api/users              (admin only)
  GET    /api/users/:id          (authenticated)
  
POSTS:
  GET    /api/posts
  GET    /api/posts/:id
  POST   /api/posts              (authenticated)
  PUT    /api/posts/:id          (author or admin)
  DELETE /api/posts/:id          (author or admin)
  \`);
});`,
      },
    },

    {
      id: "slide-19",
      title: "Тестирование API: Полный сценарий",
      type: "code",
      content: "Примеры всех запросов для тестирования API:",
      codeExample: {
        language: "bash",
        title: "Complete API Testing Flow",
        code: `# ========== 1. РЕГИСТРАЦИЯ ==========
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'

# Сохраняем токены
ACCESS_TOKEN="<accessToken из ответа>"
REFRESH_TOKEN="<refreshToken из ответа>"

# ========== 2. ВХОД ==========
curl -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "johndoe",
    "password": "SecurePass123!"
  }'

# ========== 3. ПОЛУЧЕНИЕ ПРОФИЛЯ ==========
curl http://localhost:3000/api/users/me \\
  -H "Authorization: Bearer $ACCESS_TOKEN"

# ========== 4. СОЗДАНИЕ ПОСТА ==========
curl -X POST http://localhost:3000/api/posts \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post!"
  }'

# Ответ:
# {
#   "id": "1",
#   "title": "My First Post",
#   "content": "This is the content of my first post!",
#   "authorId": "1",
#   "author": "johndoe",
#   "createdAt": "2025-01-01T12:00:00.000Z",
#   "updatedAt": "2025-01-01T12:00:00.000Z"
# }

# ========== 5. СПИСОК ПОСТОВ (публичный) ==========
curl http://localhost:3000/api/posts

curl http://localhost:3000/api/posts?page=1&limit=5

# ========== 6. ОДИН ПОСТ ==========
curl http://localhost:3000/api/posts/1

# ========== 7. ОБНОВЛЕНИЕ ПОСТА ==========
curl -X PUT http://localhost:3000/api/posts/1 \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Updated Title",
    "content": "Updated content"
  }'

# ========== 8. ПОПЫТКА БЕЗ ТОКЕНА (401) ==========
curl -X POST http://localhost:3000/api/posts \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Should Fail",
    "content": "No token provided"
  }'

# Ответ: {"error": "Authentication required"}

# ========== 9. ПОПЫТКА С НЕВЕРНЫМ ТОКЕНОМ (403) ==========
curl -X POST http://localhost:3000/api/posts \\
  -H "Authorization: Bearer invalid_token_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Should Fail",
    "content": "Invalid token"
  }'

# Ответ: {"error": "Invalid or expired token"}

# ========== 10. ОБНОВЛЕНИЕ ACCESS TOKEN ==========
# (когда истек через 15 минут)
curl -X POST http://localhost:3000/api/auth/refresh \\
  -H "Content-Type: application/json" \\
  -d "{\"refreshToken\": \"$REFRESH_TOKEN\"}"

# Обновляем ACCESS_TOKEN
ACCESS_TOKEN="<новый accessToken>"

# ========== 11. ПОПЫТКА УДАЛИТЬ ЧУЖОЙ ПОСТ (403) ==========
# Регистрируем второго пользователя
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "hacker",
    "email": "hacker@example.com",
    "password": "HackerPass123!"
  }'

HACKER_TOKEN="<accessToken хакера>"

# Пытаемся удалить пост первого пользователя
curl -X DELETE http://localhost:3000/api/posts/1 \\
  -H "Authorization: Bearer $HACKER_TOKEN"

# Ответ: {"error": "Access denied"}

# ========== 12. УСПЕШНОЕ УДАЛЕНИЕ СВОЕГО ПОСТА ==========
curl -X DELETE http://localhost:3000/api/posts/1 \\
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Ответ: 204 No Content

# ========== 13. ADMIN ENDPOINTS ==========
# Регистрируем админа (в реальности - через БД)
# Для теста вручную меняем role в коде

# Получить список всех пользователей (только admin)
curl http://localhost:3000/api/users \\
  -H "Authorization: Bearer $ADMIN_TOKEN"

# Если не админ:
curl http://localhost:3000/api/users \\
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Ответ: {
#   "error": "Insufficient permissions",
#   "required": ["admin"],
#   "current": "user"
# }

# ========== 14. ВАЛИДАЦИЯ ==========
# Короткий username
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "ab",
    "email": "test@example.com",
    "password": "password123"
  }'

# Ответ: {
#   "errors": [
#     {
#       "msg": "Invalid value",
#       "param": "username",
#       "location": "body"
#     }
#   ]
# }

# Невалидный email
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "testuser",
    "email": "not-an-email",
    "password": "password123"
  }'

# Короткий пароль
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "short"
  }'

# ========== 15. LOGOUT ==========
curl -X POST http://localhost:3000/api/auth/logout \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d "{\"refreshToken\": \"$REFRESH_TOKEN\"}"

# После logout refresh token больше не работает
curl -X POST http://localhost:3000/api/auth/refresh \\
  -H "Content-Type: application/json" \\
  -d "{\"refreshToken\": \"$REFRESH_TOKEN\"}"

# Ответ: {"error": "Invalid refresh token"}

# ========== 16. PAGINATION ==========
# Создаем несколько постов
for i in {1..15}; do
  curl -X POST http://localhost:3000/api/posts \\
    -H "Authorization: Bearer $ACCESS_TOKEN" \\
    -H "Content-Type: application/json" \\
    -d "{
      \"title\": \"Post $i\",
      \"content\": \"Content of post $i\"
    }"
done

# Первая страница (по умолчанию 10 постов)
curl http://localhost:3000/api/posts

# Вторая страница
curl http://localhost:3000/api/posts?page=2

# Изменить лимит
curl http://localhost:3000/api/posts?page=1&limit=5

# ========== 17. РАБОТА С POSTMAN ==========
# Импортируйте collection:

{
  "info": {
    "name": "JWT API Tests",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Register",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\"username\":\"{{username}}\",\"email\":\"{{email}}\",\"password\":\"{{password}}\"}"
        },
        "url": "{{base_url}}/api/auth/register"
      }
    }
  ],
  "variable": [
    {"key": "base_url", "value": "http://localhost:3000"},
    {"key": "username", "value": "testuser"},
    {"key": "email", "value": "test@example.com"},
    {"key": "password", "value": "password123"}
  ]
}

# ========== 18. AUTOMATED TESTING SCRIPT ==========
#!/bin/bash

BASE_URL="http://localhost:3000"

echo "🚀 Starting API Tests..."

# 1. Register
echo "📝 Test 1: Register"
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/api/auth/register" \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }')

ACCESS_TOKEN=$(echo $REGISTER_RESPONSE | jq -r '.accessToken')

if [ "$ACCESS_TOKEN" != "null" ]; then
  echo "✅ Registration successful"
else
  echo "❌ Registration failed"
  exit 1
fi

# 2. Create Post
echo "📝 Test 2: Create Post"
CREATE_RESPONSE=$(curl -s -X POST "$BASE_URL/api/posts" \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Test Post",
    "content": "Test content"
  }')

POST_ID=$(echo $CREATE_RESPONSE | jq -r '.id')

if [ "$POST_ID" != "null" ]; then
  echo "✅ Post created: ID=$POST_ID"
else
  echo "❌ Post creation failed"
  exit 1
fi

# 3. Get Post
echo "📝 Test 3: Get Post"
GET_RESPONSE=$(curl -s "$BASE_URL/api/posts/$POST_ID")
TITLE=$(echo $GET_RESPONSE | jq -r '.title')

if [ "$TITLE" = "Test Post" ]; then
  echo "✅ Post retrieved successfully"
else
  echo "❌ Post retrieval failed"
  exit 1
fi

# 4. Unauthorized Access
echo "📝 Test 4: Unauthorized Access"
UNAUTH_RESPONSE=$(curl -s -w "%{http_code}" -o /dev/null -X POST "$BASE_URL/api/posts" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Should Fail",
    "content": "No token"
  }')

if [ "$UNAUTH_RESPONSE" = "401" ]; then
  echo "✅ Unauthorized access blocked"
else
  echo "❌ Security issue: unauthorized access allowed"
  exit 1
fi

echo "🎉 All tests passed!"`,
      },
    },

    {
      id: "slide-20",
      title: "OpenID Connect (OIDC)",
      type: "content",
      content:
        "OpenID Connect — это протокол аутентификации, построенный поверх OAuth 2.0. В то время как OAuth 2.0 решает задачу авторизации (что может делать приложение), OIDC решает задачу аутентификации (кто это). OIDC добавляет ID Token — JWT токен, содержащий информацию о пользователе и событии аутентификации. ID Token всегда подписан, часто зашифрован, содержит claims о пользователе (sub, name, email, picture и др.). Основное отличие от OAuth 2.0: добавляется scope 'openid', появляется /userinfo endpoint, ID Token возвращается вместе с access token. OIDC используют крупные провайдеры: Google Sign-In, Facebook Login, Microsoft Account, Auth0, Okta. Это позволяет реализовать Single Sign-On (SSO) — один вход для множества приложений.",
    },

    {
      id: "slide-21",
      title: "Best Practices: Чек-лист безопасности",
      type: "list",
      content: "Контрольный список для безопасной реализации OAuth/JWT:",
      items: [
        "✓ Используйте HTTPS везде — OAuth/JWT бесполезны без шифрования транспорта",
        "✓ Валидируйте алгоритм JWT — защита от algorithm confusion атак",
        "✓ Проверяйте audience и issuer — защита от token reuse",
        "✓ Короткий срок жизни access tokens (15 минут) + refresh tokens",
        "✓ PKCE обязателен для SPA и мобильных приложений",
        "✓ State параметр для защиты от CSRF в OAuth flows",
        "✓ Храните JWT в памяти приложения, НЕ в localStorage",
        "✓ Используйте httpOnly cookies для refresh tokens",
        "✓ Реализуйте token revocation через blacklist или версионирование",
        "✓ Rate limiting на /login, /token, /refresh endpoints",
        "✓ Логирование всех событий безопасности",
        "✓ Регулярно обновляйте библиотеки (jsonwebtoken, passport, etc)",
      ],
    },

    {
      id: "slide-22",
      title: "Распространенные ошибки при работе с OAuth/JWT",
      type: "two-column",
      content: "Что НЕ нужно делать:",
      leftContent: {
        title: "Критические ошибки",
        items: [
          "❌ Хранение JWT в localStorage (XSS уязвимость)",
          "❌ Использование слабых секретов ('secret', 'password')",
          "❌ Отсутствие проверки алгоритма JWT",
          "❌ Длинный срок жизни access tokens (часы/дни)",
          "❌ Хранение чувствительных данных в JWT payload",
          "❌ Игнорирование claims: exp, aud, iss",
        ],
      },
      rightContent: {
        title: "Плохие практики",
        items: [
          "❌ OAuth без HTTPS (даже в dev окружении)",
          "❌ Отсутствие state в OAuth (CSRF уязвимость)",
          "❌ Публичные клиенты без PKCE",
          "❌ Отсутствие refresh token механизма",
          "❌ Игнорирование redirect_uri validation",
          "❌ Передача токенов в URL parameters",
        ],
      },
    },

    {
      id: "slide-23",
      title: "Debugging: Инструменты для работы с JWT",
      type: "list",
      content: "Полезные инструменты для разработки и отладки:",
      items: [
        "jwt.io — декодирование и проверка JWT токенов онлайн",
        "OAuth.tools — тестирование OAuth 2.0 flows",
        "Postman — коллекции для OAuth 2.0 авторизации",
        "Browser DevTools → Application → Cookies/Storage — проверка хранения токенов",
        "jsonwebtoken npm library — работа с JWT в Node.js",
        "passport.js + passport-jwt — готовые стратегии аутентификации",
        "express-oauth2-jwt-bearer — middleware для Express",
        "node-jose — работа с JWE (encrypted JWT)",
      ],
    },

    {
      id: "slide-24",
      title: "Заключение",
      type: "conclusion",
      content:
        "OAuth 2.0 и JWT — это фундаментальные технологии для современной веб-разработки. Понимание их работы критично для создания безопасных API",
      keyTakeaways: [
        "OAuth 2.0 — это про авторизацию (делегирование доступа), не аутентификацию",
        "JWT — удобный способ передачи данных, но требует правильной реализации",
        "PKCE обязателен для публичных клиентов (SPA, мобильные приложения)",
        "Access tokens должны быть короткоживущими, refresh tokens — в защищенном хранилище",
        "Всегда валидируйте алгоритм, audience, issuer при проверке JWT",
        "Следующий шаг: практика! Создавайте свои API и учитесь на ошибках",
      ],
    },
  ],
};
