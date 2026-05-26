export type Project = {
  title: string;
  description: string;
  stack: string[];
  contributions: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "GIS Monitoring & Document Management System",
    description:
      "Large-scale GIS monitoring platform with interactive maps, document management, advanced filtering, and API-driven updates.",
    stack: ["Vue.js", "Laravel", "PostgreSQL", "MapLibre GL", "TypeScript"],
    contributions: [
      "Rendered and clustered 30k+ map points with dynamic route rendering",
      "Built client and document management flows with modal previews and tab-based data organization",
      "Optimized PostgreSQL queries and aggregations for datasets over 1.5M rows",
      "Synchronized map selection, smooth scrolling, filters by agent, date, region, and search",
    ],
  },
  {
    title: "Fintech / Transaction Processing System",
    description:
      "Reliability-focused backend and full-stack fintech system for safe concurrent transaction processing.",
    stack: ["Laravel", "NestJS", "Redis", "RabbitMQ", "PostgreSQL"],
    contributions: [
      "Implemented Redis distributed locking and idempotent processing with UUID + Idempotency-Key architecture",
      "Built audit logging, session recovery, failure-safe request handling, and secure API integrations",
      "Designed event-driven microservices and queue-based workflows with RabbitMQ",
      "Implemented notification service patterns with DDD and Clean Architecture boundaries",
    ],
  },
  {
    title: "Offline-First Mobile Application",
    description:
      "Mobile application designed for resilient local work, synchronization, caching, and state recovery.",
    stack: ["Flutter", "BLoC", "Hive", "REST APIs"],
    contributions: [
      "Implemented BLoC architecture with Hive local storage",
      "Built offline synchronization and local caching strategies",
      "Designed resilient state recovery and API synchronization flows",
      "Optimized mobile UI for stable everyday usage",
    ],
  },
  {
    title: "Enterprise Analytics Dashboard",
    description:
      "Internal analytics and monitoring dashboard for sales, behavior tracking, inventory, and operational intelligence.",
    stack: ["TypeScript", "Chart.js", "REST APIs", "SCSS"],
    contributions: [
      "Built real-time sales analytics and user behavior tracking views",
      "Implemented inventory monitoring and interactive chart dashboards",
      "Integrated REST APIs into an internal intelligence panel",
      "Improved data scanning and monitoring workflows for business teams",
    ],
  },
  {
    title: "Advanced Excel Reporting System",
    description:
      "Complex Laravel Excel exports for financial and operational reporting over large datasets.",
    stack: ["Laravel", "Laravel Excel", "PHP", "SQL", "Queues"],
    contributions: [
      "Implemented batch aggregation, country/type grouping, and time-based categorization",
      "Built large dataset exports with optimized chunk processing",
      "Automated complex formatting for financial and operational reports",
      "Reduced export memory pressure through streaming and chunk-based processing",
    ],
  },
  {
    title: "CRM / Client Management Interfaces",
    description:
      "Advanced CRM-style interfaces with filtering, sorting, search, and reactive data updates.",
    stack: ["Vue.js", "Nuxt.js", "TypeScript", "SCSS", "REST APIs"],
    contributions: [
      "Built agent, region, city, and search filtering systems",
      "Implemented dynamic sorting, table sorting, and custom dropdown controls",
      "Created smooth navigation patterns across dense client management views",
      "Connected reactive UI states to API-driven updates",
    ],
  },
];
