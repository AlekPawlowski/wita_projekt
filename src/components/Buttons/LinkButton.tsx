import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";

type ILinkButton = {
    link: string;
    children: string | JSX.Element;
}

export const LinkButton = ({link, children}: ILinkButton) => {
    return <Button>
        <Link to={link}>{children}</Link>
    </Button>
}