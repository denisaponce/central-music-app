import React from 'react'
import Cards from '../components/Cards'

// import {newProdcuts} from '../data/newProducts';
import { popularFinds } from '../data/popularFinds';
import Footer from './Footer';
import NewProducts from './NewProducts';

const HomePage = () => {
  return (

    <>
      {/* <h1>HomePage</h1> */}
      {/* <Cards  product={newProdcuts}/> */}
      <NewProducts/>
      <Cards product={popularFinds}/>
      <Footer />
    </>

  )
}

export default HomePage;