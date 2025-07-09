import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cart from './Components/Cart'

const App = () => {


  return (
    <div className=' '>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App