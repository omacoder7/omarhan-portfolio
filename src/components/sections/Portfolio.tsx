import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";

export function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="container-editorial py-12 md:py-20">
      {/* Section Header */}
      <div className="mb-10 max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-wider text-primary">
          [ 03 // SYSTEMS & ARCHITECTURE ]
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Ключевые проекты и системы
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Реальные производственные системы: от распределённого финансового бэкенда до
          высоконагруженных гео-карт и мобильных приложений.
        </p>
      </div>

      {/* Featured Projects: Editorial Multi-Column Layout */}
      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="border border-border bg-surface/50 p-6 transition-colors hover:border-foreground/30 md:p-8"
          >
            {/* Top metadata strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-primary">SYS // {project.index}</span>
                <span>·</span>
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-3">
                {project.metric && <span className="text-foreground/80">{project.metric}</span>}
                <span>·</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Title & Links */}
            <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {project.title}
              </h3>

              <div className="flex items-center gap-2">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Исходный код ${project.title}`}
                    className="flex h-8 w-8 items-center justify-center border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Демо ${project.title}`}
                    className="flex h-8 w-8 items-center justify-center border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.description}
            </p>

            {/* Engineering Contributions */}
            <div className="mt-6 border-t border-border/60 pt-5">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Ключевой инженерный вклад:
              </div>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-foreground/90 sm:text-sm"
                  >
                    <span className="mt-1 font-mono text-xs text-primary">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
              <span className="font-mono text-xs text-muted-foreground">Стек:</span>
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Secondary Projects: Editorial Compact Technical Index */}
      <div className="mt-14 border-t border-border pt-10">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            [ ДОПОЛНИТЕЛЬНЫЕ ИНЖЕНЕРНЫЕ СИСТЕМЫ // 04–06 ]
          </h3>
          <span className="font-mono text-xs text-muted-foreground">3 проекта</span>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {secondaryProjects.map((p) => (
            <div
              key={p.id}
              className="grid gap-4 py-5 transition-colors hover:bg-surface/30 md:grid-cols-[60px_1.5fr_2fr_1fr] md:items-center"
            >
              <span className="font-mono text-xs font-semibold text-primary">{p.index}</span>

              <div>
                <h4 className="text-sm font-semibold text-foreground md:text-base">{p.title}</h4>
                <div className="font-mono text-xs text-muted-foreground">{p.role}</div>
              </div>

              <p className="text-xs text-muted-foreground sm:text-sm">{p.description}</p>

              <div className="flex flex-wrap gap-1 md:justify-end">
                {p.stack.slice(0, 3).map((st) => (
                  <span
                    key={st}
                    className="border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
