import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosClient } from "../Utils/axiosClient";
import Spinner from "./Loaders/Spinner";
const CreateAccount = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [alreadyRegister, setAlreadyRegister] = useState(false);
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);
    const [loading, setLoading] = useState(false);

    const [userInput, setUserInput] = useState({
        name: "",
        phone: 1237890,
        email: "",
        password: "",
        confirm_password: "",
        referal: "",
    });

    console.log(userInput.password, userInput.confirm_password);

    const submitUserData = async (e) => {
        e.preventDefault();
        const { name, phone, email, password, confirm_password, referal } =
            userInput;
        if (!name || !phone || !email || !password || !confirm_password) {
            return alert("All feilds are required!");
        }
        try {
            if (password !== confirm_password) {
                return alert("Please enter valid password");
            }
            setLoading(true);
            const responce = await axiosClient.post('register',
                {
                    name: name,
                    phone: phone,
                    email: email,
                    password: password,
                    referal: referal,
                }
            );
            console.log(responce);
            if(responce?.status == 200){
            setLoading(false);
                navigate("/login")
              }

        } catch (error) {
            if (error.response.status === 403) {
                setAlreadyRegister(true);
                return setLoading(false);
           }
           
           setSomethingWentWrong(true);
           return setLoading(false);
        }
         
    };

    return (
        <main className="flex md:h-screen  bg-gradient-to-b from-[#4B006E] to-[#FF6584]">
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
            <div className="bg-[#000000ED] p-[28px]  md:px-[121px] md:py-[96px] w-full flex flex-col justify-center  items-center gap-8 rounded-[20px, 0px, 0px, 20px]">
                <div className="flex w-full flex-col items-center gap-2">
                    <h2 className="text-white font-[Montserrat] text-[1.875rem]  leading-[30.57px]">
                        Create Account
                    </h2>
                    <p className="text-[#8B8989] font-[Lato] text-[1rem] leading-[19.2px] ">
                        Enter your details to Sign In
                    </p>
                </div>
                <div className="flex justify-center gap-4 text-white w-full md:ml-5 text-lato font-normal">
                    <div className="flex md:flex-1 gap-2 p-3  rounded-full border-2  items-center border-[#FFFFFF] bg-transparent">
                        <FcGoogle className="md:w-7 w-7 h-6" />
                        <h3 className="text-sm hidden md:block font-[Lato] font-normal text-1.25rem">
                            Sign In with Google
                        </h3>
                    </div>

                    <div className="flex md:flex-1 gap-2 p-3  rounded-full border-2 items-center border-[#FFFFFF] bg-transparent">
                        <img
                            src="/img/facebook.png"
                            className="w-7 h-6 md:ml-3 text-blue-800"
                        />
                        <h3 className="text-sm hidden md:block">
                            Sign In with Facebook
                        </h3>
                    </div>
                </div>
                <span className="flex items-center text-white gap-2">
                    <hr className="w-20  " /> OR <hr className="w-20 " />
                </span>
                <form className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row gap-4 text-[Lato] font-normal">
                        <input
                            onChange={(e) =>
                                setUserInput({
                                    ...userInput,
                                    phone: e.target.value,
                                })
                            }
                            type="text"
                            name="contact"
                        required
                            placeholder="Enter Contact Number"
                            className="rounded-full border-2 px-4 py-2 w-full text-white border-[#8B8989] bg-[#100D0F]"
                        />
                        <input
                            onChange={(e) =>
                                setUserInput({
                                    ...userInput,
                                    name: e.target.value,
                                })
                            }
                            type="text"
                            name="name"
                        required
                            placeholder="Enter Full Name"
                            className="rounded-full border-2 w-full px-4 py-2 text-white border-[#8B8989] bg-[#100D0F]"
                        />
                    </div>

                    <input
                        onChange={(e) => {
                            setAlreadyRegister(false);
                            setUserInput({
                                ...userInput,
                                email: e.target.value,
                            });
                        }}
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Email Address"
                        className="rounded-full w-full  px-4 py-2 border-2 text-white  border-[#8B8989] bg-[#100D0F]"
                    />
                     {alreadyRegister && (
                                <span className="ml-2 text-red-600   text-sm">
                                    User already register, please sign in!
                                </span>
                            )}

                    <div className="flex gap-4 flex-col md:flex-row  text-[lato] font-normal">
                        <input
                            onChange={(e) =>
                                setUserInput({
                                    ...userInput,
                                    password: e.target.value,
                                })
                            }
                            type="text"
                            name="password"
                        required
                            placeholder="Enter Password"
                            className="rounded-full border-2 w-full text-white px-4 py-2 border-[#8B8989] bg-[#100D0F]"
                        />
                        <input
                            onChange={(e) =>
                                setUserInput({
                                    ...userInput,
                                    confirm_password: e.target.value,
                                })
                            }
                            type="text"
                            name="confirm password"
                        required
                            placeholder="Confirm Password"
                            className="rounded-full border-2 w-full text-white px-4 py-2 border-[#8B8989] bg-[#100D0F]"
                        />
                    </div>

                    <div className="flex justify-center gap-2 ">
                        <input
                        checked
                            type="radio"
                            id="radioCheck"
                            name="agree"
                            value="Subject1"
                        required
                            className=" h-4 w-4 bg-black px-4 py-2 text-white"
                        />
                        <label htmlFor="radioCheck" className=" text-white justify-start text-xs">
                            By continuing, you agree to Name’s Terms of Service
                            & Privacy Policy
                        </label>
                    </div>
                    {somethingWentWrong && (
                                <span className="ml-2 text-red-600   text-sm">
                                    Something Went Wrong
                                </span>
                            )}

                    <button
                    disabled={loading}
                        onClick={submitUserData}
                        className="w-full md:px-[286px] h-[45px] rounded-full bg-[#4B006E] leading-7 font-bold text-white"
                    >
                        {loading ? <Spinner/> :
                                "Continue"}
                    </button>

                    <span className="flex text-sm gap-2 justify-center">
                        <p className="font-[Lato]  font-normal   text-[#8E8B8B]">
                            Already have an account?
                        </p>
                        <Link to="/login">
                            <button className=" text-[#FF6584] text-sm">
                                Click Here
                            </button>
                        </Link>
                    </span>
                </form>
            </div>
        </main>
    );
};

export default CreateAccount;
