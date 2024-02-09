import React from "react";
import { IoSearch } from "react-icons/io5";
import SignIn from "./SignIn";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyCoursesExplore = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate =useNavigate();

    return (
        <>
            <div className="mb-[48px] mt-8">
                <div className="bg-[#1A1C24] p-4 flex flex-col md:flex-row gap-4 md:gap-48 justify-center md:justify-between md:items-center h-[121px] md:h-[187px] md:px-[50px]">
                    <h1 className=" text-white font-montserrat text-3xl">
                        My Courses
                    </h1>
                    <div className="flex gap-1 border-2 items-center h-[40px] md:h-[47px]  border-[#FFFFFF] rounded-3xl">
                        <IoSearch className="text-white h-5 ml-2 w-6" />
                        <input
                            type="search"
                            name="search"
                            placeholder="Search your courses"
                            className=" text-[#8B8989] w-full md:w-[459px] mx-2 focus:outline-none font-lato text-sm bg-[#1A1C24]"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-6 gap-4 md:gap-8">
                    {user?.products?.length > 0 ? (
                        user.products.map((product, i) => (
                            <div onClick={()=>navigate(`/showCourse/${product?._id}`,{state:
                                {
                                    data: product?.title,
                                    id:product._id,
                                    info: product?.information
                                }
                           
                            })} key={i} className="">
                                <div className="rounded bg-[#1A1C24] p-1 w-80 h-[280px] ">
                                    <div className="pt-4 ml-4">
                                        <img
                                            src={product.imgurl}
                                            width="282px"
                                            height="180px"
                                        />
                                    </div>
                                    <div className="text-white rounded ml-4">
                                        <Link to="/showCourses">
                                            {" "}
                                            <h1 className="font-montserrat mt-2 mb-2 text-xl leading-6 font-semibold">
                                                {product.title}
                                            </h1>
                                        </Link>
                                        {/* <div className="w-[280px] mb-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 h-1.5 rounded-full"
                                                style={{ width: "45%" }}
                                            ></div>
                                        </div>
                                        <p className="font-lato text-sm leading-4 font-medium">
                                            45% Completed
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1>Nothing To Show</h1>
                        </div>
                    )}

                    {/* <div className="">
                        <div className="rounded bg-[#1A1C24] p-1 w-80 h-[280px] mt-2">
                            <div className="pt-4 ml-4">
                                <iframe
                                    src="https://www.youtube.com/embed/cDqq354bfRo?si=8TsAuAa_K3Kr1KVw"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="video"
                                    width="282px"
                                    height="180px"
                                />
                            </div>
                            <div className="text-white ml-4">
                                <Link to="/showCourses">
                                    {" "}
                                    <h1 className="font-montserrat mt-2 mb-2 text-xl leading-6 font-semibold">
                                        Bronze Package
                                    </h1>
                                </Link>
                                <div className="w-[280px] mb-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div
                                        className="bg-blue-600 h-1.5 rounded-full"
                                        style={{ width: "45%" }}
                                    ></div>
                                </div>
                                <p className="font-lato text-sm leading-4 font-medium">
                                    45% Completed
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="rounded bg-[#1A1C24] p-1 w-80 h-[280px] mt-2">
                            <div className="pt-4 ml-4">
                                <iframe
                                    src="https://www.youtube.com/embed/cDqq354bfRo?si=8TsAuAa_K3Kr1KVw"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="video"
                                    width="282px"
                                    height="180px"
                                />
                            </div>
                            <div className="text-white ml-4">
                                <Link to="/showCourses">
                                    {" "}
                                    <h1 className="font-montserrat mt-2 mb-2 text-xl leading-6 font-semibold">
                                        Bronze Package
                                    </h1>
                                </Link>
                                <div className="w-[280px] mb-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div
                                        className="bg-blue-600 h-1.5 rounded-full"
                                        style={{ width: "45%" }}
                                    ></div>
                                </div>
                                <p className="font-lato text-sm leading-4 font-medium">
                                    45% Completed
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default MyCoursesExplore;
