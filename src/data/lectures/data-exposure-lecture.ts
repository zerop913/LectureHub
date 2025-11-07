import { Lecture } from "@/types";

export const dataExposureLecture: Lecture = {
  id: "data-exposure-lecture",
  title: "Раскрытие конфиденциальных данных",
  description:
    "Изучение угроз раскрытия конфиденциальных данных: передача по незащищенным каналам, HTTPS и TLS, шифрование данных и методы защиты",
  groupId: "web-security",
  createdAt: new Date("2025-11-07"),
  updatedAt: new Date("2025-11-07"),
  tags: [
    "web-security",
    "HTTPS",
    "TLS",
    "шифрование",
    "OWASP",
    "конфиденциальность",
  ],
  difficulty: "intermediate",
  duration: 4,

  slides: [
    {
      id: "slide-1",
      title: "Раскрытие конфиденциальных данных",
      type: "title",
      content:
        "Защита данных при передаче и хранении: HTTPS, TLS и криптографические методы",
      keyPoints: [
        {
          title: "Угрозы раскрытия данных",
          description: "Передача по незащищенным каналам и их последствия",
        },
        {
          title: "Протоколы HTTPS и TLS",
          description: "Современные стандарты защищенной передачи данных",
        },
        {
          title: "Шифрование данных",
          description: "Методы защиты данных в покое и в движении",
        },
        {
          title: "Практические меры защиты",
          description: "Реализация безопасности в веб-приложениях",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое раскрытие конфиденциальных данных?",
      type: "content",
      content:
        "Раскрытие конфиденциальных данных (Sensitive Data Exposure) — это уязвимость, при которой конфиденциальная информация становится доступной неавторизованным лицам. Это происходит при передаче данных по незащищенным каналам, неправильном хранении или недостаточной защите. Согласно OWASP Top 10, это одна из критических угроз веб-безопасности. Конфиденциальные данные включают пароли, номера кредитных карт, персональные данные, медицинские записи, коммерческую тайну и другую чувствительную информацию, требующую защиты согласно законодательству (GDPR, HIPAA).",
    },

    {
      id: "slide-3",
      title: "Виды конфиденциальных данных",
      type: "list",
      content: "Типы данных, требующих особой защиты:",
      items: [
        "Учетные данные — пароли, токены доступа, API ключи, сертификаты",
        "Финансовая информация — номера банковских карт, счетов, платежные данные",
        "Персональные данные — имена, адреса, телефоны, паспортные данные, биометрия",
        "Медицинская информация — истории болезней, диагнозы, результаты анализов",
        "Коммерческая тайна — бизнес-планы, финансовые отчеты, клиентские базы",
        "Технические данные — исходный код, конфигурации, ключи шифрования",
        "Сессионные данные — cookies, токены сессий, refresh tokens",
      ],
    },

    {
      id: "slide-4",
      title: "Последствия утечки данных",
      type: "two-column",
      content: "Раскрытие конфиденциальных данных имеет серьезные последствия",
      leftContent: {
        title: "Для бизнеса",
        items: [
          "Финансовые потери и штрафы GDPR",
          "Репутационный ущерб и потеря доверия",
          "Судебные иски от пострадавших",
          "Потеря конкурентных преимуществ",
        ],
      },
      rightContent: {
        title: "Для пользователей",
        items: [
          "Кража личных данных и мошенничество",
          "Финансовые потери через скомпрометированные карты",
          "Шантаж и вымогательство",
          "Нарушение конфиденциальности",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Передача данных по незащищенным каналам",
      type: "content",
      content:
        "Передача данных по HTTP (без шифрования) — одна из главных причин раскрытия конфиденциальной информации. Когда данные передаются в открытом виде, любой промежуточный узел сети может перехватить и прочитать их. Это особенно опасно в публичных Wi-Fi сетях, где злоумышленники могут легко перехватывать трафик. Атаки типа Man-in-the-Middle (MITM) позволяют не только читать, но и изменять передаваемые данные. Согласно Google Transparency Report, за последние 8 лет объем зашифрованного веб-трафика вырос на 50-80%, но многие сайты до сих пор используют незащищенные каналы для критически важных операций.",
    },

    {
      id: "slide-6",
      title: "Атака Man-in-the-Middle (MITM)",
      type: "code",
      content: "Пример перехвата незащищенного HTTP трафика:",
      codeExample: {
        language: "python",
        title: "Демонстрация уязвимости HTTP",
        code: `# УЯЗВИМЫЙ КОД - передача данных по HTTP
import requests

# Отправка логина и пароля по HTTP
response = requests.post('http://example.com/login', data={
    'username': 'admin',
    'password': 'secretpassword123'  # Передается в открытом виде!
})

"""
Проблема: данные передаются без шифрования
Злоумышленник в той же сети может перехватить:

POST /login HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

username=admin&password=secretpassword123

Инструменты для перехвата:
- Wireshark - анализатор сетевого трафика
- tcpdump - утилита захвата пакетов
- mitmproxy - прокси для перехвата HTTPS
- Burp Suite - инструмент для тестирования безопасности

Сценарий атаки:
1. Злоумышленник в публичном Wi-Fi
2. Использует ARP spoofing для перехвата трафика
3. Читает все HTTP запросы/ответы
4. Получает учетные данные пользователей
"""

# БЕЗОПАСНЫЙ КОД - использование HTTPS
response = requests.post('https://example.com/login', data={
    'username': 'admin',
    'password': 'secretpassword123'
})

# Дополнительная проверка сертификата
response = requests.post('https://example.com/login', 
    data={'username': 'admin', 'password': 'secretpassword123'},
    verify=True  # Проверка SSL сертификата
)`,
      },
    },

    {
      id: "slide-7",
      title: "HTTPS и SSL/TLS: основы",
      type: "content",
      content:
        "HTTPS (HyperText Transfer Protocol Secure) — это защищенная версия HTTP, использующая протокол TLS (Transport Layer Security) для шифрования данных. TLS является современным преемником устаревшего SSL. Протокол TLS обеспечивает три ключевые функции: конфиденциальность (шифрование данных), целостность (защита от изменения) и аутентификацию (проверка подлинности сервера). Когда браузер подключается к HTTPS-сайту, он устанавливает защищенное соединение через процедуру TLS handshake, после чего все данные передаются в зашифрованном виде. Современные браузеры помечают HTTP-сайты как небезопасные, стимулируя переход на HTTPS.",
    },

    {
      id: "slide-8",
      title: "Версии TLS и их безопасность",
      type: "list",
      content: "Эволюция протокола TLS и рекомендации по использованию:",
      items: [
        "SSL 2.0/3.0 (устаревшие) — множество уязвимостей, использовать ЗАПРЕЩЕНО",
        "TLS 1.0 (2006) — устарел, содержит уязвимости CBC-режима, не рекомендуется",
        "TLS 1.1 (2008) — улучшенная защита от CBC-атак, но также устарел с 2020 года",
        "TLS 1.2 (2008) — современный стандарт, добавлены AEAD-режимы (GCM, CCM), поддержка SHA-256",
        "TLS 1.3 (2018) — последняя версия, удалены устаревшие алгоритмы, ускорена установка соединения (1-RTT, 0-RTT), обязательная forward secrecy",
        "Рекомендация 2025: использовать только TLS 1.2+ (желательно TLS 1.3)",
        "Отключить поддержку SSL 2.0/3.0, TLS 1.0/1.1 на серверах",
      ],
    },

    {
      id: "slide-9",
      title: "Как работает TLS Handshake",
      type: "content",
      content:
        "TLS Handshake — это процесс установления защищенного соединения между клиентом и сервером. Он состоит из нескольких этапов: 1) ClientHello — клиент отправляет список поддерживаемых алгоритмов шифрования и хеш-функций. 2) ServerHello — сервер выбирает алгоритмы и отправляет свой цифровой сертификат. 3) Проверка сертификата — клиент проверяет подлинность сертификата через цепочку доверия к корневым центрам сертификации. 4) Обмен ключами — используя алгоритм Диффи-Хеллмана или ECDH, стороны генерируют общий секретный ключ. 5) После успешного handshake все данные шифруются симметричным алгоритмом (AES) для высокой производительности.",
    },

    {
      id: "slide-10",
      title: "Настройка HTTPS в Node.js",
      type: "code",
      content: "Создание HTTPS сервера с правильной конфигурацией:",
      codeExample: {
        language: "javascript",
        title: "HTTPS Server в Node.js",
        code: `const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

// Загрузка SSL/TLS сертификатов
const options = {
  key: fs.readFileSync('path/to/private-key.pem'),
  cert: fs.readFileSync('path/to/certificate.pem'),
  ca: fs.readFileSync('path/to/ca-bundle.pem'), // необязательно
  
  // Настройки безопасности TLS
  minVersion: 'TLSv1.2', // Минимальная версия TLS
  maxVersion: 'TLSv1.3', // Максимальная версия TLS
  
  // Список разрешенных cipher suites (алгоритмы шифрования)
  ciphers: [
    'ECDHE-RSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-ECDSA-AES128-GCM-SHA256',
    'ECDHE-ECDSA-AES256-GCM-SHA384',
    'TLS_AES_128_GCM_SHA256', // TLS 1.3
    'TLS_AES_256_GCM_SHA384', // TLS 1.3
  ].join(':'),
  
  // Сервер выбирает порядок cipher suites
  honorCipherOrder: true,
  
  // Отключить слабые протоколы
  secureOptions: 
    require('crypto').constants.SSL_OP_NO_SSLv2 |
    require('crypto').constants.SSL_OP_NO_SSLv3 |
    require('crypto').constants.SSL_OP_NO_TLSv1 |
    require('crypto').constants.SSL_OP_NO_TLSv1_1
};

app.get('/', (req, res) => {
  res.send('Secure HTTPS Connection');
});

// Создание HTTPS сервера
const server = https.createServer(options, app);

server.listen(443, () => {
  console.log('HTTPS сервер запущен на порту 443');
});

// Перенаправление HTTP -> HTTPS
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(301, { 
    'Location': 'https://' + req.headers.host + req.url 
  });
  res.end();
}).listen(80);`,
      },
    },

    {
      id: "slide-11",
      title: "SSL/TLS сертификаты",
      type: "content",
      content:
        "SSL/TLS сертификаты — это цифровые документы, которые подтверждают подлинность веб-сайта и содержат открытый ключ для шифрования. Сертификат выдается доверенным центром сертификации (Certificate Authority, CA) после проверки владельца домена. Существует несколько типов сертификатов: Domain Validation (DV) — базовая проверка домена, Organization Validation (OV) — проверка организации, Extended Validation (EV) — расширенная проверка с отображением зеленой адресной строки. Для бесплатных сертификатов популярен сервис Let's Encrypt, который автоматизирует процесс получения и обновления сертификатов. Сертификаты имеют срок действия и требуют регулярного обновления.",
    },

    {
      id: "slide-12",
      title: "Получение бесплатного SSL сертификата",
      type: "code",
      content: "Использование Let's Encrypt с Certbot:",
      codeExample: {
        language: "bash",
        title: "Let's Encrypt Certbot",
        code: `# Установка Certbot (Ubuntu/Debian)
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Получение сертификата для Nginx
sudo certbot --nginx -d example.com -d www.example.com

# Получение сертификата для Apache
sudo certbot --apache -d example.com -d www.example.com

# Только получить сертификат (без автоматической настройки)
sudo certbot certonly --standalone -d example.com

# Автоматическое обновление сертификатов (cronjob)
sudo certbot renew --dry-run  # тестовый запуск
sudo crontab -e
# Добавить строку для ежедневной проверки обновлений:
# 0 3 * * * certbot renew --quiet

# Проверка статуса сертификата
sudo certbot certificates

# Nginx конфигурация после установки сертификата
# /etc/nginx/sites-available/example.com
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;
    
    # Пути к сертификатам Let's Encrypt
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Современные настройки SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # OCSP Stapling для быстрой проверки статуса сертификата
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    # Заголовок HSTS (принудительное использование HTTPS)
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    location / {
        # Ваше приложение
        proxy_pass http://localhost:3000;
    }
}

# Перенаправление HTTP -> HTTPS
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$server_name$request_uri;
}`,
      },
    },

    {
      id: "slide-13",
      title: "HTTP Strict Transport Security (HSTS)",
      type: "content",
      content:
        "HSTS — это механизм безопасности, который заставляет браузеры всегда использовать HTTPS для подключения к сайту, даже если пользователь ввел HTTP-адрес. Это защищает от атак SSL Strip, когда злоумышленник пытается понизить защищенное соединение до незащищенного. При первом посещении сервер отправляет заголовок Strict-Transport-Security с параметрами: max-age (время действия политики в секундах), includeSubDomains (применять ко всем поддоменам) и preload (включение в список предварительной загрузки браузера). После получения этого заголовка браузер автоматически будет использовать HTTPS для всех последующих запросов к домену в течение указанного времени.",
    },

    {
      id: "slide-14",
      title: "Реализация HSTS",
      type: "code",
      content: "Настройка HSTS в различных окружениях:",
      codeExample: {
        language: "javascript",
        title: "HSTS Configuration",
        code: `// ============ Express.js + helmet ============
const express = require('express');
const helmet = require('helmet');

const app = express();

// Настройка HSTS через helmet
app.use(helmet.hsts({
  maxAge: 31536000,        // 1 год в секундах
  includeSubDomains: true, // Применять ко всем поддоменам
  preload: true            // Разрешить добавление в HSTS preload list
}));

// Альтернатива: ручная установка заголовка
app.use((req, res, next) => {
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  next();
});

// ============ Next.js (next.config.js) ============
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      }
    ];
  }
};

// ============ Nginx ============
/*
server {
    listen 443 ssl http2;
    server_name example.com;
    
    # HSTS заголовок
    add_header Strict-Transport-Security 
               "max-age=31536000; includeSubDomains; preload" always;
    
    # Остальная конфигурация...
}
*/

// ============ Apache (.htaccess) ============
/*
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security 
           "max-age=31536000; includeSubDomains; preload"
</IfModule>
*/

// ВАЖНО: Шаги перед включением HSTS
// 1. Убедитесь, что весь сайт работает по HTTPS
// 2. Протестируйте с коротким max-age (например, 300 секунд)
// 3. Проверьте все поддомены на поддержку HTTPS
// 4. Постепенно увеличивайте max-age
// 5. Только после этого добавляйте preload

// Добавление в HSTS Preload List
// 1. Посетите https://hstspreload.org/
// 2. Введите ваш домен
// 3. Проверьте соответствие требованиям
// 4. Отправьте заявку на добавление`,
      },
    },

    {
      id: "slide-15",
      title: "Шифрование данных: основы",
      type: "title",
      content: "Защита данных в покое и в движении",
      keyPoints: [
        {
          title: "Данные в движении (in transit)",
          description: "Защита при передаче через сеть — TLS/HTTPS",
        },
        {
          title: "Данные в покое (at rest)",
          description: "Защита при хранении — шифрование БД и файлов",
        },
        {
          title: "Данные в использовании (in use)",
          description: "Защита в памяти — конфиденциальные вычисления",
        },
      ],
    },

    {
      id: "slide-16",
      title: "Шифрование данных в базе",
      type: "code",
      content: "Шифрование конфиденциальных полей в базе данных:",
      codeExample: {
        language: "javascript",
        title: "Database Field Encryption",
        code: `const crypto = require('crypto');

// Конфигурация шифрования
const ALGORITHM = 'aes-256-gcm';
const KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); // 32 байта
const IV_LENGTH = 16; // Для AES

// Функция шифрования
function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  // Возвращаем iv + authTag + зашифрованные данные
  return iv.toString('hex') + ':' + 
         authTag.toString('hex') + ':' + 
         encrypted;
}

// Функция расшифровки
function decrypt(encryptedData) {
  const parts = encryptedData.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const authTag = Buffer.from(parts[1], 'hex');
  const encrypted = parts[2];
  
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

// Использование с Prisma
const prisma = require('@prisma/client');

async function createUser(userData) {
  // Шифруем конфиденциальные поля перед сохранением
  const user = await prisma.user.create({
    data: {
      email: userData.email,
      // Шифруем номер кредитной карты
      creditCard: encrypt(userData.creditCard),
      // Шифруем номер телефона
      phone: encrypt(userData.phone),
      // Шифруем адрес
      address: encrypt(userData.address),
      // Пароль хешируется отдельно (bcrypt)
      password: await bcrypt.hash(userData.password, 10)
    }
  });
  
  return user;
}

async function getUser(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  
  if (user) {
    // Расшифровываем конфиденциальные поля
    return {
      ...user,
      creditCard: decrypt(user.creditCard),
      phone: decrypt(user.phone),
      address: decrypt(user.address)
    };
  }
  
  return null;
}

// Генерация ключа шифрования (один раз)
function generateEncryptionKey() {
  const key = crypto.randomBytes(32).toString('hex');
  console.log('ENCRYPTION_KEY=' + key);
  // Сохраните в .env файл!
}

// ВАЖНО: 
// 1. Храните ключ в переменных окружения
// 2. Никогда не коммитьте ключ в git
// 3. Используйте разные ключи для dev/staging/production
// 4. Регулярно ротируйте ключи
// 5. Для поиска по зашифрованным полям используйте хеши`,
      },
    },

    {
      id: "slide-17",
      title: "Прозрачное шифрование базы данных (TDE)",
      type: "content",
      content:
        "Transparent Data Encryption (TDE) — это функция шифрования на уровне СУБД, которая автоматически шифрует файлы базы данных на диске без изменения кода приложения. TDE защищает данные at rest (в покое) от несанкционированного доступа к файлам базы данных. Основные преимущества: прозрачность для приложения (не требуется изменение кода), автоматическое шифрование всех данных, защита от кражи физических дисков или бэкапов. TDE поддерживается большинством современных СУБД: PostgreSQL (pgcrypto), MySQL (InnoDB tablespace encryption), SQL Server (TDE), Oracle Database (TDE). При использовании TDE важно правильно управлять ключами шифрования через Key Management System (KMS).",
    },

    {
      id: "slide-18",
      title: "Настройка TDE в PostgreSQL",
      type: "code",
      content: "Шифрование данных на уровне базы данных:",
      codeExample: {
        language: "sql",
        title: "PostgreSQL Encryption",
        code: `-- Установка расширения pgcrypto
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Создание таблицы с шифрованными столбцами
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    -- Шифрование конфиденциальных данных
    credit_card_encrypted BYTEA,
    ssn_encrypted BYTEA,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Вставка данных с шифрованием (симметричное)
INSERT INTO users (email, credit_card_encrypted, ssn_encrypted)
VALUES (
    'user@example.com',
    pgp_sym_encrypt('4111-1111-1111-1111', 'my-secret-key'),
    pgp_sym_encrypt('123-45-6789', 'my-secret-key')
);

-- Чтение расшифрованных данных
SELECT 
    id,
    email,
    pgp_sym_decrypt(credit_card_encrypted, 'my-secret-key') as credit_card,
    pgp_sym_decrypt(ssn_encrypted, 'my-secret-key') as ssn
FROM users
WHERE id = 1;

-- Асимметричное шифрование (открытый/закрытый ключ)
-- Генерация ключей (выполнить вне БД)
-- openssl genrsa -out private.key 2048
-- openssl rsa -in private.key -pubout -out public.key

-- Чтение ключей в переменные
\\set private_key \`cat private.key\`
\\set public_key \`cat public.key\`

-- Создание таблицы для асимметричного шифрования
CREATE TABLE secure_messages (
    id SERIAL PRIMARY KEY,
    message_encrypted BYTEA,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Шифрование открытым ключом
INSERT INTO secure_messages (message_encrypted)
VALUES (
    pgp_pub_encrypt(
        'Конфиденциальное сообщение',
        dearmor(:'public_key')
    )
);

-- Расшифровка закрытым ключом
SELECT 
    id,
    pgp_pub_decrypt(
        message_encrypted,
        dearmor(:'private_key')
    ) as message
FROM secure_messages
WHERE id = 1;

-- Хеширование для поиска (searchable encryption)
CREATE TABLE users_searchable (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    ssn_encrypted BYTEA,
    ssn_hash VARCHAR(64), -- Хеш для поиска
    INDEX(ssn_hash)
);

-- Вставка с хешем
INSERT INTO users_searchable (email, ssn_encrypted, ssn_hash)
VALUES (
    'user@example.com',
    pgp_sym_encrypt('123-45-6789', 'my-secret-key'),
    encode(digest('123-45-6789', 'sha256'), 'hex')
);

-- Поиск по хешу (без расшифровки)
SELECT id, email 
FROM users_searchable
WHERE ssn_hash = encode(digest('123-45-6789', 'sha256'), 'hex');

-- ВАЖНО:
-- 1. Ключи должны храниться вне базы данных
-- 2. Используйте переменные окружения или KMS
-- 3. Регулярно ротируйте ключи шифрования`,
      },
    },

    {
      id: "slide-19",
      title: "Управление ключами шифрования",
      type: "content",
      content:
        "Key Management System (KMS) — критически важный компонент безопасности для управления криптографическими ключами. KMS обеспечивает централизованное хранение, ротацию, контроль доступа и аудит использования ключей. Основные принципы управления ключами: никогда не храните ключи в коде или системе контроля версий, используйте разные ключи для разных окружений (dev/staging/production), регулярно ротируйте ключи (рекомендуется каждые 90 дней), используйте иерархию ключей (master key шифрует data keys), обеспечьте резервное копирование ключей с контролем доступа. Популярные KMS решения: AWS KMS, Google Cloud KMS, Azure Key Vault, HashiCorp Vault.",
    },

    {
      id: "slide-20",
      title: "Использование AWS KMS",
      type: "code",
      content: "Интеграция с AWS Key Management Service:",
      codeExample: {
        language: "javascript",
        title: "AWS KMS Integration",
        code: `const { KMSClient, EncryptCommand, DecryptCommand } = require('@aws-sdk/client-kms');

const kmsClient = new KMSClient({ region: 'us-east-1' });
const KEY_ID = process.env.AWS_KMS_KEY_ID;

// Шифрование данных с помощью KMS
async function encryptWithKMS(plaintext) {
  const command = new EncryptCommand({
    KeyId: KEY_ID,
    Plaintext: Buffer.from(plaintext, 'utf8')
  });
  
  const response = await kmsClient.send(command);
  
  // Возвращаем зашифрованные данные в base64
  return Buffer.from(response.CiphertextBlob).toString('base64');
}

// Расшифровка данных с помощью KMS
async function decryptWithKMS(ciphertext) {
  const command = new DecryptCommand({
    CiphertextBlob: Buffer.from(ciphertext, 'base64')
  });
  
  const response = await kmsClient.send(command);
  
  return Buffer.from(response.Plaintext).toString('utf8');
}

// Envelope Encryption (конверт шифрования)
// Используется для шифрования больших объемов данных
const crypto = require('crypto');

async function envelopeEncrypt(data) {
  // 1. Генерируем Data Encryption Key (DEK)
  const dek = crypto.randomBytes(32);
  
  // 2. Шифруем данные с помощью DEK
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', dek, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag();
  
  // 3. Шифруем DEK с помощью KMS
  const encryptedDEK = await encryptWithKMS(dek.toString('base64'));
  
  // 4. Возвращаем зашифрованный DEK + зашифрованные данные
  return {
    encryptedDEK,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex'),
    ciphertext: encrypted
  };
}

async function envelopeDecrypt(envelope) {
  // 1. Расшифровываем DEK с помощью KMS
  const dekBase64 = await decryptWithKMS(envelope.encryptedDEK);
  const dek = Buffer.from(dekBase64, 'base64');
  
  // 2. Расшифровываем данные с помощью DEK
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    dek,
    Buffer.from(envelope.iv, 'hex')
  );
  decipher.setAuthTag(Buffer.from(envelope.authTag, 'hex'));
  
  let decrypted = decipher.update(envelope.ciphertext, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

// Пример использования с базой данных
async function saveSecureData(userId, sensitiveData) {
  const envelope = await envelopeEncrypt(JSON.stringify(sensitiveData));
  
  await db.secureData.create({
    data: {
      userId,
      encryptedDEK: envelope.encryptedDEK,
      iv: envelope.iv,
      authTag: envelope.authTag,
      ciphertext: envelope.ciphertext
    }
  });
}

async function getSecureData(userId) {
  const record = await db.secureData.findUnique({
    where: { userId }
  });
  
  if (!record) return null;
  
  const decrypted = await envelopeDecrypt({
    encryptedDEK: record.encryptedDEK,
    iv: record.iv,
    authTag: record.authTag,
    ciphertext: record.ciphertext
  });
  
  return JSON.parse(decrypted);
}`,
      },
    },

    {
      id: "slide-21",
      title: "Безопасное хранение паролей",
      type: "content",
      content:
        "Пароли никогда не должны храниться в открытом виде или шифроваться обратимым шифрованием. Вместо этого используются криптографические хеш-функции с солью (salt). Современные алгоритмы хеширования паролей: bcrypt (рекомендуется, cost factor 10-12), Argon2 (победитель Password Hashing Competition 2015, лучший выбор для новых проектов), scrypt (хорошая альтернатива, требует много памяти), PBKDF2 (стандарт, но менее безопасен чем bcrypt). НИКОГДА не используйте MD5, SHA-1 или простой SHA-256 для паролей — они слишком быстрые и уязвимы к брутфорсу. Соль должна быть уникальной для каждого пароля и генерироваться криптографически стойким генератором случайных чисел.",
    },

    {
      id: "slide-22",
      title: "Хеширование паролей с bcrypt и Argon2",
      type: "code",
      content: "Безопасное хранение паролей:",
      codeExample: {
        language: "javascript",
        title: "Password Hashing",
        code: `// ============ bcrypt ============
const bcrypt = require('bcrypt');

// Хеширование пароля при регистрации
async function hashPassword(plainPassword) {
  const saltRounds = 12; // Cost factor (чем больше, тем медленнее и безопаснее)
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

// Проверка пароля при входе
async function verifyPassword(plainPassword, hashedPassword) {
  const isValid = await bcrypt.compare(plainPassword, hashedPassword);
  return isValid;
}

// Пример регистрации пользователя
async function registerUser(username, password) {
  const hashedPassword = await hashPassword(password);
  
  const user = await db.user.create({
    data: {
      username,
      password: hashedPassword // Храним только хеш!
    }
  });
  
  return user;
}

// Пример входа пользователя
async function loginUser(username, password) {
  const user = await db.user.findUnique({
    where: { username }
  });
  
  if (!user) {
    return null; // Пользователь не найден
  }
  
  const isValidPassword = await verifyPassword(password, user.password);
  
  if (!isValidPassword) {
    return null; // Неверный пароль
  }
  
  return user; // Успешный вход
}

// ============ Argon2 (более современный) ============
const argon2 = require('argon2');

// Хеширование с Argon2
async function hashPasswordArgon2(plainPassword) {
  const hashedPassword = await argon2.hash(plainPassword, {
    type: argon2.argon2id, // Рекомендуемый тип (гибрид argon2i и argon2d)
    memoryCost: 65536,     // 64 MB памяти
    timeCost: 3,           // 3 итерации
    parallelism: 4         // 4 параллельных потока
  });
  return hashedPassword;
}

// Проверка пароля с Argon2
async function verifyPasswordArgon2(plainPassword, hashedPassword) {
  try {
    const isValid = await argon2.verify(hashedPassword, plainPassword);
    
    // Проверка необходимости rehash (если параметры изменились)
    if (isValid && argon2.needsRehash(hashedPassword)) {
      // Пароль правильный, но хеш устарел - нужно перехешировать
      const newHash = await hashPasswordArgon2(plainPassword);
      await db.user.update({
        where: { password: hashedPassword },
        data: { password: newHash }
      });
    }
    
    return isValid;
  } catch (err) {
    return false;
  }
}

// ВАЖНО: Защита от timing attacks
// Используйте константное время для ответа независимо от результата
async function secureLogin(username, password) {
  const user = await db.user.findUnique({ where: { username } });
  
  if (!user) {
    // Выполняем фиктивную проверку для константного времени
    await bcrypt.compare(password, '$2b$12$fake_hash_to_maintain_timing');
    return null;
  }
  
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
}`,
      },
    },

    {
      id: "slide-23",
      title: "Защита API ключей и токенов",
      type: "content",
      content:
        "API ключи и токены являются критическими секретами, требующими особой защиты. Основные правила безопасности: никогда не коммитьте ключи в git (используйте .gitignore для .env файлов), храните в переменных окружения или секретных менеджерах (AWS Secrets Manager, Vault), используйте разные ключи для разных окружений, ограничивайте права доступа API ключей (scope), регулярно ротируйте ключи, мониторьте использование ключей на предмет аномалий. Для frontend приложений никогда не храните секретные ключи в клиентском коде — используйте backend proxy для защищенных API запросов. Для мобильных приложений используйте certificate pinning и обфускацию.",
    },

    {
      id: "slide-24",
      title: "Безопасная работа с секретами",
      type: "code",
      content: "Управление секретами в приложении:",
      codeExample: {
        language: "javascript",
        title: "Secrets Management",
        code: `// ============ .env файл (НИКОГДА не коммитить!) ============
/*
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
JWT_SECRET=super-secret-key-change-in-production
API_KEY=sk_live_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
AWS_ACCESS_KEY_ID=AKIAxxxxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
ENCRYPTION_KEY=64_hex_characters_here
*/

// ============ .gitignore ============
/*
.env
.env.local
.env.production
.env.*.local
secrets/
*/

// ============ Загрузка секретов ============
require('dotenv').config();

// Проверка наличия обязательных переменных при старте
function validateEnvironment() {
  const required = [
    'DATABASE_URL',
    'JWT_SECRET',
    'ENCRYPTION_KEY'
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(\`Missing required environment variables: \${missing.join(', ')}\`);
  }
}

validateEnvironment();

// ============ Frontend: НИКОГДА не храните секреты ============
// ПЛОХО - секреты в клиентском коде
const STRIPE_PUBLIC_KEY = 'pk_live_xxxxx'; // ОК - публичный ключ
const STRIPE_SECRET_KEY = 'sk_live_xxxxx'; // ОПАСНО!

// ХОРОШО - используйте backend proxy
// Frontend
async function makePayment(paymentData) {
  // Отправляем запрос на наш backend
  const response = await fetch('/api/payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentData)
  });
  return response.json();
}

// Backend - секретный ключ используется только здесь
app.post('/api/payment', async (req, res) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      // ... другие параметры
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ Использование AWS Secrets Manager ============
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

const client = new SecretsManagerClient({ region: 'us-east-1' });

async function getSecret(secretName) {
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const data = await client.send(command);
    
    if (data.SecretString) {
      return JSON.parse(data.SecretString);
    } else {
      // Бинарный секрет
      return Buffer.from(data.SecretBinary, 'base64').toString('ascii');
    }
  } catch (error) {
    throw error;
  }
}

// Загрузка секретов при старте приложения
let secrets;

async function initializeSecrets() {
  secrets = await getSecret('myapp/production/secrets');
  console.log('Secrets loaded successfully');
}

initializeSecrets().catch(console.error);

// ============ Ротация секретов ============
async function rotateAPIKey() {
  const newKey = crypto.randomBytes(32).toString('hex');
  
  // 1. Генерируем новый ключ
  await db.apiKeys.create({
    data: {
      key: newKey,
      status: 'active',
      createdAt: new Date()
    }
  });
  
  // 2. Помечаем старый ключ как deprecated (еще работает)
  await db.apiKeys.update({
    where: { key: oldKey },
    data: { status: 'deprecated' }
  });
  
  // 3. Через 30 дней деактивируем старый ключ
  setTimeout(async () => {
    await db.apiKeys.update({
      where: { key: oldKey },
      data: { status: 'revoked' }
    });
  }, 30 * 24 * 60 * 60 * 1000);
  
  return newKey;
}`,
      },
    },

    {
      id: "slide-25",
      title: "Content Security Policy (CSP)",
      type: "content",
      content:
        "Content Security Policy — это механизм безопасности, который помогает предотвратить XSS-атаки, инъекции скриптов и другие атаки, ограничивая источники, из которых могут загружаться ресурсы. CSP работает через HTTP заголовок или meta тег и определяет whitelist разрешенных источников для скриптов, стилей, изображений, шрифтов и других ресурсов. Основные директивы: default-src (по умолчанию для всех типов), script-src (JavaScript), style-src (CSS), img-src (изображения), connect-src (AJAX/WebSocket). CSP также может блокировать inline скрипты и eval(), заставляя использовать внешние файлы. Для HTTPS сайтов рекомендуется добавить директиву upgrade-insecure-requests.",
    },

    {
      id: "slide-26",
      title: "Настройка CSP",
      type: "code",
      content: "Реализация Content Security Policy:",
      codeExample: {
        language: "javascript",
        title: "CSP Configuration",
        code: `const express = require('express');
const helmet = require('helmet');

const app = express();

// ============ Строгий CSP ============
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],                    // По умолчанию только с того же домена
    scriptSrc: ["'self'", "'unsafe-inline'"],  // JavaScript только с нашего домена
    styleSrc: ["'self'", "'unsafe-inline'"],   // CSS только с нашего домена
    imgSrc: ["'self'", "data:", "https:"],     // Изображения с нашего домена и HTTPS
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    connectSrc: ["'self'", "https://api.example.com"],
    frameSrc: ["'none'"],                      // Запрет iframe
    objectSrc: ["'none'"],                     // Запрет <object>, <embed>
    upgradeInsecureRequests: [],               // Обновлять HTTP -> HTTPS
  }
}));

// ============ CSP с CDN ============
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "https://cdn.jsdelivr.net",
      "https://cdnjs.cloudflare.com"
    ],
    styleSrc: [
      "'self'",
      "https://fonts.googleapis.com",
      "'unsafe-inline'"  // Для inline стилей (не рекомендуется)
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.example.com"]
  }
}));

// ============ CSP с nonce (рекомендуется вместо unsafe-inline) ============
const crypto = require('crypto');

app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString('base64');
  next();
});

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    \`script-src 'self' 'nonce-\${res.locals.cspNonce}'\`
  );
  next();
});

// В HTML шаблоне
/*
<script nonce="<%= cspNonce %>">
  // Inline скрипт с nonce разрешен
  console.log('This is safe');
</script>
*/

// ============ CSP Report-Only (тестирование) ============
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy-Report-Only',
    "default-src 'self'; report-uri /csp-violation-report"
  );
  next();
});

// Endpoint для приема отчетов о нарушениях CSP
app.post('/csp-violation-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  console.log('CSP Violation:', req.body);
  // Логируйте нарушения для анализа
  res.status(204).end();
});

// ============ Next.js CSP ============
// next.config.js
const crypto = require('crypto');

module.exports = {
  async headers() {
    const nonce = crypto.randomBytes(16).toString('base64');
    
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: \`
              default-src 'self';
              script-src 'self' 'nonce-\${nonce}' 'strict-dynamic';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
              connect-src 'self';
              frame-ancestors 'none';
            \`.replace(/\\s{2,}/g, ' ').trim()
          }
        ]
      }
    ];
  }
};`,
      },
    },

    {
      id: "slide-27",
      title: "Дополнительные заголовки безопасности",
      type: "list",
      content: "Важные HTTP заголовки для защиты данных:",
      items: [
        "X-Content-Type-Options: nosniff — предотвращает MIME-sniffing, заставляя браузер использовать объявленный Content-Type",
        "X-Frame-Options: DENY — защита от clickjacking, запрещает отображение сайта в iframe",
        "Referrer-Policy: strict-origin-when-cross-origin — контролирует передачу referrer информации",
        "Permissions-Policy — контроль доступа к функциям браузера (camera, microphone, geolocation)",
        "Cross-Origin-Opener-Policy (COOP) — изоляция контекста браузера от cross-origin окон",
        "Cross-Origin-Resource-Policy (CORP) — защита ресурсов от загрузки с других доменов",
        "Cross-Origin-Embedder-Policy (COEP) — требование CORS для всех ресурсов",
      ],
    },

    {
      id: "slide-28",
      title: "Комплексная настройка безопасности",
      type: "code",
      content: "Применение всех заголовков безопасности с helmet:",
      codeExample: {
        language: "javascript",
        title: "Complete Security Headers",
        code: `const express = require('express');
const helmet = require('helmet');

const app = express();

// ============ Полная конфигурация helmet ============
app.use(helmet({
  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  
  // HTTP Strict Transport Security
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  
  // X-Frame-Options
  frameguard: {
    action: 'deny'
  },
  
  // X-Content-Type-Options
  noSniff: true,
  
  // Referrer-Policy
  referrerPolicy: {
    policy: 'strict-origin-when-cross-origin'
  },
  
  // Permissions-Policy (ранее Feature-Policy)
  permissionsPolicy: {
    features: {
      camera: ["'none'"],
      microphone: ["'none'"],
      geolocation: ["'self'"],
      payment: ["'self'"]
    }
  },
  
  // Cross-Origin-Opener-Policy
  crossOriginOpenerPolicy: {
    policy: 'same-origin'
  },
  
  // Cross-Origin-Resource-Policy
  crossOriginResourcePolicy: {
    policy: 'same-origin'
  },
  
  // Cross-Origin-Embedder-Policy
  crossOriginEmbedderPolicy: true,
  
  // Скрыть заголовок X-Powered-By
  hidePoweredBy: true
}));

// ============ Ручная настройка заголовков ============
app.use((req, res, next) => {
  // Базовые заголовки безопасности
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // HSTS
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  
  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self)'
  );
  
  // CORS (если нужно)
  res.setHeader('Access-Control-Allow-Origin', 'https://trusted-site.com');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  next();
});

// ============ Тестирование заголовков ============
// Используйте https://securityheaders.com/ для проверки
// Должна быть оценка A+

app.listen(3000, () => {
  console.log('Server running with security headers');
});`,
      },
    },

    {
      id: "slide-29",
      title: "Практические рекомендации",
      type: "list",
      content: "Чек-лист защиты конфиденциальных данных:",
      items: [
        "ВСЕГДА используйте HTTPS — получите бесплатный SSL сертификат через Let's Encrypt",
        "Включите HSTS — заставьте браузеры использовать только HTTPS соединения",
        "Шифруйте конфиденциальные данные — используйте AES-256-GCM для данных at rest",
        "Хешируйте пароли — используйте bcrypt или Argon2 с достаточным cost factor",
        "Управляйте ключами — используйте KMS (AWS KMS, Vault) для централизованного управления",
        "Настройте CSP — ограничьте источники загрузки ресурсов для защиты от XSS",
        "Применяйте заголовки безопасности — используйте helmet.js для Node.js приложений",
        "Регулярно обновляйте TLS — используйте только TLS 1.2+ с современными cipher suites",
        "Мониторьте и аудитируйте — логируйте доступ к конфиденциальным данным",
        "Соблюдайте законодательство — следуйте требованиям GDPR, HIPAA, PCI DSS",
      ],
    },

    {
      id: "slide-30",
      title: "Заключение",
      type: "conclusion",
      content:
        "Защита конфиденциальных данных требует комплексного подхода: от шифрования при передаче до безопасного хранения",
      keyTakeaways: [
        "HTTPS и TLS — обязательное требование для любого современного веб-приложения, использующего конфиденциальные данные",
        "Шифрование данных должно применяться как in transit (TLS), так и at rest (database encryption)",
        "Правильное управление ключами шифрования критически важно — используйте KMS и регулярно ротируйте ключи",
        "Пароли никогда не должны храниться в открытом виде — только хеши с использованием bcrypt или Argon2",
        "Заголовки безопасности (HSTS, CSP, X-Frame-Options) обеспечивают дополнительную защиту на уровне браузера",
      ],
    },
  ],
};
