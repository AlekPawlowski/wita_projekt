import { Route, Routes } from "react-router-dom"
import { StartPage } from "../components/StartPage/StartPage"
import { EstateMainView } from "../components/EstateComponents/EstateMainView/EstateMainView"
import { EmployeeList } from "../components/Employee/EmployeeList"
import { OwnerList } from "../components/Owners/OwnersList"
import { EstateDetails } from "../components/EstateComponents/EstateDetails/EstateDetails"
import { AddEstate } from "../components/EstateComponents/AddEstateComponent/AddEstate"
import { EditEstate } from "../components/EstateComponents/EditEstateComponent/EditEstate"

export const RoutesComponent = () => {
    return <Routes>
        <Route index path="/" element={<StartPage />} />
        {/* estates */}
        <Route path="/estates" element={<EstateMainView />} />
        <Route path="/estates/:id" element={<EstateDetails />}/>
        <Route path="/estates/addestate" element={<AddEstate />} />
        <Route path="/estates/editestate" element={<EditEstate />} />
        {/* employee */}
        <Route path="/employee" element={<EmployeeList />} />

        {/* owners */}
        <Route path="/owners" element={<OwnerList />} />
    </Routes>
}