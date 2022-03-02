import React from 'react'

import Footer from './Footer';
import NewProducts from './NewProducts';
import PopularFinds from './PopularFinds';

const HomePage = () => {
  return (

    <>
      {/* <h1>HomePage</h1> */}
      {/* <Cards  product={newProdcuts}/> */}
      <NewProducts/>
      <PopularFinds/>
      <Footer />
    </>

  )
}

export default HomePage;