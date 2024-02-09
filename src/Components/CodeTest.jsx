import React from 'react'

const CodeTest = () => {
  return (
    

     <div>
     <div className="md:w-[330px] md:h-[333px] ml-16 rounded bg-white">
              <div className=" p-3">
                <img
                  src="/img/bronzePackage.png"
                  className="absolute z-10 md:w-56 md:h-32 -left-8  "
                />
                <div className="bg-[#4B006E] relative z-4 md:w-[305px] pt-3 ml-1 md:h-32 rounded">
                  {" "}
                </div>
              </div>

              <div className="text-black mt-12  ">
                <h3 className=" md:text-xl font-semibold leading-5 font-montserrat">
                  Bronze Package
                </h3>
                <hr className="mt-3 md:w-[338px]" />
                <div className="mt-2 text-[#3F3D56] p-2 hidden font-poppins text-base leading-5 space-y-2 ">
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
    
  )
}

export default CodeTest
