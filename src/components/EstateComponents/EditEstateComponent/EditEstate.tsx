import { Fragment, useEffect, useState } from "react"
import { EstateForm } from "../../FormComponents/EstateForm/EstateForm"
import { useSearchParams } from "react-router-dom";
import { useEstateContext } from "../../../Context/EstateContext";
import { ESTATE_PARAM_NAME, RESTART_ERROR } from "../../../config";
import { IError } from "../../../interfaces/IError";
import { IEstate } from "../../../interfaces/Iestate";
import { getSingleElement } from "../../Common/getterFunctions/getSingleElement";
import { EstateDetailsContent } from "../EstateDetails/EstateDetailsContent";

export const EditEstate = () => {
    const [searchParams] = useSearchParams();
    const { estates } = useEstateContext();
    const CLIENT_ID = searchParams.get(ESTATE_PARAM_NAME) as string;
    const [estate, setEstate] = useState<IEstate | null | string>(null);
    const [componentError, setComponentError] = useState<IError | null>(null);

    useEffect(() => {
        if (estates) {
            const singleEstate = getSingleElement<IEstate>(CLIENT_ID, estates);
            if (!singleEstate || 'error' in singleEstate) {
                setComponentError(singleEstate);
                setEstate("error");
            } else {
                setEstate(singleEstate);
            }
        }
    }, [estates])

    if (typeof(estate) === "string") return <p>{componentError ? componentError.errorMessage : RESTART_ERROR}</p>

    if (!estate) return <p>Loading data...</p>
    console.log("es", estate)
    return <Fragment>
        <EstateForm formName="Edit estate" data={estate}/>
    </Fragment>
}