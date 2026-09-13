import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate2 = () => {

    const navigate= useNavigate()

  return (
    <div className='py-2 px-3 bg-cyan-700' >
       <button onClick={()=>{
        navigate("/")
      }}  
      className='font-medium px-3 py-2 bg-amber-600 rounded m-2 cursor-pointer active:scale-95'>Return to home </button>
      <button onClick={()=>{
        navigate(-1)
      }} 
      className='font-medium px-3 py-2 bg-amber-600 rounded m-2 cursor-pointer active:scale-95'>Back </button>
      <button onClick={()=>{
        navigate(+1)
      }} 
      className='font-medium px-3 py-2 bg-amber-600 rounded m-2 cursor-pointer active:scale-95'>Next </button>
    </div>
  )
}

export default Navigate2
