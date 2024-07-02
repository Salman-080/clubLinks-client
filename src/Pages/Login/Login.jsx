import { useState } from "react";
import { FaHome } from "react-icons/fa";


const Login = () => {
    const [radioChecked, setRadioChecked] = useState(false);
    console.log(radioChecked);

    const handleradio = () => {
        setRadioChecked(!radioChecked);
    };
    return (
        <div className="h-screen bg-no-repeat bg-cover" style={{
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

            <div className="flex flex-col md:flex-row border border-black max-w-screen-xl mx-auto justify-center gap-3 md:gap-14 lg:gap-28 2xl:gap-32">
                <div className="space-y-6 border w-[250px] md:w-[310px] 2xl:w-[500px]">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-3xl 2xl:text-6xl ">WelCome Back!</h2>
                        <p className="text-base md:text-lg 2xl:text-2xl">Don’t have an account, Sign up</p>
                    </div>


                    <form action="" className="space-y-7">
                        <div className="space-y-1">
                            <p>User Name</p>
                            <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " type="text" />
                        </div>
                        <div className="border space-y-1">
                            <p>Password</p>
                            <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " type="text" />
                        </div>
                        <div className="flex border justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <input checked={radioChecked}
                                    onChange={handleradio} type="checkBox" name="radio-2" className="radio  border-[#586bb1] checked:bg-[#A3B3EB]"
                                    
                                    />
                                    <p className="text-sm 2xl:text-base">Remember Me</p>
                            </div>

                            <p className="text-sm 2xl:text-base text-[#6679be] font-semibold">Forget Password</p>
                        </div>

                        <div>
                            <button className="bg-[#2A3D8F] w-full py-2 rounded-3xl text-white">Sign In</button>
                        </div>
                    </form>
                    <div className="flex items-center gap-1 mx-4">
                        <div className=" border-t flex-grow border-[#586bb1] "></div>
                        <p className="text-sm 2xl:text-base text-gray-500">or continue with</p>
                        <div className=" border-t flex-grow border-[#586bb1] "></div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>

                </div>
                <div className="md:h-[500px] md:w-[500px] 2xl:w-[700px] 2xl:h-[700px] border">
                    <img className="h-full w-full object-contain" src="/logo2.png" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Login;