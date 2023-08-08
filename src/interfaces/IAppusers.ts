/**
 * @param id -> id of the user in database
 * @param username -> username of the app user
 * @param accesLevel -> one of three role that user can get -. employee (normal user), account (finance user), admin (ruler)
 * @param email -> email of the app user
 * @param phoneNumber -> phone number of the app user
 * @param location -> location of the app user
 */
export interface IAppUsers {
    id?: number | string;
    username: string;
    accesLevel: accesLevel;
    email: string;
    phoneNumber: number;
    location: string;
}

export type accesLevel = "employee" | "admin" | "account";