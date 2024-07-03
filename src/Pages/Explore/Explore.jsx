import "./Explore.css";

const Explore = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:items-center md:h-screen 2xl:gap-12">
         

            <div className="">
                <div className=" h-16 w-16 2xl:h-20 2xl:w-20 absolute top-0 ml-4 ">
                    <img className="h-full w-full object-contain" src="/logo.png" alt="" />
                </div>

                <div className="space-y-4 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                    <div className="text-2xl md:text-3xl lg:text-5xl  space-y-4 unica-one-regular">
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
            <div className=" w-full h-full">
                {/* banner */}
                <img className="h-full w-full" src="/banner2.jpg" alt="" />
            </div>



        </div>
    );
};

export default Explore;