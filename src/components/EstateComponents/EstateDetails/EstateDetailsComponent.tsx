import { useSearchParams } from "react-router-dom";
import { ESTATE_PARAM_NAME, RESTART_ERROR } from "../../../config";
import { useEstateContext } from "../../../Context/EstateContext";
import { useEffect, useState } from "react";
import { IEstate } from "../../../interfaces/Iestate";
import { getSingleElement } from "../../Common/getterFunctions/getSingleElement";
import { IError } from "../../../interfaces/IError";
import { EstateDetailsContent } from "./EstateDetailsContent";

export const EstateDetails = () => {
    const [searchParams] = useSearchParams();
    const { estates } = useEstateContext();
    const CLIENT_ID = searchParams.get(ESTATE_PARAM_NAME) as string;
    const [estate, setEstate] = useState<IEstate | null | string>(null);
    const [componentError, setComponentError] = useState<IError | null>(null);

    useEffect(() => {
        if (estates) {
            console.log("as", estates);
            const singleEstate = getSingleElement<IEstate>(CLIENT_ID, estates);
            console.log("si", singleEstate);
            if (!singleEstate || 'error' in singleEstate) {
                console.log("err");
                setComponentError(singleEstate);
                setEstate("error");
            } else {
                setEstate(singleEstate);
            }
        }
    }, [estates])

    if (typeof(estate) === "string") return <p>{componentError ? componentError.errorMessage : RESTART_ERROR}</p>

    if (!estate) return <p>Loading data...</p>
    // create elements for grid
    return <EstateDetailsContent estate={estate}/>
}
