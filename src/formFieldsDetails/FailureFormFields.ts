import { Path } from "react-hook-form";
import { IFailureSchema } from "../schema/formSchema";

type FailureFormFields = {
    label: string;
    inputName: Path<IFailureSchema>;
}

export const FailureFormFields: FailureFormFields[] = [
    {
        label: "Failure title",
        inputName: "failure_title"
    },
    {
        label: "Failure description",
        inputName: "failure_description"
    },
    {
        label: "Estate id",
        inputName: "estate_id"
    },
    {
        label: "Status of failure",
        inputName: "status"
    }
] 