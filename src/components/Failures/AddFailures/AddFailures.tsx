import { Text, Box, Heading, Button, Flex } from "@chakra-ui/react"
import { GRID_CONFIG, MARGIN_SPACE } from "../../../config"
import { FailuresForm } from "../../FormComponents/FailuresForm/FailuresForm"
import { LinkButton } from "../../Common/Buttons/LinkButton"
import { useNavigate } from "react-router-dom"

export const AddFailures = () => {
    const navigate = useNavigate();
    return <Box>
        <Flex 
            mt={Math.round(MARGIN_SPACE / 2)} 
            gap={GRID_CONFIG.gap}
        > 
            <LinkButton link={`/failures`}>Failures list</LinkButton>
            <Button type="button" onClick={() => navigate(-1)}>
                Go back
            </Button>
        </Flex>

        <Heading as="h1" size="md" my={MARGIN_SPACE}>Add Failures</Heading>
        <Text>Here you can add failures to the estate {/* here gonna be estate name*/}</Text>
        <FailuresForm />
    </Box>
}