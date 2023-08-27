import { IEstate } from "../../../interfaces/Iestate"
import { Td, Tr } from "@chakra-ui/react";
import { LinkButton } from "../../Common/Buttons/LinkButton";
import { ESTATE_PARAM_ID } from "../../../config";

type IEstateRow = {
    estateDetails: IEstate;
}

export const EstateRow = ({estateDetails}: IEstateRow) => {
    const {id, owner_name, name, adress, avibility} = estateDetails;
    return <Tr>
        <Td>Image</Td>
        <Td>{name}</Td>
        <Td>{adress}</Td>
        <Td>{owner_name}</Td>
        <Td>{avibility ? "Available" : "Unavail"}</Td>
        <Td>
            <LinkButton link={`/estates/${id}?${ESTATE_PARAM_ID}=${id}`}>Details</LinkButton>
        </Td>
    </Tr>
}