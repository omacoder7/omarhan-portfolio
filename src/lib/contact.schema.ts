import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(80, "Слишком длинное имя"),
  phone: z
    .string()
    .trim()
    .min(6, "Введите корректный телефон")
    .max(32, "Слишком длинный номер")
    .regex(/^[+\d\s()-]+$/, "Допустимы только цифры и символы +()-"),
  email: z.string().trim().email("Введите корректный email").max(160),
  comment: z
    .string()
    .trim()
    .min(10, "Расскажите немного подробнее (минимум 10 символов)")
    .max(2000, "Слишком длинный комментарий"),
});

export type ContactInput = z.infer<typeof contactSchema>;
