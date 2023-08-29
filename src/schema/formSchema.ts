import { z } from "zod";

const refineErrorMessage = "Please provide correct number"
const minValue = 0.1;
const errorRefineMessage = {
    message: refineErrorMessage
}

const refineFunc = (arg: string) => Number(arg) > minValue;
const transformToNumber = (val: string) => Number(val);

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
    keeper_phone_number: z.string().min(9).max(14).refine(refineFunc, errorRefineMessage).transform(transformToNumber),
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

/**
 * based on interface
 * @interface IFailures
 */
export const failureSchema = z.object({
    failure_title: z.string().min(3),
    failure_description: z.string().min(3),
    status: z.boolean(),
    estate_id: z.string().min(3),
    failue_estate_name: z.string().min(1)
})

export type IFailureSchema = z.infer<typeof failureSchema>