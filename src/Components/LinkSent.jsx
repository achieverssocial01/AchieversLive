import React from 'react'
const LinkSent = ()=>{

    return(
        <>
        <div className='w-full fixed bg-[#000000ED]  opacity-[120px] h-full top-0 left-0 botton-0 right-0 m-auto '>
        <div className='bg-[#1A1C24] pt-3 items-center z-24 absolute top-48 left-0 botton-0 right-0 m-auto  -z-1 rounded w-[400px] h-[319px]'>
        <div className='w-24 h-24 ml-[155px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/Link.png' className='w-20 mt-3 ml-2 h-16 absolute z-10'/></div>
<h1 className='font-monteserrat text-white leading-6 font-semibold text-xl text-center mt-3'>Link Sent!</h1>
<p className='font-lato text-white leading-5 font-semibold text-base  text-center mt-3'>A link has been sent to your email<br/> starting with<span className='text-[#8B8989]'> h******23@gmail.com!</span></p>

<button className='w-[270px] h-11 ml-16 mt-7 font-lato text-base leading-5 rounded-full bg-[#4B006E] leading-5 font-semibold text-white'>Check Email</button>

        </div>
        </div>
        

    
        </>
  
    )
}

export default LinkSent