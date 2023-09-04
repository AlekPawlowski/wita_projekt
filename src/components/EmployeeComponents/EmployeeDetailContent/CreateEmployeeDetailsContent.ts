import { IAppUser } from "../../../interfaces/IAppusers";
import { IInformationText } from "../../../interfaces/IInformationText/IInformationText";

export const createEmployeeDetailsContent = (
    {acces_level, user_name, phone_number, location, email, }: IAppUser
): IInformationText[] => {
    const employeeInformation: IInformationText[] = [
        {
            describe: "Employee name",
            value: user_name
        },
        {
            describe: "Phone number",
            value: phone_number
        },
        {
            describe: "Employee location",
            value: location
        },
        {
            describe: "User occupaction",
            value: acces_level
        },
        {
            describe: "Email",
            value: email
        }
    ];
    return employeeInformation;
}