import { Button, Flex, Menu } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LogOutElement } from "../FormComponents/LogOutForm/LogOutForm"
import { MARGIN_SPACE, GRID_CONFIG } from "../../config"

export const Navigation = () => {
    return <Menu>
        <Flex
            mt={Math.round(MARGIN_SPACE / 2)}
            gap={GRID_CONFIG.gap}
        >
            <Button>
                <Link to="/">Home page</Link>
            </Button>
            <LogOutElement />
        </Flex>
    </Menu >
}