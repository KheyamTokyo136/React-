import React from 'react'
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Page1content user={props.user}/>
    </div>
  )
}

export default Section1
