import React, { createContext, useState ,useEffect} from 'react'

export const  Usercontext =createContext();

const ContextProvider = ({children}) => {
    const [user,setuser] =useState(false);
    useEffect(()=>{
        const userdata =localStorage.getItem("auth")
        if(userdata){
          setuser(true)
        }
    },[user])
  return (
    <>
    <Usercontext.Provider value={{user,setuser}}>
        {children}
    </Usercontext.Provider>
    </>
  )
}

export default ContextProvider
