import React, { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('kheyam')
  const formHandler=(e)=>{
    e.preventDefault()
     console.log("form submitted");
     setTitle('')
     
  }
  return (
    <div>
     <form onSubmit={(e)=>{
      formHandler(e)
     }}>
      <input type='text' value={title} placeholder='enter your name ' onChange={(e)=>{
        setTitle(e.target.value);
        
      }}></input>
      <button>submit</button>
     </form>
    </div>
  )
}

export default App
