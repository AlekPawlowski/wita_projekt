import { Path } from "react-hook-form";
import { IUserFormSchema } from "../schema/formSchema";

type IEmployeeFormFields = {
    label: string;
    inputName: Path<IUserFormSchema>;
}
export const employeeFormFields:IEmployeeFormFields[] = [
    {
        label: "Imię i nazwisko pracownika",
        inputName: "user_name",
    },
    {
        label: "Stanowisko",
        inputName: "acces_level"
    },
    {
        label: "Adres email",
        inputName: "email",
    },
    {
        label: "Lokalizacja",
        inputName: "location"
    },
    {
        label: "Number telefonu",
        inputName: "phone_number"
    }
]