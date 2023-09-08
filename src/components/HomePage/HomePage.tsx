import { Button, Flex, Heading } from "@chakra-ui/react";
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { IAppUser } from "../../interfaces/IAppusers";

type IHomePage = {
    user: IAppUser;
}

export const HomePage = ({ user:{ acces_level, user_name } }: IHomePage) => {
    // loading data by access level here
    return <Fragment>
        {/* log out module */}
        <Flex mt="10" direction={"column"} gap="10" >
            <Flex justify="space-between" align="center">
                <Heading
                    as="h1"
                    size="sm"
                >Hello {user_name}, your current acces level is: {acces_level}</Heading>
            </Flex>
            <Flex gap="10" align="center">
                {/* List of all estates link -> all */}
                <Button>
                    <Link to="/estates">Estate list</Link>
                </Button>
                {/* List of all user/employess -> account/admin */}
                {acces_level !== "employee"
                    ? <Button><Link to="employee">Employee list</Link></Button>
                    : null}
                {/* list of all owners -> admin */}
                {acces_level === "admin"
                    ? <Button><Link to="owners">Owners list</Link></Button>
                    : null
                }
                <Button>
                    <Link to="failures">Failures list</Link>
                </Button>
            </Flex>
        </Flex>
    </Fragment>
}