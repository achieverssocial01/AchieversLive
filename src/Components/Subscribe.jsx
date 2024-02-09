import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Subscribe = () => {

  const [email, setSearch]= useState("")

  const navigate= useNavigate()

  const subscribers = async ()=>{
    if(!email){
      return alert('please subscribe for more updates..')
    }
    else{
    const response = await axios.post("http://localhost:8089/newsletter",{email});
    console.log(response);
    if(response.status ===200){
      navigate("/")
    }
    else{
      alert("Please subscribe!!");
    }
  }
}
  return (
    
      <div className='flex items-center flex-col  md:flex-row justify-between px-[37px] md:px-[50px] py-[150px]  text-white'>

        <div className='flex-1'>
            <h1 className='font-montserrat text-[1.5rem] leading-[29.26px]	 md:text-3xl font-semibold md:leading-10 text-center md:text-left  '>Subscribe <br className='hidden md:block' /> to get Updates.</h1>
            <p className='font-sans md:w-[64%] text-sm font-medium text-[#8B8989] text-center md:text-left leading-5 mt-1'>Don't miss out on the latest trends and opportunities – be the first to know and take your learning journey to the next level</p>
        </div>

        <div >

            <div className='mt-12 flex flex-1 items-center '>
                <input type='email' name='email' placeholder='Enter Email ID' 
                 onChange={(e)=>setSearch(e.target.value)}
                className='md:w-80 h-9 rounded-full text-[#8B8989] bg-white pl-5 text-sm font-sans font-semibold'/>
                <button 
                onClick={subscribers}
                className='bg-[#4B006E] text-white font-montserrat text-sm  leading-5 ml-2 md:w-32 p-2 rounded-full'>Subscribe</button>
            </div>
        </div>
      </div>
    
  )
}

export default Subscribe
