import { z } from "zod";

const refineErrorMessage = "Please provide correct number"
const minValue = 0.1;
const errorRefineMessage = {
    message: refineErrorMessage
}

const refineFunc = (arg: any) => Number(arg) > minValue;
const transformToNumber = (val: any) => Number(val);

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
    adress: z.string().min(5, { message: "minimum 5 letters" }),
    avibility: z.boolean(),
    contract_end_date: z.string().optional().or(z.literal(null)),
    contract_start_data: z.string().optional().or(z.literal(null)),
    door_code: z.string().optional().or(z.literal(null)),
    keeper_name: z.string(),
    market_price: z.string().refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    name: z.string().min(2, { message: "Estate must be named, min 2 letters"}),
    owner_name: z.string().min(3, { message: "Provide correct name" }),
    owner_phone_number: z.string().min(9).max(14).refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    revanue: z.string().refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    electricity_amount: z.string().refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    electricity_deadline: z.string(),
    rent_amount: z.string().refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    rent_deadline: z.string(),
    tax_amount: z.string().refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    tax_deadline: z.string(),
})
export type IAddEstateSchema = z.infer<typeof addEstateSchema>;