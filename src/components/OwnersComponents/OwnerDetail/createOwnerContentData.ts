import { describe } from "vitest";
import { IInformationText } from "../../../interfaces/IInformationText/IInformationText";
import { IOwners } from "../../../interfaces/Iowners";

export const createOwnerData = ({name, phone_number}: IOwners): IInformationText[] => {
    const ownerData: IInformationText[] = [
        {
            describe: "Owner name",
            value: name,
        },
        {
            describe: "Phone number",
            value: phone_number
        }
    ]
    return ownerData;
}