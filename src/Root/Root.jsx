import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";


const Root = () => {
    const location=useLocation();
    console.log(location);
    return (
        <div className="max-w-[1280px] mx-auto">
         <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;