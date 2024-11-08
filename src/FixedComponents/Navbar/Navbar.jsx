import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
// import { FaRegUser, FaSearch } from "react-icons/fa";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, User } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(false);
    const { user, logOut, alternatePhoto, setAlternatePhoto } = useContext(AuthContext);
    const [searchActive, setSearchActive] = useState(true);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearchActive = () => {
        setSearchActive(false);
    }
    const handleLogOut = () => {
        logOut()
            .then(res => {
                setAlternatePhoto("");
            })
            .catch(err => {

            })
    }

    //if the username length is more than 20, then the rest will be ellipsed ...
    const userNameSlice = (name, len) => {
        if (name?.length <= len) {
            return name;
        }
        else {
            return name.slice(0, len) + '...'
        }
    }
    return (
        <div className="max-w-[1280px] mx-auto  ">
            <div className="navbar bg-base-100 py-0 ">
                <div className="navbar-start  w-[35%] md:w-[25%] lg:w-[10%] ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>My Clubs</a></li>
                            <li><a>Filter</a></li>
                            <li><a>Help</a></li>
                            <li><a>Go Pro</a></li>
                        </ul>
                    </div>
                    <div className="  w-12 h-12 md:w-16 md:h-16 lg:w-22 lg:h-22">
                    <NavLink to="/"><img className="h-full w-full object-contain" src="/logo.png" alt="" /></NavLink>  
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>My Clubs</a></li>
                        <li><a>Filter</a></li>
                        <li><a>Help</a></li>
                        <li><a>Go Pro</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-[90%] md:w-[70%]   gap-3">
                    {
                        searchActive ? <button><FaSearch onClick={handleSearchActive} className="text-black" /></button>
                            :
                            <div className="relative ">
                                <input className="w-[90px] md:w-[150px] lg:w-[250px] py-2 pl-7 pr-2 rounded-xl border border-black" type="search" name="" id="" />
                                {/* <Input
                                
                                    // isClearable
                                    type="search"
                                    // label="Email"
                                    variant="bordered"
                                    placeholder="Search Here..."
                                    // defaultValue="junior@nextui.org"
                                    // onClear={() => console.log("input cleared")}
                                    className="max-w-xs"
                                /> */}
                                <button className="absolute top-[30%] left-2"><FaSearch onClick={handleSearchActive} className="text-black" /></button>
                            </div>

                    }


                    {
                        !user && <Link to="/login"><button className="text-sm">Sign In</button></Link>
                    }


                    <div>
                        <button className="bg-[#3949AB] px-4 py-2 rounded-lg text-white">Create Club</button>
                    </div>

                    {
                        user && <div className="flex items-center gap-4">

                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <User
                                        as="button"
                                        avatarProps={{
                                            isBordered: true,
                                            src:
                                                alternatePhoto ? alternatePhoto : user?.photoURL
                                            ,
                                        }}
                                        className="transition-transform"

                                        name={userNameSlice(user?.displayName || "", 20)}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="User Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-bold">Signed in as</p>
                                        <p className="font-bold">{user?.email}</p>
                                    </DropdownItem>

                                    <DropdownItem onClick={handleLogOut} key="logout" color="danger">
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;