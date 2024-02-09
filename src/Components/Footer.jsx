import React from "react";
import {
    IoLogoInstagram,
    IoMdCall,
    IoLogoLinkedin,
    IoLogoFacebook,
    IoLogoYoutube,
} from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { CgMail, CgCopyright } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="mx-4 md:mx-[50px] pt-[71px] py-[20px] px-[32px] bg-[#1A1C24]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1 text-white flex flex-col gap-[15px] ">
                    <img
                        src="/img/pinklogo.png"
                        alt="logo"
                        className="w-[134px] h-[25px] mx-auto md:mx-0"
                    />
                    <p className="w-full text-center md:text-start md:w-[90%]">
                        Elevate your career with Us, your comprehensive resource
                        for educational advancement. Network with leading
                        industry experts and ignite your drive for success.
                    </p>
                    <div className="flex justify-center md:justify-start gap-[10px]">
                        <Link  to="https://www.instagram.com/">
                            <IoLogoInstagram size={20} />
                        </Link>
                        <Link  to="https://www.linkedin.com/">
                            <IoLogoLinkedin size={20} />
                        </Link>
                        <Link  to="https://www.facebook.com/">
                            <IoLogoFacebook size={20} />
                        </Link>
                        <Link  to="https://www.youtube.com/">
                            <IoLogoYoutube size={20} />
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col md:flex-row text-white md:flex justify-evenly gap-8 mt-7">
                    <div className="">
                        <h2 className="leading-7 font-montserrat text-lg font-semibol">
                            Explore
                        </h2>
                        <span className="leading-7 font-sans font-medium text-sm ">
                            <p onClick={() => navigate("/")}>Home</p>
                            <p onClick={() => navigate("/aboutUs")}>About US</p>
                            <p onClick={() => navigate("/viewpackage")}>
                                Course Packages
                            </p>
                            <p onClick={() => navigate("/blog")}>Blogs</p>
                            <p onClick={() => navigate("/contactus")}>
                                Contact Us
                            </p>
                        </span>
                    </div>

                    <div className="">
                        <h2 className="leading-7 font-montserrat text-lg font-semibol">
                            More
                        </h2>
                        <span className="leading-7 font-sans font-medium text-sm">
                            <p>Help</p>
                            <p>Terms & Condition</p>
                            <p>Privacy Policy</p>
                            <p>Cancellation Policy</p>
                        </span>
                    </div>

                    <div className="">
                        <h2 className="leading-7 font-montserrat text-lg font-semibol">
                            Get In Touch
                        </h2>
                        <div className="mt-2 leading-7 font-sans font-medium text-sm">
                            <Link to="https://maps.app.goo.gl/t3WgDwRDmZo4Mim77">
                                <div className="md:flex gap-1">
                                    <IoLocation className="mt-2" />
                                    <span>Ginger Mall,Nagpur</span>
                                </div>
                            </Link>
                            <Link to="https://www.google.co.in/">
                                <div className="md:flex gap-1">
                                    <CgMail className="mt-2 " />
                                    <span>achieverssocial01@gmail.com</span>
                                </div>
                            </Link>
                            <div className="flex gap-1">
                                <IoMdCall className="mt-2 rounded-full md:w-3 md:h-3 bg-white text-black-800" />
                                <span>+91 9911223344</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-[20px] border border-[#FFFFFF]" />
            <p className="text-center text-white">
                Copyright©2023 Company Name
            </p>
        </div>
        // <div className="bg-[#1A1C24] rounded mx-[50px]  text-white md:w-full ">
        //     <div className="flex md:flex justify-between ">
        //         <div className="m">
        //             <img
        //                 onClick={() => navigate("/")}
        //                 src="/img/pinklogo.png"
        //                 alt="logo"
        //                 className="md:w-[134px] md:h-[25px]"
        //             />
        //             <p className="leading-7  font-sans font-medium text-base">
        //                 Elavate your career with Us, Your Comprehensive
        //                 resource
        //             </p>
        //             <p className="leading-7 font-montserrat font-medium text-base">
        //                 for educational advancement. Network with leading{" "}
        //             </p>
        //             <p className="leading-7 font-montserrat font-medium text-base">
        //                 industry experts and ignite your drive for success.
        //             </p>
        //             <span className="md:flex mt-3 gap-1 hidden">
        //                 <Link to="https://www.instagram.com/">
        //                     <IoLogoInstagram />
        //                 </Link>
        //                 <Link to="https://www.linkedin.com/">
        //                     <IoLogoLinkedin />
        //                 </Link>
        //                 <Link to="https://www.facebook.com/">
        //                     <IoLogoFacebook />
        //                 </Link>
        //                 <Link to="https://www.youtube.com/">
        //                     <IoLogoYoutube />
        //                 </Link>
        //             </span>
        //         </div>

        //         <div className="flex md:flex justify-evenly gap-8 md:mr-12 mt-7">
        //             <div className="">
        //                 <h2 className="leading-7 font-montserrat text-lg font-semibol">
        //                     Explore
        //                 </h2>
        //                 <span className="leading-7 font-sans font-medium text-sm ">
        //                     <p onClick={() => navigate("/")}>Home</p>
        //                     <p onClick={() => navigate("/aboutUs")}>
        //                         About US
        //                     </p>
        //                     <p onClick={() => navigate("/viewpackage")}>
        //                         Course Packages
        //                     </p>
        //                     <p onClick={() => navigate("/blog")}>Blogs</p>
        //                     <p onClick={() => navigate("/contactus")}>
        //                         Contact Us
        //                     </p>
        //                 </span>
        //             </div>

        //             <div className="">
        //                 <h2 className="leading-7 font-montserrat text-lg font-semibol">
        //                     More
        //                 </h2>
        //                 <span className="leading-7 font-sans font-medium text-sm">
        //                     <p>Help</p>
        //                     <p>Terms & Condition</p>
        //                     <p>Privacy Policy</p>
        //                     <p>Cancellation Policy</p>
        //                 </span>
        //             </div>

        //             <div className="">
        //                 <h2 className="leading-7 font-montserrat text-lg font-semibol">
        //                     Get In Touch
        //                 </h2>
        //                 <div className="mt-2 leading-7 font-sans font-medium text-sm">
        //                     <Link to="https://maps.app.goo.gl/t3WgDwRDmZo4Mim77">
        //                         <div className="md:flex gap-1">
        //                             <IoLocation className="mt-2" />
        //                             <span>Ginger Mall,Nagpur</span>
        //                         </div>
        //                     </Link>
        //                     <Link to="https://www.google.co.in/">
        //                         <div className="md:flex gap-1">
        //                             <CgMail className="mt-2 " />
        //                             <span>achieverssocial01@gmail.com</span>
        //                         </div>
        //                     </Link>
        //                     <div className="flex gap-1">
        //                         <IoMdCall className="mt-2 rounded-full md:w-3 md:h-3 bg-white text-black-800" />
        //                         <span>+91 9911223344</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <hr className="md:w-full mt-5" />
        //     <p className=" leading-7 font-sans w-full text-center font-normal text-base">
        //         Copyright2023 <CgCopyright className="" /> Achievers.in
        //     </p>
        // </div>
    );
};
export default Footer;
