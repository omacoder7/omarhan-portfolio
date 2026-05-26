import portrait from "@/assets/omarhan.jpg";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="container-prose pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div className="fade-in space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Senior Full-Stack Engineer · English B2
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] text-foreground md:text-7xl">
            Omarhan
            <br />
            <span className="text-primary">Babageldiyev</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Vue/Nuxt, React/Next, Laravel, NestJS, Flutter.
            <br />
            Строю масштабируемые GIS, fintech, analytics и offline-first системы.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
            >
              <Mail className="h-4 w-4" />
              Связаться
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <ArrowDown className="h-4 w-4" />
              Подробнее
            </a>
          </div>
        </div>
        <div className="fade-in flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 to-transparent blur-xl" />
            <img
              src={portrait}
              alt="Omarhan Babageldiyev"
              className="relative h-64 w-52 rounded-3xl border border-border object-cover md:h-80 md:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
