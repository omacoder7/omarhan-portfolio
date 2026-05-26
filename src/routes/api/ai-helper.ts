import { createFileRoute } from "@tanstack/react-router";
import { gateway, generateText } from "ai";
import { z } from "zod";

const inputSchema = z.object({
  mode: z.enum(["enhance", "ask"]),
  text: z.string().min(1).max(4000),
});

const DEV_CONTEXT = `Ты ассистент в портфолио разработчика Omarhan Babageldiyev.
Опыт: Senior Full-Stack Engineer, 4+ года коммерческой разработки.
Стек: Vue.js, Nuxt.js, React, Next.js, Laravel 11, PHP 8.3+, NestJS, Node.js, PostgreSQL, MySQL, SQLite, Redis, RabbitMQ, Flutter, MapLibre GL, TypeScript, JavaScript.
Фокус: frontend, backend, архитектура, GIS-системы, fintech, аналитические панели, offline-first mobile apps, performance optimization.
Отвечай кратко, по делу, на русском.`;

function mockResponse(mode: "enhance" | "ask", text: string): string {
  if (mode === "enhance") {
    const cleaned = text.trim().replace(/\s+/g, " ");
    const first = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    const punct = /[.!?]$/.test(first) ? "" : ".";
    return `Здравствуйте! ${first}${punct} Буду признателен за обратную связь и готов обсудить детали в удобное время.`;
  }
  return "Omarhan — Senior Full-Stack Engineer с 4+ годами коммерческого опыта в Vue/Nuxt, React/Next, Laravel, NestJS, GIS, fintech, analytics dashboards и offline-first mobile apps. Подробности — в разделах «Обо мне» и «Проекты».";
}

export const Route = createFileRoute("/api/ai-helper")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => null);
        const parsed = inputSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }
        const { mode, text } = parsed.data;

        const canUseGateway = Boolean(
          process.env.AI_GATEWAY_API_KEY ||
          process.env.VERCEL_OIDC_TOKEN ||
          process.env.VERCEL === "1",
        );

        if (!canUseGateway) {
          return Response.json({ text: mockResponse(mode, text), mock: true });
        }

        const system =
          mode === "enhance"
            ? `Ты редактор. Отполируй текст пользователя: исправь грамматику, сделай тон вежливым и профессиональным, СОХРАНИ исходный смысл и язык. Верни ТОЛЬКО переписанный текст, без вступлений и пояснений.`
            : `${DEV_CONTEXT}\nПользователь задаёт вопрос о разработчике. Отвечай на основе контекста, без выдумок.`;

        try {
          const { text: out } = await generateText({
            model: gateway(process.env.AI_GATEWAY_MODEL ?? "openai/gpt-5-mini"),
            system,
            prompt: text,
          });
          return Response.json({ text: out.trim(), mock: false });
        } catch (e) {
          console.error("[ai-helper] failed, falling back to mock", e);
          return Response.json({ text: mockResponse(mode, text), mock: true });
        }
      },
    },
  },
});
