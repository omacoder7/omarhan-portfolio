# Omarhan Babageldiyev — Senior Full-Stack & Software Engineer

Персональный сайт-портфолио и витрина инженерных систем разработчика Omarhan Babageldiyev.

**Production URL**: [https://omarhan-portfolio.vercel.app/](https://omarhan-portfolio.vercel.app/)

---

## Концепция и дизайн

Проект спроектирован по принципам **минималистичного технического издания (technical publication)**:

- **Типографика**: шрифтовая пара `Instrument Sans` (основной гротеск) и `JetBrains Mono` (технические спецификации, метрики, даты и теги).
- **Сдержанная эстетика**: отсутствие псевдо-AI эффектов (неоновые блюры, градиентные кнопки, пузырчатые карточки, бессмысленные иконки). Вся структура выстроена через типографику, воздух и тонкие hairline-границы.
- **Две темы**: глубокая нейтральная тёмная (`#0c0d10`) и тёплая светлая (`#fbfbfa`) с сохранением в `localStorage`.

---

## Архитектура и стек

- **React 19 + Vite 7** — быстрый бандлинг, минимальный runtime overhead.
- **TypeScript 5.8** — строгая типизация данных, проектов и API.
- **Tailwind CSS v4** — современная система токенов на базе `@theme inline`.
- **React Hook Form + Zod** — валидация формы контактов.
- **Vercel Serverless Functions (`/api`)**:
  - `/api/contact` — отправка писем владельцу через Resend API с подтверждением отправителю.
  - `/api/ai-helper` — опциональный помощник формулирования темы обращения (Vercel AI Gateway / offline fallback).
- **Lucide React & Sonner** — легковесные векторные пиктограммы и тосты.

---

## Техническое SEO и индексация

1. **Канонический URL**: зафиксирован `https://omarhan-portfolio.vercel.app/`.
2. **Файлы поисковых роботов**:
   - `/robots.txt` — открыт для Googlebot и других поисковиков, содержит ссылку на sitemap.
   - `/sitemap.xml` — карта сайта с приоритетом `1.0`.
3. **Микроразметка Schema.org**:
   - `Person` — имя `Omarhan Babageldiyev`, профессия `Senior Full-Stack & Software Engineer`, подтверждённые профили GitHub и LinkedIn, стек компетенций.
   - `WebSite` — канонические метаданные ресурса.
4. **Социальные превью (Open Graph & Twitter)**:
   - Сгенерированное изображение высокого разрешения `1200x630` (`public/og-image.png`).
5. **Crawlable HTML**:
   - Семантический fallback внутри `#root` для немедленной индексации роботами без JS.

---

## Инструкция по настройке Google Search Console

Чтобы сайт быстро и гарантированно появился в топе поиска Google по запросу **Omarhan Babageldiyev**:

### 1. Добавление ресурса в Search Console

1. Перейдите в [Google Search Console](https://search.google.com/search-console).
2. Нажмите **Добавить ресурс** (Add property).
3. Выберите тип ресурса **Префикс URL** (URL prefix) и введите:
   ```text
   https://omarhan-portfolio.vercel.app/
   ```

### 2. Подтверждение прав собственности (Ownership Verification)

1. В способах подтверждения выберите **HTML-тег** (HTML tag).
2. Google предоставит тег вида:
   ```html
   <meta name="google-site-verification" content="ВАШ_ТОКЕН" />
   ```
3. Откройте файл `index.html` и замените плейсхолдер:
   ```html
   <!-- Строка 17 в index.html -->
   <meta name="google-site-verification" content="ВАШ_ТОКЕН" />
   ```
4. Сделайте коммит и деплой на Vercel (`git push` или `vercel --prod`).
5. Вернитесь в Search Console и нажмите **Подтвердить** (Verify).

### 3. Отправка карты сайта (Sitemap)

1. В левом меню выберите раздел **Файлы Sitemap** (Sitemaps).
2. В поле «Добавить новый файл sitemap» введите:
   ```text
   sitemap.xml
   ```
3. Нажмите **Отправить** (Submit). Статус должен измениться на «Успешно».

### 4. Запрос немедленной индексации (URL Inspection)

1. В верхней строке поиска Search Console («Проверить любой URL в ресурсе») введите:
   ```text
   https://omarhan-portfolio.vercel.app/
   ```
2. Нажмите Enter и дождитесь завершения проверки.
3. Нажмите кнопку **Запросить индексирование** (Request Indexing). Это поставит главную страницу в приоритетную очередь краулера Googlebot.

### 5. Контроль индексации

1. В течение 24–72 часов проверьте раздел **Страницы** (Pages / Page indexing).
2. Убедитесь, что страница имеет статус «Страница проиндексирована» и Google видит выбранный канонический URL: `https://omarhan-portfolio.vercel.app/`.

---

## Локальный запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера (порт 8080)
npm run dev

# Проверка типов TypeScript
npx tsc --noEmit

# Форматирование и линтинг
npm run format
npm run lint

# Сборка production
npm run build
```

---

## Переменные окружения (`.env`)

```bash
# Отправка писем через Resend
RESEND_API_KEY=re_xxxxxxxxx
OWNER_EMAIL=hello@omarhan.dev
CONTACT_FROM=Portfolio <onboarding@resend.dev>
CONTACT_SEND_USER_COPY=false

# Опционально: Vercel AI Gateway для кнопки улучшения текста
AI_GATEWAY_API_KEY=
AI_GATEWAY_MODEL=openai/gpt-5-mini
```

---

## Лицензия

MIT © 2026 Omarhan Babageldiyev.
