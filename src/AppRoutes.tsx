import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import BasePagina from "./pages/Dashboard/PaginaBase";
import PaginaInicial from "./pages/Dashboard/PaginaInicial";


function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePagina />}>
                    <Route index element={<PaginaInicial/>}/>
                    <Route path="/dashboard" element={<DashBoard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;