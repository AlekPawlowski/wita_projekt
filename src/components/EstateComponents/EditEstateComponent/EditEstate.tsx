import { Fragment, useEffect, useState } from "react"
import { EstateForm } from "../../FormComponents/EstateForm/EstateForm"
import { useSearchParams } from "react-router-dom";
import { ESTATE_PARAM_ID } from "../../../config";
import { IEstate } from "../../../interfaces/Iestate";
import { getSingleEstate } from "../../../supabaseCall/estates/getSingleEstate";

export const EditEstate = () => {
    const [searchParams] = useSearchParams();
    const CLIENT_ID = searchParams.get(ESTATE_PARAM_ID) as string;
    const [estate, setEstate] = useState<IEstate | null>(null);
    useEffect(() => {
        const callEstate = async () => {
            const singleEstate = await getSingleEstate(CLIENT_ID)
            setEstate(singleEstate);
        }
        callEstate();
    }, [])

    if (!estate) return <p>Loading data...</p>
    return <Fragment>
        <EstateForm formName="Edit estate" data={estate} />
    </Fragment>
}