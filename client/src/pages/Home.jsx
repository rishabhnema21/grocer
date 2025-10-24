import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Showcase from '../components/Showcase'
import OurItems from '../components/OurItems'

const Home = () => {
  return (
    <div className=''>
        <Hero />
        <Categories />
        <Showcase />
        <OurItems />
    </div>
  )
}

export default Home