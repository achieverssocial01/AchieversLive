import React from "react";

const CourseCompletionCertificate = () => {
    return (
      <div className="w-full min-h-[calc(100vh-41px)] md:h-[calc(100vh-112px)] flex justify-center mx-4 md:ml-[25px]">
            <div className="w-full flex flex-col gap-4 md:gap-[25px] bg-[#1A1C24] shadow-md py-4 my-6 md:my-0 md:py-[35px] px-[25px] rounded ">
                <h1 className=" text-white text-xl font-montserrat leading-6 ">
                    My Payments
                </h1>

                <hr className=" w-full" />

                <div className="flex flex-col md:flex-row gap-2">
                    <div className="bg-[#0E0D0C] w-fit ">
                        <img
                            src="img/certificate.png"
                            className=" p-3 w-[343px] h-[200px] rounded"
                        />
                        <p className="text-sm text-white font-montserrat leading-10">
                            Bronze Package Certificate
                        </p>
                    </div>
                    <div className="bg-[#0E0D0C] w-fit ">
                        <img
                            src="img/certificate.png"
                            className=" p-3 w-[343px] h-[200px] rounded"
                        />
                        <p className="text-sm text-white font-montserrat leading-10">
                            Bronze Package Certificate
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default CourseCompletionCertificate;
