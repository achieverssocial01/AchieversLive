import React from "react";
import Subscribe from "./Subscribe";
const AboutUs = () => {
    const containerStyle = {
        backgroundImage: "url(/img/bgimg.png)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        width: "screen",
        // height: "600px",
    };
    return (
        <div className="mx-4 md:mx-[80px]">
            <div
                style={containerStyle}
                className="text-center relative md:mx-[50px]"
            >
                <div className="mt-[20px] md:mt-48">
                    <h1 className="md:text-2xl  font-montserrat font-bold  text-white">
                        About Achievers Club
                    </h1>
                    <p className="text-base font-lato mt-5 text-[#8B8989]">
                        Welcome to Achievers Club, where we empower the youth to
                        turn their aspirations
                        into achievements. At Achievers Club, we believe
                        in the transformative power of
                        education and the limitless potential of every
                        individual. Our platform is not just an
                         educational hub; it's a gateway to opportunities
                        and financial independence.
                    </p>
                    <button className=" mt-8 rounded-full w-[137px] h-[40px] md:h-9 text-white font-montserrat font-semibold bg-[#4B006E]">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-[48px]">
                <div className="relative  text-white md:mt-12 px-[35px] py-[50px]  rounded w-full md:w-[560px]  h-fit bg-[#1A1C24]">
                    <div className="w-[64.17px] h-[64.17px] flex justify-center items-center absolute -top-[32px] -left-[32px] z-10 rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
                        <img
                            src="/img/ourmission.png"
                            className="w-[45.95px] h-[45.95px] "
                        />
                    </div>
                    <h1 className=" md:text-2xl text-center md:text-start font-montserrat leading-7">
                        Our Mission
                    </h1>
                    <p className="font-lato text-xs leading-5 text-center md:text-start">
                        Our mission is to provide quality education that goes
                        beyond traditional boundaries. We are dedicated to
                        equipping young minds with the skills and knowledge
                        needed to thrive in today's dynamic world. More than
                        just a learning platform, we are a catalyst for personal
                        and professional growth.
                    </p>
                    <img
                        src="/img/Vector2.png"
                        className="md:w-32 md:h-24 pb-4 absolute -right-[20%] top-10 bottom-0 my-auto hidden md:block "
                    />
                </div>
                <div className="relative ml-auto py-[50px] px-[35px] text-white mt-16 rounded w-full md:w-[560px] h-fit bg-[#1A1C24]">
                    <div className="w-[64.17px] h-[64.17px] flex justify-center items-center absolute -top-[32px] -left-[32px]   z-10   rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
                        <img
                            src="/img/jobgeneration.png"
                            className="w-[45.95px] h-[45.95px] "
                        />
                    </div>
                    <h1 className="  md:text-2xl font-montserrat text-center md:text-right leading-7 ">
                        Job Generation and Youth
                        <br /> Empowerment
                    </h1>
                    <p className="font-lato text-xs leading-5 text-center md:text-right">
                        At Achievers Club, we go beyond the conventional
                        approach to education. We are committed to not only
                        imparting knowledge but also creating real-world
                        opportunities for the youth. Our unique model integrates
                        education with job generation, allowing individuals to
                        earn through affiliate marketing..
                    </p>
                    <img
                        src="/img/vector3.png"
                        className="md:w-32  top-36 md:right-[565px] pb-2 absolute z-20 hidden md:block "
                    />
                </div>
                <div className="relative  text-white py-[50px] px-[35px] mt-16 rounded md:w-[560px] w-full h-fit bg-[#1A1C24]">
                    <div className="w-[64.17px] h-[64.17px] flex justify-center items-center absolute -top-[32px] -left-[32px]  rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
                        <img
                            src="/img/jobgenrated.png"
                            className="w-[45.95px] h-[45.95px] "
                        />
                    </div>
                    <h1 className="  md:text-2xl font-montserrat leading-7 text-center md:text-left py-[12px]">
                        How We Generate Jobs
                    </h1>
                    <p className="font-lato text-xs leading-5  text-center md:text-left   ">
                        Our innovative approach involves connecting our learners
                        with practical avenues for income generation. Through
                        affiliate marketing partnerships, we empower our members
                        to monetize their skills and knowledge. This not only
                        creates a sustainable income stream but also fosters a
                        culture of entrepreneurship among the youth. .
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse gap-4 md:flex-row w-full justify-end md:mt-[188px] ">
                <img
                    src="/img/raodmap.png"
                    className=" md:w-full md:h-[390px] md:absolute z-10"
                />

                <div className="relative z-0 mt-[50px] md:mt-40 md:overflow-hidden ">
                    <h1 className="font-montserrat text-white  md:text-2xl leading-7 text-center md:text-end">
                        What sets us apart?
                    </h1>
                    <p className="font-lato text-xs text-center md:text-right md:ml-auto md:w-[40%] text-white  leading-5">
                        Discover a unique learning journey with diverse courses
                        tailored to
                         today's job market. Our hands-on programs include
                        affiliate marketing
                         opportunities for earning while learning. Join
                        our thriving community
                         for networking and collaboration, redefining your
                        educational
                         experience with practical skills and support for
                        growth.
                    </p>
                </div>
            </div>
            <Subscribe />
        </div>
    );
};

export default AboutUs;
