import React from 'react'
import ItemCard from './ItemCard'

const OurItems = () => {
  return (
    <div className='mt-14'>
      <div>
        <h3 className='font-semibold text-[#9b6a00]'>OUR ITEMS</h3>
        <h1 className='text-5xl font-medium md:font-semibold mt-7 leading-14 md:w-1/2'>Always healthy grocery in our Grocery Shop.</h1>
      </div>
      <div className='grid grid-cols-4 gap-12 mt-9'>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  )
}

export default OurItems