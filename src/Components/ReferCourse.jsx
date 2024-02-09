import React from 'react'
import { MdOutlineContentCopy } from "react-icons/md";

import { RxCross2 } from "react-icons/rx";
const ReferCourse = ({passSuccess, setPassSuccess}) => {
  return (
    <>
        
        <div className='w-full fixed bg-[#000000ED]  opacity-[120px] h-full top-0 left-0 botton-0 right-0 m-auto '>
        <div className='bg-[#1A1C24] pt-3 items-center z-24 absolute top-48 left-0 botton-0 right-0 m-auto  -z-1 rounded w-[390px] h-[229px]'>
            <div className='flex justify-between'>
            <h1 className=' text-white font-montserrat text-base leading-5 mt-2 ml-3'>Refer this Course</h1>
            <RxCross2 onClick={()=>setPassSuccess(false)} className=' w-6 cursor-pointer h-6 mr-4 mt-1 text-white'/>
            </div>
        

<div className='p-2 '>
<div className="mb-4 mt-5 ml-3">
      <label className="block font-montserrat text-white text-xs font-medium leading-4 mb-2" htmlFor="username">
      Share Code
      </label>
      <div className='flex gap-5'>
      <input className="shadow bg-[#1A1C24] appearance-none border rounded-full w-32 py-1 px-2 font-montserrat text-white text-xs font-medium leading-4 focus:outline-none focus:shadow-outline border-[#8B8989]" id=" Enter Password Again" name=' Enter Password Again' type="password" placeholder="7528452"/>
    <div className='bg-[#4B006E] text-white w-8 h-8 rounded-full'><MdOutlineContentCopy className='mt-2 ml-2'/></div>
    </div></div>

    
    <div className="mb-4 ml-3">
      <label className="block font-montserrat text-white text-xs font-medium leading-4  mb-2" htmlFor="username">
      Share Link
      </label>
      <div className='flex gap-5'>
      <input className="shadow bg-[#1A1C24] appearance-none border rounded-full w-80 py-1 px-3 font-montserrat text-white text-xs font-medium leading-4 focus:outline-none focus:shadow-outline border-[#8B8989]" id=" Enter Password Again" name=' Enter Password Again' type="password" placeholder="https://www.achievers.com/share/1013gG3@YOUi"/>
      <div className='bg-[#4B006E] text-white w-8 h-8 rounded-full'><MdOutlineContentCopy className='mt-2 ml-2'/></div>
    </div></div>


</div>
        </div>
        </div>
    </>
  )
}

export default ReferCourse
