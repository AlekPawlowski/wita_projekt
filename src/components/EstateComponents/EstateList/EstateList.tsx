import { useEffect, useState } from "react";
import { IEstate } from "../../../interfaces/Iestate";
import { getEstates } from "../../../supabaseCall/estates/getAllEstates";
import { EstateRow } from "../EstateRow/EstateRow";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";


// make from this one generic List
export const EstateList = () => {
    const [estates, setEstates] = useState<IEstate[] | null>(null);
    const state = useSelector((state: RootState) => state.user);
    const { user } = state;
    useEffect(() => {
        if (user) {
            const callEstates = async () => {
                const { acces_level, phone_number } = user;
                const estatesList = await getEstates(acces_level, phone_number)
                setEstates(estatesList);
            }
            callEstates();
        }
    }, []);

    if (!estates) return null;
    return <TableContainer>
        <Table>
            {/* all properties that we wanna show, witch is describe in readme.md, need to add  */}
            <Thead>
                <Tr>
                    <Th>Image</Th>
                    <Th>Id</Th>
                    <Th>Name</Th>
                    <Th>Adress</Th>
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