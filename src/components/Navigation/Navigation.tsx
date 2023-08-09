import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Navigation = () => {
    return <Menu>
        <Button><Link to="/">Home page</Link></Button>
    </Menu >
}