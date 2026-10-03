import React from 'react'

const App = () => {

const user=JSON.parse (localStorage.getItem("user"))
console.log((user));


 
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
