import { Fragment } from "react"
import { IAppUsers } from "../../interfaces/IAppusers";
import { Flex, Heading } from "@chakra-ui/react";
import { LogOutElement } from "../Forms/LogOutForm";
import { Link } from "react-router-dom"

type IHomePage = {
    user: IAppUsers;
}

export const HomePage = ({ user }: IHomePage) => {
    const { acces_level, user_name } = user;
    // loading data by access level here
    return <Fragment>
        {/* log out module */}
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
                <Link to="/estates">Estate list</Link>
                {/* List of all user/employess -> account/admin */}
                {acces_level !== "employee"
                    ? <Link to="employee">Employee list</Link>
                    : null}
                {/* list of all owners -> admin */}
                {acces_level === "admin"
                    ? <Link to="owners">Owners List</Link>
                    : null
                }
            </Flex>
        </Flex>
    </Fragment>
}