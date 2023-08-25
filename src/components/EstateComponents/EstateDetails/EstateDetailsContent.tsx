import { Image, Card, Stack, CardBody, Divider, CardHeader, Heading, Box, Flex } from "@chakra-ui/react";
import { ESTATE_PARAM_NAME, GRID_CONFIG, MARGIN_SPACE } from "../../../config";
import { IEstate } from "../../../interfaces/Iestate";
import { LinkButton } from "../../Common/Buttons/LinkButton";
import { InformationBoxWithHeader } from "../../Common/InformationBoxWithHeader/InformationBoxWithHeader";
import { CreateMainInformation, CreateGeneralInformation, CreateFinancialInformation } from "./CreateEstateDetailsData";
import { FailuresList } from "../../Failures/FailuresList/FailuresList";

interface IEstateDetailsContent {
    estate: IEstate;
}
export const EstateDetailsContent = ({estate}: IEstateDetailsContent) => {
    const { name, id } = estate;
    const estateMainInformation = CreateMainInformation(estate);
    const generalInformation = CreateGeneralInformation(estate);
    const financialInformation = CreateFinancialInformation(estate);

    return <Box w="100%">
        <Flex 
            mt={Math.round(MARGIN_SPACE / 2)} 
            gap={GRID_CONFIG.gap}
        > 
            <LinkButton link={"/estates"}>Back to estate list</LinkButton>
            <LinkButton link={`/estates/editestate?${ESTATE_PARAM_NAME}=${id}`}>Edit estate</LinkButton>
            <LinkButton link={`/failures/add?${ESTATE_PARAM_NAME}=${id}`}>Add failures</LinkButton>
        </Flex>
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
                <Heading as="h2" size="lg">Details info</Heading>
            </CardHeader>
            <Divider mb={MARGIN_SPACE} />
            <CardBody>
                <InformationBoxWithHeader
                    header={"General information about estate:"}
                    content={generalInformation}
                />
                <Divider mb={MARGIN_SPACE} mt={MARGIN_SPACE} />
                <InformationBoxWithHeader
                    header={"Financial information of the estate:"}
                    content={financialInformation}
                />
            </CardBody>
        </Card>
        <FailuresList estateId={id} />
    </Box>
}