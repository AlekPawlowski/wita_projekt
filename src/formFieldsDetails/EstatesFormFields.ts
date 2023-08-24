import { Path } from "react-hook-form";
import { IAddEstateSchema } from "../schema/formSchema";

type UsersFormField = {
    label: string;
    inputName: Path<IAddEstateSchema>;
}

export const estateFormFields: UsersFormField[] = [
    {
        label: "Estate adress",
        inputName: "adress"
    },
    {
        label: "Is estate avibility",
        inputName: "avibility"
    },
    {
        label: "door code",
        inputName: "door_code"
    },
    {
        label: "Keeper name",
        inputName: "keeper_name"
    },
    {
        label: "Keeper phone number",
        inputName: "keeper_phone_number"
    },
    {
        label: "Market price",
        inputName: "market_price"
    },
    {
        label: "Estate name",
        inputName: "name"
    },
    {
        label: "Owner name",
        inputName: "owner_name"
    },
    {
        label: "Owner phone number",
        inputName: "owner_phone_number"
    },
    {
        label: "Estate revanue",
        inputName: "revanue"
    },
    {
        label: "Electricity bill",
        inputName: "electricity_amount"
    },
    
    {
        label: "electicity bill deadline",
        inputName: "electricity_deadline"
    },
    {
        label: "Rent bill ammout",
        inputName: "rent_amount"
    },
    {
        label: "Rent bill deadline",
        inputName: "rent_deadline"
    },
    {
        label: "Tax bill ammout",
        inputName: "tax_amount"
    },
    {
        label: "Tax bill deadline",
        inputName: "tax_deadline"
    },
    {
        label: "Contract end date",
        inputName: "contract_end_date"
    },
    {
        label: "Contract start date",
        inputName: "contract_start_data"
    }
    
]