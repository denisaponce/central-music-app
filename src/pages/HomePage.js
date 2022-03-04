import React from 'react'

import Footer from './Footer';
import NewProducts from './NewProducts';
import PopularFinds from './PopularFinds';
import Subhero from '../components/Subhero'
import Gearhead from '../components/Gearhead'
// import Navbar from '../pages/navbar'
import Hero from '../components/Hero'


const HomePage = () => {
  return (

    <>
      {/* <Navbar/> */}
      <Hero/>
      <Subhero/>
      <NewProducts/>
      <PopularFinds/>
      <Gearhead/>
      <Footer />
    </>

  )
}

export default HomePage;