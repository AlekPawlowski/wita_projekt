import { useEffect, useState } from "react"
import { IAppUser } from "../../../interfaces/IAppusers";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { getEmployees } from "../../../supabaseCall/employee/getEmployees";
import { EmployeeList } from "../EmployeeList/EmployeeList";

export const EmployeeView = () => {
    const [employees, setEmployees] = useState<IAppUser[] | null>(null);
    const state = useSelector((state: RootState) => state.user);
    const { user } = state;
    useEffect(() => {
        if (user) {
            const getEmployeesData = async()=> {
                const {acces_level} = user;
                const employeesList = await getEmployees(acces_level);
                setEmployees(employeesList)
            };
            getEmployeesData()
        }
    });

    if (!employees) return null;
    if (employees.length === 0) return <p>There is no users</p>;

    return <EmployeeList employees={employees} />
}