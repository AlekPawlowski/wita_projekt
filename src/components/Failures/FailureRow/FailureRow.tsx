import { Tr, Td } from "@chakra-ui/react";
import { IFailures } from "../../../interfaces/Ifailures"
import { LinkButton } from "../../Common/Buttons/LinkButton";
import { FAILURE_PARAM_NAME } from "../../../config";

type IFailureRow = {
    failureDetails: IFailures;
}
export const FailureRow = ({failureDetails}: IFailureRow) => {
    const {id, failure_title, status} = failureDetails
    return <Tr>
        <Td>{failure_title}</Td>
        <Td>{status ? "Resolved" : "Unresolved"}</Td>
        <Td>
            <LinkButton link={`/failure/${id}?${FAILURE_PARAM_NAME}=${id}`}>Details</LinkButton>
        </Td>
    </Tr>
}