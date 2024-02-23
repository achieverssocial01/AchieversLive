import React from "react";
import { Link } from "react-router-dom";

const OurOffers = () => {
  return (
    <section className="bg-[#1A1C24] mx-4 rounded py-[60px] text-center text-white  flex flex-col gap-10 mt-[80px]">
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

      <div className="w-full overflow-scroll no-scrollbar">
        <div className=" flex md:justify-center gap-4 mx-[10%] ">
          <div className=" w-[280px] h-[331.44px]  aspect-square flex-1 rounded-md flex flex-col gap-4 items-center  bg-gradient-to-b from-[#4B006E] to-[#FF6584]">
            
              <img
                src="/img/trainers.png"
                className="mb-5 w-[81px] h-[81px] mt-4"
              />
              {/* <div className="bg-[#EE5C82] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9"></div> */}
            
            <div>
              <h1 className="font-Montserrat text-base font-semibold leading-7 mt-9">
              1000+ Students
              </h1>
              <p className="text-white font-sans font-medium leading-5 text-sm mt-2">
              Boasting a thriving community, our institution is home to over 1000 students, creating a dynamic and diverse learning environment that fosters collaboration and growth.
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
              500+ Job placement
              </h1>
              <p className="text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2">
              With a track record of success, we take pride in facilitating job placements for over 500 of our graduates, ensuring they embark on fulfilling career paths aligned with their skills and aspirations.
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
              1000+ freelancers
              </h1>
              <p className="text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2">
              Nurturing entrepreneurial spirits, our institution has empowered over 1000 freelancers who have leveraged their education to pursue independent ventures, contributing to a flourishing ecosystem of innovation.
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
              1 Crore+ Income
              </h1>
              <p className="text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2">
              Demonstrating the tangible impact of our education, our students collectively generated an impressive income exceeding 1 crore, a testament to the practical skills and knowledge acquired during their academic journey.
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
