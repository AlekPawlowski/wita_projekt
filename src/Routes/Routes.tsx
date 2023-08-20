import { Route, Routes } from "react-router-dom"
import { StartPage } from "../components/StartPage/StartPage"
import { EstatesComponent } from "../components/Estate/EstateComponent/EstatesComponent"
import { EmployeeList } from "../components/Employee/EmployeeList"
import { OwnerList } from "../components/Owners/OwnersList"
import { AddEstateForm } from "../components/FormComponents/AddEstateForm/AddEstateForm"
import { EstateDetails } from "../components/Estate/EstateDetails/EstateDetails"

export const RoutesComponent = () => {
    return <Routes>
        <Route index path="/" element={<StartPage />} />
        <Route path="/estates" element={<EstatesComponent />} />
        <Route path="/estates/:id" element={<EstateDetails />}/>
        <Route path="/estates/addEstate" element={<AddEstateForm />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/owners" element={<OwnerList />} />
    </Routes>
}