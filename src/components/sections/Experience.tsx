import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="container-editorial py-12 md:py-20">
      {/* Section Header */}
      <div className="mb-10 max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-wider text-primary">
          [ 02 // CAREER TIMELINE ]
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Опыт и инженерная практика
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          4+ года в коммерческой разработке полного цикла: от проектирования схем БД и очередей до
          построения отказоустойчивых API и интерактивных интерфейсов.
        </p>
      </div>

      {/* Editorial Timeline List */}
      <div className="divide-y divide-border border-y border-border">
        {experiences.map((exp) => (
          <article key={exp.id} className="py-8 transition-colors hover:bg-surface/30 md:py-10">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
              {/* Left Column: Period & Domain */}
              <div className="space-y-1">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  {exp.period}
                </div>
                <div className="text-xs font-medium text-muted-foreground">{exp.domain}</div>
              </div>

              {/* Right Column: Role, Achievements, Tech */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {exp.role}
                  </h3>
                </div>

                {/* Achievements */}
                <ul className="space-y-2.5">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="font-mono text-xs text-muted-foreground">Стек:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
