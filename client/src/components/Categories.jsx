import React from 'react'
import Card from './Card'

const Categories = () => {
  return (
    <div className='mt-10 text-center'>
        <h1 className='text-4xl font-bold'>Top Catagories</h1>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-12 mt-12'>
            <Card name="Fruits" label="240 items" image="/fruits.png" />
            <Card name="Vegetables" label="130 items" image="/vegetable.png" />
            <Card name="Grocery" label="200 items" image="/maggi.png" />
            <Card name="Browse All" label="1000 items" image="/vegetable.png" />
        </div>
    </div>
  )
}

export default Categories