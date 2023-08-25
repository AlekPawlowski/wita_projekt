import { Box, Heading, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { IFailures } from "../../../interfaces/Ifailures";
import { getFailures } from "../../../supabaseCall/failures/getFailures";
import { FailureRow } from "../FailureRow/FailureRow";
import { MARGIN_SPACE } from "../../../config";

interface IFailuresList {
    estateId?: string;
}

export const FailuresList = ({ estateId }: IFailuresList) => {
    // initlize variables for failures list
    const [failures, setFailures] = useState<IFailures[] | null>(null)
    useEffect(() => {
        const callFailures = async () => {
            const failureEstateId = estateId ? estateId : null;
            const calledFailures = await getFailures(failureEstateId);
            console.log("esid", calledFailures);
            setFailures(calledFailures);
        }
        callFailures();
    }, [])
    // call failures list
    if (!failures) return <p>Loading ...</p>
    if (failures.length == 0) return <Heading as="h2" size="md">There is no failures in estates that match to you, contact with admin, or it's ok</Heading>
    
    return <Box my={MARGIN_SPACE}>
        <Heading as="h2" size="md" my={MARGIN_SPACE}>List of failures</Heading>
        <TableContainer>
            <Table>
                {/* all properties that we wanna show, witch is describe in readme.md, need to add  */}
                <Thead>
                    <Tr>
                        <Th>Title of failure</Th>
                        <Th>Status</Th>
                        <Th>Details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        failures.map((failure)=> {
                            const {id} = failure;
                            return <FailureRow key={id} failureDetails={failure}/>
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
}