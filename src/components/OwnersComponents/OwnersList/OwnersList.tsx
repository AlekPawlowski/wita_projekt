import { useEffect, useState } from "react"
import { IOwners } from "../../../interfaces/Iowners"
import { getOwners } from "../../../supabaseCall/owners/getOwners"
import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react"
import { OwnerRow } from "../OwnerRow/OwnerRow"

export const OwnerList = () => {
    const [owners, setOwners] = useState<IOwners[] | null>(null)
    useEffect(() => {
        const getAllOwners = async () => {
            const ownersList = await getOwners();
            setOwners(ownersList);
        }
        getAllOwners()
    })
    if (!owners) return <p>Loading data...</p>
    if (owners.length === 0) return <p>There is no owners</p>
    return <TableContainer>
        <Table>
            {/* all properties that we wanna show, witch is describe in readme.md, need to add  */}
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Phone number</Th>
                    <Th>Details</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    owners.map(owner => {
                        return <OwnerRow key={owner.id} owner={owner}/>
                    })
                }
            </Tbody>
        </Table>
    </TableContainer>
}