import { useEffect } from "react";
import { useState } from "react";
import "./Home.css"

const Home = () => {
    const [size, setSize] = useState(0);
    useEffect(() => {
        setSize(window.innerWidth)
    }, [])
    console.log(size);
    return (
        <div className="max-w-screen-xl mx-auto">
            <div
                className="hero h-36 md:h-60 lg:h-96 bg-cover bg-no-repeat relative"
                style={{
                    backgroundImage: "url(/banner.jpg)",
                }}>
                <div className=" "></div>
                <div className="hero-content  text-center text-white">
                    <div className="max-w-3xl space-y-7 border">
                        <h1 className="mb-5 text-3xl font-bold">Expand Your Passion</h1>
                        <p className="mb-5 border mx-20">
                            Explore the various club communities presented and build on your interests. Experience a wonderful new world and craft your speciality.

                        </p>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
                        <div className="flex gap-10 mt-3 border justify-center">
                            <p>Trending Searches</p>
                            <p className="border rounded-xl px-3">Music Club</p>
                            <p className="border rounded-xl px-3">art</p>
                            <p className="border rounded-xl px-3">food</p>
                            <p className="border rounded-xl px-3">cooking</p>
                            <p className="border rounded-xl px-3">sports</p>
                        </div>
                    </div>
                </div>
                <p className="text-white absolute bottom-4 right-6">@yumekon {size}</p>
            </div>

            <div className=" border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-8 mb-8">
                <div className="relative w-64 h-52 border-[44px] rounded-2xl border-[#F6DAF5] bg-[#F6DAF5]">
                    <div className="absolute inset-0  rounded-2xl ">
                        <div className="w-full h-full bg-[#f6daf5] rounded-2xl border-[#D2B9D1]">
                            <img className="h-full w-full object-cover rounded-2xl" src="/img1.png" alt="" />
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