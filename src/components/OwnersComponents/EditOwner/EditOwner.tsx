import { Fragment, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { OWNER_PARAM_NAME } from "../../../config";
import { IOwners } from "../../../interfaces/Iowners";
import { getSingleOwner } from "../../../supabaseCall/owners/getSingleOwner";
import { OwnerForm } from "../../FormComponents/OwnerForm/OwnerForm";

export const EditOwenr = () => {
    const [searchParams] = useSearchParams();
    const OWNER_PHONE_NUMBER = searchParams.get(OWNER_PARAM_NAME) as string;
    const [owner, setOwner] = useState<IOwners | null>(null);
    useEffect(() => {
        const getOwnerData = async () => {
            const ownerData = await getSingleOwner(OWNER_PHONE_NUMBER);
            setOwner(ownerData);
        };
        getOwnerData()
    })

    if (!owner) return <p>Loading data...</p>
    return <Fragment>
        <OwnerForm formName="Edit owner" ownerData={owner} />
    </Fragment>
}