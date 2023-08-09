import { Fragment } from "react"
import { Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { EstateList } from "./EstateList"

export const EstatesComponent = () => {
    return <Fragment>
        List of all estates
        {/* add estate form */}
        <EstateList />
        <Box>
            <Button>
                <Link to="/estates/addEstate">Add Estate Form</Link>
            </Button>
        </Box>
    </Fragment>
}