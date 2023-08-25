import { Fragment, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { ESTATE_PARAM_NAME, FAILURE_PARAM_NAME } from "../../../config";
import { FailuresForm } from "../../FormComponents/FailuresForm/FailuresForm";
import { IFailures } from "../../../interfaces/Ifailures";
import { getSingleFailure } from "../../../supabaseCall/failures/getSingleFailure";

export const EditFailures = () => {
    const [searchParams] = useSearchParams();
    const FAILURE_ID = searchParams.get(FAILURE_PARAM_NAME) as string;
    const estateId = searchParams.get(ESTATE_PARAM_NAME) as string;
    const [failure, setFailure] = useState<IFailures | null>(null);
    
    useEffect(() => {
        const callData = async () => {
            // get failure data
            const singleFailure = await getSingleFailure(FAILURE_ID);
            setFailure(singleFailure);
        }
        callData();
    }, []);
    if(!failure) return <p>Loading data...</p>;

    return <Fragment>
        Edit failure
        <FailuresForm failureObj={failure} estateId={estateId} title={"Update failure"}/>
    </Fragment>
}