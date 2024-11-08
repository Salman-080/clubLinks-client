import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import "./Explore.css";
import { Input } from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";

const Explore = () => {
    const { user, logOut } = useContext(AuthContext);
   
    return (
        <div className="flex flex-col-reverse md:flex-row md:items-center md:h-screen 2xl:gap-12 max-w-[1280px] mx-auto">


            <div className="">
                <div className=" h-16 w-16 2xl:h-20 2xl:w-20 absolute top-0 ml-4 ">
                   <NavLink to="/"><img className="h-full w-full object-contain " src="/logo.png" alt="" /></NavLink> 
                </div>

                <div className="space-y-4 px-2 md:px-6 lg:px-9 xl:px-12 2xl:px-16 mt-5 md:mt-0 ">
                    <div className="text-2xl md:text-3xl lg:text-5xl space-x-4 md:space-x-0 md:space-y-4 unica-one-regular flex md:flex-col ">
                        <h2 className="line-through">FIND</h2>
                        <h2 className="line-through">YOUR</h2>
                        <h2 className="line-through">TRIBBLE</h2>
                       

                    </div>

                    <div>
                        <p className="nunito-nunitoFont styled-text_p">Welcome to <span className="styled-text">ClubLinks</span> An exciting place to explore any community of your interest and to build on your passions.</p>
                    </div>

                    <div>
                        <button className="bg-[#53639C] rounded-lg px-5 py-2">Explore</button>
                    </div>

                </div>
            </div>
            <div className=" h-72 md:w-full md:h-full">

                <img className="h-full w-full" src="/banner2.jpg" alt="" />
            </div>



        </div>
    );
};

export default Explore;