import { useState } from "react";
import "./ClubVerification.css";
import { DatePicker } from "@nextui-org/react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";
const ClubVerification = () => {
    const [date, setDate] = useState();
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleDateSelect = (selectedDate) => {
        setDate(selectedDate);
        setIsPopoverOpen(false);
    };



    return (
        <div className="min-h-screen bg-no-repeat bg-cover " style={{
            backgroundImage: "url(/bg1.png)",
        }}>

            <div className="flex items-center  py-2 pl-6 gap-3">
                <div className=" flex items-center">
                   <button className="rounded-3xl w-10 h-5 md:w-12 md:h-8 md:py-1 bg-gray-300 text-gray-700 flex justify-center items-center"><IoMdArrowBack  className="w-full h-full  "/></button> 
                </div>

                <h2 className="  text-base md:text-lg xl:text-xl font-medium ">Club Verification</h2>
            </div>

            <div className=" max-w-[1319px] 2xl:max-w-[2560px] 2xl:mx-4 mx-4 border border-gray-300">

            </div>
            <div className="flex items-center justify-center  min-h-[calc(100vh-50px)]">
                <div className="border border-gray-200 w-[250px] md:w-[300px] lg:w-[550px] 2xl:w-[900px] py-4">
                    <div className=" flex items-center justify-center mx-6">
                        <div className="h-10 w-10 bg-[#3e5090] border border-[#3e5090] text-white rounded-full text-center flex items-center justify-center">
                            1
                        </div>

                        <progress className="progress progress-customPrimary w-24 mx-3" value={50} max="100"></progress>
                        <div className="h-10 w-10 border border-gray-300 bg-gray-300 rounded-full text-center flex items-center justify-center">
                            2
                        </div>

                        <progress className="progress progress-primary w-24 mx-3" value={0} max="100"></progress>
                        <div className="h-10 w-10 border border-gray-300 bg-gray-300 rounded-full text-center flex items-center justify-center">
                            3
                        </div>

                        <progress className="progress progress-primary w-24 mx-3" value={0} max="100"></progress>
                        <div className="h-10 w-10 border border-gray-300 bg-gray-300 rounded-full text-center flex items-center justify-center">
                            4
                        </div>



                    </div>


                    <div className="  border border-gray-200 mx-4 mt-3">

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

                                <div className="relative">
                                    <RiArrowDropDownLine
                                        open={isPopoverOpen} handler={setIsPopoverOpen}
                                        // label="Select a Date"
                                        onChange={() => null}
                                        onClick={() => setIsPopoverOpen(true)}
                                        value={date ? format(date, "PPP") : ""}
                                        className="absolute top-2 right-2 w-4 h-6 lg:w-6 lg:h-6 cursor-pointer" />
                                    <Popover placement="" open={isPopoverOpen} handler={setIsPopoverOpen}>
                                        <PopoverHandler>
                                            <input
                                                // label="Select a Date"
                                                onChange={() => null}
                                                onClick={() => setIsPopoverOpen(true)}
                                                value={date ? format(date, "PPP") : ""}
                                                className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-full cursor-pointer" type="text" readOnly />


                                        </PopoverHandler>
                                        <PopoverContent>
                                            <DayPicker
                                                mode="single"
                                                selected={date}
                                                onSelect={handleDateSelect}
                                                showOutsideDays
                                                className="border-0"
                                                classNames={{
                                                    caption: "flex justify-center py-2 mb-4 relative items-center",
                                                    caption_label: "text-sm font-medium text-gray-900",
                                                    nav: "flex items-center",
                                                    nav_button: "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                                    nav_button_previous: "absolute left-1.5",
                                                    nav_button_next: "absolute right-1.5",
                                                    table: "w-full border-collapse",
                                                    head_row: "flex font-medium text-gray-900",
                                                    head_cell: "m-0.5 w-9 font-normal text-sm",
                                                    row: "flex w-full mt-2",
                                                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                                    day: "h-9 w-9 p-0 font-normal",
                                                    day_range_end: "day-range-end",
                                                    day_selected: "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                                    day_today: "rounded-md bg-gray-200 text-gray-900",
                                                    day_outside: "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                                    day_disabled: "text-gray-500 opacity-50",
                                                    day_hidden: "invisible",
                                                }}
                                                components={{
                                                    IconLeft: ({ ...props }) => (
                                                        <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                                                    ),
                                                    IconRight: ({ ...props }) => (
                                                        <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                                                    ),
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>


                                </div>


                            </div>

                        </div>

                        <div>
                            <h2>Address</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                <input placeholder="Address Line 1" className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-full" type="text" />
                                <input placeholder="Address Line 1" className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-full" type="text" />
                                <input placeholder="City" className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-full" type="text" />
                                <input placeholder="Zip" className="border border-gray-500 rounded-md px-2 py-1 2xl:py-2 w-ful;" type="text" />
                            </div>
                        </div>
                        <div>
                            <button className=" w-full bg-[#3e5090] text-white py-1 rounded-lg">Continue</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ClubVerification;