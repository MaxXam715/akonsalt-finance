import Intro from "@Pages/Home/Components/Intro/Intro.jsx";
import AboutCompany from "@Pages/Home/Components/AboutCompany/AboutCompany.jsx";
import InclusionList from "@Pages/Home/Components/InclusionList/InclusionList.jsx";
import Services from "@Pages/Home/Components/Services/Services.jsx";
import Industries from "@Pages/Home/Components/Industries/Industries.jsx";

export default function Home() {
    return (
        <>
            <Intro/>
            <AboutCompany/>
            <InclusionList/>
            <Services/>
            <Industries/>
        </>
    );
}