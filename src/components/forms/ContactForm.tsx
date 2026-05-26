import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Check, Loader2, Send, Sparkles } from "lucide-react";
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
          ? "Копия письма ушла вам на email."
          : "Я получил заявку и отвечу в ближайшее время.",
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
      toast.info("Сначала напишите черновик комментария");
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
      if (!res.ok) throw new Error(json?.error ?? "AI недоступен");
      setValue("comment", json.text, { shouldValidate: true });
      toast.success("Комментарий улучшен", {
        description: json.mock ? "Использован офлайн-режим" : "AI отполировал текст",
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "AI временно недоступен");
    } finally {
      setEnhancing(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Имя" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Ваше имя"
            className="form-input"
            autoComplete="name"
          />
        </Field>
        <Field label="Телефон" error={errors.phone?.message}>
          <input
            {...register("phone")}
            placeholder="+993 ..."
            className="form-input"
            autoComplete="tel"
          />
        </Field>
      </div>
      <Field label="Email" error={errors.email?.message}>
        <input
          {...register("email")}
          placeholder="you@example.com"
          type="email"
          className="form-input"
          autoComplete="email"
        />
      </Field>
      <Field
        label="Комментарий"
        error={errors.comment?.message}
        action={
          <button
            type="button"
            onClick={enhanceComment}
            disabled={enhancing}
            className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20 disabled:opacity-50"
          >
            {enhancing ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <Sparkles className="h-3 w-3" />
            )}
            AI улучшить
          </button>
        }
      >
        <textarea
          {...register("comment")}
          placeholder="Расскажите о задаче, бюджете и сроках..."
          rows={5}
          className="form-input resize-none"
        />
        <div className="mt-1 text-right text-xs text-muted-foreground">
          {commentValue?.length ?? 0} / 2000
        </div>
      </Field>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-70 md:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "success" && <Check className="h-4 w-4" />}
        {(status === "idle" || status === "error") && <Send className="h-4 w-4" />}
        {status === "loading"
          ? "Отправляем..."
          : status === "success"
            ? "Отправлено!"
            : "Отправить сообщение"}
      </button>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-input);
          border: 1px solid var(--color-border);
          color: var(--color-foreground);
          border-radius: 0.625rem;
          padding: 0.75rem 0.9rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .form-input::placeholder { color: var(--color-muted-foreground); opacity: .7; }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 20%, transparent);
        }
      `}</style>
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
        <label className="text-sm font-medium text-foreground">{label}</label>
        {action}
      </div>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
