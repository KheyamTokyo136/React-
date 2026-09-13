import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

const submitHandler=(e)=>{
  e.preventDefault()
  
  const copyTask=[...task]
  copyTask.push({title,details})
  setTask(copyTask);

  setTitle("")
  setDetails("")
}

const delteNote=(idx)=>{
 const copyTask=[...task]
 copyTask.splice(idx,1)
 setTask(copyTask)
 
  
}



  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex  lg:w-1/2 flex-col gap-5 items-start p-10'>

           <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input className='px-5 font-medium w-full py-2 rounded border-2 outline-none'
            type="text" placeholder='Enter Notes Heading'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
              
            }} />

          <textarea className='px-5 w-full font-medium h-32 py-2 rounded border-2 outline-none'
            type="text" placeholder='Write Details here'
            value={details}
            onChange={(e)=>{
            setDetails(e.target.value)
            }}
             />

            <button className='font-medium active:bg-gray-200 bg-white text-black  w-full px-5 py-2 rounded outline-none'>Add Notes</button>

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start  justify-start mt-5 h-[90%] overflow-auto gap-4  '>
            
            {task.map(function(elem,idx){
             return <div key={idx} className='relative h-52 bg-cover w-40 bg-white p-4 text-black rounded-2xl  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsT6RE-eNfUOBq260fv9P0buWtUzyhgt2Kf_xBHvdRQ&s=10")]'>
              <h2 onClick={()=>{
                delteNote(idx)
              }}
               className='absolute top-0 right-0 bg-red-500 cursor-pointer active:scale-95 rounded-full p-1'><X size={16} color="#ffffff" strokeWidth={1.5} /></h2>
              <h3 className='font-bold text-lg leading-tight px-3'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-xs font-semibold text-gray-600 px-3'>{elem.details}</p>
             </div>
            })}



        </div>

      </div>
    </div>
  )
}

export default App
