import React, { useContext, useState } from "react";
import Profile from "./Profile";
import Affiliate from "./Affiliate";
import Invoice from "./Invoice";
import MyPayments from "./MyPayments";
import Certificates from "./Certificates";
import Logout from "./Logout";
import ChangePassword from "./ChangePassword";
import CourseCompletionCertificate from "./CourseCompletionCertificate";
import ForgotPassword from "./ForgotPassword";
import DashboardContext from "../Context/DashboardContext";
import { useDispatch, useSelector } from "react-redux";
import { tab } from "../Store/tabSlice";

const Dashboard = () => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const { selectedPage, setSelectedPage } = useContext(DashboardContext);
    const { tabValue } = useSelector((state) => state.tab);
    const { user} = useSelector((state) => state.auth);

    // const handleChange = (event, newValue) => {
    //     dispatch(tab(newValue));
    //     // setSelectedTab(newValue);
    //     setDrawer(false);
    // };

    // const [selectedPage, setSelectedPage] = useState(0);

    return (
        <div className="min-h-[calc(100vh-112px)] flex gap-[50px] md:pr-[50px]">
            <div className="w-[243px] hidden md:block relative  ">
                <div className="bg-[#1A1C24] hidden md:block w-[243px] rounded fixed  h-[calc(100vh-112px)] text-center">
                    <div className="pt-5 ">
                        <img
                            className="w-12 h-12 mx-auto rounded-full"
                            src="https://www.secpay.io/img/Pic5.png"
                            alt="Rounded avatar"
                        />
                    </div>

                    <h1 className="text-white font-montserrat text-base mt-4">
                      {user.name}
                    </h1>

                    <div className="text-white right-0 mt-9 space-y-5 font-lato text-sm leading-4 font-medium">
                        <div
                            onClick={() => dispatch(tab(0))}
                            style={{
                                background:
                                    tabValue === 0 ? "#4B006E" : "none",
                            }}
                            className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
                        >
                            <img src="/img/5.svg" className="h-6 w-5" />
                            <span className="mt-1">Profile</span>
                        </div>
                        <div
                            onClick={() => dispatch(tab(1))}
                            style={{
                                background:
                                    tabValue === 1 ? "#4B006E" : "none",
                            }}
                            className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
                        >
                            <img src="/img/1.svg" className="h-6 w-5" />
                            <span className="mt-1">Affiliate</span>
                        </div>

                        <div
                            onClick={() => dispatch(tab(2))}
                            style={{
                                background:
                                    tabValue === 2 ? "#4B006E" : "none",
                            }}
                            className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
                        >
                            <img src="/img/6.svg" className="h-6 w-5" />

                            <span>Invoice</span>
                        </div>

                        <div
                            onClick={() => dispatch(tab(3))}
                            style={{
                                background:
                                    tabValue === 3 ? "#4B006E" : "none",
                            }}
                            className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
                        >
                            <img src="/img/3.svg" className="h-6 w-5" />
                            <span className="mt-1">My Payments</span>
                        </div>

                        <div
                            onClick={() => dispatch(tab(4))}
                            style={{
                                background:
                                    tabValue === 4 ? "#4B006E" : "none",
                            }}
                            className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
                        >
                            <img src="/img/2.svg" className="h-6 w-5" />
                            <span className="mt-1">Certificates</span>
                        </div>

                        <div
                            onClick={() => setOpenDialog(true)}
                            className="flex cursor-pointer gap-2 pl-12"
                        >
                            <img src="/img/4.svg" className="h- w-5" />
                            <span className="mt-1">Logout</span>
                        </div>
                    </div>
                </div>
            </div>

            {tabValue === 0 && <Profile />}
            {tabValue === 1 && <Affiliate />}
            {tabValue === 2 && <Invoice />}
            {tabValue === 3 && <MyPayments />}

            {tabValue === 4 && <Certificates />}

            {tabValue === 5 && <ChangePassword />}

            {tabValue === 5 && <ForgotPassword />}

            {tabValue === 5 && <CourseCompletionCertificate />}
            {openDialog && <Logout setOpenDialog={setOpenDialog} />}
        </div>
    );
};

export default Dashboard;
