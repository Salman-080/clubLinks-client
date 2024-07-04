import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, User } from "@nextui-org/react";

const Navbar = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(false);
    const { user, logOut } = useContext(AuthContext);
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
        <div className="max-w-screen-xl mx-auto border">
            <div className="navbar bg-base-100 py-0">
                <div className="navbar-start w-[10%]">
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="w-20 h-16 md:w-24 lg:w-20 border">
                        <img className="w-full h-full object-contain" src="/logo.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex border">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-[70%]  gap-3">
                    {/* {
                        searchActive ? <button><FaSearch onClick={handleSearchActive} className="text-black" /></button>
                            :
                            <Input
                                // classNames={{
                                //     base: "max-w-full sm:max-w-[10rem] h-10  ",
                                //     mainWrapper: "h-full",
                                //     input: "text-small",
                                //     inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",

                                // }}
                                className=" h-10 absolute right-0 "
                                placeholder="Type to search..."

                                // startContent={<SearchIcon size={18} />}
                                // startContent={<FaSearch className="text-white" />}
                                icon={<FaSearch className="text-black" />}
                                type="search"



                            />
                    } */}
                    <button><FaSearch onClick={handleSearchActive} className="text-black" /></button>

                    {
                        !user && <Link to="/login"><button className="text-sm">Sign In</button></Link>
                    }


                    <div>
                        <button className="bg-blue-600 px-3 py-1 rounded-lg">Create Club</button>
                    </div>

                    {
                        user && <div className="flex items-center gap-4">

                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <User
                                        as="button"
                                        avatarProps={{
                                            isBordered: true,
                                            src: user?.photoURL,
                                        }}
                                        className="transition-transform"
                                        // description="@tonyreichert"
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