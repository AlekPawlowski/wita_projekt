import { Fragment } from "react"
import { Box, Button, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { EstateList } from "../EstateList/EstateList"
import { MARGIN_SPACE } from "../../../config"

export const EstateMainView = () => {
    return <Fragment>
        <Heading as="h1" size="md" my={MARGIN_SPACE}>List of all estates</Heading>
        {/* add estate form */}
        <EstateList />
        <Box my={MARGIN_SPACE}>
            <Button>
                <Link to="/estates/addEstate">Add Estate Form</Link>
            </Button>
        </Box>
    </Fragment>
}