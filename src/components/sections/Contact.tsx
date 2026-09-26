import { ContactForm } from "@/components/forms/ContactForm";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container-editorial py-12 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        {/* Left Column: Coordinates & Channels */}
        <div className="space-y-6">
          <div className="font-mono text-xs uppercase tracking-wider text-primary">
            [ 06 // DIRECT CONTACT ]
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Обсудить задачу или проект
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Отвечаю в течение 24 часов. Заявка отправляется напрямую на мою рабочую почту.
            </p>
          </div>

          {/* Coordinates Details */}
          <div className="space-y-4 divide-y divide-border border-y border-border py-4">
            <div className="flex items-start justify-between gap-4 pt-3 first:pt-0">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span>Электронная почта</span>
              </div>
              <a
                href="mailto:hello@omarhan.dev"
                className="font-mono text-xs font-medium text-foreground transition-colors hover:text-primary sm:text-sm"
              >
                hello@omarhan.dev
              </a>
            </div>

            <div className="flex items-start justify-between gap-4 pt-3">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Локация</span>
              </div>
              <span className="text-right text-xs font-medium text-foreground sm:text-sm">
                Ashgabat (UTC+5) · Remote
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 pt-3">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase text-muted-foreground">
                <Github className="h-3.5 w-3.5 text-primary" />
                <span>GitHub</span>
              </div>
              <a
                href="https://github.com/omacoder7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs font-medium text-foreground transition-colors hover:text-primary sm:text-sm"
              >
                omacoder7
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <div className="flex items-start justify-between gap-4 pt-3">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase text-muted-foreground">
                <Linkedin className="h-3.5 w-3.5 text-primary" />
                <span>LinkedIn</span>
              </div>
              <a
                href="https://www.linkedin.com/in/omarhan-babageldiyev-b07183263/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs font-medium text-foreground transition-colors hover:text-primary sm:text-sm"
              >
                omarhan-babageldiyev
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="border border-border bg-surface/50 p-4">
            <div className="font-mono text-xs font-semibold text-primary">SLA ответа</div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Все входящие сообщения читаются лично. Для срочных проектов возможен звонок в Google
              Meet / Telegram после предварительного согласования.
            </p>
          </div>
        </div>

        {/* Right Column: Clean Form Container */}
        <div className="border border-border bg-surface p-6 sm:p-8">
          <div className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            [ ФОРМА ОБРАТНОЙ СВЯЗИ ]
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
