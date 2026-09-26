export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "Vue.js (Vue 3)",
      "Nuxt.js",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
      "SSR / SPA",
      "TanStack Query",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      "Laravel 11",
      "PHP 8.3+",
      "NestJS",
      "Node.js",
      "RESTful APIs",
      "Clean Architecture",
      "Domain-Driven Design",
      "Microservices",
      "Auth Systems",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
      "Query Optimization",
      "Indexing & Aggregations",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: [
      "Distributed Locks",
      "Idempotency",
      "Audit Logging",
      "Chunk Processing",
      "Docker",
      "Vercel",
    ],
  },
  {
    id: "messaging",
    title: "Messaging",
    items: [
      "RabbitMQ",
      "Event-Driven Architecture",
      "Message Queues",
      "Background Workers",
      "Session Recovery",
    ],
  },
  {
    id: "mobile",
    title: "Mobile & GIS",
    items: [
      "Flutter",
      "BLoC Architecture",
      "Hive (Offline-First)",
      "MapLibre GL",
      "Dynamic Route Rendering",
      "Map Clustering (30k+)",
    ],
  },
  {
    id: "tooling",
    title: "AI / Tooling & Reporting",
    items: [
      "Laravel Excel",
      "Batch Data Streaming",
      "Chart.js",
      "Zod Validation",
      "Resend API",
      "Vercel AI Gateway",
    ],
  },
];
