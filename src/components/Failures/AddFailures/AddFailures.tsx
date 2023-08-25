import { Text, Box, Heading } from "@chakra-ui/react"
import { ESTATE_PARAM_NAME, MARGIN_SPACE } from "../../../config"
import { FailuresForm } from "../../FormComponents/FailuresForm/FailuresForm"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { EstateSelectBox } from "../../EstatesSelectBox/EstateSelectBox"
import { IEstateFailData } from "../../../interfaces/Iestate"

export const AddFailures = () => {
    const [searchParams] = useSearchParams();
    const paramsEstateId = searchParams.get(ESTATE_PARAM_NAME) as string;
    const [estateId, setEstateId] = useState<string | null>(null)
    const [estateData, setEstateData] = useState<IEstateFailData | null>(null);
    
    useEffect(()=>{
        if(paramsEstateId){
            setEstateId(paramsEstateId);
        }
    }, [estateId]);
    if(!estateData) return <EstateSelectBox title="Select estate to add failures" setEstate={setEstateData} />
    // if(!estateData) return null;
    return <Box>
        <Heading as="h1" size="md" my={MARGIN_SPACE}>Add Failures</Heading>
        <Text my={MARGIN_SPACE}>Here you can add failures to the estate {/* here gonna be estate name*/}</Text>
        <FailuresForm title={"Add failure"} estateData={estateData}/>
    </Box>
}