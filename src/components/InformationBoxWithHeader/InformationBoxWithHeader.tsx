import { Box, Divider, Grid, Heading, Stack } from "@chakra-ui/react"
import { IInformationBoxWithHeader } from "../../interfaces/IInformationBoxWithHeader/IInformationBoxWithHeader";
import { GRID_CONFIG, MARGIN_SPACE } from "../../config";
import { InformationText } from "../InformationText/InformationText";

export function InformationBoxWithHeader({ header, content }: IInformationBoxWithHeader) {
    return <Box>
        <Stack>
            <Heading size="md">{header}</Heading>
            <Divider mb={MARGIN_SPACE} mt={MARGIN_SPACE} />
            <Grid
                templateColumns={GRID_CONFIG.elementsInRow}
                gap={GRID_CONFIG.gap}
            >
                {content.length > 0 ?
                    content.map((element) => {
                        const { describe, value } = element;
                        return <InformationText key={describe} describe={describe} value={value} />
                    })
                    : "No information to show"
                }
            </Grid>
        </Stack>
    </Box>
}