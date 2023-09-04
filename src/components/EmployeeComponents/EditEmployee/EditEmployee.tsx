import { Fragment, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { EMPLOYEE_PARAM_NAME } from "../../../config";
import { IAppUser } from "../../../interfaces/IAppusers";
import { getSingleEmployee } from "../../../supabaseCall/employee/getSingleEmployee";
import { EmployeeForm } from "../../FormComponents/EmployeeForm/EmployeeForm";

export const EditEmployee = () => {
    const [searchParams] = useSearchParams();
    const EMPLOYEE_ID = searchParams.get(EMPLOYEE_PARAM_NAME) as string;
    const [employee, setEmployee] = useState<IAppUser | string | null>(null)
    useEffect(()=> {
        const callEmployee = async () => {
            const employeeElement = await getSingleEmployee(EMPLOYEE_ID);
            setEmployee(employeeElement);
        }
        callEmployee();
    })
    if(!employee) return null;
    if(typeof(employee) === "string") return employee;
    return <Fragment>
        <EmployeeForm data={employee} formName="Edit employee" />
    </Fragment>
}