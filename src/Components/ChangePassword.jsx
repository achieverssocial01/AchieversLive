import React, { useState } from "react";
import LinkSent from "./LinkSent";
import PassSuccessfullyChange from "./PassSuccessfullyChange";

const ChangePassword = () => {
    const [passSuccess, setPassSuccess] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    return (
        <>
            <div className="min-h-[calc(100vh-112px)]">
                <div className="w-full  flex flex-col gap-4 my-4 bg-[#1A1C24] shadow-md p-[25px] rounded ">
                    <div className="flex justify-between text-white  ">
                        <h1 className="">Change Password</h1>
                    </div>
                    <hr className="  w-full border border-[#FFFFFF42]" />

                    <div className="">
                        <div className="flex flex-col gap-2 my-2">
                            <label
                                className="block text-gray-100 text-sm font-bold "
                                htmlFor="username"
                            >
                                Enter Old Password
                            </label>
                            <input
                                className="shadow bg-[#1A1C24] appearance-none border rounded-full w-full md:w-72 px-3 h-[35px] text-[#8B8989] font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]"
                                id=" Enter Old Password"
                                type="password"
                                name=" Enter Old Password"
                                placeholder="Enter old password"
                            />
                        </div>

                        <div className="flex flex-col gap-2 my-2">
                            <label
                                className="block text-gray-100 text-sm font-bold "
                                htmlFor="username"
                            >
                                Enter New Password
                            </label>
                            <input
                                className="shadow bg-[#1A1C24] appearance-none border rounded-full w-full md:w-72 px-3 h-[35px] text-[#8B8989] font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]"
                                name=" Enter New Password"
                                id=" Enter New Password"
                                type="password"
                                placeholder="Enter New Password"
                            />
                        </div>

                        <div className="flex flex-col gap-2 my-2">
                            <label
                                className="block text-gray-100 text-sm font-bold "
                                htmlFor="username"
                            >
                                Enter Password Again
                            </label>
                            <input
                                className="shadow bg-[#1A1C24] appearance-none border rounded-full w-full md:w-72 px-3 h-[35px] text-[#8B8989] font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]"
                                id=" Enter Password Again"
                                name=" Enter Password Again"
                                type="password"
                                placeholder="Enter Password Again"
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => setPassSuccess(true)}
                        className="w-full md:w-72 h-9 rounded-full bg-[#4B006E] font-lato text-base leading-5 font-semibold text-white "
                    >
                        Save Changes
                    </button>
                </div>
            </div>

            {openDialog && <LinkSent setOpenDialog={setOpenDialog} />}
            {passSuccess && (
                <PassSuccessfullyChange setPassSuccess={setPassSuccess} />
            )}
        </>
    );
};

export default ChangePassword;
