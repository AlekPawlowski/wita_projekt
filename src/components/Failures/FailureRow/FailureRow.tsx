import { Tr, Td } from "@chakra-ui/react";
import { IFailures } from "../../../interfaces/Ifailures"
import { LinkButton } from "../../Common/Buttons/LinkButton";

type IFailureRow = {
    failureDetails: IFailures;
}
export const FailureRow = ({failureDetails}: IFailureRow) => {
    const {failure_title, status} = failureDetails
    return <Tr>
        <Td>{failure_title}</Td>
        <Td>{status ? "Resolved" : "Unresolved"}</Td>
        <Td>
            <LinkButton link={`#`}>Details</LinkButton>
        </Td>
    </Tr>
}