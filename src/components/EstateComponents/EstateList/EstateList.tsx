import { Heading, TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import { useEstateContext } from "../../../Context/EstateContext";
import { ESTATE_QUERY } from "../../../config";
import { IAppUsers } from "../../../interfaces/IAppusers"
import { getEstates } from "../../../supabaseCall/estates/getAllEstates";
import { EstateRow } from "../EstateRow/EstateRow";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type IEstateList = {
    user: IAppUsers;
}
export const EstateList = ({user}: IEstateList) => {
    const {estates, setEstates} = useEstateContext();
    
    const { acces_level, phone_number } = user;
    const {data: estatesData} = useQuery([ESTATE_QUERY], () => getEstates(acces_level, phone_number))

    useEffect(() => {
        if (estatesData) {
            const callEstates = async () => {
                setEstates(estatesData);
            }
            callEstates();
        }
    }, [estatesData]);

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