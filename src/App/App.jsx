import {Outlet} from "react-router-dom";
import Header from "@Components/Common/Header/Header.jsx";
import Footer from "@Components/Common/Footer/Footer.jsx";
import {useEffect} from "react";

export default function App() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}