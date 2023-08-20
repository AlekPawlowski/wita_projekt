import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { ESTATE_PARAM_NAME } from "../../../config";
import { IEstate } from "../../../interfaces/Iestate";
import { getSingleEstate } from "../../../supabaseCall/getSingleEstate";
import { Box, Card, CardBody, Divider, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { InformationText } from "../../InformationText/InformationText";

export const EstateDetails = () => {
    const [searchParams] = useSearchParams();
    const CLIENT_ID = searchParams.get(ESTATE_PARAM_NAME) as string;
    console.log(CLIENT_ID);
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
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
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
                    <Divider mb={4} mt={4}/>
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
        <Box>
            Detail information
        </Box>
    </Box>
}
