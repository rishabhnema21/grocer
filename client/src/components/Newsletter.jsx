import React from 'react'

const Newsletter = () => {
  return (
    <div className='py-10 md:py-20 rounded-3xl flex flex-col justify-center items-center w-full bg-gradient-to-bl from-[#2B6E4E] via-[#20513C] to-[#0D1B14]'>
        <h2 className='text-[#b97f02]'>NEWSLETTER</h2>
        <h1 className='text-white text-xl md:text-3xl font-medium mt-5'>Get Updates regularly and best offer</h1>
        <span className='text-white text-xl md:text-3xl font-medium'>Subscribe Us</span>
        <div className='bg-white w-auto md:w-lg rounded-md py-2 px-3 mt-6 flex justify-between items-center'>
            <input type="text" className='text-sm outline-none w-3/4' placeholder='johndoe@example.com'/>
            <button className='bg-[#2B6E4E] hover:bg-[#1e5339] transition-all duration-200 ease-in cursor-pointer px-5 rounded-md text-sm text-white py-2'>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Newsletter