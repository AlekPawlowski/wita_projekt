import { z } from "zod";

export type ILogInSchema = z.infer<typeof logInSchema>;
export const logInSchema = z.object({
    mail: z.coerce.string().email().min(5),
    password: z.string()
}).required();