import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-[#FCFBFC] overflow-hidden py-3 px-5 md:py-6 md:px-26'>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App