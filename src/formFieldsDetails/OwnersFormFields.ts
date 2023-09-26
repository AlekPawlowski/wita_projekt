import { Path } from "react-hook-form";
import { IOwnersSchema } from "../schema/formSchema";

type IOwnersFormField = {
    label: string;
    inputName: Path<IOwnersSchema>
};

export const ownersFormFields: IOwnersFormField[] = [
    {
        label: "Owner name",
        inputName: "name",
    },
    {
        label: "Phone number",
        inputName: "phone_number"
    }
]