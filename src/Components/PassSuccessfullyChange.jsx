import React,{useState} from 'react'

const PassSuccessfullyChange = () => {
    const [openDialog, setOpenDialog] = useState(false);
    return (
      <>
        
        <div className='w-full fixed bg-[#000000ED]  opacity-[120px] h-full top-0 left-0 botton-0 right-0 m-auto '>
        <div className='bg-[#1A1C24] pt-3 items-center z-24 absolute top-48 left-0 botton-0 right-0 m-auto  -z-1 rounded w-[300px] h-[219px]'>
        <div className='w-20 h-20 mt-4 ml-[110px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/success.png' className='w-20 mt-2 ml-1 h-16 absolute z-10'/></div>
<h1 className='font-monteserrst text-white leading-6 font-semibold text-xl text-center mt-3'>Password successfully <br/>changed!</h1>

<div>

</div>
        </div>
        </div>


  </>
  )
}

export default PassSuccessfullyChange
