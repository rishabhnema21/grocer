import React from 'react'
import { ShoppingCart } from "lucide-react";

const ItemCard = () => {
  return (
    <div className='text-center relative bg-white shadow-[7px_5px_20px_1px_rgba(0,_0,_0,_0.1)] rounded-xl py-8 transition-all duration-200 ease-in flex flex-col'>
        <div className='add-to-cart absolute top-3 right-3'>
            <button className='bg-gray-200 px-2 py-2 rounded-full'>
                <ShoppingCart />
            </button>
        </div>

        <div>
            <img src="/vegetable.png" className='' alt="" />
            <h1 className='text-xl font-medium'>Garam Masala</h1>
            <h1 className='text-4xl mt-3 flex justify-center items-center'><span className='text-xl text-[#867b03]'>&#8377;</span>20</h1>
        </div>
    </div>
  )
}

export default ItemCard