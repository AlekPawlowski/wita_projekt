import { Tr, Td } from "@chakra-ui/react";
import { LinkButton } from "../../Common/Buttons/LinkButton";
import { EMPLOYEE_PARAM_NAME } from "../../../config";
import { IEmployeeRow } from "../../../interfaces/Employees/ISingleEmployeeParam";

export const EmployeeRow = ({ employee }: IEmployeeRow) => {
    const { id, user_name, phone_number, acces_level, location } = employee
    return <Tr>
        <Td>{user_name}</Td>
        <Td>{acces_level}</Td>
        <Td>{phone_number}</Td>
        <Td>{location}</Td>
        <Td>
            <LinkButton link={`/employee/${id}?${EMPLOYEE_PARAM_NAME}=${id}`}>Details</LinkButton>
        </Td>
    </Tr>
}