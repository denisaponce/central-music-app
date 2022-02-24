import React from 'react'
import Cards from '../components/Cards'

import {guitarras} from '../data/newProducts';
import Footer from './Footer';

const HomePage = () => {
  return (

    <>
      {/* <h1>HomePage</h1> */}
      <Cards  product={guitarras}/>
      <Footer />
    </>

  )
}

export default HomePage;