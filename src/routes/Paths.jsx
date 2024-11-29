import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPages from "../layout/LayoutPages";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";

const Paths = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPages/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/product/:type" element={<Products/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>);
}
 
export default Paths;