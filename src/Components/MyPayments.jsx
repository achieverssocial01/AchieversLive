import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosClient } from "../Utils/axiosClient";

const MyPayments = () => {

    const [showCard, setShowCard] = useState([]);
    const { user } = useSelector((state) => state.auth);

    const [totalIncome, setTotalIncome] = useState(null);
    const [todaysIncome, setTodaysIncome] = useState(null);
    const [weeklyIncome, setWeeklyIncome] = useState(null);
    const [monthlyIncome, setMonthlyIncome] = useState(null);

    const getTotalIncome = async () => {
        try {
            const res = await axiosClient.get(`/totalincome/${user?._id}`);
            if(res.status === 200) {
                console.log(res.data.totalincome);
               return setTotalIncome(res?.data?.totalincome);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getTodaysIncome = async () => {
        try {
            const res = await axiosClient.get(`/todayincome/${user?._id}`);
            if(res.status === 200) {
                console.log(res.data.todayincome);
               return setTodaysIncome(res?.data?.todayincome);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getWeeklyIncome = async () => {
        try {
            const res = await axiosClient.get(`/getweeklyincome/${user?._id}`);
            if(res.status === 200) {
                console.log(res.data.incomeForLastWeek);
               return setWeeklyIncome(res?.data?.incomeForLastWeek);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getMonthlyIncome = async () => {
        try {
            const res = await axiosClient.get(`/getmonthlyincome/${user?._id}`);
            if(res.status === 200) {
                console.log(res.data.monthlyIncome);
               return setMonthlyIncome(res?.data?.monthlyIncome);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTotalIncome();
        getTodaysIncome();
        getWeeklyIncome();
        getMonthlyIncome();
    }, []);


    return (
        <div className="w-full min-h-[calc(100vh-41px)] md:h-[calc(100vh-112px)] px-4 ">
            <div className="w-full mt-[33px] md:mt-0 bg-[#1A1C24]  shadow-md p-6 rounded  ">
                <h1 className=" text-white text-xl font-montserrat leading-6 mt-4">
                    My Payments
                </h1>

                <hr className=" mt-5 w-full" />

                <div className="grid w-full  grid-cols-2 justify-center md:grid-cols-4 mt-5 gap-[10px] ">
                    <div className="w-full md:w-[240.78px] h-[128px] bg-[#0E0D0C] rounded text-center">
                        <p className="text-[#FF6584] text-xs leading-4 font-montserrat pt-8">
                            Total Earnings:
                        </p>
                        <h1 className="text-[26px] md:text-4xl text-white font-lato leading-10 mt-1">
                            ₹{totalIncome}
                        </h1>
                    </div>

                    <div className="w-full md:w-[240.78px] h-[128px] bg-[#0E0D0C] rounded text-center ">
                        <p className="text-[#FF6584] text-xs leading-4 font-montserrat pt-8">
                            Today's Earnings:
                        </p>
                        <h1 className="text-[26px] md:text-4xl text-white font-lato leading-10 mt-1">
                            ₹{todaysIncome}
                        </h1>
                    </div>

                    <div className="w-full md:w-[240.78px] h-[128px] bg-[#0E0D0C] rounded text-center ">
                        <p className="text-[#FF6584] text-xs leading-4 font-montserrat pt-8">
                            Weekly Earnings:
                        </p>
                        <h1 className="text-[26px] md:text-4xl text-white font-lato leading-10 mt-1">
                            ₹{weeklyIncome}
                        </h1>
                    </div>

                    <div className="w-full md:w-[240.78px] h-[128px] bg-[#0E0D0C] rounded text-center ">
                        <p className="text-[#FF6584] text-xs leading-4 font-montserrat pt-8">
                            Monthly Earnings:
                        </p>
                        <h1 className="text-[26px] md:text-4xl text-white font-lato leading-10 mt-1">
                            ₹{monthlyIncome}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPayments;
