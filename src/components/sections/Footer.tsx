import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="hairline-t bg-surface/30">
      <div className="container-editorial py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Identity colophon */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded border border-border bg-surface font-mono text-[10px] font-semibold text-primary">
                OB
              </span>
              <span className="font-semibold text-foreground">Omarhan Babageldiyev</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Senior Full-Stack &amp; Software Engineer.
              <br />
              Проектирование распределённых систем, GIS и веб-платформ.
            </p>
            <div className="font-mono text-[11px] text-muted-foreground">
              © {new Date().getFullYear()} Omarhan Babageldiyev
            </div>
          </div>

          {/* Technical publication specs */}
          <div className="space-y-2 font-mono text-xs text-muted-foreground">
            <div className="font-semibold uppercase tracking-wider text-foreground">
              [ СПЕЦИФИКАЦИЯ ]
            </div>
            <div>Архитектура: React 19 · Vite · TypeScript</div>
            <div>Стилизация: Tailwind CSS v4 · Instrument Sans</div>
            <div>Хостинг: Vercel Edge Runtime</div>
            <div>Локация: Ashgabat, TM (UTC+5)</div>
          </div>

          {/* Navigation & Profiles */}
          <div className="space-y-3 lg:text-right">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              [ СВЯЗЬ И ПРОФИЛИ ]
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <a
                href="https://github.com/omacoder7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/omarhan-babageldiyev-b07183263/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>

              <a
                href="mailto:hello@omarhan.dev"
                className="inline-flex items-center gap-1.5 border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>

              <a
                href="#overview"
                aria-label="Наверх"
                className="inline-flex items-center justify-center border border-border bg-surface p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowUp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
