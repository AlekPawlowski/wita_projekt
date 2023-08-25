import { Box, Flex, Text } from "@chakra-ui/react";
import { IEstateFailData } from "../../../interfaces/Iestate";
import { IFailures } from "../../../interfaces/Ifailures"
import { LinkButton } from "../../Common/Buttons/LinkButton";
import { ESTATE_PARAM_NAME, FAILURE_PARAM_NAME, GRID_CONFIG, MARGIN_SPACE } from "../../../config";

type IFailureDetailsContent = {
    failure: IFailures;
    estate: IEstateFailData
}
export const FailureDetailsContent = ({ failure, estate }: IFailureDetailsContent) => {
    const { id: estateId, name } = estate;
    const { id: failureId, failure_description, failure_title, status } = failure;
    return <Box>
        <Text>Estate name: {name}</Text>
        <Text>Failure title: {failure_title}</Text>
        <Text>Current status: {status ? "Resolved" : "Unresolved"}</Text>
        <Text>Failure description:</Text>
        <Text>{failure_description}</Text>
        
        <Flex 
            mt={Math.round(MARGIN_SPACE / 2)} 
            gap={GRID_CONFIG.gap}
        > 
            <LinkButton link={"/failures"}>Failures list</LinkButton>
            <LinkButton link={`/estates/${estateId}?${ESTATE_PARAM_NAME}=${estateId}`}>Failure estate</LinkButton>
            <LinkButton link={`/failures/edit?${FAILURE_PARAM_NAME}=${failureId}`}>Edit failures</LinkButton>
        </Flex>
    </Box>
}