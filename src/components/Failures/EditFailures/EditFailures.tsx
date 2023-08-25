import { Fragment, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { FAILURE_PARAM_NAME } from "../../../config";
import { FailuresForm } from "../../FormComponents/FailuresForm/FailuresForm";
import { IFailures } from "../../../interfaces/Ifailures";
import { getSingleFailure } from "../../../supabaseCall/failures/getSingleFailure";
import { IEstateFailData } from "../../../interfaces/Iestate";

export const EditFailures = () => {
    const [searchParams] = useSearchParams();
    const FAILURE_ID = searchParams.get(FAILURE_PARAM_NAME) as string;
    const [failure, setFailure] = useState<IFailures | null>(null);
    const [estateData, setEstateData] = useState<IEstateFailData | null>(null);
    useEffect(() => {
        const callData = async () => {
            // get failure data
            const singleFailure = await getSingleFailure(FAILURE_ID);
            setFailure(singleFailure);
            const { estate_id, failue_estate_name } = singleFailure;
            const estateDetails: IEstateFailData = {
                id: estate_id,
                name: failue_estate_name
            }
            setEstateData(estateDetails);
        }
        callData();
    }, []);
    if (!failure) return <p>Loading data...</p>;
    if (!estateData) return null;
    return <Fragment>
        Edit failure
        <FailuresForm failureObj={failure} estateData={estateData} title={"Update failure"} />
    </Fragment>
}