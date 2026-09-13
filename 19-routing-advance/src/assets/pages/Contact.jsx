import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-xl font-semibold' to="/contact/men">Men Contact</Link>
            <Link className='text-xl font-semibold' to="/contact/women">Women Contact</Link>
        </div>
        <Outlet/>
      
    </div>
  )
}

export default Contact
