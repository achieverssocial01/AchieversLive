import React from "react";
import { Link } from "react-router-dom";

const OurOffers = () => {
  return (
    <section className="bg-[#1A1C24] mx-4  rounded py-[60px] text-center text-white  flex flex-col gap-10 mt-[80px]">
      <div className="">
        <h1 className="font-monteserrat text-[1.5rem] leading-[36.57px] text-center  ">
          What we Offer
        </h1>
        <p className="font-sans px-[25px] text-[#8B8989] leading-6 text-center text-base">
          Tailored Programs and Dynamic Initiatives to Shape Tomorrow’s Leaders
        </p>
        {/* <p className="font-sans text-[#8B8989] leading-6 text-center text-base">
         
        </p> */}
      </div>

      <div className="w-full overflow-x-auto">
        <div className=" flex md:justify-center gap-4 mx-[10%] ">
          <div className=" w-[280px] h-[331.44px]  aspect-square flex-1 rounded-md flex flex-col gap-4 items-center  bg-gradient-to-b from-[#4B006E] to-[#FF6584]">
            
              <img
                src="/img/trainers.png"
                className="mb-5 w-[81px] h-[81px] mt-4"
              />
              {/* <div className="bg-[#EE5C82] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9"></div> */}
            
            <div>
              <h1 className="font-Montserrat text-base font-semibold leading-7 mt-9">
                1.2 Lakh+ Students
              </h1>
              <p className="text-white font-sans font-medium leading-5 text-sm mt-2">
                At the heart of our mission are the 1.2 <br />
                lakh students who have chosen to
                <br />
                embark on their educational journey with us.{" "}
              </p>
            </div>
          </div>

          <div className="w-[280px] h-[331.44px] aspect-square flex-1 bg-[#100D0F] flex flex-col gap-4 items-center">
            
              <img
                src="/img/students.png"
                className=" mb-5 w-[78px] h-[76px] mt-3 "
              />
              {/* <div className="bg-[#4B006E] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9"></div> */}
          
            <div>
              <h1 className="font-monteserrat text-base font-semibold leading-7 mt-9 ">
                1.2 Lakh+ Students
              </h1>
              <p className="text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2">
                At the heart of our mission are the 1.2 <br />
                lakh students who have chosen to
                <br />
                embark on their educational journey with us.{" "}
              </p>
            </div>
          </div>

          <div className="w-[280px] h-[331.44px] aspect-square rounded-md bg-[#100D0F] flex flex-col gap-4 items-center">
          
              <img
                src="/img/training.png"
                className=" mb-5 w-[78px] h-[81px] mt-3"
              />
              {/* <div className="bg-[#4B006E] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9"></div> */}
            
            <div>
              <h1 className="font-monteserrat text-base mt-9 font-semibold leading-7">
                1.2 Lakh+ Students
              </h1>
              <p className="text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2">
                At the heart of our mission are the 1.2 <br />
                lakh students who have chosen to
                <br />
                embark on their educational journey with us.{" "}
              </p>
            </div>
          </div>

          <div className="w-[280px] h-[331.44px] aspect-square rounded-md bg-[#100D0F] flex flex-col gap-4 items-center">
            
              <img
                src="/img/earning.png"
                className=" mb-5 w-[76px] h-[81px] mt-3"
              />
              {/* <div className="bg-[#4B006E] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9"></div> */}
          
            <div>
              <h1 className="font-Montserrat text-base font-semibold leading-7 mt-9">
                1.2 Lakh+ Students
              </h1>
              <p className="text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2">
                At the heart of our mission are the 1.2 <br />
                lakh students who have chosen to
                <br />
                embark on their educational journey with us.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/all-courses"} className="bg-[#4B006E] text-white px-10 py-4 rounded-[70px]  text-sm font-semibold leading-5 font-montserrat ">
          Buy Now
        </Link>
      </div>
    </section>
  );
};

export default OurOffers;
