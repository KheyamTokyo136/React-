import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState([10,20,30,40])

  const btnClicked=()=>{
   setnum(prev=>([...prev,10,20]))
 
  
    
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
