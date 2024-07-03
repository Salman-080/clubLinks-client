import { useState } from "react";
import { FaApple, FaEye, FaEyeSlash, FaFacebook, FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Register = () => {
    const [passHidden, setPassHidden] = useState(true);

    const handlePassHide = () => {
        setPassHidden(!passHidden);
    }

    return (
        <div className="min-h-screen bg-no-repeat bg-cover" style={{
            backgroundImage: "url(/bg1.png)",
        }}>
            <div className="flex border border-black justify-between">
                <div className="h-[68px] w-[68px]">
                    <img className="h-full w-full object-contain" src="/logo.png" alt="" />
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1 items-center gap-2">
                        <li><a>Help</a></li>
                        <li><a>Contact Us</a></li>

                        <li>
                            <details>
                                <summary>English</summary>

                            </details>
                        </li>
                        <li><a>Sign Up</a></li>

                        <li><a><FaHome className="w-4 h-4" /></a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row border border-black max-w-screen-xl mx-auto justify-center gap-3 md:gap-14 lg:gap-28 2xl:gap-32 mt-2 xl:mt-5 2xl:mt-12">
                <div className="space-y-6 border w-[250px] md:w-[310px] 2xl:w-[500px]">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-3xl 2xl:text-6xl font-semibold">Hi!</h2>
                        <p className="text-base md:text-lg 2xl:text-2xl text-gray-600 ">Already have an account? <Link to="/login"><span className="text-[#2A3D8F] font-semibold">Sign In</span></Link> </p>
                    </div>


                    <form action="" className="space-y-7">
                        <div className="space-y-1">
                            <p>User Name</p>
                            <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " type="text" required />
                        </div>
                        <div className="space-y-1">
                            <p>User Email</p>
                            <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " type="email" required />
                        </div>
                        <div className="border space-y-1">
                            <p>Password</p>
                            <div className="flex items-center relative ">
                                <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " type={passHidden ? "password" : "text"} />
                                {
                                    passHidden ? <FaEyeSlash onClick={handlePassHide} className="absolute right-4 text-[#9EB0EA] cursor-pointer" />
                                        :
                                        <FaEye onClick={handlePassHide} className="absolute right-4 text-[#9EB0EA] cursor-pointer" />
                                }
                            </div>
                        </div>

                        <div>
                            <button className="bg-[#2A3D8F] w-full py-2 rounded-3xl text-white font-semibold">Sign In</button>
                        </div>
                    </form>
                    <div className="flex items-center gap-1 mx-4">
                        <div className=" border-t flex-grow border-[#586bb1] "></div>
                        <p className="text-sm 2xl:text-base text-gray-500">or continue with</p>
                        <div className=" border-t flex-grow border-[#586bb1] "></div>
                    </div>
                    <div className="flex gap-2 justify-between mx-4">
                        <FcGoogle className="h-10 w-10 2xl:h-16 2xl:w-16" />
                        <FaFacebook className="h-10 w-10 2xl:h-16 2xl:w-16 text-[#8699DA]" />
                        <FaApple className="h-10 w-10 2xl:h-16 2xl:w-16" />
                    </div>

                </div>
                <div className="md:h-[500px] md:w-[500px] 2xl:w-[700px] 2xl:h-[700px] border">
                    <img className="h-full w-full object-contain" src="/logo2.png" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Register;