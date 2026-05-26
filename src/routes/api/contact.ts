import { createFileRoute } from "@tanstack/react-router";
import { contactSchema } from "@/lib/contact.schema";

const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "owner@example.com";
const FROM_EMAIL = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";
const SEND_USER_COPY = process.env.CONTACT_SEND_USER_COPY === "true";

const RESEND_API_URL = "https://api.resend.com/emails";

async function sendEmail(payload: { to: string; subject: string; html: string; replyTo?: string }) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    if (process.env.VERCEL === "1" || process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not configured");
    }
    console.warn("[contact] Resend not configured — skipping send", payload.to);
    return { skipped: true };
  }

  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error ${res.status}: ${text}`);
  }
  return res.json();
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

function ownerHtml(d: { name: string; phone: string; email: string; comment: string }) {
  return `
  <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;background:#1c1b18;color:#f4f1ea;border-radius:12px">
    <h2 style="margin:0 0 16px;color:#e7c277">Новое сообщение с портфолио</h2>
    <p><strong>Имя:</strong> ${escape(d.name)}</p>
    <p><strong>Email:</strong> ${escape(d.email)}</p>
    <p><strong>Телефон:</strong> ${escape(d.phone)}</p>
    <p style="margin-top:16px"><strong>Комментарий:</strong></p>
    <div style="padding:12px;background:#262420;border-radius:8px;white-space:pre-wrap">${escape(d.comment)}</div>
  </div>`;
}

function userHtml(d: { name: string; comment: string }) {
  return `
  <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;background:#1c1b18;color:#f4f1ea;border-radius:12px">
    <h2 style="margin:0 0 12px;color:#e7c277">Спасибо за сообщение, ${escape(d.name)}!</h2>
    <p>Я получил ваше сообщение и отвечу в течение 24 часов.</p>
    <p style="margin-top:16px;color:#a8a39a">Копия вашего комментария:</p>
    <div style="padding:12px;background:#262420;border-radius:8px;white-space:pre-wrap">${escape(d.comment)}</div>
    <p style="margin-top:24px;color:#a8a39a;font-size:12px">— Omarhan Babageldiyev</p>
  </div>`;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Validation failed", issues: parsed.error.flatten() },
            { status: 400 },
          );
        }
        const data = parsed.data;
        try {
          await sendEmail({
            to: OWNER_EMAIL,
            subject: `Новое сообщение от ${data.name}`,
            html: ownerHtml(data),
            replyTo: data.email,
          });

          if (SEND_USER_COPY) {
            await sendEmail({
              to: data.email,
              subject: "Спасибо за обращение — Omarhan Babageldiyev",
              html: userHtml(data),
            });
          }

          return Response.json({ ok: true, userCopySent: SEND_USER_COPY });
        } catch (e) {
          console.error("[contact] send failed", e);
          return Response.json(
            { error: "Не удалось отправить письмо. Попробуйте позже." },
            { status: 500 },
          );
        }
      },
    },
  },
});
