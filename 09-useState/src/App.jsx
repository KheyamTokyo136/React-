import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function decrease() {
  setnum(num-1)
    
  }
  function increase() {
   setnum(num+1)
  }
  function increase100num() {
   setnum(num+100)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={increase100num}>increase 100</button>
    </div>
  )
}

export default App
