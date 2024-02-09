import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosClient } from "../Utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import AlreadyPurched from "./AlreadyPurched";
import { updateUserData } from "../Store/authSlice";

const PaymentPage = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(state)
    const { user } = useSelector((state) => state.auth);

    const [transactionId, setTransactionId] = useState("");
    const [alreadyPurched, setAlreadyPurched] = useState(false);

    const handleBuyCourse = async () => {
        try {
            const addCourse = await axiosClient.post('/buycourse', {transactionid:transactionId, userid:user?._id, referaluserid: state?.referaluserid, productid: state?.productid})
            console.log(addCourse);
            if(addCourse.data === 'You already purchased this product'){
                return setAlreadyPurched(true)
            }
            if(addCourse.status === 200){
                dispatch(updateUserData(addCourse.data.newuser))
                return navigate('/achievers/payment/varification/pending')
            }
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <div className="min-h-[calc(100vh-41px)] px-4 w-full md:min-h-[calc(100vh-112px)] p-4  flex justify-center items-center">
            <div className="w-full md:w-[450px]  flex flex-col items-center gap-4 border p-4 rounded-md pb-5 border-[#FFFFFF42]">
                <span className="text-white text-center">
                    ACHIEVERS EDUTECH
                </span>
                <img
                    src="/img/paymentQr.jpeg"
                    alt="img"
                    className="w-[150px] h-[150px]"
                />
                <span className="text-white">ACHIEVERSEDUTECH4244@aubank</span>
                <h6 className="text-white text-2xl">{state?.price} INR</h6>
                <div className="w-full flex gap-4 justify-center">
                    <div className="flex flex-col items-center">
                        <img
                            src="/img/phonepe-logo-icon.svg"
                            alt="img"
                            className="w-[50px] h-[50px]"
                        />
                        <span className="text-white">Phone Pay</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/img/google-pay-icon.svg"
                            alt="img"
                            className="w-[50px] h-[50px]"
                        />
                        <span className="text-white">Google Pay</span>
                    </div>
                </div>
                <p className="text-[#FF6584] text-center md:w-[90%] ">
                    Payment Done? Insert your transaction id and do submit{" "}
                </p>
                <input
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Enter transaction Id"
                    type="text"
                    name=""
                    id=""
                    className="w-full md:w-[90%] bg-transparent border border-[#8B898945] outline-none text-white p-2 focus:border-green-600 rounded-md"
                />
                <button
                    onClick={handleBuyCourse}
                    className=" w-full md:w-[90%] bg-green-600 hover:bg-green-700 p-2 rounded-md"
                >
                    Submit
                </button>
            </div>
           {alreadyPurched && <AlreadyPurched alreadyPurched={alreadyPurched}/>}
        </div>
    );
};

export default PaymentPage;
