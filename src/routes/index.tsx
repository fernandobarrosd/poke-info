import { Routes, Route } from "react-router-dom";
import { CommingSoon } from "../pages/ComingSoon";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shinys" 
            element={<ComingSoon/>}/>
            <Route path="/pokemon/:name"
            element={<CommingSoon/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}