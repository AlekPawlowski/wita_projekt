import { useSearchParams } from "react-router-dom";
import { ESTATE_PARAM_ID } from "../../../config";
import { useEffect, useState } from "react";
import { IEstate } from "../../../interfaces/Iestate";
import { EstateDetailsContent } from "./EstateDetailsContent";
import { getSingleEstate } from "../../../supabaseCall/estates/getSingleEstate";

export const EstateDetails = () => {
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
    // create elements for grid
    return <EstateDetailsContent estate={estate}/>
}
