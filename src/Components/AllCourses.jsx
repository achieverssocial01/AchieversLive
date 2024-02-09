import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../Utils/axiosClient";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

const AllCourses = () => {
    const navigate = useNavigate();
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    console.log(user);
    const [cards, setCards] = useState([
        { id: 0, content: "First Card" },
        { id: 1, content: "Second Card" },
        { id: 2, content: "Third Card" },
    ]);
    const [translate, setTranslate] = useState(0);
    const [packages, setpackages] = useState([]);

    const handleNext = () => {
        setTranslate((prevValue) => prevValue + 100);
        console.log(translate);
    };
    const userporudcts = user?.products ? user.products : [];
    const handlePrev = () => {
        setTranslate((prevValue) => prevValue - 100);
        console.log(translate);
    };

    const getallpackages = async () => {
        const res = await axiosClient.get("/allproduct");
        setpackages(res?.data);
    };

    useEffect(() => {
        getallpackages();
    }, []);

    const filteredArray = [];
    for (let itemB of packages) {
        let found = false;
        for (let itemA of userporudcts) {
            if (itemA._id === itemB._id) {
                filteredArray.push(itemA);
            }
        }
       
    }

    return (
        <div className="flex-1 mb-[48px] flex-wrap gap-4 md:gap-4 overflow-x-hidden justify-center items-center flex pt-4	flex-col md:flex-row">
            {/* this is first chiled */}

            {/* {
            isLoggedIn && user?.products?.length>0 ? 
            filteredArray.map((item, i) => (
                <div
                    key={i}
                    className={`md:w-[363px] transition delay-75 ease-in-out transform "
                          } shrink-0 p-2.5 rounded bg-white flex flex-col items-center`}
                >
                    <div className="w-full rounded-[5px] bg-[#6C63FF] ">
                        <img
                            src={item?.imgurl}
                            className=" w-72 h-48 mx-auto"
                        />
                    </div>
                    <div className="text-black w-full flex flex-col mt-4 gap-4">
                        <h3 className=" md:text-xl font-semibold leading-5 font-montserrat">
                            {item?.title}
                        </h3>
                        <hr className="" />
                        <div className=" text-[#3F3D56] font-poppins text-base leading-5 flex flex-col gap-4 ">
                            <p> 1. Live Q & A Sessions</p>
                            <p> 2. 140+ students enrolled</p>
                            <p> 3. Certificate</p>
                        </div>

                        <button
                            onClick={() =>
                                navigate(`/viewpackage/${item?._id}`)
                            }
                            className="bg-[#4B006E] text-white py-2 text-sm font-semibold leading-5 font-montserrat rounded-full"
                        >
                            View Details
                        </button>
                    </div>

                    <div>
                        you enroller in{" "}
                        {packages.length - filteredArray.length} courses
                    </div>
                </div>
            ))
            :   */}
            {packages.map((item, i) => (
                <div
                    key={i}
                    className={`md:w-[363px] transition delay-75 ease-in-out transform "
                          } shrink-0 p-2.5 rounded bg-white flex flex-col items-center`}
                >
                    <div className="w-full rounded-[5px] bg-[#6C63FF] ">
                        <img
                            src={item?.imgurl}
                            className=" w-72 h-48 mx-auto"
                        />
                    </div>
                    <div className="text-black w-full flex flex-col mt-4 gap-4">
                        <h3 className=" md:text-xl font-semibold leading-5 font-montserrat">
                            {item?.title}
                        </h3>
                        <hr className="" />
                        <div className=" text-[#3F3D56] font-poppins text-base leading-5 flex flex-col gap-4 ">
                            <p> 1. Live Q & A Sessions</p>
                            <p> 2. 140+ students enrolled</p>
                            <p> 3. Certificate</p>
                        </div>
                {    filteredArray[i]?._id == item?._id ? 
                
                  <button
                            onClick={() =>
                                navigate(`/showCourse/${item?._id}`)
                            }
                            className="bg-[#4B006E] text-white py-2 text-sm font-semibold leading-5 font-montserrat rounded-full"
                        > 
                        Enrolled
                        </button>
                : 
                  <button
                            onClick={() =>
                                navigate(`/viewpackage/${item?._id}`)
                            }
                            className="bg-[#4B006E] text-white py-2 text-sm font-semibold leading-5 font-montserrat rounded-full"
                        >
                            View Details
                        </button>
                }

                      


                      
            
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllCourses;
