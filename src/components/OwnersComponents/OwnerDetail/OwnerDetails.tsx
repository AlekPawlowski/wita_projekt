import { Fragment } from "react"
import { useSearchParams } from "react-router-dom"
import { OWNER_PARAM_NAME } from "../../../config";

export const OwnerDetails = () => {
    const [searchParams] = useSearchParams();
    const OWNER_NUMBER = searchParams.get(OWNER_PARAM_NAME) as string
    return <Fragment>
        owner details (number) {OWNER_NUMBER}
    </Fragment>
}