import { Path } from "react-hook-form";
import { IAddEstateSchema } from "../schema/formSchema";

type UsersFormField = {
    label: string;
    inputName: Path<IAddEstateSchema>;
    value: string;
}

export const estateFormFields: UsersFormField[] = [
    {
        label: "Estate adress",
        inputName: "adress",
        value: ""
    },
    {
        label: "Is estate avibility",
        inputName: "avibility",
        value: ""
    },
    {
        label: "door code",
        inputName: "door_code",
        value: ""
    },
    {
        label: "Keeper name",
        inputName: "keeper_name",
        value: ""
    },
    {
        label: "Keeper phone number",
        inputName: "keeper_phone_number",
        value: ""
    },
    {
        label: "Market price",
        inputName: "market_price",
        value: ""
    },
    {
        label: "Estate name",
        inputName: "name",
        value: ""
    },
    {
        label: "Owner name",
        inputName: "owner_name",
        value: ""
    },
    {
        label: "Owner phone number",
        inputName: "owner_phone_number",
        value: ""
    },
    {
        label: "Estate revanue",
        inputName: "revanue",
        value: ""
    },
    {
        label: "Electricity bill",
        inputName: "electricity_amount",
        value: ""
    },
    
    {
        label: "electicity bill deadline",
        inputName: "electricity_deadline",
        value: ""
    },
    {
        label: "Rent bill ammout",
        inputName: "rent_amount",
        value: ""
    },
    {
        label: "Rent bill deadline",
        inputName: "rent_deadline",
        value: ""
    },
    {
        label: "Tax bill ammout",
        inputName: "tax_amount",
        value: ""
    },
    {
        label: "Tax bill deadline",
        inputName: "tax_deadline",
        value: ""
    },
    {
        label: "Contract end date",
        inputName: "contract_end_date",
        value: ""
    },
    {
        label: "Contract start date",
        inputName: "contract_start_data",
        value: ""
    }
    
]