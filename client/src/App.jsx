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
import ProductCategory from './pages/ProductCategory'
import AddAddress from './pages/AddAddress'
import SellerLayout from './pages/seller/SellerLayout'
import { useAppContext } from './context/AppContext'
import Orders from './pages/Orders'
import AddProduct from './pages/seller/AddProduct'
import SellerProductList from './pages/seller/SellerProductList'
import SellerOrders from './pages/seller/SellerOrders'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  const { isSeller } = useAppContext();

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
          <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}> 
            <Route index element={<AddProduct />} />
            <Route path="add-products" element={<AddProduct />} />
            <Route path="product-list" element={<SellerProductList />} />
            <Route path="all-orders" element={<SellerOrders />} />
          </Route>
          <Route path='/products/:category/:id' element={<Product />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  )
}

export default App