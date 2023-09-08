import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { EMPLOYEE_PARAM_NAME } from "../../../config";
import { IAppUser } from "../../../interfaces/IAppusers";
import { getSingleEmployee } from "../../../supabaseCall/employee/getSingleEmployee";
import { EmployeeDetailContent } from "../EmployeeDetailContent/EmployeeDetailContent";

export const EmployeeDetails = () => {
    const [searchParams] = useSearchParams();
    const EMPLOYEE_ID = searchParams.get(EMPLOYEE_PARAM_NAME) as string;
    const [employee, setEmployee] = useState<IAppUser | string | null>(null)
    useEffect(() => {
        const callEmployee = async () => {
            const singleEmployee = await getSingleEmployee(EMPLOYEE_ID);
            setEmployee(singleEmployee);
        };
        callEmployee();
    })

    if (!employee) return null;
    if (typeof (employee) === "string") return <p>employee</p>;

    return <EmployeeDetailContent employee={employee} />
}