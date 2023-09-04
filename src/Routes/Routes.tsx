import { Route, Routes } from "react-router-dom"
import { StartPage } from "../components/StartPage/StartPage"
import { EstateMainView } from "../components/EstateComponents/EstateMainView/EstateMainView"
import { EmployeeView } from "../components/EmployeeComponents/EmployeeView/EmployeeView"
import { OwnerList } from "../components/Owners/OwnersList"
import { EstateDetails } from "../components/EstateComponents/EstateDetails/EstateDetails"
import { AddEstate } from "../components/EstateComponents/AddEstateComponent/AddEstate"
import { EditEstate } from "../components/EstateComponents/EditEstateComponent/EditEstate"
import { AddFailures } from "../components/Failures/AddFailures/AddFailures"
import { FailuresSite } from "../components/Failures/FailuresSite/FailuresSite"
import { FailureDetails } from "../components/Failures/FailureDetails/FailureDetails"
import { EditFailures } from "../components/Failures/EditFailures/EditFailures"
import { EmployeeDetails } from "../components/EmployeeComponents/EmployeeDetails/EmployeeDetails"
import { AddEmployee } from "../components/EmployeeComponents/AddEmployee/AddEmployee"
import { EditEmployee } from "../components/EmployeeComponents/EditEmployee/EditEmployee"

export const RoutesComponent = () => {
    return <Routes>
        <Route index path="/" element={<StartPage />} />
        {/* estates */}
        <Route path="/estates" element={<EstateMainView />} />
        <Route path="/estates/:id" element={<EstateDetails />}/>
        <Route path="/estates/addestate" element={<AddEstate />} />
        <Route path="/estates/editestate" element={<EditEstate />} />

        {/* Failures */}
        <Route path="/failures" element={<FailuresSite />} />
        <Route path="/failures/add" element={<AddFailures />} />
        <Route path="/failures/edit" element={<EditFailures />} />
        <Route path="/failure/:id" element={<FailureDetails />} />

        {/* employee */}
        <Route path="/employee" element={<EmployeeView />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/employee/add" element={<AddEmployee />} />
        <Route path="/employee/edit" element={<EditEmployee />} />
        
        {/* owners */}
        <Route path="/owners" element={<OwnerList />} />
    </Routes>
}