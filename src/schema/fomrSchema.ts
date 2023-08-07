import { z } from "zod";

export type ILogInSchema = z.infer<typeof logInSchema>;
export const logInSchema = z.object({
    email: z.coerce.string().email({message: "Please provide correct email"}),
    password: z.string().min(5)
})