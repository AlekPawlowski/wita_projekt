import { Fragment, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { MARGIN_SPACE, OWNER_PARAM_NAME } from "../../../config";
import { IOwners } from "../../../interfaces/Iowners";
import { getSingleOwner } from "../../../supabaseCall/owners/getSingleOwner";
import { createOwnerData } from "./createOwnerContentData";
import { Box, Divider, Heading } from "@chakra-ui/react";
import { InformationBoxWithHeader } from "../../Common/InformationBoxWithHeader/InformationBoxWithHeader";

export const OwnerDetails = () => {
    const [searchParams] = useSearchParams();
    const OWNER_NUMBER = searchParams.get(OWNER_PARAM_NAME) as string
    const [owner, setOwner] = useState<IOwners | null>(null)
    useEffect(()=>{
        const getOwner = async ()=> {
            const ownerData = await getSingleOwner(OWNER_NUMBER);
            setOwner(ownerData);
        }
        getOwner();
    })
    if(!owner) return null;
    const onwerData = createOwnerData(owner);

    return <Fragment>
        <Box my={MARGIN_SPACE}>
            <InformationBoxWithHeader header={"Owner details"} content={onwerData}/>
        </Box>
        <Divider my={MARGIN_SPACE}/>
        <Heading size="md" my={MARGIN_SPACE}>Owner estates list</Heading>
        {/* list of owner estates */}
    </Fragment>
}