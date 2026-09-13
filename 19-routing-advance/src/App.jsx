import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './assets/pages/Home'
import Contact from './assets/pages/Contact'
import About from './assets/pages/About'
import { Route, Routes } from "react-router-dom";
import Notfound from './assets/pages/Notfound'
import Men from './components/Men'
import Women from './components/Women'
import Courses from './components/courses'
import Coursesdetails from './components/Coursesdetails'
import Navigate2 from './assets/pages/Navigate2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navigate2/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/about' element={<About/> }/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:Courseid' element={<Coursesdetails/>}  />
        <Route path='/contact' element={<Contact/> }>
            <Route path="men" element={<Men/>}/>
            <Route path="women" element={<Women/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
