import { Box } from "@chakra-ui/react"
import { LinkButton } from "../../Common/Buttons/LinkButton"
import { FailuresList } from "../FailuresList/FailuresList"

export const FailuresSite = () => {
    return <Box>
        <FailuresList />
        <LinkButton link={`/failures/add`}>Add failures</LinkButton>
    </Box>
}