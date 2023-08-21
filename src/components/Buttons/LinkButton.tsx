import { Button, Link } from "@chakra-ui/react"

type ILinkButton = {
    link: string;
    children: string | JSX.Element;
}

export const LinkButton = ({link, children}: ILinkButton) => {
    return <Button>
        <Link href={link}>{children}</Link>
    </Button>
}