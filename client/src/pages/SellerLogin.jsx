import React from 'react'

const SellerLogin = () => {
  return (
    <main className='h-[90vh] w-full flex justify-center items-center'>
        <div className='p-9 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl'>
            <h1 className='text-2xl text-center mb-10 font-semibold text-gray-800'><span className='text-[#377d5b]'>Seller</span> Login</h1>
            <form className='flex flex-col justify-center' action="">
                <div className='mb-3'>
                    <label htmlFor="email">Email</label> <br />
                    <input className='border border-gray-300 outline-none px-2 py-[7px] w-[22vw] rounded-sm' type="email" placeholder='name@enterprise.com' />
                </div>

                <div className='mb-3'>
                    <label htmlFor="email">Password</label> <br />
                    <input className='border border-gray-300 outline-none px-2 py-[7px] w-[22vw] rounded-sm' type="password" placeholder='your password' />
                </div>

                <button className="bg-[#2B6E4E] mt-6 hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-10 py-2 text-white rounded-sm">Login</button>
            </form>
        </div>
    </main>
  )
}

export default SellerLogin