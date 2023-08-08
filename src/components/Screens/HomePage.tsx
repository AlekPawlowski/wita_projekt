import { Fragment } from "react"
import { accesLevel } from "../../interfaces/IAppusers";
import { Box, Button, Center, Container, Flex, Heading } from "@chakra-ui/react";
import { LogOutElement } from "../Forms/LogOutForm";

type IHomePage = {
    email: string;
    accesLevel: accesLevel;
}

export const HomePage = ({email, accesLevel}: IHomePage) => {
    return <Fragment>
        {/* log out module */}
        <Container maxW="1140">
            <Flex mt="10" direction={"column"} gap="10" >
                <Flex justify="space-between" align="center">
                    <Heading 
                        as="h1" 
                        size="sm"
                    >Hello {accesLevel}! {email}</Heading>
                    <LogOutElement />
                </Flex>
            </Flex>
        </Container>
    </Fragment>
}