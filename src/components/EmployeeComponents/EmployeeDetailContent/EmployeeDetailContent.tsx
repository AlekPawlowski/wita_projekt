import { Fragment } from "react"
import { IEmployeeRow } from "../../../interfaces/Employees/ISingleEmployeeParam"
import { GRID_CONFIG, MARGIN_SPACE } from "../../../config"
import { Card, CardBody, Flex } from "@chakra-ui/react"
import { LinkButton } from "../../Common/Buttons/LinkButton"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux"
import { createEmployeeDetailsContent } from "./CreateEmployeeDetailsContent"
import { InformationBoxWithHeader } from "../../Common/InformationBoxWithHeader/InformationBoxWithHeader"
import { EstateList } from "../../EstateComponents/EstateList/EstateList"

export const EmployeeDetailContent = ({ employee }: IEmployeeRow) => {
    const state = useSelector((state: RootState) => state.user);
    const { user } = state;
    const employeeData = createEmployeeDetailsContent(employee)
    return <Fragment>
        <Flex
            mt={Math.round(MARGIN_SPACE / 2)}
            gap={GRID_CONFIG.gap}
        >
            {
                user?.acces_level == "admin"
                    ? <LinkButton link={`#`}>Edit user</LinkButton>
                    : null
            }
        </Flex>
        <Card>
            <CardBody>
                <InformationBoxWithHeader
                    header={"Employee details"}
                    content={employeeData}
                />
            </CardBody>
        </Card>
        {
            user?.acces_level == "employee" 
            ? <EstateList employeePhoneNumber=/>
            : null
        }
    </Fragment>
}