import React, { useState } from "react";
import ViewCertificate from "./ViewCertificate";
import { Link } from "react-router-dom";
import CourseCompletionCertificate from "./CourseCompletionCertificate";

const Certificates = () => {
    const [certificateComponent, setCertificateComponent] = useState(false);

    return (
        <>
            {!certificateComponent ? (
                <div className="w-full min-h-[calc(100vh-41px)] md:h-[calc(100vh-112px)] flex justify-center mx-4 md:ml-[25px]">
                    <div className="bg-[#1A1C24] flex flex-col gap-4 md:gap-6 rounded-md w-[288px] md:w-[490px] h-fit p-6  mt-6 text-center">
                        <div className="w-[89px] h-[89px] md:w-[138px] md:h-[138px] mx-auto flex justify-center items-center rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
                            <img
                                src="/img/affiliate.png"
                                className="w-[44px] h-[44px] md:w-30 md:h-24"
                            />
                        </div>
                        <h1 className=" font-montserrat text-[1rem] md:text-[25px] font-[600]  md:leading-7 text-white">
                            No Certificates Available
                        </h1>
                        <p className="w-[95%] font-lato text-[13px] text-base font-semibold leading-5 text-[#8B8989]">
                            Explore our packages and start collecting
                            certificates!
                        </p>
                        <button
                            onClick={() => setCertificateComponent(true)}
                            className="w-full h-11 text-base rounded-full bg-[#4B006E] leading-5 font-semibold  font-lato text-white"
                        >
                            Explore
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <CourseCompletionCertificate />
                </>
            )}

            {/* {!certificateComponent ? (
                <div className="bg-[#1A1C24] w-[490px] relative h-96 pt-9 rounded ml-56 mt-6 text-center">
                    <div className="w-36 h-36 ml-[170px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0">
                        <img
                            src="/img/noCourses.png"
                            className="w-32 mt-8 ml-3 h-20 absolute z-10"
                        />
                    </div>
                    <h1 className="mt-5 font-montserrat text-3xl font-semibold leading-7 text-white">
                        No Certificates Available.
                    </h1>
                    <p className="mt-2 font-lato text-base font-semibold leading-5 text-[#8B8989]">
                        Explore our packages and start collecting
                        <br /> certificates!
                    </p>
                    <button
                        onClick={() => setCertificateComponent(true)}
                        className="w-[430px] h-11 ml-3 mt-7 text-base rounded-full bg-[#4B006E] leading-5 font-semibold font-lato text-white"
                    >
                        Explore
                    </button>
                </div>
            ) : (
                <CourseCompletionCertificate />
            )} */}
        </>
    );
};

export default Certificates;

{
    /* <button onClick={()=>setCertificateComponent(true)} className='w-[430px] h-11 ml-3 mt-7 text-base rounded-full bg-[#4B006E] leading-5 font-semibold font-lato text-white'>Explore</button> */
}
