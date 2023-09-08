import { Fragment } from "react"
import { OwnerList } from "../OwnersList/OwnersList"
import { LinkButton } from "../../Common/Buttons/LinkButton"
import { Box, Heading } from "@chakra-ui/react"
import { MARGIN_SPACE } from "../../../config"

export const OwnerMainView = () => {
    return <Fragment>
        <Heading as="h1" size="md" my={MARGIN_SPACE}>
            List of all estates
        </Heading>
        <OwnerList />
        <Box my={MARGIN_SPACE}>
            <LinkButton link={'/owners/add'}>
                Add Owner Form
            </LinkButton>
        </Box>
    </Fragment>
}