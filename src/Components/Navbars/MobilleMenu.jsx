import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Usercontext } from "../ContextProvider";
import DashboardContext from "../../Context/DashboardContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/authSlice";
import { tab } from "../../Store/tabSlice";
const MobilleMenu = ({menu, setMenu}) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation().pathname;
    console.log(location);
    const [select, setSelected] = useState(0);
    const [showPackages, setShowPackages] = useState(false);
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    // const { user, setuser } = useContext(Usercontext);
    const { selectedPage, setSelectedPage } = useContext(DashboardContext);
    const menuRef = useRef();



    useEffect(() =>{
        const handler =(e)=>{
            if(!menuRef.current.contains(e.target)){
                setMenu(false)
            }
        };
        document.addEventListener('mousedown',handler);
        return()=>{
            document.removeEventListener('mousedown',handler);
        };
    },[]);

    const logOutUser = () => {
        // setuser(false);
        dispatch(logout());
        window.location.replace("/login");

    };
    

    return (
        <div ref={menuRef} className=" w-[70%] h-[calc(100vh-57px)] md:hidden pt-[27px] pl-[15px] my-2  fixed z-[100] bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
            <div  className=" flex flex-col gap-[1px] text-white">
                <Link
                    to="/"
                    onClick={()=>setMenu(false)}
                    className={` bg-${
                        location === "/" ? "[#4B006E]" : "none"
                    } w-fit px-6 py-2 rounded-[57px]`}
                >
                    Home
                </Link>
                <Link
                    to={"/all-courses"}
                    onClick={()=>setMenu(false)}
                    className={` bg-${
                        location === "/all-courses" ? "[#4B006E]" : "none"
                    } w-fit px-6 py-2 rounded-[57px]`}
                >
                    Courses Packages
                    {/* <div className="flex gap-1">
                    Courses Packages
                    {showPackages ? (
                        <IoIosArrowUp className="mt-1 w-5 h-5" />
                    ) : (
                        <IoIosArrowDown className="mt-1 w-5 h-5" />
                    )}

                    </div> */}
                    {/* {showPackages && (
                        <div
                            // style={{
                            //     boxShadow:
                            //         "1px -1px 30px rgba(255, 255, 255, 0.35)",
                            // }}
                            className=" px-6 py-2 rounded-[57px] pl-[20px] flex flex-col gap-2"
                        >
                            <Link
                                to={`/viewpackage/${id}`}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 0
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                
                                Full Stack Digital Marketing Course
                            </Link>
                            <Link
                                to={`/viewpackage/${id}`}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 0
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                Silver Package
                            </Link>
                            <Link
                                to={`/viewpackage/${id}`}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 0
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                Gold Package
                            </Link>
                        </div>
                    )} */}
                </Link>
                {/* <Link
                    to="#"
                    className={` bg-${
                        location === "/a" ? "[#4B006E]" : "none"
                    } w-fit px-6 flex text-center gap-2 py-2 rounded-[57px]`}
                >
                    Courses Packages
                    <IoIosArrowDown className="mt-1 w-5 h-5" />
                </Link> */}
                <Link
                    to="/aboutus"
                    onClick={()=>setMenu(false)}
                    className={` bg-${
                        location === "/aboutus" ? "[#4B006E]" : "none"
                    } w-fit px-6 py-2 rounded-[57px]`}
                >
                    AboutUs
                </Link>
                <Link
                    to="/contactus"
                    onClick={()=>setMenu(false)}
                    className={` bg-${
                        location === "/contactus" ? "[#4B006E]" : "none"
                    } w-fit px-6 py-2 rounded-[57px]`}
                >
                    ContactUs
                </Link>
                <Link
                    to="/blog"
                    onClick={()=>setMenu(false)}
                    className={` bg-${
                        location === "/blog" ? "[#4B006E]" : "none"
                    } w-fit px-6 py-2 rounded-[57px]`}
                >
                    Blogs
                </Link>
                {user && (
                    <>
                        <Link
                            to="/course"
                    onClick={()=>setMenu(false)}
                            className={` bg-${
                                location === "/course" ? "[#4B006E]" : "none"
                            } w-fit px-6 py-2 rounded-[57px]`}
                        >
                            My Courses
                        </Link>
                        <ul
                            className={` w-fit px-6 py-2 rounded-[57px] pl-[20px] flex flex-col gap-2`}
                        >
                            <span className="flex items-center gap-2">
                                Dashboard{" "}
                                <IoIosArrowDown className="mt-1 w-5 h-5" />
                            </span>
                            <li
                                onClick={() => {
                                    navigate("/dashboard");
                                    setSelectedPage(0);
                                    dispatch(tab(0))
                                    setMenu(false);
                                }}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 0
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                Profile
                            </li>
                            <li
                                onClick={() => {
                                    navigate("/dashboard");
                                    setSelectedPage(1);
                                    dispatch(tab(1))
                                    setMenu(false);
                                }}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 1
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                Affiliate
                            </li>
                            <li
                                onClick={() => {
                                    navigate("/dashboard");
                                    setSelectedPage(2);
                                    dispatch(tab(2))
                                    setMenu(false);
                                }}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 2
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                Invoice
                            </li>
                            <li
                                onClick={() => {
                                    navigate("/dashboard");
                                    setSelectedPage(3);
                                    dispatch(tab(3))
                                    setMenu(false);
                                }}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 3
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                Payments
                            </li>
                            <li
                                onClick={() => {
                                    navigate("/dashboard");
                                    setSelectedPage(4);
                                    dispatch(tab(4))
                                    setMenu(false);
                                }}
                                className={`ml-[10px] rounded-[20px] px-4 w-fit bg-${
                                    location === "/dashboard" &&
                                    selectedPage === 4
                                        ? "[#4B006E]"
                                        : "none"
                                } `}
                            >
                                Certificates
                            </li>
                        </ul>
                        {/* <Link to="/dashboard" className={` bg-${location === '/dashboard' ? '[#4B006E]' : 'none' } w-fit px-6 py-2 rounded-[57px]`}>
          Dashboard
          </Link> */}
                    </>
                )}
                <button
                    onClick={logOutUser}
                    className="bg-[#4B006E]  w-fit mt-5 px-9 py-[10px] rounded-[190px]"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default MobilleMenu;
