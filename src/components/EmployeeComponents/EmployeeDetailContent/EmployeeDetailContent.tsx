import { Fragment } from "react"
import { IEmployeeRow } from "../../../interfaces/Employees/ISingleEmployeeParam"
import { EMPLOYEE_PARAM_NAME, GRID_CONFIG, MARGIN_SPACE } from "../../../config"
import { Card, CardBody, Divider, Flex, Heading } from "@chakra-ui/react"
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
            my={MARGIN_SPACE}
        >
            {
                user?.acces_level == "admin"
                    ? <LinkButton link={`/employee/edit?${EMPLOYEE_PARAM_NAME}=${employee.id}`}>Edit user</LinkButton>
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
            employee.acces_level == "employee"
                ? <Fragment>
                    <Divider my={MARGIN_SPACE} />
                    <Heading as="h2" size={"md"} my={MARGIN_SPACE}>Employee estate list</Heading>
                    <EstateList paramValue={employee.phone_number} paramName="keeper_phone_number"/>
                </Fragment>
                : null
        }
    </Fragment>
}