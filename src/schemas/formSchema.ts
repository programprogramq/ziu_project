import { z } from "zod";

export const step1Schema = z
  .object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/)
      .regex(/[0-9]/),
    confirmPassword: z.string()
  })
  .refine(d => d.password === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "Hasła się nie zgadzają"
  });

export const step2Schema = z.object({
  categories: z.array(z.string()).min(1),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean()
  }),
  newsletter: z.boolean().optional()
});

export const step3Schema = z.object({
  rodo: z.literal(true)
});

export const fullSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema);