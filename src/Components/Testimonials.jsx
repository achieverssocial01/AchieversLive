import React, { useState } from "react";
import { MdOutlineStarPurple500, MdStarOutline } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Testimonials = () => {
    const [translate, setTranslate] = useState(0);

    const handleNext = () => {
        setTranslate(translate + 1 * 100);
    };

    console.log(translate);

    const handlePrev = () => {
        setTranslate((prevVal) => prevVal - 1 * 100);
        // setTranslate((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <section className=" mt-[90px]  md:w-full  rounded text-center text-white ">
            <div className="mx-[13px] md:mx-[50px] py-[70px] bg-[#1A1C24]">
                <h1 className="leading-7 font-[Montserrat] text-3xl font-bold text-center ">
                    Our Testimonials
                </h1>
                <p className="text-[#8B8989] text-center  font-semibold mt-5 font-sans text-sm leading-5">
                    Hear What Our Clients Are Saying
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center overflow-hidden mt-[55px]">
                    <div
                        className={`flex-1 aspect-[1/0.5] scale-90 -translate-x-[${translate}%] rounded-[5px] bg-[#111110] mb-3 w-[281px] md:w-[570px] px-4 py-[25px]`}
                    >
                        <div className="">
                            <img
                                className="inline-block h-12 w-12 space-x-5 rounded-full ring-2 ring-white"
                                src="/img1.png"
                                alt=""
                            />
                        </div>
                        <h4>Tushar Barde</h4>
                        <span className="flex text-[#E8B910] justify-center">
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdStarOutline className="text-[#BF953F]" />
                        </span>
                        <p className="font-sans font-medium text-sm leading-5 ">
                            "Enrolling in the Achievers Edutech course was a
                            career game-changer for me. Coming from a sales
                            background, the transition to digital marketing
                            seemed daunting, but the comprehensive curriculum
                            and hands-on approach made the learning process
                            seamless. Under the guidance of dedicated
                            instructors, I not only successfully switched my
                            career to digital marketing but also witnessed a
                            substantial increase in my earnings. Achievers
                            Edutech has truly empowered me to thrive in this
                            dynamic industry."
                        </p>
                    </div>

                    <div
                        className={`flex-1 aspect-[1/0.5] rounded-[5px] -translate-x-[${translate}%] bg-[#111110] mb-3 w-[281px] md:w-[570px] px-4 py-[25px]`}
                    >
                        <div className="">
                            <img
                                className="inline-block h-12 w-12 space-x-5 rounded-full ring-2 ring-white"
                                src="/img2.jpg"
                                alt=""
                            />
                        </div>
                        <h4>Karan Saud</h4>
                        <span className="flex text-[#E8B910] justify-center">
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdStarOutline className="text-[#BF953F]" />
                        </span>
                        <p className="font-sans font-medium text-sm leading-5 ">
                            "Being a 10th-grade dropout, the Achievers Edutech
                            course has been a transformative journey. Today, I
                            find myself contributing to a major US project, all
                            thanks to the invaluable skills and mentorship
                            provided by Nihal sir. The course structure is
                            tailored to accommodate diverse educational
                            backgrounds, and the emphasis on practical learning
                            has been a key factor in my success. Achievers
                            Edutech has opened doors I never thought possible,
                            and I am grateful for the opportunities it has
                            brought into my life."
                        </p>
                    </div>

                    <div
                        className={`flex-1 aspect-[1/0.5] scale-90 rounded-[5px] -translate-x-[${translate}%] bg-[#111110] w-[281px] md:w-[570px] px-4 py-[25px]`}
                    >
                        <div className="">
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="/img3.jpg"
                                alt=""
                            />
                        </div>
                        <h4>Deepika Pillai</h4>
                        <span className="flex text-[#E8B910] justify-center">
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdStarOutline className="text-[#BF953F]" />
                        </span>
                        <p className="font-sans font-medium text-sm leading-5 mt-8">
                            "As a housewife, reentering the workforce seemed
                            challenging, but Achievers Edutech made it possible.
                            The SEO Expert course not only allowed me to work
                            from home but also provided me with the knowledge
                            and confidence to excel in the digital landscape.
                            The flexibility of the program and the continuous
                            support from the instructors enabled me to balance
                            my family responsibilities while building a
                            successful career. Achievers Edutech has truly been
                            a game-changer in my life, turning my passion for
                            digital marketing into a fulfilling and rewarding
                            profession."
                        </p>
                    </div>
                </div>

                {/* <div className="flex justify-center mt-[17px] gap-2">
                    <button
                        disabled={translate == -100 ? true : false}
                        onClick={handlePrev}
                        className={`p-[8px] rounded-full bg-${
                            translate == -100 ? "[#8B8989]" : "[#4B006E]"
                        }`}
                    >
                        <IoIosArrowBack
                            size={20}
                            className={`rounded-full bg-${
                                translate == -100 ? "[#8B8989]" : "[#4B006E]"
                            }  text-white `}
                        />
                    </button>
                    <button
                        disabled={translate == 200 ? true : false}
                        onClick={handleNext}
                        className={`p-[8px] rounded-full bg-${
                            translate == 200 ? "[#8B8989]" : "[#4B006E]"
                        }`}
                    >
                        <IoIosArrowForward
                            size={20}
                            className={`rounded-full   bg-${
                                translate == 200 ? "[#8B8989]" : "[#4B006E]"
                            } text-white`}
                        />
                    </button>
                </div> */}

                {/* <div className="hidden md:flex mt-2 justify-center ">
            <span className="h-8 w-8 rounded-full bg-[#4B006E]">
              <IoIosArrowBack className="mt-1 w-6 h-6" />
            </span>
            <span className="h-8 w-8 rounded-full bg-[#4B006E] ">
              <IoIosArrowForward className="mt-1 w-6 h-6" />
            </span>
          </div> */}
            </div>
        </section>
    );
};

export default Testimonials;
