import React from 'react'

const AdminNav = () => {
  return (
    <div className='sticky border-b top-0 left-0 px-8 pt-3 pb-2 w-full flex justify-between items-center'>
        <div className='logo'>
            <img className='h-12 md:h-16.1' src="/grocerLogo.png" alt="" />
        </div>

        <div className=''>
            <span className='mr-7 text-gray-600 tracking-wide font-medium'>Hii Admin!</span>
            <button className='text-gray-600 border border-gray-600 py-1 px-4 rounded-xl font-medium'>
                Logout
            </button>
        </div>
    </div>
  )
}

export default AdminNav