import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='pb-12 pt-5 flex gap-10 justify-between h-[90vh]  px-18'>
        <LeftContent/>
        <RightContent user={props.user} />
      
    </div>
  )
}

export default Page1content
