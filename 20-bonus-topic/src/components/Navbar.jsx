import React from 'react'

const Navbar = (props) => {
 
    function changetheme(){
        props.setTheme("dark")
    }

  return (
    <div>
      <button onClick={changetheme}>change color</button>
    </div>
  )
}

export default Navbar
