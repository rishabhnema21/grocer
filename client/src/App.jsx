import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
import Catalog from './pages/Catalog'
import AuthModal from './components/AuthModal'
import Cart from './pages/Cart'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className='min-h-screen bg-[#FCFBFC] overflow-hidden py-3 px-5 md:py-6 md:px-26'>
      {isSellerPath ? null : <Navbar/>}
      <AuthModal/>
      <Toaster />
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App