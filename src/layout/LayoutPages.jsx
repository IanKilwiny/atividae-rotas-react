import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutPages = () => {
    return (
        <>
            <Header/>
    
            <Outlet/>
            <Footer/>
        </>
    );
}
 
export default LayoutPages;