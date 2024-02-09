import React, { useState } from "react";
import { MdOutlineStarPurple500, MdStarOutline } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const TestimonialSlider = () => {
  return (
   
    <>
      <div className="mt-32 w-[1210px] ml-7 rounded h-[518px] text-center text-white bg-[#1A1C24]">
        <div className="space-x-4 p-12">
          <h1 className="leading-7 text-3xl font-bold ">Our Testimonials</h1>
          <p className="text-[#8B8989] font-semibold font-sans text-sm leading-5">
            Hear What Our Clients Are Saying
          </p>

          <div className="flex justify-between">
            <div className="mt-12 flex-1 bg-[#111110] mb-3 w-[570px] h-64 ml-2">
              <div className="">
                <img
                  className="inline-block h-12 w-12 mt-6 space-x-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <h4>Jess Scott</h4>
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

            <div className="mt-12 flex-1 scale-100 bg-[#111110] mb-3 w-[570px] h-64 ml-2">
              <div className="">
                <img
                  className="inline-block h-12 w-12 mt-6 space-x-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <h4>Jess Scott</h4>
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

            <div className="mt-12 flex-1 bg-[#111110]  mb-3 w-[570px] h-64 ml-2">
              <div className="">
                <img
                  className="inline-block h-12 w-12 mt-6 space-x-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <h4>Jess Scott</h4>
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

          <div className="flex pl-[505px] mt-2">
            <span onClick={increaseSlider} className="h-8 w-8 rounded-full bg-[#4B006E]">
              <IoIosArrowBack className="mt-1 ml-1 w-6 h-6" />
            </span>
            <span onClick={decreaseSlider}  className="h-8 w-8 rounded-full bg-[#4B006E] ml-3">
              <IoIosArrowForward className="mt-1 ml-1 w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </>


  )
}

export default TestimonialSlider
