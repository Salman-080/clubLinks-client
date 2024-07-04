import { useEffect } from "react";
import { useState } from "react";
import "./Home.css"

const Home = () => {
   
    return (
        <div className="max-w-screen-xl mx-auto">
            <div
                className="hero h-60 md:h-72 lg:h-96 w-full  bg-cover bg-no-repeat relative"
                style={{
                    backgroundImage: "url(/banner.jpg)",
                }}>
                <div className=" "></div>
                <div className="hero-content  text-center text-white">
                    <div className="max-w-3xl  space-y-3 lg:space-y-7 ">
                        <h1 className=" md:mb-5 text-xl lg:text-3xl font-bold">Expand Your Passion</h1>
                        <p className="mb-1 md:mb-5  md:mx-20 text-sm md:text-base lg:text-lg">
                            Explore the various club communities presented and build on your interests. Experience a wonderful new world and craft your speciality.

                        </p>
                        <input type="text" placeholder="Type here" className="input input-bordered md:w-full md:max-w-xl h-6 md:h-8 lg:h-12 text-black " />
                        <div className="flex gap-3 md:gap-10 mt-3  justify-center">
                            <p className="text-xs md:text-base">Trending Searches</p>
                            <p className=" border rounded-xl px-1 md:px-3 text-xs md:text-base">Music Club</p>
                            <p className="border rounded-xl px-1 md:px-3 text-xs md:text-base">art</p>
                            <p className="border rounded-xl px-1 md:px-3 text-xs md:text-base" >food</p>
                            <p className="border rounded-xl px-1 md:px-3 text-xs md:text-base">cooking</p>
                            <p className="border rounded-xl px-1 md:px-3 text-xs md:text-base">sports</p>
                        </div>
                    </div>
                </div>
                <p className="text-white absolute bottom-2 lg:bottom-4 right-6 text-xs md:text-base">@yumekon</p>
            </div>

            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-8 mb-8 gap-5">
                <div className="relative w-64 h-52 border-[44px] rounded-2xl border-[#F6DAF5] bg-[#F6DAF5]">
                    <div className="absolute inset-0  rounded-2xl ">
                        <div className="w-full h-full bg-[#F5C5CF] rounded-2xl border-[#D2B9D1]">
                            <img className="h-full w-full object-cover rounded-2xl" src="/img3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="relative w-64 h-52 border-[44px] rounded-2xl border-[#bfc9ed] bg-[#bfc9ed]">
                    <div className="absolute inset-0  rounded-2xl ">
                        <div className="w-full h-full bg-[#98A1C3] rounded-2xl border-[#D2B9D1]">
                            <img className="h-full w-full object-cover rounded-2xl" src="/img2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="relative w-64 h-52 border-[44px] rounded-2xl border-[#F6DAF5] bg-[#F6DAF5]">
                    <div className="absolute inset-0  rounded-2xl ">
                        <div className="w-full h-full bg-[#D2B9D1] rounded-2xl border-[#D2B9D1]">
                            <img className="h-full w-full object-cover rounded-2xl" src="/img1.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;