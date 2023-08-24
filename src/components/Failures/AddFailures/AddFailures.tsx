import { Text, Box, Heading } from "@chakra-ui/react"
import { ESTATE_PARAM_NAME, MARGIN_SPACE } from "../../../config"
import { FailuresForm } from "../../FormComponents/FailuresForm/FailuresForm"
import { useSearchParams } from "react-router-dom"

export const AddFailures = () => {
    const [searchParams] = useSearchParams();
    const estateId = searchParams.get(ESTATE_PARAM_NAME) as string;

    console.log(estateId)

    return <Box>

        <Heading as="h1" size="md" my={MARGIN_SPACE}>Add Failures</Heading>
        <Text my={MARGIN_SPACE}>Here you can add failures to the estate {/* here gonna be estate name*/}</Text>
        <FailuresForm estateId={estateId}/>
    </Box>
}