import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { Home } from "../pages/Home";

export function AppRoutes(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element = {<Home/>}/>
        </Routes>

        </BrowserRouter>
    )
}