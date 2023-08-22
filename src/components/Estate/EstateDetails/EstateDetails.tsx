import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { ESTATE_PARAM_NAME, GRID_CONFIG, MARGIN_SPACE } from "../../../config";
import { IEstate } from "../../../interfaces/Iestate";
import { getSingleEstate } from "../../../supabaseCall/getSingleEstate";
import { Box, Card, CardBody, CardHeader, Divider, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { InformationText } from "../../InformationText/InformationText";
import { LinkButton } from "../../Buttons/LinkButton";
import { CreateMainInfo } from "./CreateEstateDetailsData";
import { InformationBoxWithHeader } from "../../InformationBoxWithHeader/InformationBoxWithHeader";

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
    const { name } = estate;
    const estateMainInformation = CreateMainInfo(estate);
    return <Box w="100%">
        <Box mt={Math.round(MARGIN_SPACE / 2)}>
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
                    <InformationBoxWithHeader
                        header={`Property '${name}' main information:`}
                        content={estateMainInformation}
                    />
                </CardBody>
            </Stack>
        </Card>
        <Divider mb={MARGIN_SPACE} mt={MARGIN_SPACE} />
        <Card variant='outline'>
            <CardHeader mb={0}>
                <Heading as="h2" size="md">Details info</Heading>
            </CardHeader>
            <CardBody>
            </CardBody>
        </Card>
    </Box>
}
