
const ClubVerification = () => {
    return (
        <div className="min-h-screen bg-no-repeat bg-cover " style={{
            backgroundImage: "url(/bg1.png)",
        }}>
            <div>
                <h2 className="ml-7">Club Verification</h2>
            </div>
            <div className=" border border-red-600 flex items-center justify-center  min-h-[calc(100vh-24px)]">
                <div className="border border-black w-[250px] md:w-[300px] lg:w-[550px] 2xl:w-[900px] ">
                    <div>
                        
                    </div>

                    <div className="space-y-5 px-4 backdrop-blur-[5px] py-6" >
                        <div className="space-y-2">
                            <h2 className="text-xl lg:text-2xl 2xl:text-4xl">Your Details</h2>
                            <p className="text-sm lg:text-base 2xl:text-lg text-gray-500">Clublinks collects this information to better <br /> understand and serve your purpose</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <h2>Full Name</h2>
                                <input className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-full" type="text" />
                            </div>
                            <div className="space-y-1">
                                <h2>Date of Birth</h2>
                                <input className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-full" type="date" />
                            </div>

                        </div>

                        <div>
                            <h2>Address</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                <input className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-ful;" type="text" />
                                <input className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-ful;" type="text" />
                                <input className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-ful;" type="text" />
                                <input className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-ful;" type="text" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ClubVerification;