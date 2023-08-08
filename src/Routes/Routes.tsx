import { Route, Routes } from "react-router-dom"
import { StartPage } from "../components/StartPage/StartPage"
import { EstateList } from "../components/Estate/EstateList"
import { EmployeeList } from "../components/Employee/EmployeeList"
import { OwnerList } from "../components/Owners/OwnersList"

export const RoutesComponent = () => {
    return <Routes>
        <Route index path="/" element={<StartPage />} />
        <Route path="/estates" element={<EstateList />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/owners" element={<OwnerList />} />
    </Routes>
}