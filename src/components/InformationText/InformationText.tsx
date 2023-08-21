import { Stack, Text } from "@chakra-ui/react";
import { IInfoText } from "../../interfaces/IInfoText";

/**
 * Infromation text is an component that show information with 
 * bolded value, used to show information
 * describe: bolded value
 * @param {string} describe -> description for value
 * @param {string} value -> value
 */
export const InformationText = ({describe, value}: IInfoText) => {
    return <Stack gap={0}>
        <Text fontSize='sm' display="inline">{describe}:</Text>
        <Text fontSize='md' display="inline" as="b">{value ? value : `No info about ${describe}`}</Text>
    </Stack>
}