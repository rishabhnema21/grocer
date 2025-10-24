import React from 'react'
import { ShoppingCart } from "lucide-react";

const ItemCard = () => {
  return (
    <div className='text-center bg-white shadow-[7px_5px_20px_1px_rgba(0,_0,_0,_0.1)] rounded-xl py-8 transition-all duration-200 ease-in flex flex-col'>
        <div className='add-to-cart'>
            <button className='bg-gray-400 px-2 py-2 rounded-full'>
                <ShoppingCart />
            </button>
        </div>
    </div>
  )
}

export default ItemCard