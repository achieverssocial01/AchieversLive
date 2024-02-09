import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Usercontext } from "./ContextProvider";
import ProfileData from "./ProfileData";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import MobilleMenu from "./Navbars/MobilleMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/authSlice";


const NavBar2 = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { user, setuser } = useContext(Usercontext);
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const [showPackages, setShowPackages] = useState(false);

    const [selectedPage, setSelectedPage] = useState(0);

    const logOutUser = () => {
        // setuser(false);
        dispatch(logout());
        window.location.replace("/login");

    };
    // const logOutUser = async () => {
    //     await axiosClient.post("/logout");
    //     removeItem(KEY_ACCESS_TOKEN);
    //     dispatch(logout());
    //     // setUserSetting(false);
    //     // navigate('/')
    //     // window.location.href = '/master/signin'
    //     window.location.replace("/");
    // };

    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav
                className={`flex md:justify-between w-full sticky top-0 z-10 text-white items-center  md:p-8`}
            >
                <div className="hidden md:flex items-center gap-4 ">
                    <img
                        onClick={() => navigate("/")}
                        src={
                            location == "/contactus"
                                ? "/img/AchiversLogo.png"
                                : "/img/pinklogo.png"
                        }
                        alt="logo"
                        className="w-[134px]"
                    />
                    <div className=" gap-7 text-white lg:flex ">
                        <Link to="/" className="">
                            Home
                        </Link>
                        <Link 
                                    to={'/all-courses'}
                            
                            className="flex gap-1 relative"
                        >
                            Courses Packages
                            {/* {showPackages ? (
                                <IoIosArrowUp className="mt-1 w-5 h-5" />
                            ) : (
                                <IoIosArrowDown className="mt-1 w-5 h-5" />
                            )} */}
                          {/* {showPackages &&  <div
                                style={{
                                    boxShadow:
                                        "1px -1px 30px rgba(255, 255, 255, 0.35)",
                                }}
                                className="flex flex-col absolute mt-8 bg-black py-2"
                            >
                                <Link
                                    to={`/viewpackage/${id}`}
                                    className="hover:bg-[#4B006E] px-4 transition-all duration-300 ease-in-out"
                                >
                                    Bronze Package
                                </Link>
                                <Link
                                    to={`/viewpackage/${id}`}
                                    className="hover:bg-[#4B006E] px-4 transition-all duration-300 ease-in-out"
                                >
                                    Silver Package
                                </Link>
                                <Link
                                    to={`/viewpackage/${id}`}
                                    className="hover:bg-[#4B006E] px-4 transition-all duration-300 ease-in-out"
                                >
                                    Gold Package
                                </Link>
                            </div>} */}
                        </Link>
                    </div>

                    {user ? (
                        <>
                            <Link
                                to="/aboutUs"
                                className="rounded-full hover:bg-[#4B006E] cursor-pointer "
                                onClick={() => setSelectedPage(0)}
                                style={{
                                    background:
                                        selectedPage === 2 ? "#4B006E" : "none",
                                }}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/blog"
                                className="rounded-full hover:bg-[#4B006E] cursor-pointer "
                                onClick={() => setSelectedPage(0)}
                                style={{
                                    background:
                                        selectedPage === 3 ? "#4B006E" : "none",
                                }}
                            >
                                Blogs
                            </Link>
                            <Link to="/contactus">Contact Us</Link>
                            <Link to="/course">My Courses</Link>
                            <Link to="/dashboard">Dashboard</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/aboutUs">About Us</Link>
                            <Link to="/blog">Blogs</Link>
                            <Link to="/contactus">Contact Us</Link>
                        </>
                    )}
                </div>
                {user ? (
                    <div className="">
                        <ProfileData logout={logOutUser} />
                    </div>
                ) : (
                    <div className="">
                        <Link to="/signup">
                            <button className="hidden sm:hidden  md:hidden lg:flex rounded-full px-10 py-2 text-white font-montserrat font-semibold bg-[#4B006E]">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                )}
                <div className="flex justify-between w-full px-4 py-2 items-center relative md:hidden">
                    <img
                        onClick={() => navigate("/")}
                        src="/img/pinklogo.png"
                        alt="logo"
                        className="w-[134px] h-[25px]"
                    />
                    {!menu ? (
                        <CgMenuRightAlt onClick={() => setMenu(!menu)} />
                    ) : (
                        <RxCross2
                            onClick={() => {
                                setMenu(!menu);
                            }}
                        />
                    )}
                </div>
            </nav>
            {menu && <MobilleMenu menu={menu} setMenu={setMenu} />}
        </>
    );
};

export default NavBar2;
