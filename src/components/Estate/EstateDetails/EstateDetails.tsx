import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom";
import { ESTATE_PARAM_NAME } from "../../../config";
import { IEstate } from "../../../interfaces/Iestate";
import { getSingleEstate } from "../../../supabaseCall/getSingleEstate";
import { Box, Card, CardBody, CardHeader, Divider, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { InformationText } from "../../InformationText/InformationText";
import { LinkButton } from "../../Buttons/LinkButton";
import { CustomCardHeader } from "../../CardElements/CustomCardHeader";
import { EstateFinancialDetails } from "../EstateCardDetails/EstateCardDetails";

const MARGIN_SPACE = 5;

export const EstateDetails = () => {
    const [searchParams] = useSearchParams();
    const CLIENT_ID = searchParams.get(ESTATE_PARAM_NAME) as string;
    const [estate, setEstate] = useState<IEstate | null>(null);
    const estateDetails = async () => {
        const estateDetails = await getSingleEstate(CLIENT_ID);
        setEstate(estateDetails);
    }
    useEffect(() => {
        estateDetails();
    }, [])
    if (!estate) return <p>Loading data...</p>
    const { id, adress, avibility, contract_end_date, contract_start_data, door_code, keeper_name, market_price, name, owner_name, owner_phone_number, revanue, electricity_amount, electricity_deadline, rent_amount, rent_deadline, tax_amount, tax_deadline } = estate;
    
    return <Box w="100%">
        <Box mt={Math.round(MARGIN_SPACE/2)}>
            <LinkButton link={"/estates"}>Back to estate list</LinkButton>
        </Box>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            mt={MARGIN_SPACE}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />
            <Stack w="100%">
                <CardBody>
                    <Heading size='md'>Property '<Text as="span">{name}</Text>' main information:</Heading>
                    <Divider mb={MARGIN_SPACE} mt={MARGIN_SPACE}/>
                    <Grid 
                        templateColumns="repeat(3, 1fr)"
                        gap={3}
                    >
                        <InformationText describe="Keeper" value={keeper_name}/>
                        <InformationText describe="Owner" value={owner_name}/>
                        <InformationText describe="Contract end" value={contract_end_date as string}/>
                        <InformationText describe="Avibility" value={avibility ? "Avail" : "Unavail"}/>
                        <InformationText describe="Current revanue" value={`${revanue} PLN`}/>
                    </Grid>
                </CardBody>
            </Stack>
        </Card>
        <Divider mb={MARGIN_SPACE} mt={MARGIN_SPACE}/>
        <Card>
            <CustomCardHeader>Detail information</CustomCardHeader>
            <CardBody>
            </CardBody>
        </Card>
    </Box>
}
