import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        
        <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between px-5 py-3'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className=' text-shadow-2xs texr-xl laeding-relaxed text-white mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae deserunt rerum molestiae architecto in. </p>
            <div className='flex justify-between'>
                <button style={{background:props.color}} className='text-white font-medium px-8 py-2 rounded-full'> {props.tag}</button>
                <button style={{background:props.color}} className='text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default RightCardContent
