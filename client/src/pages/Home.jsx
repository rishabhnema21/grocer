import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Showcase from '../components/Showcase'
import OurItems from '../components/OurItems'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className=''>
        <Hero />
        <Categories />
        <Showcase />
        <OurItems />
        <Newsletter />
    </div>
  )
}

export default Home