import React, { useContext } from "react";
import CoursePackages from "./CoursePackages";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "./ContextProvider";
import { CgMenuRightAlt } from "react-icons/cg";
import ProfileData from "./ProfileData";
import OutsideClick from "./OutsideClick";

const Navbar = () => {
  const { user, setuser } = useContext(Usercontext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    setuser(false);
    navigate("/login");
  };

  return (
      <div className="mt-[158rem]">
        <div className="flex justify-between  text-white">
          <div className="flex ">
            <img
              src="/img/pinklogo.png"
              onClick={() => navigate("/")}
              className=" w-48 h-48 pb-20 pr-2 top-0  ml-9 "
            />

            <div className="flex gap-5 ml-4 mt-9">
              <div className="space-x-4 space-y-2 flex font-sans font-medium text-sm leading-5">
                <span
                  onClick={() => navigate("/")}
                  className="text-white cursor-pointer text-center mt-2 font-montserrat font-semibold bg-[#4B006E] w-20 h-6 rounded-full "
                >
                  Home
                </span>
                <span>
                  <CoursePackages />
                </span>

                {user ? (
                  <>
                    <Link to="/aboutUs">
                      <span>About Us</span>
                    </Link>
                    <a href="/page" target="_blank">
                      {" "}
                      <span>Blogs</span>
                    </a>
                    <a href="/contactus" target="_blank">
                      {" "}
                      <span>Contact Us</span>
                    </a>
                    <a href="/course" target="_blank">
                      {" "}
                      <span>My Courses</span>
                    </a>
                    <a href="/dashboard" target="_blank">
                      {" "}
                      <span>Dashboard</span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link to="/aboutUs">
                      <span>About Us</span>
                    </Link>
                    <a href="/page" target="_blank">
                      {" "}
                      <span>Blogs</span>
                    </a>
                    <a href="/contactus" target="_blank">
                      {" "}
                      <span>Contact Us</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          {user ? (
            <div className="mr-12">
              <CgMenuRightAlt className="w-8 h-8 md:none  " />
              <ProfileData/>
              {/* <button
                onClick={logout}
                className="w-24 mt-8 xs:none md:block rounded-full h-8 text-white font-montserrat font-semibold bg-[#4B006E]"
              >
                log out
              </button> */}
            </div>
          ) : (
            <div className="mr-12">
              <a href="/signup">
                <button className="w-24 mt-8 rounded-full h-8 text-white font-montserrat font-semibold bg-[#4B006E]">
                  Sign Up
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    
    
  );
};

export default Navbar;
