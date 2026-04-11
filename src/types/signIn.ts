import z from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "This field is required.").email("Invalid email."),

  password: z
    .string()
    .min(1, "This field is required.")
    .refine(
      (val) => val.length >= 6,
      "Password must be at least 6 characters.",
    ),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
