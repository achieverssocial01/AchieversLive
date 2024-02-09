import React from "react";
import OurOffers from "./OurOffers";
import { Link } from "react-router-dom";
const HomeTop = () => {
  return (
    <>
      <div className="flex flex-col-reverse  px-6 justify-between items-center text-center md:text-left md:flex-row sm:flex-col lg:flex-row md:ml-9 md:gap-48">
        <div className="md:ml-3 mt-4">
          <p className="text-white p-2 w-fit mx-auto md:mx-0 font-montserrat font-semibold bg-[#4B006E] rounded-[26px] leading-4 mt-4 md:mt-24">
            Innovate, Educate, Elevate
          </p>
          <h2 className="text-white font-montserrat text-[1.5rem] font-bold leading-[29.26px] text-2xl md:text-[30px] mt-4">
            Transformative Journeys on
             India's Educational Frontier.
          </h2>
          <p className="text-[#8B8989] font-sans font-medium leading-6 mt-4">
            Join us as we redefine learning, one breakthrough at a time.
            Elevate your educational experience with
             innovation at its core.
          </p>

          <Link to={"/signup"} className="w-fit px-9 py-2  mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white">
          Get Started
          </Link>
        </div>


          <img
            src="/img/gr.png"
            className="w-[280px] md:w-[460px] content-center md:h-[390px] h-[350px] md:mr-24  mt-6 rounded-md mb-8"
          />
      </div>
      <OurOffers />
    </>
  );
};

export default HomeTop;
