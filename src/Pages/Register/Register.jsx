import { useContext, useState } from "react";
import { FaApple, FaEye, FaEyeSlash, FaFacebook, FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { FacebookAuthProvider, OAuthProvider } from "firebase/auth";

const image_hosting_key = import.meta.env.VITE_IMAGE_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Register = () => {
    const [passHidden, setPassHidden] = useState(true);

    const { createUser, profileInfo, logOut, googleSignIn, fbSignIn, appleSignIn, setAlternatePhoto, user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const imageFile = {
            image: e.target.image.files[0],

        }

        //image hosting to imagebb
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });

        if (res.data.success) {
            const registerName = form.get('name');
            const registerEmail = form.get('email');
            const registerPassword = form.get('password');
            const registerImage = res.data.data.display_url;

            createUser(registerEmail, registerPassword)
                .then(res => {
                    console.log(res.user)

                    toast.success('Successfully Registered! Login Now', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    profileInfo(registerName, registerImage)
                        .then(async (res) => {
                            setTimeout(() => {
                                logOut()
                                    .then(res => {
                                        navigate("/login");
                                    })
                                    .catch(err => {

                                    })
                            }, 2000)

                        })
                        .catch(error => {
                            console.log(error);

                            toast.error(error.message, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",

                            });

                        })

                })
                .catch(err => {
                    console.log(err)
                    toast.error(err.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",

                    });

                })
        }



    }

    const handleLogOut = () => {
        logOut()
            .then(res => {
                setAlternatePhoto("");
            })
            .catch(err => {

            })
    }


    const handleFbSignIn = () => {
        fbSignIn()
            .then(res => {
                const userFb = res.user;
                setAlternatePhoto(userFb.photoURL + "?access_token=EAAEUDGyDSJABO7dn8AmPOIKId4cYsGBKZCrWCjs5y6vVDwiynMDhp422VnnzoSy7La9xk5KYr6cgNtSxZBckkAeB5STllEt30rgIlW0Ins8rB5QV4ZAWbZBwpmlDmbSDq6RX90ID96tX6WinGe9XgFtig5gX9x1GRd2EIgLujuugBK5sq78jDAimuZARipm5ZA7IkTyqdbrRAhBNQSAeyruSIs3rZAbBtWys3Mg");

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(res);
                const accessToken = credential.accessToken;

                toast.success('Login Successfull!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });

                setTimeout(() => {
                    navigate("/");
                }, 2000)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(error.message);
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // ...
            });
    }


    const handleAppleSignIn = () => {
        appleSignIn()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // Apple credential
                const credential = OAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const idToken = credential.idToken;

                // IdP data available using getAdditionalUserInfo(result)
                // ...

                toast.success('Login Successfull!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });

                setTimeout(() => {
                    navigate("/");
                }, 2000)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The credential that was used.
                const credential = OAuthProvider.credentialFromError(error);

                // ...
                console.log(error);
                console.log(error.message);
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(async (res) => {
                console.log(res.user);

                toast.success('Login Successfull!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });

                setTimeout(() => {
                    navigate("/");
                }, 2000)

            })
            .catch(err => {
                console.log(err);

                toast.error(err.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    const handlePassHide = () => {
        setPassHidden(!passHidden);
    }

    return (
        <div className="min-h-screen bg-no-repeat bg-cover" style={{
            backgroundImage: "url(/bg1.png)",
        }}>
            <div className="flex justify-between">
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
                        {
                            user ? <li onClick={handleLogOut}> <button>Sign Out</button> </li>
                                :
                                <li><NavLink to="/login">Sign In</NavLink></li>
                        }


                        <li><NavLink to="/"><FaHome className="w-4 h-4" /></NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row  max-w-screen-xl mx-auto justify-center gap-3 md:gap-0 lg:gap-28 2xl:gap-32 mt-2 xl:mt-5 2xl:mt-4 items-center md:items-start ">
                <div className="space-y-5 lg:space-y-2 2xl:space-y-1  w-[250px] md:w-[310px] 2xl:w-[500px] md:ml-14 lg:ml-0">
                    <div className="space-y-1">
                        <h2 className="text-xl md:text-3xl 2xl:text-4xl font-semibold">Hi!</h2>
                        <p className="text-base md:text-lg xl:text-base 2xl:text-base text-gray-600 ">Already have an account? <Link to="/login"><span className="text-[#2A3D8F] font-semibold">Sign In</span></Link> </p>
                    </div>


                    <form onSubmit={handleRegister} className="space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-3">
                        <div className="space-y-1">
                            <p >User Name</p>
                            <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " name="name" type="text" required />
                        </div>
                        <div className="space-y-1">
                            <p>User Email</p>
                            <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " name="email" type="email" required />
                        </div>
                        <div className="space-y-1">
                            <p>User Image</p>
                            <input className=" w-auto py-1  text-[#2A3D8F] " type="file" name="image" required />
                        </div>
                        <div className=" space-y-1">
                            <p>Password</p>
                            <div className="flex items-center relative ">
                                <input className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " name="password" type={passHidden ? "password" : "text"} required />
                                {
                                    passHidden ? <FaEyeSlash onClick={handlePassHide} className="absolute right-4 text-[#9EB0EA] cursor-pointer" />
                                        :
                                        <FaEye onClick={handlePassHide} className="absolute right-4 text-[#9EB0EA] cursor-pointer" />
                                }
                            </div>
                        </div>

                        <div>
                            <button className="bg-[#2A3D8F] md:mt-5 lg:mt-0 w-full py-1 rounded-3xl text-white font-semibold">Sign Up</button>
                        </div>
                    </form>
                    <div className="flex items-center gap-1 mx-4">
                        <div className=" border-t flex-grow border-[#586bb1] "></div>
                        <p className="text-sm 2xl:text-base text-gray-500">or continue with</p>
                        <div className=" border-t flex-grow border-[#586bb1] "></div>
                    </div>
                    <div className="flex gap-2 justify-between mx-4">
                        <FcGoogle onClick={handleGoogleLogIn} className="h-7 w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 cursor-pointer " />
                        <FaFacebook onClick={handleFbSignIn} className="h-7 w-7  xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 cursor-pointer text-[#8699DA]" />
                        <FaApple onClick={handleAppleSignIn} className="h-7 w-7 cursor-pointer xl:h-8 xl:w-8 2xl:h-9 2xl:w-9   " />
                    </div>

                </div>
                <div className="md:h-[500px] md:w-[500px] lg:w-[380px] lg:h-[380px] 2xl:w-[370px] 2xl:h-[370px] ">
                    <img className="h-full w-full object-contain" src="/logo2.png" alt="" />
                </div>
            </div>


            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />


        </div>
    );
};

export default Register;