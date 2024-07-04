import { useContext, useEffect, useState } from "react";
import { FaApple, FaEye, FaEyeSlash, FaFacebook, FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FacebookAuthProvider, getAdditionalUserInfo, OAuthProvider } from "firebase/auth";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link } from "@nextui-org/react";


const Login = () => {
    const [radioChecked, setRadioChecked] = useState(false);
    console.log(radioChecked);
    const [passHidden, setPassHidden] = useState(true);

    const { setPassResetRequestSuccess, setPassResetRequestError, passResetRequestSuccess, passResetRequestError, signIn, googleSignIn, resetPassword, fbSignIn, appleSignIn, setAlternatePhoto, user, logOut } = useContext(AuthContext);
    const [passResetEmailValue, setPassResetEmailValue] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const navigate = useNavigate();

    useEffect(() => {

        const rememberMeCredentials = localStorage.getItem('rememberMeCredentials');
        if (rememberMeCredentials) {
            const { email, password } = JSON.parse(rememberMeCredentials);
            setUserEmail(email);
            setUserPass(password);
            setRadioChecked(true);
        }
        console.log(rememberMeCredentials);
    }, []);



    const handleLogin = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const loginEmail = form.get('email');
        const loginPassword = form.get('password');

        if (radioChecked) {
            signIn(loginEmail, loginPassword)
                .then(async (res) => {
                    console.log(res);

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

                    localStorage.setItem('rememberMeCredentials', JSON.stringify({ email: loginEmail, password: loginPassword }));

                    setTimeout(() => {
                        navigate("/");
                    }, 2000)

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
            return;
        }
        signIn(loginEmail, loginPassword)
            .then(async (res) => {
                console.log(res);

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

                localStorage.removeItem('rememberMeCredentials');
                setUserEmail("")
                setUserPass("");

                setTimeout(() => {
                    navigate("/");
                }, 2000)

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

    const handleFbSignIn = () => {
        fbSignIn()
            .then(res => {
                const userFb = res.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(res);
                const accessToken = credential.accessToken;
                console.log(credential);
                console.log(accessToken);
                
                setAlternatePhoto(userFb.photoURL + "?access_token=EAAEUDGyDSJABO7dn8AmPOIKId4cYsGBKZCrWCjs5y6vVDwiynMDhp422VnnzoSy7La9xk5KYr6cgNtSxZBckkAeB5STllEt30rgIlW0Ins8rB5QV4ZAWbZBwpmlDmbSDq6RX90ID96tX6WinGe9XgFtig5gX9x1GRd2EIgLujuugBK5sq78jDAimuZARipm5ZA7IkTyqdbrRAhBNQSAeyruSIs3rZAbBtWys3Mg");

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


    const handleAppleSignIn=()=>{
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

    const handleLogOut = () => {
        logOut()
            .then(res => {
                setAlternatePhoto("");
            })
            .catch(err => {

            })
    }

    const handleEmailForReset = (e) => {
        // console.log(e.currentTarget.value)
        setPassResetEmailValue(e.currentTarget.value); //email address from input field for reset password
    }


    const handleResetField = () => {
        setPassResetRequestSuccess('');
        setPassResetRequestError('');


    }

    const handleradio = () => {
        setRadioChecked(!radioChecked);
    };

    const handlePassHide = () => {
        setPassHidden(!passHidden);
    }
    return (
        <div className="min-h-screen bg-no-repeat bg-cover" style={{
            backgroundImage: "url(/bg1.png)",
        }}>
            <div className="flex  justify-between">
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
                                <NavLink to="/register">Sign Up</NavLink>
                        }

                        <li><NavLink to="/"><FaHome className="w-4 h-4" /></NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row  border-black max-w-screen-xl mx-auto justify-center gap-3 md:gap-0 lg:gap-28 2xl:gap-32 mt-2 xl:mt-5 2xl:mt-4 items-center md:items-start">
                <div className="space-y-5 lg:space-y-3 2xl:space-y-2  w-[250px] md:w-[360px] 2xl:w-[500px]  md:ml-6 lg:ml-0">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-3xl 2xl:text-4xl font-semibold">WelCome Back!</h2>
                        
                        <p className="text-base md:text-lg 2xl:text-base text-gray-600 ">Don’t have an account, <NavLink to="/register"><span className="text-[#2A3D8F] font-semibold">Sign up</span></NavLink></p>
                        
                    </div>


                    <form onSubmit={handleLogin} className="space-y-2 lg:space-y-3 xl:space-y-3 2xl:space-y-3">
                        <div className="space-y-1">
                            <p>User Email</p>
                            <input defaultValue={userEmail} className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " name="email" type="email" required />
                        </div>
                        <div className=" space-y-1">
                            <p>Password</p>
                            <div className="flex items-center relative ">
                                <input defaultValue={userPass} className="border w-full px-2 py-1 rounded-2xl border-[#2A3D8F] text-[#2A3D8F] focus:outline-none " name="password" required type={passHidden ? "password" : "text"} />
                                {
                                    passHidden ? <FaEyeSlash onClick={handlePassHide} className="absolute right-4 text-[#9EB0EA] cursor-pointer" />
                                        :
                                        <FaEye onClick={handlePassHide} className="absolute right-4 text-[#9EB0EA] cursor-pointer" />
                                }
                            </div>


                        </div>
                        <div className="flex  justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <input checked={radioChecked}
                                    onChange={handleradio} type="checkBox" name="radio-2" className="radio  border-[#586bb1] checked:bg-[#A3B3EB]"

                                />

                                <p className="text-sm 2xl:text-base">Remember Me</p>
                            </div>

                           <Link onClick={handleResetField} onPress={onOpen}><p  className="text-sm 2xl:text-base text-[#6679be] font-semibold cursor-pointer">Forget Password</p></Link> 
                            <Modal
                                        isOpen={isOpen}
                                        onOpenChange={onOpenChange}
                                        placement="top-center"
                                    >
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">Reset Password

                                                        {/* <button onClick={() => handleOnClose(onClose)} className="absolute top-0 right-0 mt-2 mr-[5px] text-white">
                                                            &times;
                                                        </button> */}
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <Input
                                                            autoFocus
                                                            // endContent={
                                                            //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                                            // }
                                                            label="Email"
                                                            placeholder="Enter your email"
                                                            variant="bordered"
                                                            onChange={handleEmailForReset}

                                                        />


                                                    </ModalBody>
                                                    <ModalBody>
                                                        {
                                                            passResetRequestSuccess && <p className="text-green-600 text-sm">{passResetRequestSuccess}</p>
                                                        }
                                                        {
                                                            passResetRequestError && <p className="text-red-600 text-sm">{passResetRequestError}</p>
                                                        }

                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="danger" variant="flat" onPress={(onClose)}>
                                                            Close
                                                        </Button>
                                                        <Button color="primary" onClick={() => {resetPassword(passResetEmailValue)} }>
                                                            Confirm
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>
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
                        <FcGoogle onClick={handleGoogleLogIn} className="h-8 w-8 xl:h-9 xl:w-9 cursor-pointer" />
                        <FaFacebook onClick={handleFbSignIn} className="h-8 w-8 xl:h-9 xl:w-9 cursor-pointer  text-[#8699DA]" />
                        <FaApple onClick={handleAppleSignIn} className="h-8 w-8 xl:h-9 xl:w-9  cursor-pointer  " />
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

export default Login;