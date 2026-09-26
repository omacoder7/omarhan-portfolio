export type Project = {
  id: string;
  index: string;
  title: string;
  role: string;
  year: string;
  metric?: string;
  featured: boolean;
  description: string;
  stack: string[];
  contributions: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "gis-monitoring",
    index: "01",
    title: "GIS Monitoring & Document Management System",
    role: "Lead Full-Stack / Architecture",
    year: "2023 — Present",
    metric: "30k+ map points · 1.5M+ rows SQL tuning",
    featured: true,
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
    id: "fintech-core",
    index: "02",
    title: "Fintech / Transaction Processing System",
    role: "Backend & Systems Engineer",
    year: "2023 — 2024",
    metric: "Distributed locks · Idempotency UUIDs · RabbitMQ",
    featured: true,
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
    id: "offline-mobile",
    index: "03",
    title: "Offline-First Mobile Application",
    role: "Mobile & Architecture Engineer",
    year: "2023",
    metric: "Zero-data loss · BLoC + Hive · Resilient sync",
    featured: true,
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
    id: "enterprise-analytics",
    index: "04",
    title: "Enterprise Analytics Dashboard",
    role: "Frontend & Analytics Engineer",
    year: "2023",
    metric: "Real-time scans · Interactive tracking",
    featured: false,
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
    id: "excel-reporting",
    index: "05",
    title: "Advanced Excel Reporting System",
    role: "Backend Optimization Engineer",
    year: "2022 — 2023",
    metric: "Streaming chunks · Low memory footprint",
    featured: false,
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
    id: "crm-interfaces",
    index: "06",
    title: "CRM / Client Management Interfaces",
    role: "Frontend Engineer",
    year: "2022 — 2023",
    metric: "Dense tabular UI · Reactive state",
    featured: false,
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
