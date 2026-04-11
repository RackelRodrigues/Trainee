import z from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(1, "This field is required.")
    .min(2, "Min 2 chars.")
    .max(50, "Max 50 chars."),

  email: z.string().min(1, "This field is required.").email("Invalid email."),

  password: z
    .string()
    .min(1, "This field is required.")
    .refine(
      (val) => val.length >= 6,
      "Password must be at least 6 characters.",
    ),
  confirmPassword: z
    .string()
    .min(1, "This field is required.")
    .refine(
      (val) => val.length >= 6,
      "Password must be at least 6 characters.",
    ),

  dateOfBirth: z.string().min(1, "This field is required."),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
