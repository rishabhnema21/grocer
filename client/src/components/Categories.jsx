import React from 'react'
import Card from './Card'

const categories = [
  {name: "Fruits", label: "240 items", image: "/fruits.png", path: "fruits"},
  {name: "Vegatables", label: "240 items", image: "/vegetable.png", path: "vegetables"},
  {name: "Dairy", label: "240 items", image: "/dairy.png", path: "dairy"},
  {name: "Instant Food", label: "240 items", image: "/maggi.png", path: "instant"},
]

const Categories = () => {

  const handleClick = async () => {
    const { data } = await axios.get("/api/products/")
  }

  return (
    <div className='mt-10 text-center'>
        <h1 className='text-4xl font-bold'>Top Catagories</h1>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-12 mt-12'>
            {categories.map((category, index) => (
          <Card
            key={index}
            name={category.name}
            label={category.label}
            image={category.image}
            path={category.path}
          />
        ))}
        </div>
    </div>
  )
}

export default Categories