import { CardHeader, Heading } from "@chakra-ui/react"

type ICustomCardHeader = {
    children: JSX.Element | string
}

export const CustomCardHeader = ({children}: ICustomCardHeader) => {
    return <CardHeader>
        <Heading size="md">{children}</Heading>
    </CardHeader>
}