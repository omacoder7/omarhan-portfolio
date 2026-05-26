# Portfolio — Omarhan Babageldiyev

Портфолио Senior Full-Stack Engineer с реальным production-scale опытом: Vue/Nuxt, React/Next, Laravel, NestJS, PostgreSQL, Redis, RabbitMQ, Flutter, MapLibre GL, аналитика, fintech и GIS-системы.

## Стек

- **TanStack Start** (React 19 + Vite) — SSR и server routes
- **TypeScript** — типизация UI, API и shared-схем
- **Tailwind CSS v4** — дизайн-токены в `src/styles.css`
- **React Hook Form + Zod** — единая валидация формы на клиенте и сервере
- **Resend API** — отправка писем из `/api/contact`
- **AI SDK / Vercel AI Gateway** — опциональный helper для улучшения текста в форме
- **Nitro** — адаптер server runtime для Vercel
- **Lucide React + Sonner** — иконки и toast-уведомления

## Локальный запуск

```bash
npm install
npm run dev
```

Локальные секреты хранятся в `.env` или `.env.local`. Пример переменных есть в `.env.example`.

```bash
RESEND_API_KEY=
OWNER_EMAIL=hello@omarhan.dev
CONTACT_FROM=Portfolio <onboarding@resend.dev>
CONTACT_SEND_USER_COPY=false

# Optional AI helper
AI_GATEWAY_API_KEY=
AI_GATEWAY_MODEL=openai/gpt-5-mini
```

## Vercel Deploy

Проект подготовлен для Vercel:

- `vercel.json` фиксирует `installCommand`, `buildCommand` и `devCommand`
- `vite.config.ts` использует `tanstackStart()`, `viteReact()`, Tailwind, tsconfig paths и `nitro()`
- `/api/contact` работает через прямой Resend REST API и читает `RESEND_API_KEY` только на сервере
- user-copy письмо включается через `CONTACT_SEND_USER_COPY=true` после верификации домена в Resend
- `.env` не коммитится, а `.env.example` показывает список нужных переменных

Для production добавьте env vars в Vercel Dashboard или через CLI:

```bash
vercel env add RESEND_API_KEY production preview development
vercel env add OWNER_EMAIL production preview development
vercel env add CONTACT_FROM production preview development
vercel env add CONTACT_SEND_USER_COPY production preview development
```

После настройки:

```bash
vercel
vercel --prod
```

## Форма контакта

Форма находится в `src/components/forms/ContactForm.tsx`, server route — в `src/routes/api/contact.ts`.

Поток отправки:

1. Клиент валидирует поля через Zod.
2. Server route повторно валидирует payload.
3. Resend отправляет письмо владельцу сайта.
4. Resend отправляет пользователю подтверждение с копией комментария.
5. Ошибки возвращаются безопасным сообщением без раскрытия внутренних деталей.

## Контент

Основные данные вынесены в:

- `src/data/skills.ts` — стек и skill groups
- `src/data/projects.ts` — проекты и contributions
- `src/components/sections/*` — Hero, About, Methodology, Portfolio, Contact, Footer

## Структура

```text
src/
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   └── api/
│       ├── contact.ts
│       └── ai-helper.ts
├── components/
│   ├── sections/
│   ├── forms/ContactForm.tsx
│   └── ui/
├── data/
├── lib/
└── styles.css
```

## Лицензия

MIT
