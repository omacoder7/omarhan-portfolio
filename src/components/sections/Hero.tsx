import portrait from "@/assets/omarhan.jpg";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="overview" className="container-editorial py-12 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        {/* Left Column: Authoritative Editorial Presentation */}
        <div className="space-y-6">
          {/* Metadata Kicker */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="font-semibold text-primary">[ 01 // OVERVIEW ]</span>
            <span>·</span>
            <span>Ashgabat (UTC+5)</span>
            <span>·</span>
            <span>Remote / Relocation</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for projects
            </span>
          </div>

          {/* Canonical Headline */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Omarhan Babageldiyev
            </h1>
            <p className="mt-2 text-xl font-medium text-primary sm:text-2xl">
              Senior Full-Stack &amp; Software Engineer
            </p>
          </div>

          {/* Concrete Technical Narrative */}
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Специализируюсь на проектировании отказоустойчивых бэкендов, распределённых систем и
            интерфейсов для работы с большими объёмами данных. 4+ года коммерческого опыта: создаю
            системы GIS-мониторинга, финансовые транзакционные контуры и offline-first мобильные
            приложения на базе Vue/Nuxt, React/Next, Laravel, NestJS, PostgreSQL и Redis.
          </p>

          {/* Technical Specs Strip */}
          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <div className="border border-border bg-surface p-3.5">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Масштаб данных
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-foreground">
                1.5M+ строк SQL
              </div>
              <div className="text-xs text-muted-foreground">Оптимизация и индексы</div>
            </div>

            <div className="border border-border bg-surface p-3.5">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Гео-карты
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-foreground">
                30,000+ маркеров
              </div>
              <div className="text-xs text-muted-foreground">Кластеризация MapLibre</div>
            </div>

            <div className="border border-border bg-surface p-3.5">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Надёжность
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-foreground">
                Idempotency &amp; Locks
              </div>
              <div className="text-xs text-muted-foreground">Redis &amp; RabbitMQ</div>
            </div>
          </div>

          {/* Direct Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-3.5 w-3.5" />
              Обсудить проект
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded border border-border bg-surface px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
            >
              Проекты
              <ArrowDown className="h-3.5 w-3.5" />
            </a>

            <a
              href="mailto:hello@omarhan.dev"
              className="inline-flex items-center gap-1.5 px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              hello@omarhan.dev
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Presentation */}
        <div className="flex flex-col items-center justify-center lg:items-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
            {/* Technical Corner Markings */}
            <div className="pointer-events-none absolute -top-1.5 -left-1.5 font-mono text-xs text-muted-foreground">
              +
            </div>
            <div className="pointer-events-none absolute -top-1.5 -right-1.5 font-mono text-xs text-muted-foreground">
              +
            </div>
            <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-xs text-muted-foreground">
              +
            </div>
            <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-xs text-muted-foreground">
              +
            </div>

            {/* Crisp Portrait Frame */}
            <div className="overflow-hidden border border-border bg-surface shadow-xs">
              <img
                src={portrait}
                alt="Omarhan Babageldiyev — Senior Full-Stack Engineer"
                width={320}
                height={400}
                loading="eager"
                decoding="async"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
              <div className="hairline-t bg-surface/90 px-3.5 py-2.5">
                <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                  <span>FIG. 1.0 — O. BABAGELDIYEV</span>
                  <span className="text-foreground">ASHGABAT, TM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
