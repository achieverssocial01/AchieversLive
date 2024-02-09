import React, { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import Pagination from "./Pagination";
import NavbarAfterLogin from "./NavbarAfterLogin";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Blogs = () => {

const [blogsData, setBlogsData] = useState([
  {
    img: "img/money.png",
    tag:"Money",
    title: "See What Earns You The Most",
    description: "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
    views:44,
  },
  {
    img: "img/money.png",
    tag:"Money",
    title: "See What Earns You The Most",
    description: "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
    views:44,
  },
  {
    img: "img/money.png",
    tag:"Money",
    title: "See What Earns You The Most",
    description: "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
    views:44,
  },
  {
    img: "img/money.png",
    tag:"Money",
    title: "See What Earns You The Most",
    description: "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
    views:44,
  },
  {
    img: "img/money.png",
    tag:"Money",
    title: "See What Earns You The Most",
    description: "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
    views:44,
  },
]);

const maxDescriptionLength = 45;

  // Function to truncate the description
  const truncateDescription = (text) => {
    return text.length > maxDescriptionLength
      ? text.substring(0, maxDescriptionLength - 3) + '...'
      : text;
  };


    return (
        <>
            {/* <div className="relative z-0"> */}
                <div className="  w-full min-h-[calc(100vh-100px)] bg-[#000000] p-4 md:px-[50px]">
                    <div className="text-center ">
                        <h1 className="font-montserrat leading-9 text-white font-bold text-3xl mt-12">
                            Blogs
                        </h1>
                        <p className="font-lato text-base leading-5 mt-7  text-[#8B8989]">
                            Articles that keep you informed about courses, money
                            and <br />
                            achieve your goals.
                        </p>{" "}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-[25px] ">
                    {
                    blogsData?.map((blog, i)=>(
                        <div key={i} className="flex p-2 bg-[#1A1C24] flex-1 gap-[15px] rounded ">
                            <img
                                src={blog.img}
                                className="rounded w-[118px] h-auto aspect-square md:w-[178px] md:h-[192px] "
                            />
                            <div className="">
                                <Link to="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        {blog?.tag}
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                    {blog?.title}

                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        {truncateDescription(blog?.description)}
                                    </p>

                                    <p className="flex gap-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            {blog?.views} Views
                                        </span>{" "}
                                    </p>
                                </Link>
                            </div>
                        </div>
                      
                    ))
                  }
                        {/* <div className="flex bg-[#1A1C24] flex-1 gap-[15px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-[118px] h-[112px] md:w-[178px] md:h-[192px] mt-4 scroll-ps-8 "
                            />
                            <div className="">
                                <Link to="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="flex bg-[#1A1C24] w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="flex bg-[#1A1C24] w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="flex gap-5 ml-9 mt-5">
                        <div className="flex bg-[#1A1C24] w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="flex bg-[#1A1C24] w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="flex gap-5 ml-9 mt-5">
                        <div className="flex bg-[#1A1C24] w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="flex bg-[#1A1C24] w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="flex gap-5 ml-9 mt-5">
                        <div className="flex bg-[#1A1C24] w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="flex bg-[#1A1C24]  w-[585px] rounded h-[245px] ">
                            <img
                                src="img/money.png"
                                className="rounded w-72 ml-3.5 mt-4  h-56 scroll-ps-8 "
                            />
                            <div className=" ml-5 mt-5">
                                <a href="/seeblog">
                                    <h3 className="text-[#207B25] text-sm font-bold leading-4 font-lato">
                                        Money
                                    </h3>
                                    <h2 className="text-white text-base font-bold leading-5 font-montserrat">
                                        See What Earns You The Most
                                        <br /> Money
                                    </h2>
                                    <p className="text-[#8B8989] leading-5 font-lato text-xs font-medium">
                                        Armed with just a yoga mat and some
                                        determination, here are 30 powerful
                                        fitness moves you can do without even
                                        stepping out of your room! Most of these
                                        focus on the chest and the core, while
                                        plenty act on muscles of the arms and
                                        legs.
                                    </p>

                                    <p className="flex gap-2 mt-2 text-xs text-[#8B8989] font-lato">
                                        <div className="w-4 h-2 mt-1 rounded-s-full rounded-r-full bg-[#8B8989]">
                                            <BiSolidMoon className="w-2 text-white h-2  ml-1 text-center " />
                                        </div>{" "}
                                        <span className="text-white">
                                            44 Views
                                        </span>{" "}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    {/* <Pagination /> */}
                    {/* <Footer /> */}
                </div>
            {/* </div> */}
        </>
    );
};

export default Blogs;
