import z from "zod";

export const signUpCandidateSchema = z
  .object({
    name: z
      .string()
      .min(1, "This field is required.")
      .min(2, "Min 2 chars.")
      .max(50, "Max 50 chars."),

    email: z.string().min(1, "This field is required.").email("Invalid email."),

    password: z
      .string()
      .min(1, "This field is required.")
      .min(8, "Password must be at least 8 characters."),

    confirmPassword: z
      .string()
      .min(1, "This field is required.")
      .min(8, "Password must be at least 8 characters."),

    dateOfBirth: z.string().min(1, "This field is required."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpCandidateSchema>;
