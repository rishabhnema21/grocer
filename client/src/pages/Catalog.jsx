import React from 'react'
import ItemCard from '../components/ItemCard'

const Catalog = () => {
  return (
    <div>
        <h3 className='mt-9 text-[#8b5f01] text-sm'>Catalog</h3>
        <div className='flex flex-col items-end w-max'>
            <h1 className='text-3xl font-semibold'>All Products Here</h1>
            <div className='w-28 h-0.5 bg-[#8b5f01]'></div>
        </div>

        <div className='grid grid-cols-4 mt-14 gap-6'>
            <ItemCard />
        </div>
    </div>
  )
}

export default Catalog