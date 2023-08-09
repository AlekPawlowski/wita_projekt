import { Fragment } from "react"
import { AddEstateForm } from "../Forms/AddEstateForm"
import { Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const EstateList = () => {
    return <Fragment>
        List of all estates

        {/* add estate form */}
        <Box>
            <Button>
                <Link to="/estates/addEstate">Add Estate Form</Link>
            </Button>
        </Box>
    </Fragment>
}