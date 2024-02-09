import React,{useState, useEffect, useRef} from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const options = ['Bronze Package', 'Silver Package', 'Gold Package'];
const TestAnything = () => {
  const navigate = useNavigate()
    const[isOpen, setIsOpen] = useState(false);
    const[selectedOption, setSelectedOption]=useState(null)
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked =(value) => () =>{
      
        setSelectedOption(value);
        if(value === "Bronze Package"|| "Silver Package" || "Gold Package"){
          navigate('/viewPackage');
        }
        setIsOpen(false);
    }
  return (
    <>
    <div  className='inline-flex '>
    <div className=' relative inline-flex rounded bg-[#100D0F]' >
       
            <button
            type='button'
            onClick={toggling}
            className='w-[100%] ml-1 rounded-lg-md '>
                {selectedOption || 'Course Packages'}
                </button>

        <div className='relative whitespace-nowrap	'>
            <button type='button' onClick={toggling} className={`button-${isOpen ? 'danger' : 'success' } border-1 border-gray-50 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-600  hover:text-gray-700  `} ><RiArrowDownSLine className='w-5 h-4 text-white   '/></button>
        </div>

{isOpen && (
        <div  className='min-w-[200px] absolute top-6 right-0 z-10 mt-1 min-w-[200px origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'>
            {options.map((option) =>(
              
            <button type='button' 
            onClick={onOptionClicked(option)} 
            key={Math.random()}
             className='block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50'>
                    {option}
                   
            </button>
            ))}
    </div>
    )}
    </div>
    
    </div>  
    </>
  )
}

export default TestAnything
