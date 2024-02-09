import React from 'react'
import { MdOutlinePendingActions } from "react-icons/md";


const AfterPaymentPage = () => {
  return (
    <div className="min-h-[calc(100vh-41px)] w-full bg-gradient-to-t from-[#4B006E] to-[#FF6584] md:min-h-[calc(100vh-112px)] p-4  flex justify-center items-center">
        <div className='flex flex-col md:flex-row text-white items-center p-4 '>
            <h4 className='text-white text-2xl text-center'>
                We are reviewing your payment request, once it will get verified you will get confirmation email.
            </h4>
                <MdOutlinePendingActions size={40}/>
        </div>
    </div>
  )
}

export default AfterPaymentPage