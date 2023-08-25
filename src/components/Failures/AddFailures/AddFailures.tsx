import { Text, Box, Heading } from "@chakra-ui/react"
import { ESTATE_PARAM_NAME, MARGIN_SPACE } from "../../../config"
import { FailuresForm } from "../../FormComponents/FailuresForm/FailuresForm"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { EstateSelectBox } from "../../EstatesSelectBox/EstateSelectBox"

export const AddFailures = () => {
    const [searchParams] = useSearchParams();
    const paramsEstateId = searchParams.get(ESTATE_PARAM_NAME) as string;
    const [estateId, setEstateId] = useState<string | null>(null)

    useEffect(()=>{
        if(paramsEstateId){
            setEstateId(paramsEstateId);
        }
    }, [estateId]);
    if(!estateId) return <EstateSelectBox title="Select estate to add failures" setEstateId={setEstateId} />

    return <Box>
        <Heading as="h1" size="md" my={MARGIN_SPACE}>Add Failures</Heading>
        <Text my={MARGIN_SPACE}>Here you can add failures to the estate {/* here gonna be estate name*/}</Text>
        <FailuresForm title={"Add failure"} estateId={estateId}/>
    </Box>
}