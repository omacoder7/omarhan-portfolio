export type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  domain: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "gis-enterprise",
    period: "2023 — Настоящее время",
    role: "Senior Full-Stack Engineer",
    domain: "GIS Monitoring & Enterprise Systems",
    achievements: [
      "Спроектировал и внедрил платформу GIS-мониторинга с кластеризацией 30,000+ гео-точек и плавной отрисовкой динамических маршрутов на MapLibre GL.",
      "Оптимизировал PostgreSQL-запросы, композитные индексы и агрегации для таблиц свыше 1.5M записей, минимизировав задержку API-ответов.",
      "Построил модульные интерфейсы управления клиентами и документами с реактивной синхронизацией фильтров, поиском и табовой организацией.",
    ],
    technologies: ["Vue 3", "Nuxt.js", "Laravel 11", "PostgreSQL", "MapLibre GL", "TypeScript"],
  },
  {
    id: "fintech-backend",
    period: "2023 — 2024",
    role: "Backend & Systems Engineer",
    domain: "Fintech & Transaction Processing",
    achievements: [
      "Реализовал распределённые блокировки на Redis и механизм идемпотентности (UUID + Idempotency-Key) для безопасной параллельной обработки платежей.",
      "Спроектировал асинхронную event-driven архитектуру очередей на RabbitMQ с автоматическим восстановлением сбойных сессий.",
      "Внедрил сквозное аудит-логирование, строгие границы DDD / Clean Architecture и надёжную изоляцию внешних интеграций.",
    ],
    technologies: ["NestJS", "Laravel", "Redis", "RabbitMQ", "PostgreSQL", "Clean Architecture"],
  },
  {
    id: "analytics-mobile",
    period: "2022 — 2023",
    role: "Full-Stack & Mobile Engineer",
    domain: "Offline-First Mobile & Analytics",
    achievements: [
      "Разработал кроссплатформенное приложение на Flutter с паттерном BLoC и локальным хранилищем Hive для надёжной работы в офлайн-режиме без потери данных.",
      "Создал аналитический дашборд реального времени для мониторинга продаж, поведения пользователей и состояния инвентаря.",
      "Реализовал потоковую генерацию сложных финансовых Excel-отчётов чанками, существенно снизив пиковую нагрузку на оперативную память серверов.",
    ],
    technologies: ["Flutter", "Dart", "BLoC", "Hive", "TypeScript", "Chart.js", "Laravel Excel"],
  },
];
