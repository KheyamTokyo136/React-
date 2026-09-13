import React, { useEffect, useState } from 'react'

{/* <h1> num1 {num}</h1>
      <h1> num2 {num2}</h1>
      <button onMouseEnter={()=>{
        setnum(num+1)
       
      }} onMouseLeave={()=>{
         setnum2(num2+10)
      }}>
        Hover
      </button>
      const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    console.log("useeffect is running ");
  },[num]) */}

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log("a kee value change hogaye ");
    
  }

  function bChanging() {
    console.log("b kee value change hogaye ");
    
  }

  useEffect(function(){
   aChanging()
    
  },[a])

  useEffect(function(){
   bChanging()
    
  },[b])
  
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a+1)
      }}
      >ChangeA</button>

      <button onClick={()=>{
        setB(b-1)
      }}
      >ChangeB</button>
    </div>
  )
}

export default App
