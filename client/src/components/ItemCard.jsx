import React, { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const ItemCard = ({ id, description, name, price, offerPrice, images }) => {
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart, updateCartItem, cartItems, navigate } = useAppContext();

  return (
    <div className="relative bg-white shadow-[7px_5px_20px_1px_rgba(0,_0,_0,_0.1)] rounded-sm py-8 transition-all duration-200 ease-in flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-amber-200 px-2 mb-3 w-[90%] py-7 rounded-xl flex justify-center items-center">
          <img
            src={Array.isArray(images[0]) ? images[0][0] : images[0]}
            className="hover:scale-105 w-auto h-45 transition-all duration-200 ease-in"
            alt=""
          />
        </div>
        <div className="w-full px-4 mt-3 flex justify-between items-end">
          <div className="w-[60%]">
            <h1 className="text-2xl w-[100%] truncate font-semibold">{name}</h1>
            <p className="text-sm text-gray-600 tracking-wide">
              <span className="text-[#e59f06]">★</span> 4.8 | 5.3 km
            </p>
            <h1 className="text-3xl tracking-wide text-[#20513C] font-bold mt-1">
              <span className="text-xl text-[#867b03]">&#8377;</span>
              {offerPrice}
            </h1>
          </div>

          <div className="add-to-cart">
  {!cartItems[id] ? (
    <button
      onClick={() => addToCart(id)}
      className="bg-green-300 rounded-sm hover:bg-green-400 transition-all duration-200 ease-in cursor-pointer px-3 py-1"
    >
      <ShoppingCart className="inline-block" color="#013d0c" size={20} />
      <span className="ml-2 text-sm font-medium">Add</span>
    </button>
  ) : (
    <div className="flex justify-center items-center gap-[1px]">
      {/* Decrease */}
      <button
        onClick={() => removeFromCart(id)}
        className="bg-green-300 px-3 py-1 font-semibold rounded-sm cursor-pointer hover:bg-green-400"
      >
        -
      </button>

      {/* Current Count */}
      <span className="bg-green-400 px-3 py-1 font-semibold rounded-sm">
        {cartItems[id]}
      </span>

      {/* Increase */}
      <button
        onClick={() => addToCart(id)}
        className="bg-green-300 px-3 py-1 font-semibold rounded-sm cursor-pointer hover:bg-green-400"
      >
        +
      </button>
    </div>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default ItemCard;
