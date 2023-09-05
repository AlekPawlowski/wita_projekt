import { Td, Tr } from "@chakra-ui/react"
import { IOwners } from "../../../interfaces/Iowners"
import { LinkButton } from "../../Common/Buttons/LinkButton"
import { OWNER_PARAM_NAME } from "../../../config"

interface IOwnerRow {
    owner: IOwners
}
export const OwnerRow = ({owner}: IOwnerRow) => {
    const {name, phone_number} = owner
    return <Tr>
        <Td>{name}</Td>
        <Td>{phone_number}</Td>
        <Td>
            <LinkButton link={`/owners/${name}?${OWNER_PARAM_NAME}=${phone_number}`}>
                Details
            </LinkButton>
        </Td>
    </Tr>
}