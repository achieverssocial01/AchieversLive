import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../Utils/axiosClient";

const Checkout = () => {
    const { courseId } = useParams();
    const { user } = useSelector((state) => state.auth);
    const { state } = useLocation();
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState({
        courseDetails:
            "Our Bronze Package is meticulously crafted to empower your growth in the dynamic professional landscape. If you aspire to thrive in fields like MS-Office tools, cracking Interview or in any business sector, this course bundle is your gateway to success. With a diverse range of topics, this comprehensive package positions you as a standout leader in your chosen field. From honing your professional skills to enhancing your mental flexibility, the Bronze Package is poised to be a transformative force driving your overall growth.",
    });

    const [referalid, setReferalid] = useState();

    const [referalNotFound, setReferalNotFound] = useState(false);
    const [userOwnId, setUserOwnID] = useState(false);

    const [refferName, setRefferName] = useState(null);

    const receivedData = state ? state.data : null;

    const getReferalUser = async () => {
        try {
            const referalName = await axiosClient.post("/getUserByReferalId", {
                referalid,
                userId:user?._id
            });

            if(referalName.status == 200){
                return setRefferName(referalName?.data)
            }

            console.log(referalName.data.name);
        } catch (error) {
            console.log(error.response.data);

            if (error.response.data == "no user found by this referal id") {
              return  setReferalNotFound(true);
            }
            if (error.response.data == "Can not use your own referal id") {
              return  setUserOwnID(error.response.data);
            }


        }
    };

    const getcoursedata = async () => {
        const res = await axiosClient.get(`singleproduct/${courseId}`);
        console.log(res);
        setCourseData(res?.data);
    };

    useEffect(() => {
        getcoursedata();
    }, [courseId]);

    return (
        <div className="w-full h-[calc(100vh-41px)] md:h-[calc(100vh-112px)] mb-[48px] px-4 flex justify-center items-center md:items-start">
            {/* <div className="bg-[#1A1C24] p-4 h-fit ">
                <div className="md:w-[471px] bg-[#F2E676] rounded-[5px]">
                    <img
                        src="/img/silverPckage.png"
                        alt="img"
                        className="w-[326px] m-auto"
                    />
                </div>
            </div> */}
            <div className=" bg-[#1A1C24] rounded-md w-full p-4 h-fit md:w-[460px]">
                <div className=" rounded bg-[#F2E676] ">
                    <img
                        src={courseData?.imgurl}
                        className="w-[281.78px] md:w-[326px] m-auto h-[203.12px] md:h-[264px]"
                    />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex justify-between text-base font-bold leading-5  font-montserrat text-white">
                        <h3>{courseData?.title}</h3>
                        <h3>₹‎ {courseData?.price}</h3>
                    </div>
                    <hr
                        style={{ color: "#64606033" }}
                        className="w-full border-[#64606033]"
                    />
                    <div className="flex justify-between  text-base font-bold leading-5  font-montserrat text-white">
                        <h1 className="">GST</h1>
                        <h1 className="">
                            ₹‎ {(courseData?.price * 18) / 100}
                        </h1>
                    </div>
                    <div className="flex justify-between text-base font-bold leading-5  font-montserrat text-white">
                        <h1 className="">Total MRP</h1>
                        <h1 className="">
                            ₹‎{" "}
                            {courseData?.price + (courseData?.price * 18) / 100}
                        </h1>
                    </div>
                    <hr className="w-full border-[#64606033] " />
                    <h4 className="text-base font-bold leading-5  font-montserrat text-white">
                        Have a referral code?
                    </h4>
                    <div className="flex items-center gap-2">
                        <input
                            onChange={(e) =>{ setReferalid(e.target.value); setReferalNotFound(false); setUserOwnID(null); setRefferName(null) }}
                            className="shadow bg-[#1A1C24] appearance-none border rounded-full h-9 w-48 px-4 font-montserrat text-white text-xs font-medium leading-4 focus:outline-none focus:shadow-outline border-[#8B8989]"
                            id="refferInput"
                            name="refferInput"
                            type="number"
                            placeholder="7528452"
                        />
                        <button
                            onClick={getReferalUser}
                            className="bg-[#4B006E] text-white w-full h-9 rounded-full"
                        >
                            Enter
                        </button>
                    </div>
                    {referalNotFound && <span className="text-red-600">Not Found</span>}
                    {refferName && <span className="text-green-600">{refferName?.name}</span>}
                    {userOwnId && <span className="text-red-600">{userOwnId}</span>}
                    <button
                        onClick={() =>
                            navigate(
                                `/achievers/${courseData?._id}/payment/${user?._id}`,{state: {price: courseData?.price + (courseData?.price * 18) / 100, referaluserid: refferName?._id, productid:courseData?._id}}
                            )
                        }
                        className="w-full h-9 bg-[#4B006E] rounded-full font-lato leading-5 font-semibold text-sm text-white"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
