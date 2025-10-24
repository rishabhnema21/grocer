import React from 'react'

const Card = ({name, label, image}) => {
  return (
    <div className='text-center py-8 bg-white hover:scale-105 hover:shadow-[2px_10px_34px_-1px_rgba(0,_0,_0,_0.5)] transition-all duration-200 ease-in flex flex-col justify-center items-center border border-gray-400'>
        <div className='bg-[#f0e3e3] rounded-xl h-28 w-32 flex justify-center items-center'>
            <img src={image} alt="" className='h-18' />
        </div>
        <div className='mt-3'>
          <h3 className='text-medium font-semibold'>{name}</h3>
          <p className='text-sm text-gray-400'>({label})</p>
        </div>
    </div>
  )
}

export default Card