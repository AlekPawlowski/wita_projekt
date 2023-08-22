import { IEstate } from "../../../interfaces/Iestate"
import { Td, Tr } from "@chakra-ui/react";
import { LinkButton } from "../../Buttons/LinkButton";
import { ESTATE_PARAM_NAME } from "../../../config";

type IEstateRow = {
    estateDetails: IEstate;
}

export const EstateRow = ({estateDetails}: IEstateRow) => {
    const {id, name, adress, avibility} = estateDetails;
    return <Tr>
        <Td>Image</Td>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{adress}</Td>
        <Td>{avibility ? "Available" : "Unavail"}</Td>
        <Td>
            <LinkButton link={`/estates/${id}?${ESTATE_PARAM_NAME}=${id}`}>Details</LinkButton>
        </Td>
    </Tr>
}