import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ContactUs = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [userInput, setUserInput] = useState({
        name: "",
        phone: "",
        email: "",
        query: "",
        message: "",
    });

    const submitUserData = async (e) => {
        e.preventDefault();
        const { name, phone, email, query, message } = userInput;

        if (!name || !phone || !email || !query || !message) {
            console.log(name, phone, email, query, message);
            return alert("Please feild all the fields.");
        } else {
            const responce = await axios.post(
                "http://localhost:8089/contactus",
                {
                    name: name,
                    phone: phone,
                    email: email,
                    query: query,
                    message: message,
                }
            );
            console.log(responce);
        }
    };
    return (
        <>
            <div className=" h-[calc(100vh-112px)]">
                <div className="flex justify-between">
                    <div className="w-[30%] hidden md:flex flex-col justify-between items-center h-[calc(100vh-112px)]">
                        <p className="text-xl text-white  font-montserrat self-start leading-8 ml-[49px] mt-[22px] font-bold">
                            Contact us today
                            <br /> and be a part of Achievers!
                        </p>

                        <img
                            src="/img/support.png"
                            className="w-[360px] h-[350px] "
                        />
                    </div>

                    <div className="absolute flex justify-center items-center top-0 right-0 w-full md:w-[70%] md:rounded-l-xl h-full px-[40px] py-[20px]  md:px-[152px] md:py-[200px]  bg-[#100D0F] text-white text-start ">
                        {/* <div className="flex flex-col justify-center items-center h-full"> */}
                        <div className="w-full">
                            <h2 className="font-montserrat text-2xl leading-7 font-semibold mb-2">
                                Contact Us
                            </h2>
                            <p className="font-lato text-sm leading-4 text-[#706D6D] mb-[25px]">
                                Fill the form and we’ll get back to you
                            </p>
                            <form className=" flex flex-col gap-2 md:gap-[25px]">
                                <div className="flex flex-col md:flex-row gap-4 text-lato font-normal">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your Name"
                                        onChange={(e) => {
                                            setUserInput({
                                                ...userInput,
                                                name: e.target.value,
                                            });
                                        }}
                                        className="rounded-full py-[14px] px-[11px] w-full font-lato text-sm leading-4 border-2  p-3  text-[#908F8F] border-[#8B8989] bg-[#100D0F]"
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        onChange={(e) => {
                                            setUserInput({
                                                ...userInput,
                                                phone: e.target.value,
                                            });
                                        }}
                                        className="rounded-full py-[14px] px-[11px] w-full font-lato text-sm leading-4 border-2  text-[#908F8F] border-[#8B8989] bg-[#100D0F]"
                                    />
                                </div>

                                <div className="flex  flex-col md:flex-row mt-2 gap-4 w-full text-lato font-normal">
                                    <input
                                        type="text"
                                        name="query"
                                        placeholder="Type of query"
                                        onChange={(e) => {
                                            setUserInput({
                                                ...userInput,
                                                query: e.target.value,
                                            });
                                        }}
                                        className="rounded-full py-[14px] px-[11px] w-full font-lato text-sm leading-4 border-2  border-[#8B8989] bg-[#100D0F]"
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={(e) => {
                                            setUserInput({
                                                ...userInput,
                                                email: e.target.value,
                                            });
                                        }}
                                        className="rounded-full py-[14px] px-[11px] w-full font-lato text-sm leading-4 border-2   text-[#908F8F] border-[#8B8989] bg-[#100D0F]"
                                    />
                                </div>

                                <textarea
                                    type="text"
                                    name="message"
                                    placeholder="Enter your message here"
                                    rows={8}
                                    onChange={(e) => {
                                        setUserInput({
                                            ...userInput,
                                            message: e.target.value,
                                        });
                                    }}
                                    className="w-full mt-2 py-[14px] px-[11px] resize-none font-lato text-sm leading-4 border-2 rounded text-[#908F8F]   border-[#8B8989] bg-[#100D0F]"
                                />
                                <button
                                    onClick={submitUserData}
                                    className="w-full h-9 mt-[8px]  rounded-full bg-[#4B006E] leading-7 font-bold text-white"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
