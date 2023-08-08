import { Fragment } from "react"
import { IAppUsers, accesLevel } from "../../interfaces/IAppusers";
import { Box, Button, Center, Container, Flex, Heading } from "@chakra-ui/react";
import { LogOutElement } from "../Forms/LogOutForm";

type IHomePage = {
    user: IAppUsers;
}

export const HomePage = ({user}: IHomePage) => {
    const {acces_level, user_name} = user;
    console.log( "user data ->",  user);
    return <Fragment>
        {/* log out module */}
        <Container maxW="1140">
            <Flex mt="10" direction={"column"} gap="10" >
                <Flex justify="space-between" align="center">
                    <Heading 
                        as="h1" 
                        size="sm"
                    >Hello {user_name}, your current acces level is: {acces_level}</Heading>
                    <LogOutElement />
                </Flex>
                <Flex>
                    {/* List of all estates link -> all */}
                    {/* List of all user/employess -> account/admin */}
                    {/* list of all owners -> admin */}
                </Flex>
            </Flex>
        </Container>
    </Fragment>
}