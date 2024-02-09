import React from 'react'
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Pagination = () => {
  return (
    <>
      
      <div className='flex gap-1 justify-center mt-12'>

      <div className='bg-[#919EAB] text-[#000000] rounded-full w-9 relative h-9'><IoIosArrowBack className='absolute mt-2 ml-1 w-6  '/></div>
        <div className='bg-[#4B006E] text-white rounded-full w-9 relative h-9'><span className='absolute mt-2 ml-3 '>1</span></div>
        <div className='bg-white text-[#000000] rounded-full w-9 relative h-9'><span className='absolute mt-2 ml-4 '>2</span></div>
        <div className='bg-white text-[#000000] rounded-full w-9 relative h-9'><HiOutlineDotsHorizontal className='absolute mt-3 ml-3 '/></div>
        <div className='bg-white text-[#000000] rounded-full w-9 relative h-9'><span className='absolute mt-2 ml-3 '>9</span></div>
        <div className='bg-white text-[#000000] rounded-full w-9 relative h-9'><span className='absolute mt-2 ml-3 '>10</span></div>
        <div className='bg-white text-[#000000] rounded-full w-9 relative h-9'><IoIosArrowForward className='absolute mt-2 ml-3 '/></div>
      </div>
    </>
  )
}

export default Pagination
