import { DatabaseZap, GitBranch, Puzzle, ShieldCheck, Workflow, Zap } from "lucide-react";

const approach = [
  {
    icon: GitBranch,
    title: "Архитектура",
    text: "DDD, Clean Architecture, микросервисы и чёткие границы между слоями продукта.",
  },
  {
    icon: DatabaseZap,
    title: "Производительность",
    text: "Индексы, агрегации, chunk processing, оптимизация больших таблиц и карт.",
  },
  {
    icon: ShieldCheck,
    title: "Надёжность",
    text: "Idempotency, distributed locks, audit logs, очереди и failure-safe обработка.",
  },
];

const strengths = [
  {
    icon: Zap,
    title: "Быстро вхожу в системы",
    text: "Разбираюсь в сложных и legacy-кодовых базах, нахожу узкие места и планирую улучшения.",
  },
  {
    icon: Puzzle,
    title: "Full lifecycle",
    text: "Закрываю путь от архитектуры и API до интерфейса, БД, интеграций и деплоя.",
  },
  {
    icon: Workflow,
    title: "Продуктовый фокус",
    text: "Собираю решения, которые понятны пользователям и устойчивы под production-нагрузкой.",
  },
];

export function Methodology() {
  return (
    <section className="container-prose py-12 md:py-16">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-primary">Подход</p>
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">Инженерный подход</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6 md:p-7">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Как я работаю</h3>
          <div className="space-y-5">
            {approach.map((a) => (
              <div key={a.title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <a.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{a.title}</div>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-surface to-surface/40 p-6 md:p-7">
          <div className="mb-6 flex items-center gap-2">
            <Sparkle />
            <h3 className="text-xl font-semibold text-foreground">Сильные стороны</h3>
          </div>
          <div className="space-y-5">
            {strengths.map((a) => (
              <div key={a.title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <a.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{a.title}</div>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkle() {
  return (
    <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary">
      <Zap className="h-4 w-4" />
    </div>
  );
}
