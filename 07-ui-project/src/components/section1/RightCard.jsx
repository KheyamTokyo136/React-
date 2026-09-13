import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
 console.log(props.tag);
 
  
  return (
    <div className='h-full w-60 shrink-0 overflow-hidden relative rounded-3xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent tag={props.tag} id={props.id} color={props.color}/>
    </div>
  )
}

export default RightCard
