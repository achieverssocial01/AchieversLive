import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import axios from "axios";
import { axiosClient } from "../Utils/axiosClient";

const ForgotPassword = () => {
    const [userinput, setuserinput] = useState({
        email: "",
        password: "",
        newpassword: "",
    });

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const submitdata = async (e) => {
        e.preventDefault();
        const { email, password, newpassword } = userinput;
        if (!email || !password || !newpassword) {
            return alert("enter all fields");
        } else if (password !== newpassword) {
            return alert("Both password must be same");
        } else {
            try {
                const respose = await axiosClient.post("/resetpassword", {
                    email: email,
                    password: password,
                });
                console.log(respose);
                if (respose.status === 200) {
                    navigate("/login");
                } else if (respose.status === 403) {
                    alert("enter correct email address");
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return (
        <>
            <main className="flex h-screen  bg-gradient-to-b from-[#4B006E] to-[#FF6584]">
                <div className="m-[30px] hidden md:flex flex-col relative  shrink-0	">
                    <img
                        src="/img/AchiversLogo.png"
                        alt="logo"
                        className="w-[134px]"
                    />

                    <h2 className="font-[Montserrat] text-[1.625rem] text-white leading-[31.69px] mt-[85px]">
                        Unlock a world of
                        <br /> knowledge and possibilities!
                    </h2>

                    <img
                        src="/img/sign-removebg-preview.png"
                        alt="img"
                        className=" absolute  ml-[33px] w-[345px] aspect-[1/1] object-contain -bottom-[30px]"
                    />
                </div>

                <div className="bg-[#000000ED] px-[28px] md:px-[121px] md:py-[162px] w-full flex flex-col justify-center gap-[42px] items-center rounded-[20px, 0px, 0px, 20px]">
                    <div className="w-full flex flex-col gap-[20px] items-center">
                        <h1 className="md:text-3xl text-white font-montserrat leading-9 font-bold text-center">
                            Set New Password
                        </h1>
                        <p className="text-sm text-[#8B8989] mt-1 font-lato leading-5 font-medium text-center">
                            Create a new password to sign in
                        </p>

                        <form onSubmit={submitdata} className="flex flex-col w-full gap-4">
                            <input
                                onChange={(e) =>
                                    setuserinput({
                                        ...userinput,
                                        email: e.target.value,
                                    })
                                }
                                type="email"
                                name="email"
                                placeholder="Enter registered email"
                                style={{ background: "none" }}
                                className="text-md block px-3 py-2 rounded-full w-full 
                                bg-inherit border-2 border-[#8B8989]  placeholder-[#8B8989] shadow-md
                               focus:placeholder-gray-500
                               focus:bg-inherit
                               text-white 
                                focus:border-gray-600  
                               focus:outline-none"
                                required
                            />

                            {/* <input
                                onChange={(e) =>
                                    setuserinput({
                                        ...userinput,
                                        password: e.target.value,
                                    })
                                }
                                type="password"
                                name="password"
                                placeholder="Enter New Password"
                                style={{ background: "none" }}
                                className="rounded-full  px-4 py-3 text-white border-2 text-sm   border-[#8B8989] "
                                required
                            /> */}

                            <div className="relative">
                                <input
                                 onChange={(e) =>
                                  setuserinput({
                                      ...userinput,
                                      password: e.target.value,
                                  })
                              }
                                    placeholder="Enter New Password"
                                    type={showPassword ? "password" : "text"}
                                    className="text-md block px-3 py-2 rounded-full w-full 
                                    bg-inherit border-2 border-[#8B8989]  placeholder-[#8B8989] shadow-md
                                   focus:placeholder-gray-500
                                   focus:bg-inherit
                                   text-white 
                                    focus:border-gray-600  
                                   focus:outline-none"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    {showPassword ? (
                                        <IoIosEye
                                            onClick={() =>
                                                setShowPassword(false)
                                            }
                                            size={20}
                                            className="  mr-4 mt-1  text-white"
                                        />
                                    ) : (
                                        <IoIosEyeOff
                                            onClick={() =>
                                                setShowPassword(true)
                                            }
                                            className="  mr-4 mt-1  text-white"
                                        />
                                    )}
                                    {/* <svg
          className={`h-6 text-gray-700 ${showPassword ? 'hidden' : 'block'}`}
          fill="none"
          onClick={() => setShowPassword(!showPassword)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
        
        </svg>
        <svg
          className={`h-6 text-gray-700 ${showPassword ? 'block' : 'hidden'}`}
          fill="none"
          onClick={() => setShowPassword(!show)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          
        </svg> */}
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                 onChange={(e) =>
                                  setuserinput({
                                      ...userinput,
                                      newpassword: e.target.value,
                                  })
                              }
                                    placeholder="Enter Password Again"
                                    type={showPassword ? "password" : "text"}
                                    className="text-md block px-3 py-2 rounded-full w-full 
                                    bg-inherit border-2 border-[#8B8989]  placeholder-[#8B8989] shadow-md
                                   focus:placeholder-gray-500
                                   focus:bg-inherit
                                   text-white 
                                    focus:border-gray-600  
                                   focus:outline-none"
                                />
                                {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    {showPassword ? (
                                        <IoIosEye
                                            onClick={() =>
                                                setShowPassword(false)
                                            }
                                            size={20}
                                            className="  mr-4 mt-1  text-white"
                                        />
                                    ) : (
                                        <IoIosEyeOff
                                            onClick={() =>
                                                setShowPassword(true)
                                            }
                                            className="  mr-4 mt-1  text-white"
                                        />
                                    )}
                                    
                                </div> */}
                            </div>

                            {/* <div className="md:w-full flex items-center p-1 border-[#8B8989] text-center  bg-[#dcdcdc]">
                                <input
                                    onChange={(e) =>
                                        setuserinput({
                                            ...userinput,
                                            newpassword: e.target.value,
                                        })
                                    }
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter Password Again"
                                    className=" w-full bg-inherit border-[none] outline-none  text-sm text-white border-[#8B8989] "
                                    required
                                />

                                {showPassword ? (
                                    <IoIosEye
                                        onClick={() => setShowPassword(false)}
                                        size={20}
                                        className="  mr-4 mt-1  text-white"
                                    />
                                ) : (
                                    <IoIosEyeOff
                                        onClick={() => setShowPassword(true)}
                                        className="  mr-4 mt-1  text-white"
                                    />
                                )}
                            </div> */}

                            <button
                                type="submit"
                                className="w-full py-2  mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white"
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ForgotPassword;
