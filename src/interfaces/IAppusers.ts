export interface IAppUsers {
    id?: number | string;
    username: string;
    accesLevel: "employee" | "admin" | "account";
    email: string;
    phoneNumber: number;
    location: string;
}