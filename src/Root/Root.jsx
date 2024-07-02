import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";


const Root = () => {
    const location=useLocation();
    console.log(location);
    return (
        <div>
         <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;