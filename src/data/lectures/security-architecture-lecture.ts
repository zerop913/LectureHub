import { Lecture } from "@/types";

export const securityArchitectureLecture: Lecture = {
  id: "security-architecture-lecture",
  title: "Архитектура безопасности веб-приложений",
  description:
    "Изучение компонентов, принципов защиты в глубину и практических аспектов построения безопасной архитектуры веб-приложений",
  groupId: "web-security",
  createdAt: new Date("2025-09-13"),
  updatedAt: new Date("2025-09-13"),
  tags: ["web-security", "веб-разработка", "архитектура", "защита"],
  difficulty: "intermediate",
  duration: 2.5,

  slides: [
    {
      id: "slide-1",
      title: "Архитектура безопасности веб-приложений",
      type: "title",
      content:
        "Компоненты, принципы и практические решения для защиты веб-приложений",
      keyPoints: [
        {
          title: "Многоуровневая защита",
          description:
            "Принципы построения защиты в глубину для веб-приложений",
        },
        {
          title: "Архитектурные компоненты",
          description: "Изучение ключевых элементов безопасной архитектуры",
        },
        {
          title: "Практические решения",
          description: "Реальные примеры и рекомендации по внедрению",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Введение в архитектуру безопасности",
      type: "content",
      content:
        "Архитектура безопасности веб-приложений представляет собой комплексную систему защитных механизмов, встроенных на всех уровнях приложения. Это не просто набор технических решений, а целостная философия проектирования, где безопасность учитывается на каждом этапе разработки.",
    },

    {
      id: "slide-3",
      title: "Основные принципы безопасной архитектуры",
      type: "list",
      content:
        "Фундаментальные принципы, которые должны быть заложены в основу любой безопасной системы:",
      items: [
        "Defense in Depth (Защита в глубину) - многоуровневая система защиты",
        "Принцип минимальных привилегий - предоставление минимально необходимых прав",
        "Fail-Safe Defaults - безопасное поведение по умолчанию при сбоях",
        "Separation of Concerns - разделение ответственности между компонентами",
        "Complete Mediation - контроль всех обращений к защищенным ресурсам",
      ],
    },

    {
      id: "slide-4",
      title: "Архитектурные уровни защиты",
      type: "two-column",
      content: "Веб-приложение защищается на нескольких уровнях одновременно:",
      leftContent: {
        title: "Внешние уровни",
        items: [
          "Сетевая безопасность (Firewall, DDoS защита)",
          "Веб-сервер (Apache, Nginx конфигурация)",
          "Reverse Proxy и Load Balancer",
          "CDN и WAF (Web Application Firewall)",
        ],
      },
      rightContent: {
        title: "Внутренние уровни",
        items: [
          "Приложение (валидация, авторизация)",
          "Фреймворк (встроенные механизмы защиты)",
          "База данных (права доступа, шифрование)",
          "Операционная система и инфраструктура",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Периметр безопасности",
      type: "content",
      content:
        "Периметр безопасности определяет границы защищаемой системы. В современных веб-приложениях периметр может быть размытым из-за облачных технологий, микросервисов и мобильных приложений. Важно четко определить, что находится внутри периметра безопасности, а что за его пределами.",
    },

    {
      id: "slide-6",
      title: "Компоненты сетевой безопасности",
      type: "list",
      content:
        "Первая линия защиты веб-приложения находится на сетевом уровне:",
      items: [
        "Межсетевые экраны (Firewalls) - фильтрация трафика по правилам",
        "Системы обнаружения и предотвращения вторжений (IDS/IPS)",
        "DDoS-защита - защита от атак типа 'отказ в обслуживании'",
        "VPN и безопасные туннели для административного доступа",
        "Сегментация сети - изоляция критических компонентов",
      ],
    },

    {
      id: "slide-7",
      title: "Web Application Firewall (WAF)",
      type: "content",
      content:
        "WAF является специализированным решением для защиты веб-приложений. Он анализирует HTTP/HTTPS трафик и блокирует вредоносные запросы еще до их попадания в приложение. WAF может работать как облачный сервис, так и как локальное решение.",
    },

    {
      id: "slide-8",
      title: "Функции WAF",
      type: "two-column",
      content: "Web Application Firewall выполняет множество защитных функций:",
      leftContent: {
        title: "Основные функции",
        items: [
          "Фильтрация SQL-инъекций",
          "Защита от XSS атак",
          "Блокировка вредоносных ботов",
          "Rate limiting и throttling",
        ],
      },
      rightContent: {
        title: "Дополнительные возможности",
        items: [
          "IP reputation и геоблокировка",
          "Анализ поведения пользователей",
          "Логирование и мониторинг",
          "Интеграция с SIEM системами",
        ],
      },
    },

    {
      id: "slide-9",
      title: "Конфигурация веб-сервера",
      type: "content",
      content:
        "Правильная настройка веб-сервера критически важна для безопасности. Это включает отключение ненужных модулей, скрытие версии сервера, настройку безопасных заголовков HTTP, ограничение размера запросов и правильную обработку ошибок.",
    },

    {
      id: "slide-10",
      title: "Безопасные HTTP заголовки",
      type: "code",
      content: "Пример конфигурации безопасных заголовков для Nginx:",
      codeExample: {
        language: "nginx",
        title: "Nginx Security Headers",
        code: `# Предотвращение clickjacking
add_header X-Frame-Options "SAMEORIGIN" always;

# Защита от XSS
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;

# HTTPS принуждение
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

# Content Security Policy
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'" always;

# Скрытие версии сервера
server_tokens off;`,
      },
    },

    {
      id: "slide-11",
      title: "Архитектура аутентификации",
      type: "content",
      content:
        "Аутентификация является краеугольным камнем безопасности веб-приложений. Современная архитектура должна поддерживать различные методы аутентификации: пароли, многофакторную аутентификацию, биометрию, токены и федеративную аутентификацию.",
    },

    {
      id: "slide-12",
      title: "Типы аутентификации",
      type: "list",
      content:
        "Современные веб-приложения поддерживают различные методы аутентификации:",
      items: [
        "Традиционная аутентификация (логин/пароль) с хешированием паролей",
        "Многофакторная аутентификация (MFA/2FA) - SMS, TOTP, hardware tokens",
        "OAuth 2.0 и OpenID Connect для интеграции с внешними провайдерами",
        "SAML для корпоративной федеративной аутентификации",
        "Биометрическая аутентификация (отпечатки пальцев, Face ID)",
        "Certificate-based authentication для высокого уровня безопасности",
      ],
    },

    {
      id: "slide-13",
      title: "JWT (JSON Web Tokens)",
      type: "content",
      content:
        "JWT является популярным стандартом для передачи информации о пользователе между системами. Токен состоит из трех частей: заголовок, полезная нагрузка и подпись. JWT может быть использован как для аутентификации, так и для авторизации.",
    },

    {
      id: "slide-14",
      title: "Структура JWT токена",
      type: "code",
      content: "Пример создания и проверки JWT токена:",
      codeExample: {
        language: "javascript",
        title: "JWT Implementation",
        code: `const jwt = require('jsonwebtoken');

// Создание токена
const payload = {
  userId: 12345,
  username: 'user@example.com',
  role: 'admin',
  exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 час
};

const token = jwt.sign(payload, process.env.JWT_SECRET, {
  algorithm: 'HS256'
});

// Проверка токена
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log('Пользователь:', decoded.username);
} catch (error) {
  console.error('Недействительный токен');
}`,
      },
    },

    {
      id: "slide-15",
      title: "Система авторизации",
      type: "content",
      content:
        "Авторизация определяет, какие действия может выполнять аутентифицированный пользователь. Существует несколько моделей авторизации: RBAC (Role-Based Access Control), ABAC (Attribute-Based Access Control) и ACL (Access Control Lists).",
    },

    {
      id: "slide-16",
      title: "RBAC vs ABAC",
      type: "two-column",
      content: "Сравнение основных моделей авторизации:",
      leftContent: {
        title: "RBAC (Role-Based)",
        items: [
          "Права назначаются ролям",
          "Пользователи получают роли",
          "Простота администрирования",
          "Подходит для статичных систем",
        ],
      },
      rightContent: {
        title: "ABAC (Attribute-Based)",
        items: [
          "Права основаны на атрибутах",
          "Гибкие правила доступа",
          "Контекстная авторизация",
          "Сложность в настройке",
        ],
      },
    },

    {
      id: "slide-17",
      title: "Реализация RBAC",
      type: "code",
      content: "Пример реализации системы ролей и разрешений:",
      codeExample: {
        language: "javascript",
        title: "RBAC Implementation",
        code: `class RBACSystem {
  constructor() {
    this.roles = new Map();
    this.userRoles = new Map();
  }

  // Создание роли с разрешениями
  createRole(roleName, permissions) {
    this.roles.set(roleName, new Set(permissions));
  }

  // Назначение роли пользователю
  assignRole(userId, roleName) {
    if (!this.userRoles.has(userId)) {
      this.userRoles.set(userId, new Set());
    }
    this.userRoles.get(userId).add(roleName);
  }

  // Проверка разрешения
  hasPermission(userId, permission) {
    const userRoles = this.userRoles.get(userId) || new Set();
    
    for (const role of userRoles) {
      const rolePermissions = this.roles.get(role);
      if (rolePermissions && rolePermissions.has(permission)) {
        return true;
      }
    }
    return false;
  }
}`,
      },
    },

    {
      id: "slide-18",
      title: "Управление сессиями",
      type: "content",
      content:
        "Безопасное управление сессиями включает генерацию криптографически стойких идентификаторов сессий, установку правильных атрибутов cookie, тайм-ауты сессий и защиту от атак фиксации сессии.",
    },

    {
      id: "slide-19",
      title: "Конфигурация безопасных сессий",
      type: "code",
      content: "Пример настройки безопасных сессий в Node.js:",
      codeExample: {
        language: "javascript",
        title: "Secure Session Configuration",
        code: `const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  
  // Безопасные настройки cookie
  cookie: {
    secure: true,        // Только HTTPS
    httpOnly: true,      // Недоступны через JavaScript
    maxAge: 24 * 60 * 60 * 1000, // 24 часа
    sameSite: 'strict'   // CSRF защита
  },
  
  // Хранение в MongoDB
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    touchAfter: 24 * 3600 // обновление раз в сутки
  }),
  
  // Регенерация ID сессии
  genid: () => {
    return require('crypto').randomBytes(32).toString('hex');
  }
}));`,
      },
    },

    {
      id: "slide-20",
      title: "Валидация и санитизация данных",
      type: "content",
      content:
        "Все входящие данные должны быть проверены и очищены. Валидация проверяет соответствие данных ожидаемому формату, а санитизация удаляет или экранирует потенциально опасный контент. Это первая линия защиты от инъекционных атак.",
    },

    {
      id: "slide-21",
      title: "Стратегии валидации",
      type: "list",
      content:
        "Эффективная валидация данных включает несколько уровней проверки:",
      items: [
        "Клиентская валидация - для улучшения пользовательского опыта",
        "Серверная валидация - основная защита (никогда не полагайтесь только на клиент)",
        "Валидация типов данных - строки, числа, email, URL",
        "Валидация длины и диапазонов значений",
        "Валидация против белых списков (whitelist validation)",
        "Контекстная валидация - проверка в зависимости от бизнес-логики",
      ],
    },

    {
      id: "slide-22",
      title: "Библиотека валидации",
      type: "code",
      content: "Пример использования Joi для валидации данных:",
      codeExample: {
        language: "javascript",
        title: "Data Validation with Joi",
        code: `const Joi = require('joi');

// Схема валидации пользователя
const userSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
    
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])'))
    .required(),
    
  age: Joi.number()
    .integer()
    .min(18)
    .max(120)
});

// Валидация данных
const { error, value } = userSchema.validate(requestData);
if (error) {
  return res.status(400).json({ error: error.details[0].message });
}`,
      },
    },

    {
      id: "slide-23",
      title: "Защита от SQL-инъекций",
      type: "content",
      content:
        "SQL-инъекции остаются одной из самых опасных уязвимостей веб-приложений. Основные методы защиты включают использование параметризованных запросов, stored procedures, ORM с правильной конфигурацией и валидацию входных данных.",
    },

    {
      id: "slide-24",
      title: "Параметризованные запросы",
      type: "code",
      content: "Пример безопасной работы с базой данных:",
      codeExample: {
        language: "javascript",
        title: "SQL Injection Prevention",
        code: `// НЕБЕЗОПАСНО - уязвимо к SQL-инъекциям
const unsafeQuery = \`SELECT * FROM users WHERE id = \${userId}\`;

// БЕЗОПАСНО - параметризованный запрос
const mysql = require('mysql2/promise');

async function getUser(userId) {
  const connection = await mysql.createConnection(dbConfig);
  
  // Использование плейсхолдеров
  const [rows] = await connection.execute(
    'SELECT id, username, email FROM users WHERE id = ? AND status = ?',
    [userId, 'active']
  );
  
  return rows[0];
}

// Использование ORM (Sequelize)
const user = await User.findOne({
  where: {
    id: userId,
    status: 'active'
  }
});`,
      },
    },

    {
      id: "slide-25",
      title: "Защита от XSS атак",
      type: "content",
      content:
        "Cross-Site Scripting (XSS) позволяет злоумышленникам выполнять JavaScript код в браузере жертвы. Защита включает экранирование выводимых данных, использование Content Security Policy, валидацию входных данных и правильную обработку пользовательского контента.",
    },

    {
      id: "slide-26",
      title: "Типы XSS атак и защита",
      type: "two-column",
      content: "Различные типы XSS требуют разных подходов к защите:",
      leftContent: {
        title: "Типы XSS",
        items: [
          "Reflected XSS - отражение в ответе",
          "Stored XSS - сохранение в БД",
          "DOM-based XSS - манипуляция DOM",
          "Blind XSS - скрытое выполнение",
        ],
      },
      rightContent: {
        title: "Методы защиты",
        items: [
          "Экранирование HTML сущностей",
          "Content Security Policy (CSP)",
          "HTTPOnly флаг для cookies",
          "Валидация и санитизация ввода",
        ],
      },
    },

    {
      id: "slide-27",
      title: "Content Security Policy",
      type: "code",
      content: "Пример настройки CSP для защиты от XSS:",
      codeExample: {
        language: "javascript",
        title: "Content Security Policy Configuration",
        code: `// Строгая CSP политика
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // Избегайте в продакшене
      "https://cdn.jsdelivr.net"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:"
    ],
    connectSrc: ["'self'"],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"]
  }
}));`,
      },
    },

    {
      id: "slide-28",
      title: "Защита от CSRF атак",
      type: "content",
      content:
        "Cross-Site Request Forgery заставляет пользователя выполнить нежелательные действия в приложении. Защита включает использование CSRF токенов, проверку заголовка Referer, применение SameSite cookie и дополнительную аутентификацию для критических операций.",
    },

    {
      id: "slide-29",
      title: "Реализация CSRF защиты",
      type: "code",
      content: "Пример реализации CSRF токенов:",
      codeExample: {
        language: "javascript",
        title: "CSRF Protection Implementation",
        code: `const csrf = require('csurf');
const cookieParser = require('cookie-parser');

// Настройка CSRF защиты
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  }
});

app.use(cookieParser());
app.use(csrfProtection);

// Предоставление токена клиенту
app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Проверка токена в формах
app.post('/api/sensitive-action', (req, res) => {
  // CSRF токен автоматически проверяется middleware
  // Выполнение защищенного действия
  res.json({ success: true });
});`,
      },
    },

    {
      id: "slide-30",
      title: "Шифрование данных",
      type: "content",
      content:
        "Данные должны быть зашифрованы как при передаче (в транзите), так и при хранении (в покое). Для передачи используется HTTPS/TLS, для хранения - симметричное или асимметричное шифрование в зависимости от требований безопасности.",
    },

    {
      id: "slide-31",
      title: "Шифрование в покое",
      type: "code",
      content: "Пример шифрования чувствительных данных:",
      codeExample: {
        language: "javascript",
        title: "Data Encryption at Rest",
        code: `const crypto = require('crypto');

class DataEncryption {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.keyLength = 32;
  }

  // Шифрование данных
  encrypt(text, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(this.algorithm, key, iv);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  // Расшифровка данных
  decrypt(encryptedData, key) {
    const decipher = crypto.createDecipher(
      this.algorithm, 
      key, 
      Buffer.from(encryptedData.iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));
    
    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}`,
      },
    },

    {
      id: "slide-32",
      title: "Хеширование паролей",
      type: "content",
      content:
        "Пароли никогда не должны храниться в открытом виде. Используйте специализированные функции хеширования паролей как bcrypt, scrypt или Argon2. Эти функции медленные по дизайну и устойчивы к атакам методом перебора.",
    },

    {
      id: "slide-33",
      title: "Реализация bcrypt",
      type: "code",
      content: "Пример безопасного хеширования паролей с bcrypt:",
      codeExample: {
        language: "javascript",
        title: "Password Hashing with bcrypt",
        code: `const bcrypt = require('bcrypt');

class PasswordManager {
  constructor() {
    this.saltRounds = 12; // Увеличивайте со временем
  }

  // Хеширование пароля при регистрации
  async hashPassword(password) {
    try {
      // Проверка сложности пароля
      if (!this.isPasswordStrong(password)) {
        throw new Error('Пароль не соответствует требованиям безопасности');
      }

      const hash = await bcrypt.hash(password, this.saltRounds);
      return hash;
    } catch (error) {
      throw new Error('Ошибка хеширования пароля');
    }
  }

  // Проверка пароля при входе
  async verifyPassword(password, hash) {
    try {
      return await bcrypt.compare(password, hash);
    } catch (error) {
      return false;
    }
  }

  // Проверка сложности пароля
  isPasswordStrong(password) {
    const minLength = 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return password.length >= minLength && hasUpper && hasLower && hasNumber && hasSpecial;
  }
}`,
      },
    },

    {
      id: "slide-34",
      title: "Логирование и мониторинг",
      type: "content",
      content:
        "Комплексная система логирования и мониторинга позволяет обнаруживать атаки в реальном времени, анализировать инциденты и соответствовать требованиям аудита. Важно логировать события безопасности, но не записывать чувствительную информацию.",
    },

    {
      id: "slide-35",
      title: "Категории событий для логирования",
      type: "list",
      content: "Ключевые события, которые должны быть зафиксированы в логах:",
      items: [
        "Аутентификация - успешные и неудачные попытки входа, смена паролей",
        "Авторизация - попытки доступа к защищенным ресурсам",
        "Ошибки приложения - исключения, сбои, таймауты",
        "Подозрительная активность - множественные неудачные попытки, сканирование",
        "Административные действия - изменение конфигурации, управление пользователями",
        "Бизнес-события - финансовые операции, изменение критичных данных",
      ],
    },

    {
      id: "slide-36",
      title: "Структурированное логирование",
      type: "code",
      content: "Пример реализации безопасного логирования:",
      codeExample: {
        language: "javascript",
        title: "Security Logging Implementation",
        code: `const winston = require('winston');

// Настройка логгера
const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ 
      filename: 'logs/security.log',
      maxsize: 5242880, // 5MB
      maxFiles: 10
    }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Функция безопасного логирования
function logSecurityEvent(eventType, userId, details, request) {
  const logEntry = {
    eventType,
    userId: userId || 'anonymous',
    timestamp: new Date().toISOString(),
    ip: request.ip,
    userAgent: request.get('User-Agent'),
    sessionId: request.sessionID,
    details: sanitizeLogData(details)
  };

  securityLogger.info('Security Event', logEntry);
}

// Санитизация данных для логов
function sanitizeLogData(data) {
  const sensitiveFields = ['password', 'token', 'ssn', 'creditCard'];
  const sanitized = { ...data };
  
  sensitiveFields.forEach(field => {
    if (sanitized[field]) {
      sanitized[field] = '[REDACTED]';
    }
  });
  
  return sanitized;
}`,
      },
    },

    {
      id: "slide-37",
      title: "Системы мониторинга безопасности",
      type: "content",
      content:
        "SIEM (Security Information and Event Management) системы агрегируют и анализируют логи из различных источников для выявления угроз. Они используют корреляционные правила, машинное обучение и поведенческую аналитику для обнаружения аномалий.",
    },

    {
      id: "slide-38",
      title: "Обнаружение аномалий",
      type: "two-column",
      content: "Методы выявления подозрительной активности:",
      leftContent: {
        title: "Статистические методы",
        items: [
          "Анализ частоты запросов",
          "Выявление необычных паттернов",
          "Геолокационная аналитика",
          "Временные аномалии",
        ],
      },
      rightContent: {
        title: "Поведенческая аналитика",
        items: [
          "Профилирование пользователей",
          "Машинное обучение",
          "Анализ последовательности действий",
          "Детекция ботов и автоматизации",
        ],
      },
    },

    {
      id: "slide-39",
      title: "Rate Limiting и Throttling",
      type: "content",
      content:
        "Ограничение частоты запросов защищает от злоупотреблений и DoS атак. Rate limiting может быть реализован на различных уровнях: IP-адрес, пользователь, API ключ. Используются алгоритмы: Token Bucket, Sliding Window, Fixed Window.",
    },

    {
      id: "slide-40",
      title: "Реализация Rate Limiting",
      type: "code",
      content: "Пример middleware для ограничения частоты запросов:",
      codeExample: {
        language: "javascript",
        title: "Rate Limiting Middleware",
        code: `const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const Redis = require('redis');

const redisClient = Redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

// Общий лимит для всех запросов
const generalLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'rl:general:'
  }),
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 1000, // максимум 1000 запросов
  message: {
    error: 'Слишком много запросов, попробуйте позже'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Строгий лимит для авторизации
const authLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'rl:auth:'
  }),
  windowMs: 15 * 60 * 1000,
  max: 5, // только 5 попыток входа
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    return req.ip + ':' + (req.body.username || 'anonymous');
  }
});

// Применение лимитов
app.use('/api/', generalLimiter);
app.use('/api/auth/login', authLimiter);`,
      },
    },

    {
      id: "slide-41",
      title: "API Gateway и микросервисы",
      type: "content",
      content:
        "В архитектуре микросервисов API Gateway служит единой точкой входа, обеспечивая централизованную безопасность. Он выполняет аутентификацию, авторизацию, rate limiting, логирование и маршрутизацию запросов между сервисами.",
    },

    {
      id: "slide-42",
      title: "Функции API Gateway",
      type: "list",
      content: "Ключевые функции безопасности API Gateway:",
      items: [
        "Централизованная аутентификация и авторизация пользователей",
        "Проверка API ключей и JWT токенов",
        "Rate limiting и quota управление для каждого клиента",
        "Request/Response трансформация и валидация",
        "Логирование всех API вызовов для аудита",
        "CORS политики и защита от межсайтовых запросов",
        "Load balancing и circuit breaker для отказоустойчивости",
      ],
    },

    {
      id: "slide-43",
      title: "Service Mesh безопасность",
      type: "content",
      content:
        "Service Mesh обеспечивает безопасную коммуникацию между микросервисами. Istio, Linkerd и другие решения предоставляют mutual TLS (mTLS), identity management, traffic policies и детальный мониторинг трафика между сервисами.",
    },

    {
      id: "slide-44",
      title: "Zero Trust Architecture",
      type: "two-column",
      content: "Принципы архитектуры нулевого доверия:",
      leftContent: {
        title: "Основные принципы",
        items: [
          "Никому не доверять по умолчанию",
          "Всегда проверять и авторизовывать",
          "Минимальные привилегии доступа",
          "Микросегментация сети",
        ],
      },
      rightContent: {
        title: "Реализация",
        items: [
          "Identity и device verification",
          "Динамические политики безопасности",
          "Continuous monitoring",
          "Encryption everywhere",
        ],
      },
    },

    {
      id: "slide-45",
      title: "DevSecOps и безопасность в CI/CD",
      type: "content",
      content:
        "Интеграция безопасности в процесс разработки включает статический анализ кода, сканирование зависимостей, тестирование безопасности, автоматизированные проверки и безопасное развертывание. Безопасность становится частью каждого этапа разработки.",
    },

    {
      id: "slide-46",
      title: "Инструменты DevSecOps",
      type: "list",
      content:
        "Основные категории инструментов для автоматизации безопасности:",
      items: [
        "SAST (Static Application Security Testing) - ESLint Security, SonarQube",
        "DAST (Dynamic Application Security Testing) - OWASP ZAP, Burp Suite",
        "SCA (Software Composition Analysis) - Snyk, OWASP Dependency Check",
        "Container Security - Clair, Twistlock, Aqua Security",
        "Infrastructure as Code scanning - Terraform Security, CloudFormation Guard",
        "Secrets management - HashiCorp Vault, AWS Secrets Manager",
      ],
    },

    {
      id: "slide-47",
      title: "Pipeline безопасности",
      type: "code",
      content: "Пример GitLab CI/CD pipeline с проверками безопасности:",
      codeExample: {
        language: "yaml",
        title: "Security Pipeline Configuration",
        code: `stages:
  - test
  - security
  - build
  - deploy

# Статический анализ кода
sast:
  stage: security
  script:
    - npm audit --audit-level moderate
    - npx eslint . --ext .js,.ts --config .eslintrc-security.js
    - sonar-scanner -Dsonar.projectKey=my-app
  allow_failure: false

# Проверка зависимостей
dependency_scanning:
  stage: security
  script:
    - npm audit --production
    - snyk test --severity-threshold=high
  allow_failure: false

# Сканирование контейнера
container_scanning:
  stage: security
  script:
    - docker build -t my-app:$CI_COMMIT_SHA .
    - trivy image --exit-code 1 --severity HIGH,CRITICAL my-app:$CI_COMMIT_SHA
  allow_failure: false

# Проверка секретов
secrets_detection:
  stage: security
  script:
    - truffleHog --regex --entropy=False .
  allow_failure: false

# Деплой только после прохождения всех проверок
deploy:
  stage: deploy
  script:
    - echo "Deploying secure application"
  dependencies:
    - sast
    - dependency_scanning
    - container_scanning
    - secrets_detection`,
      },
    },

    {
      id: "slide-48",
      title: "Incident Response Plan",
      type: "content",
      content:
        "План реагирования на инциденты безопасности определяет процедуры обнаружения, анализа, сдерживания, устранения и восстановления после инцидентов. Включает роли и ответственность команды, процедуры эскалации и коммуникации.",
    },

    {
      id: "slide-49",
      title: "Этапы реагирования на инциденты",
      type: "list",
      content: "Стандартный процесс реагирования на инциденты безопасности:",
      items: [
        "Подготовка - создание команды реагирования, процедур и инструментов",
        "Обнаружение и анализ - мониторинг, получение уведомлений, первичная оценка",
        "Сдерживание - изоляция пораженных систем, предотвращение распространения",
        "Искоренение - удаление причин инцидента, исправление уязвимостей",
        "Восстановление - возврат систем в нормальное состояние, мониторинг",
        "Lessons Learned - анализ инцидента, улучшение процессов и мер защиты",
      ],
    },

    {
      id: "slide-50",
      title: "Заключение и будущие тенденции",
      type: "conclusion",
      content:
        "Архитектура безопасности веб-приложений - это живая система, которая должна эволюционировать вместе с угрозами и технологиями",
      keyTakeaways: [
        "Безопасность должна быть встроена в архитектуру с самого начала, а не добавлена потом",
        "Defense in Depth - многоуровневая защита обеспечивает лучшую безопасность",
        "Автоматизация и DevSecOps позволяют масштабировать процессы безопасности",
        "Постоянный мониторинг и анализ помогают выявлять угрозы в реальном времени",
        "Планирование реагирования на инциденты критически важно для минимизации ущерба",
      ],
    },
  ],
};
