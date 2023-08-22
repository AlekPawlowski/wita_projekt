import { IEstate } from "../../../interfaces/Iestate";
import { IInfoText } from "../../../interfaces/InfoText/IInfoText";

/**
 * neccecery data for main info about estate 
 * @param data -> whole estate object
 * @return array for card data that should contain:
 * @r Keeper name
 * @r Owner name 
 * @r Contract end -> current contract ends
 * @r Avibility -> is it avail or not
 * @r current revanue of the estate
*/
export const CreateMainInfo = (data: IEstate): IInfoText[] => {
    const { keeper_name, owner_name, contract_end_date, avibility, revanue } = data;
    const mainInfo: IInfoText[] = [
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
        }

    ]
    return mainInfo;
}

// export const 