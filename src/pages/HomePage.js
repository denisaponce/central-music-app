import React from 'react'
import Cards from '../components/Cards'

import {guitarras} from '../data/newProducts';

const HomePage = () => {
  return (

    <>
      {/* <h1>HomePage</h1> */}
      <Cards  product={guitarras}/>
    </>

  )
}

export default HomePage;