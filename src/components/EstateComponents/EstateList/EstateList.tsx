import { useContext, useEffect, useState } from "react"
import { IEstate } from "../../../interfaces/Iestate";
import { getAllEstates } from "../../../supabaseCall/getAllEstates";
import { EstateRow } from "../EstateRow/EstateRow";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useEstateContext } from "../../../Context/EstateContext";

// make from this one generic List
export const EstateList = () => {
    const { estates } = useEstateContext();
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