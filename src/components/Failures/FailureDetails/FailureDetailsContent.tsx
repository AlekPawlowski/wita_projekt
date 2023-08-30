import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { IEstateFailData } from "../../../interfaces/Iestate";
import { IFailures } from "../../../interfaces/Ifailures"
import { LinkButton } from "../../Common/Buttons/LinkButton";
import { ESTATE_PARAM_ID, FAILURE_PARAM_NAME, GRID_CONFIG, MARGIN_SPACE } from "../../../config";
import { createFailuresContentData } from "./createFailuresContentData";
import { InformationText } from "../../Common/InformationText/InformationText";
import { deleteFailure } from "../../../supabaseCall/failures/deleteFailure";
import { useNavigate } from "react-router-dom";

type IFailureDetailsContent = {
    failure: IFailures;
    estate: IEstateFailData
}
export const FailureDetailsContent = ({ failure, estate }: IFailureDetailsContent) => {
    const navigate = useNavigate();
    const { id: estateId } = estate;
    const { id: failureId } = failure;

    const boxContent = createFailuresContentData(failure, estate);

    const removeFailure = async () => {
        await deleteFailure(failureId);
        navigate(-1);
    }

    return <Box>
        <Heading as="h2" size="md" my={MARGIN_SPACE}>Failure details view</Heading>
        <Flex 
            mt={Math.round(MARGIN_SPACE / 2)} 
            gap={GRID_CONFIG.gap}
            direction={"column"}
        >
        {
            boxContent.map(content =>{
                const {describe, value} = content;
                return <InformationText key={describe} describe={describe} value={value} />
            })
        }
        </Flex>
        
        <Flex 
            mt={Math.round(MARGIN_SPACE / 2)} 
            gap={GRID_CONFIG.gap}
        > 
            <LinkButton link={"/failures"}>Failures list</LinkButton>
            <LinkButton link={`/estates/${estateId}?${ESTATE_PARAM_ID}=${estateId}`}>Failure estate</LinkButton>
            <LinkButton link={`/failures/edit?${FAILURE_PARAM_NAME}=${failureId}`}>Edit failures</LinkButton>
            <Button onClick={removeFailure} >Remove failure</Button>
        </Flex>
    </Box>
}