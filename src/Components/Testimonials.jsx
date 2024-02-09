import React, { useState } from "react";
import { MdOutlineStarPurple500, MdStarOutline } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Testimonials = () => {

  const [translate, setTranslate] = useState(100);

  const handleNext = () => {
    setTranslate(translate + 1 * 100);
  };

  console.log(translate);

  const handlePrev = () => {
    setTranslate(translate - 1 * 100);
    // setTranslate((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (

      <section className=" mt-[90px]  md:w-full  rounded text-center text-white ">
        <div className="mx-[13px] md:mx-[50px] py-[70px] bg-[#1A1C24]">
          <h1 className="leading-7 font-[Montserrat] text-3xl font-bold text-center ">Our Testimonials</h1>
          <p className="text-[#8B8989] text-center  font-semibold mt-5 font-sans text-sm leading-5">
            Hear What Our Clients Are Saying
          </p>

          <div className="flex justify-center overflow-hidden mt-[55px]">
            <div className={`flex-1 aspect-[1/0.5] scale-90 -translate-x-[${translate}%] rounded-[5px] bg-[#111110] mb-3 w-[281px] md:w-[570px] h-64`}>
              <div className="">
                <img
                  className="inline-block h-12 w-12 mt-6 space-x-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <h4>Jess Scott 1</h4>
              <p>Bronze Package</p>
              <span className="flex text-[#E8B910] justify-center">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdStarOutline className="text-[#BF953F]" />
              </span>
              <p className="font-sans font-medium text-sm leading-5 ">
                “Their exclusive packages are a game-changer. I gained skills
                that set me
                <br /> apart in the professional world, and I'm now more
                confident than ever.”
              </p>
            </div>

            <div className={`flex-1 aspect-[1/0.5] rounded-[5px] -translate-x-[${translate}%] bg-[#111110] mb-3 w-[281px] md:w-[570px] h-64 `}>
              <div className="">
                <img
                  className="inline-block h-12 w-12 mt-6 space-x-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <h4>Jess Scott 2</h4>
              <p>Bronze Package</p>
              <span className="flex text-[#E8B910] justify-center">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdStarOutline className="text-[#BF953F]" />
              </span>
              <p className="font-sans font-medium text-sm leading-5 ">
                “Their exclusive packages are a game-changer. I gained skills
                that set me
                <br /> apart in the professional world, and I'm now more
                confident than ever.”
              </p>
            </div>

            <div className={`flex-1 aspect-[1/0.5] scale-90 rounded-[5px] -translate-x-[${translate}%] bg-[#111110] w-[281px] md:w-[570px] h-64 `}>
              <div className="">
                <img
                  className="inline-block h-12 w-12 mt-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <h4>Jess Scott 3</h4>
              <p>Bronze Package</p>
              <span className="flex text-[#E8B910] justify-center">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdStarOutline className="text-[#BF953F]" />
              </span>
              <p className="font-sans font-medium text-sm leading-5 mt-8">
                “Their exclusive packages are a game-changer. I gained skills
                that set me
                <br /> apart in the professional world, and I'm now more
                confident than ever.”
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-[17px] gap-2">
              <button disabled={translate == -100 ? true : false}  onClick={handlePrev} className={`p-[8px] rounded-full bg-${translate == -100 ? '[#8B8989]': '[#4B006E]'}`}>
                <IoIosArrowBack
                
                  size={20}
                  className={`rounded-full bg-${translate == -100 ? '[#8B8989]': '[#4B006E]'}  text-white `}
                />
              </button>
              <button disabled={translate == 200 ? true : false} onClick={handleNext} className={`p-[8px] rounded-full bg-${translate == 200 ? '[#8B8989]': '[#4B006E]'}`}>
                <IoIosArrowForward
                
                  size={20}
                  className={`rounded-full   bg-${translate == 200 ? '[#8B8989]': '[#4B006E]'} text-white`}
                />
              </button>
            </div>

          {/* <div className="hidden md:flex mt-2 justify-center ">
            <span className="h-8 w-8 rounded-full bg-[#4B006E]">
              <IoIosArrowBack className="mt-1 w-6 h-6" />
            </span>
            <span className="h-8 w-8 rounded-full bg-[#4B006E] ">
              <IoIosArrowForward className="mt-1 w-6 h-6" />
            </span>
          </div> */}
        </div>
      </section>

  );
};

export default Testimonials;
