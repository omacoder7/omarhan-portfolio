import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Check, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact.schema";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [enhancing, setEnhancing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", comment: "" },
  });

  const commentValue = watch("comment");

  async function onSubmit(data: ContactInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json?.error ?? "Не удалось отправить сообщение");
      }
      setStatus("success");
      toast.success("Сообщение отправлено", {
        description: json?.userCopySent
          ? "Копия письма отправлена на ваш email."
          : "Заявка успешно получена, отвечу в течение суток.",
      });
      reset();
      setTimeout(() => setStatus("idle"), 3500);
    } catch (e) {
      setStatus("error");
      toast.error("Ошибка отправки", {
        description: e instanceof Error ? e.message : "Попробуйте ещё раз позже.",
      });
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  async function enhanceComment() {
    const current = getValues("comment");
    if (!current || current.trim().length < 5) {
      toast.info("Сначала напишите краткий черновик сообщения");
      return;
    }
    setEnhancing(true);
    try {
      const res = await fetch("/api/ai-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "enhance", text: current }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Сервис редактирования временно недоступен");
      setValue("comment", json.text, { shouldValidate: true });
      toast.success("Текст отполирован", {
        description: json.mock ? "Использован локальный профиль" : "Формулировка уточнена",
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Не удалось обработать текст");
    } finally {
      setEnhancing(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Ваше имя"
            className="w-full border border-border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
            autoComplete="name"
          />
        </Field>
        <Field label="Телефон" error={errors.phone?.message}>
          <input
            {...register("phone")}
            placeholder="+993 ..."
            className="w-full border border-border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message}>
        <input
          {...register("email")}
          placeholder="you@example.com"
          type="email"
          className="w-full border border-border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
          autoComplete="email"
        />
      </Field>

      <Field
        label="Описание задачи"
        error={errors.comment?.message}
        action={
          <button
            type="button"
            onClick={enhanceComment}
            disabled={enhancing}
            className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
          >
            {enhancing ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <span className="text-primary font-bold">✦</span>
            )}
            <span>Уточнить формулировку</span>
          </button>
        }
      >
        <textarea
          {...register("comment")}
          placeholder="Расскажите о проекте, стеке технологий, сроках или технических требованиях..."
          rows={5}
          className="w-full resize-none border border-border bg-input p-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <div className="mt-1 text-right font-mono text-[11px] text-muted-foreground">
          {commentValue?.length ?? 0} / 2000
        </div>
      </Field>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="inline-flex w-full items-center justify-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          {status === "success" && <Check className="h-3.5 w-3.5" />}
          {(status === "idle" || status === "error") && <Send className="h-3.5 w-3.5" />}
          {status === "loading"
            ? "Отправка..."
            : status === "success"
              ? "Отправлено"
              : "Отправить сообщение"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  action,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="font-mono text-xs uppercase tracking-wider text-foreground">
          {label}
        </label>
        {action}
      </div>
      {children}
      {error && <p className="mt-1 font-mono text-xs text-destructive">{error}</p>}
    </div>
  );
}
