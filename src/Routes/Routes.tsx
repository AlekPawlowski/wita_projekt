import { Route, Routes } from "react-router-dom"
import { StartPage } from "../components/Screens/StartPage"

export const RoutesComponent = () => {
    return <Routes>
        <Route index path="/" element={<StartPage />} />
        <Route path="/estates" element={<p>Estates</p>} />
    </Routes>
}