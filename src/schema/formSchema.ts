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
    adress: z.string().min(5, { message: "minimum 5 letters" }),
    avibility: z.boolean(),
    contract_end_date: z.string().optional().or(z.literal(null)),
    contract_start_data: z.string().optional().or(z.literal(null)),
    door_code: z.string().optional().or(z.literal(null)),
    keeper_name: z.string(),
    // keeper_phone_number: z.string().min(9).max(14).refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    keeper_phone_number: z.preprocess((val) => Number(val), z.number().gte(100000000).lte(9999999999999)),
    market_price: z.preprocess((val) => Number(val), z.number().positive()),
    // market_price: z.string().refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    name: z.string().min(2, { message: "Estate must be named, min 2 letters"}),
    owner_name: z.string().min(3, { message: "Provide correct name" }),
    // owner_phone_number: z.string().min(9).max(14).refine(refineFunc, errorRefineMessage).transform(transformToNumber),
    owner_phone_number: z.preprocess((val) => Number(val), z.number().gte(100000000).lte(9999999999999)),
    revanue: z.preprocess((val) => Number(val), z.number()),
    electricity_amount: z.preprocess((val) => Number(val), z.number()),
    electricity_deadline: z.string(),
    rent_amount: z.preprocess((val) => Number(val), z.number()),
    rent_deadline: z.string(),
    tax_amount: z.preprocess((val) => Number(val), z.number()),
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

/**
 * based on interface
 * @interface IOwners
 */
export const ownersSchema = z.object({
    name: z.string().min(3),
    phone_number: z.preprocess((val) => Number(val), z.number().gte(100000000, {message: "Minumum 9 digits"}).lte(9999999999999, {message: "Maximum 13 digits"})),
})

export type IOwnersSchema = z.infer<typeof ownersSchema>