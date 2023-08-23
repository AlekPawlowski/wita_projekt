import { IInformationText } from "../../../interfaces/IInformationText/IInformationText";
import { IEstate } from "../../../interfaces/Iestate";

/**
 * The function `CreateMainInfo` takes an object `data` of type `IEstate` and returns an array of
 * objects of type `IInformationText` (wich is used to create InformationText Component)
 * @param {IEstate} data - The `data` parameter is of type `IEstate`, which is an interface
 * representing the data of an estate. It contains the following properties:
 * @r Keeper name
 * @r Owner name 
 * @r Contract end -> current contract ends
 * @r Avibility -> is it avail or not
 * @r current revanue of the estate
 * @r market price -> current market price
 * @returns The function `CreateMainInfo` returns an array of objects of type `IInformationText[]`.
 */
export const CreateMainInformation = (data: IEstate): IInformationText[] => {
    const { market_price, keeper_name, owner_name, contract_end_date, avibility, revanue } = data;
    const mainInfo: IInformationText[] = [
        {
            describe: "Keeper",
            value: keeper_name
        },
        {
            describe: "Owner",
            value: owner_name
        },
        {
            describe: "Contract end",
            value: contract_end_date as string
        },
        {
            describe: "Avibility",
            value: avibility ? "Avail" : "Unavail"
        },
        {
            describe: "Current revanue",
            value: `${revanue} PLN`
        },
        {
            describe: "Market price",
            value: `${market_price} PLN`
        },
    ]
    return mainInfo;
}

/**
 * The function `CreateFinancialInfo` takes in an object `data` containing financial information and
 * returns an array of objects with descriptions and values of the financial information.
 * @param {IEstate} data - The `data` parameter is of type `IEstate`, which is an interface that likely
 * contains properties related to financial information such as 
 * @r electricity_amoun,
 * @r electricity_deadline 
 * @r rent_amount 
 * @r rent_deadline 
 * @r tax_amoun,
 * @r tax_deadlin
 * @returns The function `CreateFinancialInfo` returns an array of objects of type `IInformationText` (wich is used to create InformationText Component).
 */
export const CreateFinancialInformation = (data: IEstate): IInformationText[] => {
    const { electricity_amount, electricity_deadline, rent_amount, rent_deadline, tax_amount, tax_deadline } = data;
    const financialInfo: IInformationText[] = [
        {
            describe: "Electricity bill deadline",
            value: electricity_deadline
        },
        {
            describe: "Electricity bill ammount",
            value: electricity_amount
        },
        {
            describe: "Rent deadline",
            value: rent_deadline
        },
        {
            describe: "Rent amount",
            value: rent_amount
        },
        {
            describe: "Tax deadline",
            value: tax_deadline
        },
        {
            describe: "Tax amount",
            value: tax_amount
        },
        
    ];
    return financialInfo;
}

/**
 * The function `CreateGeneralInformation` takes an object `data` of type `IEstate` and returns an
 * array of objects of type `IInformationText` containing general information about the estate.
 * @param {IEstate} data - The `data` parameter is of type `IEstate`, which is an interface
 * representing the data of an estate. It likely contains properties such as 
 * @r door_code 
 * @r name
 * @r address 
 * @r owner_name 
 * @r owner_phone_number
 * @r contract_start_data
 * @returns The function `CreateGeneralInformation` returns an array of objects of type `IInformationText` (wich is used to create InformationText Component).
 */
export const CreateGeneralInformation = (data: IEstate): IInformationText[] => {
    const {door_code, name, adress, owner_name, owner_phone_number, contract_start_data} = data;
    const generalInformation: IInformationText[] = [
        {
            describe: "Name of property",
            value: name
        },
        {
            describe: "Adress of property",
            value: adress
        },
        {
            describe: "Owner name and phone number",
            value: `${owner_name}, ${owner_phone_number}`
        },
        {
            describe: "Estate door code",
            value: door_code ? door_code : "-"
        },
        {
            describe: "Current contract start",
            value: contract_start_data ? contract_start_data : "-"
        }
    ];
    return generalInformation;
}