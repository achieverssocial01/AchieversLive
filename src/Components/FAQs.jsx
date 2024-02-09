import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
const FAQs = () => {
    const[active ,setActive]= useState([]); 
  return (
    <div className=' bg-gray-800 p-10 leading-5 font-sans ' >
        <h2 className='font-montserrat font-lg text-white'>FAQs</h2>
       <div className='accordian-1 bg-white w-[696px] pl-1 pr-4 mb-4 rounded-sm shadow-[1px 1px 5px rgb(255, 205, 255)'>
            <div className='question flex justify-between'>
                <h4>How to crack an Interview with Ease</h4>
               { active.includes(2) ? 
                <IoIosArrowUp  onClick={() => setActive(active.includes(2) ? active.filter(item => item !== 2) : [...active, 2])}  className='icon mr-4'/> :<IoIosArrowDown onClick={() => setActive(active.includes(2) ? active.filter(item => item !== 1) : [...active, 2])}  className='icon mr-4'/>}
            </div>
            { active.includes(2) && <div className='answer  text-gray-600  max-h-32'>
                <p>Review the job description to understand the types of skills and<br/> qualifications the employer expects you to have. It would also give you <br/>an idea about the duties and responsibilities the job entails.</p>
            </div>}
        </div>

        <div className='accordian-1 bg-white w-[696px] pl-1 pr-4 mb-4 rounded-sm shadow-[1px 1px 5px rgb(255, 205, 255)'>
            <div className='question flex justify-between'>
                <h4>How to crack an Interview with Ease</h4>
               { active.includes(3) ? 
                <IoIosArrowUp  onClick={() => setActive(active.includes(2) ? active.filter(item => item !== 2) : [...active, 3])}  className='icon mr-4'/> :<IoIosArrowDown onClick={() => setActive(active.includes(3) ? active.filter(item => item !== 1) : [...active, 3])}  className='icon mr-4'/>}
            </div>
            { active.includes(3) && <div className='answer  text-gray-600  max-h-32'>
                <p>Review the job description to understand the types of skills and<br/> qualifications the employer expects you to have. It would also give you <br/>an idea about the duties and responsibilities the job entails.</p>
            </div>}
        </div>

        <div className='accordian-3 bg-white w-[696px] pl-1 pr-4 mb-4 rounded-sm shadow-[1px 1px 5px rgb(255, 205, 255)'>
            <div className='question flex justify-between'>
                <h4>How to crack an Interview with Ease</h4>
                <IoIosArrowDown onClick={() => setActive(4)}  className='icon mr-4'/>
            </div>
            { active.includes(4) && <div className='answer  text-gray-600  max-h-32'>
                <p>Review the job description to understand the types of skills and<br/> qualifications the employer expects you to have. It would also give you <br/>an idea about the duties and responsibilities the job entails.</p>
            </div>}
        </div>

        <div className='accordian-4 bg-white w-[696px] pl-1 pr-4 mb-4 rounded-sm shadow-[1px 1px 5px rgb(255, 205, 255)'>
            <div className='question flex justify-between'>
                <h4>How to crack an Interview with Ease</h4>
                <IoIosArrowDown onClick={() => setActive(5)}  className='icon mr-4'/>
            </div>
            { active.includes(5) && <div className='answer  text-gray-600  max-h-32'>
                <p>Review the job description to understand the types of skills and<br/> qualifications the employer expects you to have. It would also give you <br/>an idea about the duties and responsibilities the job entails.</p>
            </div>}
        </div>
      </div>
    
  )
}

export default FAQs
