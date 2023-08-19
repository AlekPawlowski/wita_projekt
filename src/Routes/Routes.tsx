import { Route, Routes } from "react-router-dom"
import { StartPage } from "../components/StartPage/StartPage"
import { EstatesComponent } from "../components/Estate/EstatesComponent"
import { EmployeeList } from "../components/Employee/EmployeeList"
import { OwnerList } from "../components/Owners/OwnersList"
import { AddEstateForm } from "../components/FormComponents/AddEstateForm/AddEstateForm"

export const RoutesComponent = () => {
    return <Routes>
        <Route index path="/" element={<StartPage />} />
        <Route path="/estates" element={<EstatesComponent />} />
        <Route path="/estates/addEstate" element={<AddEstateForm />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/owners" element={<OwnerList />} />
    </Routes>
}