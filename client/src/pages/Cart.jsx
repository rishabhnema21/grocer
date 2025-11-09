import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const Cart = () => {
  return (
    <main>
        <div className='mt-8 min-h-[75vh] w-[100%] flex'>
            <div className='w-2/3'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800'>Shopping Cart <span className='text-sm text-[#2B6E4E]'>3 items</span></h1>

                <div className='cart-header flex font-medium mt-5 justify-between w-[95%]'>
                    <span>Product Details</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                    <span>X</span>
                </div>  
            </div>

            <div className='w-1/3 bg-[#e0dede] rounded-2xl p-6'>
                <h2 className='text-[#111] text-3xl mb-4 font-medium'>Summary</h2>
                <hr className='text-[#111]'/>

                <div className='pricing mb-4 mt-5 leading-8'>
                    <p className="flex justify-between">
                        <span className='text-[#111] font-medium'>Price</span>
                        <span className='text-[#2B6E4E] font-medium'>50.392</span>
                    </p>
                    <p className="flex justify-between">
                        <span className='text-[#111] font-medium'>Shipping Fee</span>
                        <span className='text-[#2B6E4E] font-medium'>Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span className='text-[#111] font-medium'>Tax</span>
                        <span className='text-[#2B6E4E] font-medium'>2%</span>
                    </p>
                    <p className="mt-2 flex justify-between">
                        <span className='text-[#111] text-[20px] font-bold'>Total Amount</span>
                        <span className='text-[#2B6E4E] text-[20px] font-bold'>550</span>
                    </p>
                </div>
                <hr className='text-[#111]'/>

                <div>
                    <div className='flex justify-between mt-5 items-center'>
                        <h2 className='text-[#111] font-medium text-xl'>Address</h2>
                        <IoIosAddCircleOutline  className='text-2xl text-[#111]'/>
                    </div>
                    <p className='text-[#111] italic'>No Address Added yet...</p>
                </div>

                <div className='mt-5 text-[#111] font-medium text-xl'>
                    <label for="payment">Choose Payment Method</label>
                    <select className='bg-white outline-none w-2/3 mt-2' name="payment" id="payment">
                        <option value="Cash On Delivery">Cash on Delivery</option>
                        <option value="UPI">UPI</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>
                </div>

                <button className="bg-[#2B6E4E] mt-6 hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-10 py-2 text-white rounded-sm">Proceed to Pay</button>
            </div>
        </div> 
    </main>
  )
}

export default Cart