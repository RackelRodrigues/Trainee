import z from "zod";

export const verifyCodeSchema = z.object({
  code: z.array(z.string().min(1)).length(6, "Código inválido"),
});

export type TVerifyCodeSchema = z.infer<typeof verifyCodeSchema>;
