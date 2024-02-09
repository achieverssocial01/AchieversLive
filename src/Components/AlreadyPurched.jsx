import React from 'react'
import { Link } from 'react-router-dom'

const AlreadyPurched = ({alreadyPurched}) => {
  return (
    <dialog open={alreadyPurched} className='w-full md:w-[400px] h-[300px]  rounded-md bg-red-600 flex flex-col items-center justify-center'>
        <h1 className='text-white'>You have already purchased this course</h1>
        <Link to={'/course'}>Go to my courses</Link>
    </dialog>
  )
}

export default AlreadyPurched