import { Button, Link } from "@chakra-ui/react"

type ILinkButton = {
    link: string;
}

export const LinkButton = ({link}: ILinkButton) => {
    return <Button>
        <Link href={link}>Details</Link>
    </Button>
}