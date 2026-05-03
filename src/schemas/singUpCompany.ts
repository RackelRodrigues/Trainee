import { isValidCNPJ } from "@/utils/isValidCNPJ";
import z from "zod";

export const signUpCompanySchema = z.object({
  nameCompany: z
    .string()
    .min(1, "This field is required.")
    .min(2, "Min 2 chars.")
    .max(50, "Max 50 chars."),

  email: z.string().min(1, "This field is required.").email("Invalid email."),
  cnpj: z
    .string()
    .min(1, "This field is required.")
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "Invalid CNPJ format.")
    .refine((value) => isValidCNPJ(value), {
      message: "Invalid CNPJ",
    }),
  password: z
    .string()
    .min(1, "This field is required.")
    .min(8, "Password must be at least 8 characters.")
    .refine(
      (val) => val.length >= 8,
      "Password must be at least 8 characters.",
    ),
  confirmPassword: z
    .string()
    .min(1, "This field is required.")
    .refine(
      (val) => val.length >= 8,
      "Password must be at least 8 characters.",
    ),
});

export type TSignUpSchema = z.infer<typeof signUpCompanySchema>;
