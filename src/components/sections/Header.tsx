import { useEffect, useState } from "react";
import { Github, Linkedin, Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const navLinks = [
    { label: "Обзор", href: "#overview" },
    { label: "Опыт", href: "#experience" },
    { label: "Проекты", href: "#projects" },
    { label: "Стек", href: "#stack" },
    { label: "Принципы", href: "#principles" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 hairline-b bg-background/90 backdrop-blur-md transition-colors">
      <div className="container-editorial flex h-16 items-center justify-between">
        {/* Brand identity */}
        <a
          href="#overview"
          className="group flex items-center gap-3 text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded border border-border bg-surface font-mono text-xs font-semibold text-primary">
            OB
          </span>
          <span className="font-semibold">Omarhan Babageldiyev</span>
          <span className="hidden font-mono text-xs text-muted-foreground lg:inline">
            / Full-Stack Engineer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Utility / Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/omacoder7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/omarhan-babageldiyev-b07183263/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Переключить на ${theme === "dark" ? "светлую" : "тёмную"} тему`}
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню навигации"
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="hairline-b bg-surface px-6 py-5 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="hairline-t pt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Связаться
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
