import React, { useState, useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useAppContext } from "../context/AppContext";

const Cart = () => {
  const {
    navigate,
    products,
    cartItems,
    updateCartItem,
    removeFromCart,
    cartCount,
    getCartAmount,
  } = useAppContext();
  const [cartArray, setCartArray] = useState([]);
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [showAddress, setShowAddress] = useState(false);
  const [paymentOption, setPaymentOption] = useState("Cash On Delivery");

  const getCartProduct = () => {
    let temp = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      temp.push({ ...product, quantity: cartItems[key] });
    }
    setCartArray(temp);
  };

  const placeOrder = async () => {
    
  }

  const amount = getCartAmount();

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCartProduct();
    }
  }, [products, cartItems]);

  return (
    <main>
      <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
        <div className="flex-1 max-w-4xl">
          <h1 className="text-3xl font-medium mb-6">
            Shopping Cart{" "}
            <span className="text-sm text-green-700">{cartCount} Items</span>
          </h1>

          <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
            <p className="text-left">Product Details</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Action</p>
          </div>

          {cartArray.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
            >
              <div className="flex items-center md:gap-6 gap-3">
                <div
                  onClick={() => {
                    navigate(
                      `/products/${product.category.toLowerCase()}/${
                        product._id
                      }`
                    );
                    scrollTo(0, 0);
                  }}
                  className="cursor-pointer w-24 h-24 flex items-center justify-center bg-green-200 border border-gray-300 rounded overflow-hidden"
                >
                  <img
                    className="max-w-full h-full object-cover"
                    src={
                      Array.isArray(product.images[0])
                        ? product.images[0][0]
                        : product.images[0]
                    }
                    alt={product.name}
                  />
                </div>
                <div>
                  <p className="hidden md:block font-semibold">
                    {product.name}
                  </p>
                  <div className="font-normal text-gray-500/70">
                    <p>
                      Weight: <span>{product.weight || "N/A"}</span>
                    </p>
                    <div className="flex items-center">
                      <p>Qty: {cartItems[product._id]}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center">
                ${product.offerPrice * product.quantity}
              </p>
              <button
                onClick={() => removeFromCart(product._id)}
                className="cursor-pointer mx-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                    stroke="#FF532E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}

          <button
            onClick={() => {
              navigate("/catalog");
              scrollTo(0, 0);
            }}
            className="group cursor-pointer flex items-center mt-8 gap-2 text-green-900 font-medium"
          >
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
                stroke="#377002"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Continue Shopping
          </button>
        </div>

        <div className="w-full sm:w-3/4 md:w-1/3 bg-[#f1f1f1] rounded-2xl p-6 shadow-2xl self-start">
          <h2 className="text-[#111] text-3xl mb-4 font-medium">Summary</h2>
          <hr className="text-[#111]" />

          <div className="pricing mb-4 mt-5 leading-8">
            <p className="flex justify-between">
              <span className="text-[#111] font-medium">Price</span>
              <span className="text-[#2B6E4E] font-medium">
                &#8377; {amount}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-[#111] font-medium">Shipping Fee</span>
              <span className="text-[#2B6E4E] font-medium">Free</span>
            </p>
            <p className="flex justify-between">
              <span className="text-[#111] font-medium">Tax</span>
              <span className="text-[#2B6E4E] font-medium">
                &#8377; {(amount * 2) / 100}
              </span>
            </p>
            <p className="mt-2 flex justify-between">
              <span className="text-[#111] text-[20px] font-bold">
                Total Amount
              </span>
              <span className="text-[#2B6E4E] text-[20px] font-bold">
                &#8377; {amount + (amount * 2) / 100}
              </span>
            </p>
          </div>
          <hr className="text-[#111]" />

          <div className="mt-5">
            <h2 className="text-[#111] font-medium text-xl">Address</h2>
            <div className="relative flex justify-between items-center">
              <p className="text-[#111] italic">
                {selectedAddress
                  ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                  : "No Address Added yet..."}
              </p>
              <button
                onClick={() => setShowAddress(!showAddress)}
                className="italic hover:bg-[#99e6a6] transition-all duration-200 ease-in cursor-pointer rounded-sm py-1 px-2 text-[#1f2d01]"
              >
                Change
              </button>
              {showAddress && (
                <div className="absolute top-9 py-1 bg-[#e7e8e8] border border-gray-300 rounded-xl text-sm w-full">
                  {address.map((ad, index) => (
                    <p
                      onClick={() => {
                        setSelectedAddress(ad);
                        setShowAddress(false);
                      }}
                      className="text-gray-500 p-2 hover:bg-[#cdcece]"
                    >
                      {ad.street}, {ad.city}, {ad.state}, {ad.country}
                    </p>
                  ))}
                  <p
                    onClick={() => navigate("/add-address")}
                    className="text-green-900 font-medium tracking-wide text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                  >
                    Add address
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 text-[#111] font-medium text-xl">
            <label htmlFor="payment">Choose Payment Method</label>
            <select
              onChange={(e) => setPaymentOption(e.target.value)}
              className="bg-white cursor-pointer font-light text-base outline-none w-2/3 mt-2"
              name="payment"
              id="payment"
            >
              <option value="Cash On Delivery">Cash On Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>

          <button onClick={placeOrder} className="bg-[#2B6E4E] mt-6 hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-10 py-2 text-white rounded-sm">
            { paymentOption === "Cash On Delivery" ? "Place Order" : "Proceed to Pay" }
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
