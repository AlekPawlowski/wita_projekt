import { useEffect, useState } from "react";
import { IEstate } from "../../../interfaces/Iestate";
import { getAllEmployeeEstates, getEstates } from "../../../supabaseCall/estates/getAllEstates";
import { EstateRow } from "../EstateRow/EstateRow";
import { Table, TableContainer, Tbody, Th, Thead, Tr, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

interface IEstateList {
    employeePhoneNumber: number; // id of employee if we wanna get as admin only estates that belongs to specific employee
}
// make from this one generic List
export const EstateList = ({ employeePhoneNumber }: IEstateList) => {
    const [estates, setEstates] = useState<IEstate[] | null>(null);
    const state = useSelector((state: RootState) => state.user);
    const { user } = state;
    useEffect(() => {
        if (user && !employeePhoneNumber) {
            const callEstates = async () => {
                const { acces_level, phone_number } = user;
                const estatesList = await getEstates(acces_level, phone_number)
                setEstates(estatesList);
            }
            callEstates();
        }
        if(employeePhoneNumber) {
            const callEstates = async() => {
                const estateList = await getAllEmployeeEstates(String(employeePhoneNumber));
                setEstates(estateList);
            }
            callEstates()
        }
    }, []);

    if (!estates) return null;
    if (estates.length == 0) return <Heading as="h2" size="md">There is no estates that match to you, contact with admin</Heading>
    return <TableContainer>
        <Table>
            {/* all properties that we wanna show, witch is describe in readme.md, need to add  */}
            <Thead>
                <Tr>
                    <Th>Image</Th>
                    <Th>Name</Th>
                    <Th>Adress</Th>
                    <Th>Owner</Th>
                    <Th>Avibility</Th>
                    <Th>Details</Th>
                </Tr>
            </Thead>
            <Tbody>
                {estates.map((estate) => {
                    const { id } = estate;
                    return <EstateRow estateDetails={estate} key={id} />
                })}
            </Tbody>
        </Table>
    </TableContainer>
}