import { skills } from "@/data/skills";
import { Code2, Database, Layers, Smartphone } from "lucide-react";

const icons = [Code2, Layers, Database, Smartphone];

export function About() {
  return (
    <section id="about" className="container-prose py-12 md:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-primary">Обо мне</p>
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">
          Senior Full-Stack Engineer
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          4+ года коммерческого опыта в frontend, backend, архитектуре, GIS, fintech, analytics
          dashboards, offline-first mobile apps и performance optimization. Уверенно веду
          продуктовые задачи от архитектуры и API до UI, баз данных, интеграций и production-ready
          систем.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((cat, i) => {
          const Icon = icons[i] ?? Code2;
          return (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
