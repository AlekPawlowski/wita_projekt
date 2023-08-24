import { Database } from "../../types/supabase";

/**
 * @param id -> id of the user in database
 * @param username -> username of the app user
 * @param accesLevel -> one of three role that user can get -. employee (normal user), account (finance user), admin (ruler)
 * @param email -> email of the app user
 * @param phoneNumber -> phone number of the app user
 * @param location -> location of the app user
 */
export type IAppUser = Database["public"]["Tables"]["app_users"]["Row"]

export type accesLevel = "employee" | "admin" | "account";