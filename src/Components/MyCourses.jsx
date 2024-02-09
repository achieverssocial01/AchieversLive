import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyCoursesExplore from "./MyCoursesExplore";

const MyCourses = () => {

    const { user } = useSelector((state) => state.auth);
console.log(user)
    
    return (
        <>
        {
            user?.products?.length > 0 ? <MyCoursesExplore/> : <div className="bg-[#000000] flex justify-center items-center p-[71px] md:p-0  min-h-[calc(100vh-41px)] md:min-h-[calc(100vh-112px)]">
            <div
                className="bg-[#1A1C24] md:w-[412px] mx-[51px] md:mx-auto flex flex-col gap-2 md:gap-[25px] px-4 py-[16px]  md:py-[27px] h-fit absolute top-0 left-0 right-0 bottom-0 m-auto rounded-md   text-center"
            >
                <div className=" w-[91px] h-[91px] md:w-36 md:h-36 mx-auto flex justify-center items-center  rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584]  z-0">
                    <img
                        src="/img/noCourses.png"
                        className="w-[70.56px] h-[43.52px] md:w-32  md:h-20"
                    />
                </div>
                <h1 className=" font-montserrat text-[1rem] md:text-3xl font-semibold leading-7 text-white">
                    No Courses Available.
                </h1>
                <p className=" font-lato text-base font-semibold leading-5 text-[#8B8989]">
                    Explore our packages and start learning today!
                </p>
                <Link to="/all-courses" className="w-full h-[40px] md:h-11 text-base rounded-full bg-[#4B006E] leading-5 font-semibold text-white">
                        Explore
              
                </Link>
            </div>
            <div className="md:mt-[560px]"></div>
        </div>
        }
        
        </>
    );
};

export default MyCourses;
