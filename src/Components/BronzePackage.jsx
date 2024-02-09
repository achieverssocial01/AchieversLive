import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { TbCertificate } from "react-icons/tb";
import { PiKeyFill } from "react-icons/pi";
import {
    MdOutlineAccessTime,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { axiosClient } from "../Utils/axiosClient";

const BronzePackage = () => {
    const navigate = useNavigate();
    const { courseId } = useParams();

    const [active, setActive] = useState([]);
    const [readMore, setReadMore] = useState(false);

    const [courseData, setCourseData] = useState({
        courseDetails:
            "Our Bronze Package is meticulously crafted to empower your growth in the dynamic professional landscape. If you aspire to thrive in fields like MS-Office tools, cracking Interview or in any business sector, this course bundle is your gateway to success. With a diverse range of topics, this comprehensive package positions you as a standout leader in your chosen field. From honing your professional skills to enhancing your mental flexibility, the Bronze Package is poised to be a transformative force driving your overall growth.",
    });

    const maxDescriptionLength = 120;

    const truncateDescription = (text) => {
        return text?.length > maxDescriptionLength && !readMore
            ? text.substring(0, maxDescriptionLength - 3) + "..."
            : text;
    };

    const getcoursedata = async () => {
        const res = await axiosClient.get(`singleproduct/${courseId}`);
        setCourseData(res?.data);
    };

    useEffect(() => {
        getcoursedata();
    }, []);

    // console.log(active)

    return (
        <>
            <div className="flex md:bg-[#1A1C24] mt-5 md:p-[53px]">
                <div className="static bg-[#000000] md:absolute right-0 mx-4 md:mx-[50px] -z-1 w-full md:w-[40%]">
                    <div className=" md:bg-[#100E0E] rounded-md  ">
                        <div className="w-full h-[252px] flex justify-center items-center  rounded bg-[#F2E676]">
                            <img
                                src={courseData?.imgurl}
                                className=" h-[252px] object-fit"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-base font-bold leading-5 mt-3 font-montserrat text-white">
                                {courseData?.title}
                            </h1>
                            <p className="text-[#FFFFFF] block md:hidden font-normal font-lato text-xs leading-5 w-full">
                                {truncateDescription(courseData?.courseDetails)}{" "}
                                <span
                                    onClick={() => setReadMore(!readMore)}
                                    className="text-[#FF6584]"
                                >
                                    Read {readMore ? "Less" : "More"}
                                </span>
                            </p>
                            <h1 className="text-base font-bold leading-5 font-montserrat text-white">
                                ₹‎ {courseData?.price}
                            </h1>
                            <button
                                onClick={() =>
                                    navigate(`/check/${courseData?._id}`, {
                                        state: { data: courseData },
                                    })
                                }
                                className="w-full h-[43px] bg-[#4B006E] rounded-full font-lato leading-5 font-semibold text-sm text-white"
                            >
                                Buy Now
                            </button>
                        </div>{" "}
                    </div>

                    <div className="w-full h-56 mt-[25px] rounded  bg-[#1A1C24]">
                        <h1 className="text-white font-bold leading-6 text-4 md:text-xl p-4 ml-1">
                            This Course Includes :
                        </h1>

                        <span className="flex gap-2 ml-3">
                            <TbCertificate className="text-[#4B006E] w-7 h-7 mt-1 mb-1" />
                            <p className=" font-lato font-medium text-sm  text-white mt-2">
                                Certificate of completion
                            </p>
                        </span>

                        <span className="flex gap-2 ml-3">
                            <PiKeyFill className="text-[#4B006E] w-7 h-7 mb-1 mt-1" />
                            <p className=" font-lato font-medium text-sm  text-white mt-2">
                                Lifetime access
                            </p>
                        </span>

                        <span className="flex gap-2 ml-3">
                            <MdOutlineAccessTime className="text-[#4B006E] w-7 h-7 mb-1 mt-1" />
                            <p className=" font-lato font-medium text-sm  text-white mt-2">
                                21.1 hours of on-demand Content
                            </p>
                        </span>

                        <span className="flex gap-2 ml-3">
                            <FaCalendar className="text-[#4B006E] w-7 h-7 mt-1 mb-1" />
                            <p className=" font-lato font-medium text-sm text-white mt-2">
                                Assignments
                            </p>
                        </span>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="  w-full h-32 mb-24">
                        <h1 className="text-3xl font-bold leading-9 font-montserrat text-white">
                            {courseData?.title}
                        </h1>
                        <p className="text-[#FFFFFF] mt-[25px] font-normal font-lato text-xs leading-5 w-[50%]">
                            {/* Our Bronze Package is meticulously crafted to
                            empower your growth in the dynamic professional
                            landscape. If you aspire to thrive in fields like
                            MS-Office tools, cracking Interview or in any
                            business sector, this course bundle is your gateway
                            to success. With a diverse range of topics, this
                            comprehensive package positions you as a standout
                            leader in your chosen field. From honing your
                            professional skills to enhancing your mental
                            flexibility, the Bronze Package is poised to be a{" "}
                            transformative force driving your overall growth. */}
                            {courseData?.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:w-[calc((100%)-(40%+100px))] rounded bg-[#1A1C24] mt-9 mx-4 md:ml-9 px-5 py-[25px]">
                <h1 className="text-4 md:text-3xl font-bold leading-9 font-montserrat  text-white">
                    Course Overview
                </h1>
                <p className="text-[#FFFFFF] mt-4 font-normal  font-lato text-xs leading-5">
                    {courseData?.information}
                </p>

                <h4 className="text-white font-lato text-xl ml-4 mt-5 leading-5 font-light ">
                    What you'll learn{" "}
                </h4>
                <div className="text-white font-lato pl-4 max-h-[300px] overflow-y-auto">
                    {courseData?.courseOverview?.map((item, i) => (
                        <React.Fragment key={i}>
                            <b className="text-white font-lato ml-2 text-base leading-5 font-light">
                                Module {i+1}
                            </b>
                            <h6 className="text-white font-lato ml-2 mt-2 text-base leading-5 font-light">
                                {item?.name}
                            </h6>
                            {item?.points?.map((point, index)=>(
                                <p key={index} className="flex gap-2 ml-4">
                                <RxDotFilled className="mt-1" />
                                {point}
                            </p>
                            ))}
                        </React.Fragment>
                    ))}
                </div>

                {/* <div className="text-white font-lato ml-4 mt-1 text-sm leading-5 font-light mb-5">
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Ms Excel Course{" "}
                    </p>
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Ms Powerpoint Course
                    </p>
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Interview Mastery Course
                    </p>
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" /> Freelancing Mastery
                        Course <br />
                        Courses Bundle Inclusion
                    </p>{" "}
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Ms Word Course
                    </p>{" "}
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Ms Excel Course
                    </p>{" "}
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Ms Powerpoint Course{" "}
                    </p>
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Interview Mastery Course{" "}
                    </p>
                    <p className="flex gap-2">
                        <RxDotFilled className="mt-1" />
                        Freelancing Mastery Course
                    </p>
                </div> */}
            </div>

            <div className="md:w-[calc((100%)-(40%+100px))] md:pb-3 rounded bg-[#1A1C24] mb-[50px] mx-4 p-4 mt-7 md:ml-9">
                <div className="flex justify-between items-center gap-2">
                    <h3 className="text-[1rem] text-3xl font-montserrat font-bold leading-7 md:p-4 text-white">
                        Course Content
                    </h3>

                    <div className="flex gap-2 text-[13px] md:text-lg font-semibold font-lato text-white">
                        <p>126 Lectures</p>
                        12 Hours
                    </div>
                </div>

                {/* <div className="px-5">
          <div>
            <div className="flex justify-between items-center rounded-md bg-[#100D0F] px-4 py-1 ">
              <h4 className="text-white">How to crack an Interview with Ease</h4>
              {active.includes(1) ? (
                <IoIosArrowUp
                  onClick={() =>
                    setActive(
                      active.includes(1)
                        ? active.filter((item) => item !== 1)
                        : [...active, 1]
                    )
                  }
                  className="h-5 w-5 text-white"
                />
              ) : (
                <IoIosArrowDown
                  onClick={() =>
                    setActive(
                      active.includes(1)
                        ? active.filter((item) => item !== 1)
                        : [...active, 1]
                    )
                  }
                  className=" h-5 w-5 text-white"
                />
              )}
            </div>
            {active.includes(1) && (
            <div className=" text-gray-600  max-h-64 bg-red-500">
              <p className="text-green-500 text-transparent ">
                Review the job description to understand the types of skills and
                <br /> qualifications the employer expects you to have. It would
                also give you <br />
                an idea about the duties and responsibilities the job entails.
              </p>
            </div>
          )}
          </div>
        </div> */}

                <div className="accordian-1 bg-[#100D0F] w-full text-white mt-4 pl-1 rounded ">
                    <div className="question flex justify-between items-center">
                        <p className="text-[13px]">
                            How to crack an Interview with Ease
                        </p>
                        {active.includes(1) ? (
                            <IoIosArrowUp
                                onClick={() =>
                                    setActive(
                                        active.includes(1)
                                            ? active.filter(
                                                  (item) => item !== 1
                                              )
                                            : [...active, 1]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        ) : (
                            <IoIosArrowDown
                                onClick={() =>
                                    setActive(
                                        active.includes(1)
                                            ? active.filter(
                                                  (item) => item !== 1
                                              )
                                            : [...active, 1]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        )}
                    </div>
                    {active.includes(1) && (
                        <div className="answer  text-gray-600  max-h-64">
                            <p className="text-green-500 text-transparent bg-red-500">
                                Review the job description to understand the
                                types of skills and
                                <br /> qualifications the employer expects you
                                to have. It would also give you <br />
                                an idea about the duties and responsibilities
                                the job entails.
                            </p>
                        </div>
                    )}
                </div>
                <div className="accordian-1 bg-[#100D0F] w-full text-white mt-4 pl-1 rounded ">
                    <div className="question flex justify-between items-center">
                        <p className="text-[13px]">
                            How to crack an Interview with Ease
                        </p>
                        {active.includes(2) ? (
                            <IoIosArrowUp
                                onClick={() =>
                                    setActive(
                                        active.includes(2)
                                            ? active.filter(
                                                  (item) => item !== 2
                                              )
                                            : [...active, 2]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        ) : (
                            <IoIosArrowDown
                                onClick={() =>
                                    setActive(
                                        active.includes(2)
                                            ? active.filter(
                                                  (item) => item !== 2
                                              )
                                            : [...active, 2]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        )}
                    </div>
                    {active.includes(2) && (
                        <div className="answer  text-gray-600  max-h-64">
                            <p className="text-green-500 text-transparent bg-red-500">
                                Review the job description to understand the
                                types of skills and
                                <br /> qualifications the employer expects you
                                to have. It would also give you <br />
                                an idea about the duties and responsibilities
                                the job entails.
                            </p>
                        </div>
                    )}
                </div>

                {/* <div className="accordian-2 bg-[#100D0F] w-[670px] text-white ml-2 mt-4 pl-1 pr-4 mb-4 rounded ">
                    <div className="question flex justify-between">
                        <h4 className="mt-1 ml-1">
                            How to crack an Interview with Ease
                        </h4>
                        {active.includes(2) ? (
                            <IoIosArrowUp
                                onClick={() =>
                                    setActive(
                                        active.includes(2)
                                            ? active.filter(
                                                  (item) => item !== 2
                                              )
                                            : [...active, 2]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        ) : (
                            <IoIosArrowDown
                                onClick={() =>
                                    setActive(
                                        active.includes(2)
                                            ? active.filter(
                                                  (item) => item !== 2
                                              )
                                            : [...active, 2]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        )}
                    </div>
                    {active.includes(2) && (
                        <div className="answer  text-gray-600  max-h-32">
                            <p className="text-green-500 text-transparent bg-red-500">
                                Review the job description to understand the
                                types of skills and
                                <br /> qualifications the employer expects you
                                to have. It would also give you <br />
                                an idea about the duties and responsibilities
                                the job entails.
                            </p>
                        </div>
                    )}
                </div>

                <div className="accordian-3 bg-[#100D0F] w-[670px] text-white ml-2 mt-4 pl-1 pr-4 mb-4 rounded ">
                    <div className="question flex justify-between">
                        <h4 className="mt-1 ml-1">
                            How to crack an Interview with Ease
                        </h4>
                        {active.includes(3) ? (
                            <IoIosArrowUp
                                onClick={() =>
                                    setActive(
                                        active.includes(3)
                                            ? active.filter(
                                                  (item) => item !== 3
                                              )
                                            : [...active, 3]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        ) : (
                            <IoIosArrowDown
                                onClick={() =>
                                    setActive(
                                        active.includes(3)
                                            ? active.filter(
                                                  (item) => item !== 3
                                              )
                                            : [...active, 3]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        )}
                    </div>
                    {active.includes(3) && (
                        <div className="answer  text-gray-600  max-h-64">
                            <p className="text-green-500 text-transparent bg-red-500">
                                Review the job description to understand the
                                types of skills and
                                <br /> qualifications the employer expects you
                                to have. It would also give you <br />
                                an idea about the duties and responsibilities
                                the job entails.
                            </p>
                        </div>
                    )}
                </div>

                <div className="accordian-4 bg-[#100D0F] w-[670px] text-white ml-2 mt-4 pl-1 pr-4 mb-4 rounded ">
                    <div className="question flex justify-between">
                        <h4 className="mt-1 ml-1">
                            How to crack an Interview with Ease
                        </h4>
                        {active.includes(4) ? (
                            <IoIosArrowUp
                                onClick={() =>
                                    setActive(
                                        active.includes(4)
                                            ? active.filter(
                                                  (item) => item !== 4
                                              )
                                            : [...active, 4]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        ) : (
                            <IoIosArrowDown
                                onClick={() =>
                                    setActive(
                                        active.includes(4)
                                            ? active.filter(
                                                  (item) => item !== 4
                                              )
                                            : [...active, 4]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        )}
                    </div>
                    {active.includes(4) && (
                        <div className="answer  text-gray-600  max-h-64">
                            <p className="text-green-500 text-transparent bg-red-500">
                                Review the job description to understand the
                                types of skills and
                                <br /> qualifications the employer expects you
                                to have. It would also give you <br />
                                an idea about the duties and responsibilities
                                the job entails.
                            </p>
                        </div>
                    )}
                </div>

                <div className="accordian-5 bg-[#100D0F] w-[670px] text-white ml-2 mt-4  pl-1 pr-4 mb-4 rounded ">
                    <div className="question flex justify-between">
                        <h4 className="mt-1 ml-1">
                            How to crack an Interview with Ease
                        </h4>
                        {active.includes(5) ? (
                            <IoIosArrowUp
                                onClick={() =>
                                    setActive(
                                        active.includes(5)
                                            ? active.filter(
                                                  (item) => item !== 5
                                              )
                                            : [...active, 5]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        ) : (
                            <IoIosArrowDown
                                onClick={() =>
                                    setActive(
                                        active.includes(5)
                                            ? active.filter(
                                                  (item) => item !== 5
                                              )
                                            : [...active, 5]
                                    )
                                }
                                className="icon mr-4 mt-2 h-5 w-5"
                            />
                        )}
                    </div>
                    {active.includes(5) && (
                        <div
                            data-collapse="animated-collapse-2"
                            className="answer  text-yellow-600 max-h-64"
                        >
                            <p className="text-green-500 text-transparent bg-red-500 ">
                                Review the job description to understand the
                                types of skills and
                                <br /> qualifications the employer expects you
                                to have. It would also give you <br />
                                an idea about the duties and responsibilities
                                the job entails.
                            </p>
                        </div>
                    )}
                </div> */}
            </div>
        </>
    );
};

export default BronzePackage;
