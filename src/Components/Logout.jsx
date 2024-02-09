import React,{useContext, useEffect, useRef, useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import OutsideClick from './OutsideClick';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from './ContextProvider';
import { logout } from '../Store/authSlice';
import { useDispatch } from 'react-redux';

const Logout = ({openDialog ,setOpenDialog})=>{

    const dispatch = useDispatch();
    const menuRef=useRef();

    useEffect (() =>{
        const handler =(e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpenDialog(false)
            }
        };
        document.addEventListener('mousedown',handler);
        return()=>{
            document.removeEventListener('mousedown',handler);
        };
    },[]);


    const logOutUser = () => {
        // setuser(false);
        dispatch(logout());
        window.location.replace("/login");

    };

      const { user, setuser } = useContext(Usercontext);
      const navigate = useNavigate();
    
    return(
        <>
        
        <div  className='w-full fixed bg-[#000000ED] z-[1000]  opacity-[120px] h-full top-0 left-0 botton-0 right-0 m-auto '>
        <div ref={menuRef} className='bg-[#1A1C24] z-24 absolute top-48 left-0 botton-0 right-0 m-auto  -z-1 rounded w-[500px] h-[249px]'>
            <RxCross2 onClick={()=>setOpenDialog(false)} className='ml-[460px] w-8 h-8 ml-2 mt-2 text-white'/>
        <div className='w-20 h-20 ml-[195px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/logout.png' className='w-20 mt-2 ml-1 h-16 absolute z-10'/></div>
<h1 className='font-montserrat text-white leading-6 font-semibold text-lg text-center mt-3'>Are you sure you want to logout?</h1>

<div className='flex gap-1 ml-7'>
    
<button onClick={()=>setOpenDialog(false)} className='w-[200px] h-9 ml-3 mt-7 text-base font-lato leading-5 rounded-full bg-[#10100F] font-semibold text-white'>No, Go Back!</button>


<button onClick={logOutUser} className='w-[200px] h-9 ml-3 mt-7 font-lato text-base leading-5 rounded-full bg-[#4B006E]  font-semibold text-white'>Yes, Logout!</button>
</div>
        </div>
        </div>
        

    
        </>
    )
}

export default Logout