import { projects } from "@/data/projects";
import { ArrowUpRight, Check, Github } from "lucide-react";

export function Portfolio() {
  return (
    <section id="work" className="container-prose py-12 md:py-16">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-primary">Проекты</p>
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">Production-scale опыт</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-xl md:p-6"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <div className="flex gap-2 opacity-70 transition-opacity group-hover:opacity-100">
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    aria-label="Repository"
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    aria-label="Live demo"
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{p.description}</p>

            <ul className="my-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] uppercase tracking-wide text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>

            <ul className="mt-auto space-y-2 border-t border-border pt-4">
              {p.contributions.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
