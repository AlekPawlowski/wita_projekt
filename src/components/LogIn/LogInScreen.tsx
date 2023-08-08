import { Text, Center, Flex, Heading } from "@chakra-ui/react"
import { LogInForm } from "../Forms/LoginForm"

export const LogInScreen = () => {
    return <>
        <Center minH="100vh">
            <Flex gap="3" direction="column">
                <Heading as='h1' >
                    <Text align="center">
                        Log in form
                    </Text>
                </Heading>
                <LogInForm />
            </Flex>
        </Center>
    </>
}