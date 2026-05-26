import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container-prose py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-primary">Контакты</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Расскажите о проекте</h2>
          <p className="mt-4 text-muted-foreground">
            Отвечаю в течение 24 часов. Заявка уходит напрямую на мою рабочую почту.
          </p>

          <div className="mt-8 space-y-4">
            <Info icon={Mail} label="Email" value="hello@omarhan.dev" />
            <Info icon={MapPin} label="Локация" value="Ashgabat · Remote" />
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                AI Comment Enhancer
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Кнопка «AI улучшить» рядом с полем комментария отполирует ваш текст, сохранив
                исходный смысл.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6 md:p-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
