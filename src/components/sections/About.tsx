import { skills } from "@/data/skills";

export function About() {
  return (
    <section id="stack" className="container-editorial py-12 md:py-20">
      {/* Section Header */}
      <div className="mb-10 max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-wider text-primary">
          [ 04 // TECHNICAL STACK ]
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Технологический стек и инструменты
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Инструменты, архитектурные паттерны и базы данных, которые я регулярно применяю в
          производственных проектах.
        </p>
      </div>

      {/* Typographic Categorized Matrix (Not a wall of badge pills!) */}
      <div className="divide-y divide-border border-y border-border">
        {skills.map((category, index) => (
          <div
            key={category.id}
            className="grid gap-4 py-5 transition-colors hover:bg-surface/30 md:grid-cols-[220px_1fr] md:items-baseline md:py-6"
          >
            {/* Category Label */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">[ 0{index + 1} ]</span>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {category.title}
              </h3>
            </div>

            {/* Typographic Skills List */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted-foreground">
              {category.items.map((item, idx) => (
                <span key={item} className="inline-flex items-center">
                  <span className="font-medium text-foreground transition-colors hover:text-primary">
                    {item}
                  </span>
                  {idx < category.items.length - 1 && (
                    <span className="ml-2 font-mono text-xs text-border">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
