import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='min-w-0 p-4 flex flex-nowrap overflow-x-auto rounded-4xl gap-10 h-full w-2/3'>
       {props.user.map(function(elem, idx){
        return <RightCard color={elem.color} key={idx} id={idx} img={elem.img} tag={elem.tag}/>
       })}
    </div>
  )
}

export default RightContent