import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
import Catalog from './pages/Catalog'
import AuthModal from './components/AuthModal'
import Cart from './pages/Cart'
import SellerLogin from './pages/SellerLogin'
import Product from './pages/Product'
import Admin from './pages/Admin'
import ProductCategory from './pages/ProductCategory'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className={`min-h-screen bg-[#FCFBFC] overflow-hidden ${
    isSellerPath ? 'px-0 py-0' : 'px-5 md:px-26 py-3 md:py-6'
  }`}>
      {isSellerPath ? null : <Navbar/>}
      <AuthModal/>
      <Toaster />
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/seller/login' element={<SellerLogin />}/>
          <Route path='/seller' element={<Admin />} />
          <Route path='/products/:category/:id' element={<Product />} />
          <Route path='/products/:category' element={<ProductCategory />} />
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  )
}

export default App