import { Box, Heading, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { MARGIN_SPACE } from "../../../config";
import { IAppUser } from "../../../interfaces/IAppusers"
import { EmployeeRow } from "../EmployeeRow/EmployeeRow";
import { LinkButton } from "../../Common/Buttons/LinkButton";

interface IEmployeeList {
    employees: IAppUser[];
}
export const EmployeeList = ({employees}: IEmployeeList) => {

    return <Box my={MARGIN_SPACE}>
        <Heading as="h2" my={MARGIN_SPACE}>Emloyees list</Heading>
        <TableContainer>
            <Table>
                {/* all properties that we wanna show, witch is describe in readme.md, need to add  */}
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Occupation</Th>
                        <Th>Phone Number</Th>
                        <Th>Location</Th>
                        <Th>Details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        employees.map((employee)=> {
                            return <EmployeeRow key={employee.id} employee={employee}/>
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
        <Box my={MARGIN_SPACE}>
            <LinkButton link="/employee/add">Add User form</LinkButton>
        </Box>
    </Box>
}