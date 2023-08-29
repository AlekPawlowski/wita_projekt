import { useSearchParams } from "react-router-dom";
import { FAILURE_PARAM_NAME } from "../../../config";
import { IFailures } from "../../../interfaces/Ifailures";
import { useEffect, useState } from "react";
import { IEstateFailData } from "../../../interfaces/Iestate";
import { getSingleFailure } from "../../../supabaseCall/failures/getSingleFailure";
import { FailureDetailsContent } from "./FailureDetailsContent";

export const FailureDetails = () => {
    const [searchParams] = useSearchParams();
    const FAILURE_ID = searchParams.get(FAILURE_PARAM_NAME) as string;
    console.log("fail id", FAILURE_ID);
    // 2 calls, first for failure data and second to estate (only name and id)
    const [failure, setFailure] = useState<IFailures | null>(null);
    const [estate, setEstate] = useState<IEstateFailData | null>(null);

    useEffect(() => {
        const callData = async () => {
            // get failure data
            const singleFailure = await getSingleFailure(FAILURE_ID);
            setFailure(singleFailure);

            // // get estate information
            const { estate_id, failue_estate_name } = singleFailure;
            const estateDetails: IEstateFailData = {
                id: estate_id, 
                name: failue_estate_name
            }
            setEstate(estateDetails)
        }
        callData();
    }, []);

    if (!failure) return <p>Loading failure data...</p>;
    if (!estate) return <p>Loading estate data..</p>

    return <FailureDetailsContent failure={failure} estate={estate} />
}