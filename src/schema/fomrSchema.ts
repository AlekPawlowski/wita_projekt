import { z } from "zod";

export const logInSchema = z.object({
    email: z.coerce.string().email({ message: "Please provide correct email" }),
    password: z.string().min(5)
})
export type ILogInSchema = z.infer<typeof logInSchema>;

/**
 * based on the interface 
 * @interface IEstate
 */
export const addEstateSchema = z.object({
    adress: z.string().min(5, {message: "minimum 5 letters"}),
    avibility: z.boolean(),
    contract_end_date: z.string().optional().or(z.literal('')),
    contract_start_data: z.string().optional().or(z.literal('')),
    door_code: z.string().optional().or(z.literal('')),
    keeper_name: z.string(),
    market_price: z.number(),
    name: z.string(),
    owner_name: z.string().min(3, {message: "Provide correct name"}),
    owner_phone_number: z.string().min(9).max(14),
    revanue: z.number(),
    electricity_amount: z.number(),
    electricity_deadline: z.string(),
    rent_amount: z.number(),
    rent_deadline: z.string(),
    tax_amount: z.number(),
    tax_deadline: z.string(),
})
export type IAddEstateSchema = z.infer<typeof addEstateSchema>;