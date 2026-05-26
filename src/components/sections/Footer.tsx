import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-prose flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Omarhan Babageldiyev. Сделано с заботой о деталях.
        </p>
        <div className="flex gap-2">
          {[
            { icon: Github, href: "https://github.com/omacoder7", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/omarhan-babageldiyev-b07183263/", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
