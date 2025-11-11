import React, { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const ItemCard = () => {
  
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart, cartItems, navigate } = useAppContext();
  
  return (
    <div className="text-center hover:scale-105 relative bg-white shadow-[7px_5px_20px_1px_rgba(0,_0,_0,_0.1)] w-[40vw] md:w-auto rounded-xl py-8 transition-all duration-200 ease-in flex flex-col">
      <div className="add-to-cart absolute top-3 right-3">
        <button className="bg-gray-200 px-2 py-2 rounded-full">
          <ShoppingCart color="#3e9392" size={20} />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src="/vegetable.png" className="hover:scale-105 w-auto h-45 transition-all duration-200 ease-in" alt="" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">Garam Masala</h1>
          <p className="text-sm text-gray-600 tracking-wide">
            <span className="text-[#e59f06]">★</span> 4.8 | 5.3 km
          </p>
          <h1 className="text-4xl tracking-wide text-[#20513C] font-bold mt-3 flex justify-center items-center">
            <span className="text-xl text-[#867b03]">&#8377;</span>20
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
