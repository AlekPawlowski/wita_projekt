import { Fragment, useEffect, useState } from "react"
import { AddEstateForm } from "../Forms/AddEstateForm"
import { Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { supabase } from "../../config"

export const EstateList = () => {
    // const [estates, setEstates] = useState<any[] | null>(null);


    // const { data: incomeEstate, error } = await supabase
    //     .from('estate')
    //     .select('*');

    // useEffect(() => {
    //     if(incomeEstate) setEstates(incomeEstate);
    // }, [incomeEstate])

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