export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "Tailwind",
      "SSR/SPA",
      "State management",
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Laravel 11",
      "PHP 8.3+",
      "NestJS",
      "Node.js",
      "REST APIs",
      "Auth systems",
      "DDD",
      "Clean Architecture",
      "Microservices",
      "Event-driven systems",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
      "RabbitMQ",
      "Distributed locks",
      "Idempotency",
      "Audit logs",
      "Query optimization",
    ],
  },
  {
    title: "Mobile, GIS & Reporting",
    items: [
      "Flutter",
      "BLoC",
      "Hive",
      "Offline-first",
      "MapLibre GL",
      "Dynamic markers",
      "Route rendering",
      "Laravel Excel",
      "Vercel",
    ],
  },
];
