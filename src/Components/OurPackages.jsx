import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { axiosClient } from "../Utils/axiosClient";
import { useNavigate } from "react-router-dom";

const OurPackages = () => {

  const navigate =useNavigate()

    const [cards, setCards] = useState([
        { id: 0, content: "First Card" },
        { id: 1, content: "Second Card" },
        { id: 2, content: "Third Card" },
    ]);

    const [translate, setTranslate] = useState(0);
  const [packages,setpackages]=useState([])


    const handleNext = () => {
        setTranslate((prevValue) => prevValue + 100);
        console.log(translate);
    };

    const handlePrev = () => {
        setTranslate((prevValue) => prevValue - 100);
        console.log(translate);
    };

    
  const getallpackages = async()=>{
    const res = await axiosClient.get('/allproduct')
    setpackages(res?.data);
  }

  useEffect(()=>{
    getallpackages()
  },[])

    return (
        <section className="mb-[70px]">
            <h1 className="font-bold text-white mt-12 pb-12 font-montserrat md:text-3xl text-center">
                Our Packages
            </h1>
            <div className="flex w-[100%] md:pl-[50px]  items-center ">
                <div className=" flex-1 w-auto flex-col gap-[20px] hidden md:flex">
                    <h1 className="font-montserrat text-white md:text-3xl leading-9">
                        Bronze Package
                    </h1>
                    <p className="text-[#8B8989] w-[96%] leading-6 font-poppins text-base">
                        Elevate Your Professional Journey with Our Bronze
                        Package. Ideal for mastering MS-Office tools, interview
                        skills, and business acumen, this comprehensive course
                        bundle positions you as a standout leader. From honing
                        professional skills to boosting mental flexibility, the
                        Bronze Package is your gateway to success in a dynamic
                        professional landscape.
                    </p>

                    <button className="bg-[#4B006E] text-white md:w-32 md:h-9 text-sm font-semibold leading-5 font-montserrat rounded-full">
                        Buy Now
                    </button>
                </div>

                {/* This is parent */}
                <div className="flex-1  md:pl-[8%] gap-4 md:gap-0 overflow-x-hidden items-center flex pt-4	flex-col md:flex-row">
                  {/* this is first chiled */}
                  {
                    packages?.length > 0  ? packages.map((item, i)=>(
                      <React.Fragment key={i}>
                        {
                          i == 0 ?  <div>
                          <div
                              className={`md:w-[363px] transition delay-75 ease-in-out transform ${
                                  translate == 0 ? null : "md:scale-75"
                              } shrink-0 p-2.5 -translate-x-[${translate}%] rounded bg-white flex flex-col items-center`}
                          >
                              <div className="w-full rounded-[5px] bg-[#F2E676] ">
                                  <img
                                      src={item?.imgurl}
                                      className=" w-72 h-48 mx-auto"
                                  />
                              </div>
                              <div className="text-black w-full flex flex-col mt-4 gap-4">
                                  <h3 className=" md:text-xl font-semibold leading-5 font-montserrat">
                                  {item?.title}
                                  </h3>
                                  <hr className="" />
                                  <div className=" text-[#3F3D56] font-poppins text-base leading-5 flex flex-col gap-4 ">
                                      <p> 1. Live Q & A Sessions</p>
                                      <p> 2. 140+ students enrolled</p>
                                      <p> 3. Certificate</p>
                                  </div>
  
                                  <button onClick={()=>navigate(`/viewpackage/${item?._id}`)} className="bg-[#4B006E] text-white py-2 text-sm font-semibold leading-5 font-montserrat rounded-full">
                                      View Details
                                  </button>
                              </div>
                          </div>
                          <div className="hidden md:flex justify-center  absolute ml-[140px] mt-[17px] gap-2">
                              <button
                                  disabled={translate <= 0}
                                  onClick={handlePrev}
                                  className={`p-[8px] rounded-full bg-${
                                      translate <= 0 ? "[#8B8989]" : "[#4B006E]"
                                  } `}
                              >
                                  <IoIosArrowBack
                                      size={20}
                                      className={`rounded-full bg-${
                                          translate <= 0
                                              ? "[#8B8989]"
                                              : "[#4B006E]"
                                      } text-white `}
                                  />
                              </button>
                              <button
                                  disabled={translate == 300 ? true : false}
                                  onClick={handleNext}
                                  className={`p-[8px] rounded-full bg-${
                                      translate == 300 ? "[#8B8989]" : "[#4B006E]"
                                  }`}
                              >
                                  <IoIosArrowForward
                                      size={20}
                                      className={`rounded-full   bg-${
                                          translate == 300
                                              ? "[#8B8989]"
                                              : "[#4B006E]"
                                      } text-white`}
                                  />
                              </button>
                          </div>
                      </div> : <div
                        className={`md:w-[363px] transition delay-75 ease-in-out transform ${
                            translate != 100 && "md:scale-75"
                        } shrink-0 p-2.5 -translate-x-[${translate}%] rounded bg-white flex flex-col items-center`}
                    >
                        <div className="w-full rounded-[5px] bg-[#6C63FF] ">
                            <img
                                src={item?.imgurl}
                                className=" w-72 h-48 mx-auto"
                            />
                        </div>
                        <div className="text-black w-full flex flex-col mt-4 gap-4">
                            <h3 className=" md:text-xl font-semibold leading-5 font-montserrat">
                            {item?.title}
                            </h3>
                            <hr className="" />
                            <div className=" text-[#3F3D56] font-poppins text-base leading-5 flex flex-col gap-4 ">
                                <p> 1. Live Q & A Sessions</p>
                                <p> 2. 140+ students enrolled</p>
                                <p> 3. Certificate</p>
                            </div>

                            <button onClick={()=>navigate(`/viewpackage/${item?._id}`)} className="bg-[#4B006E] text-white py-2 text-sm font-semibold leading-5 font-montserrat rounded-full">
                                View Details
                            </button>
                        </div>
                    </div>
                        }
                      </React.Fragment>
                    )): null
                  }
                   

                    
                    {/* <div
                        className={`md:w-[363px] transition delay-75 ease-in-out transform shrink-0 p-2.5 ${
                            translate != 200 && "md:scale-75"} -translate-x-[${translate}%] rounded bg-white flex flex-col items-center`}
                    >
                        <div className="w-full rounded-[5px] bg-[#FF6584] ">
                            <img
                                src="/img/bronzePackage.png"
                                className=" w-72 h-48 mx-auto"
                            />
                        </div>
                        <div className="text-black w-full flex flex-col mt-4 gap-4">
                            <h3 className=" md:text-xl font-semibold leading-5 font-montserrat">
                                Bronze Package
                            </h3>
                            <hr className="" />
                            <div className=" text-[#3F3D56] font-poppins text-base leading-5 flex flex-col gap-4 ">
                                <p> 1. Live Q & A Sessions</p>
                                <p> 2. 140+ students enrolled</p>
                                <p> 3. Certificate</p>
                            </div>

                            <button className="bg-[#4B006E] text-white py-2 text-sm font-semibold leading-5 font-montserrat rounded-full">
                                View Details
                            </button>
                        </div>
                    </div> */}

                    {/* {cards.length > 0 ? (
            cards.map((card) => (
              <div
                className={`w-[353px] h-[411px] shrink-0 -translate-x-[${translate}%]  bg-blue-600`}
              >
                {card.content}
              </div>
            ))
          ) : (
            <h1 className="text-white">
             No Cards
            </h1>
          )} */}
                </div>
                {/* <div className="flex-1  overflow-x-hidden flex  pt-4	flex-col md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-[17px] relative">
              <div className="md:w-[380px] md:h-[425px] rounded bg-white">
                <div className="p-4">
                  <img
                    src="/img/bronzePackage.png"
                    className="absolute z-10 w-72 h-48 ml-9 "
                  />
                  <div className="bg-[#F2E676] relative z-4 md:w-[345px] pt-3 md:ml-1 md:h-48 rounded">
                    {" "}
                  </div>
                </div>

                <div className="text-black md:ml-6">
                  <h3 className="left-0 md:text-xl font-semibold leading-5 font-montserrat">
                    Bronze Package
                  </h3>
                  <hr className="mt-3 md:w-[338px]" />
                  <div className="mt-2 text-[#3F3D56] p-2 font-poppins text-base leading-5 space-y-2 ">
                    <p className="">1. Live Q & A Sessions</p>
                    <p>2.140+ students enrolled</p>
                    <p>3.Certificate</p>
                  </div>

                  <button className="bg-[#4B006E] text-white  mt-2 right-32 md:w-[330px] md:h-11 text-sm font-semibold leading-5 font-montserrat rounded-full">
                    View Details
                  </button>
                </div>
              </div>

             
            </div>

            <div className="md:w-[380px] md:h-[333px]  rounded bg-white">
              <div className="">
                <img
                  src="/img/bronzePackage.png"
                  className="absolute z-10 md:w-72 md:h-48  "
                />
                <div className="bg-[#4B006E] relative z-4 md:w-[305px] pt-3 ml-1 md:h-32 rounded">
                  {" "}
                </div>
              </div>

              <div className="text-black ">
                <h3 className=" md:text-xl font-semibold leading-5 font-montserrat">
                  Bronze Package
                </h3>
                <hr className="mt-3 md:w-[338px]" />
                <div className="mt-2 text-[#3F3D56] p-2 font-poppins text-base leading-5 space-y-2 ">
                  <p className="">1. Live Q & A Sessions</p>
                  <p>2.140+ students enrolled</p>
                  <p>3.Certificate</p>
                </div>

                <button className="bg-[#4B006E] text-white  mt-2 right-32 md:w-[330px] md:h-11 text-sm font-semibold leading-5 font-montserrat rounded-full">
                  View Details
                </button>
              </div>
            </div>

            <div className="md:w-[380px]  flex-2 md:h-[333px] rounded bg-white">
              <div className="">
                <img
                  src="/img/bronzePackage.png"
                  className="absolute z-10 md:w-72 md:h-48 md:ml-9 "
                />
                <div className="bg-[#F2E676] relative z-4 md:w-[345px] pt-3 md:h-48 rounded">
                  {" "}
                </div>
              </div>

              <div className="text-black ">
                <h3 className="left-0 md:text-xl font-semibold leading-5 font-montserrat">
                  Bronze Package
                </h3>
                <hr className="mt-3 md:w-[338px]" />
                <div className="mt-2 text-[#3F3D56] p-2 font-poppins text-base leading-5 space-y-2 ">
                  <p className="">1. Live Q & A Sessions</p>
                  <p>2.140+ students enrolled</p>
                  <p>3.Certificate</p>
                </div>

                <button className="bg-[#4B006E] text-white  mt-2 right-32 md:w-[330px] md:h-11 text-sm font-semibold leading-5 font-montserrat rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div> */}
            </div>
            {/* <button className="text-white m-1" onClick={handlePrev}>
        left
      </button>
      <button className="text-white m-1" onClick={handleNext}>
        right
      </button> */}
        </section>
    );
};

export default OurPackages;
