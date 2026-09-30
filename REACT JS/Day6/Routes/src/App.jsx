import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Card from './component/Card'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
       <Route path="/card" element={<Card/>} />

      
      


      
    </Routes>
    
    
    </>
  )
}

export default App