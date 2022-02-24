import React from 'react'
import Cards from '../components/Cards'
import { ChakraProvider } from '@chakra-ui/react'

import {guitarras} from '../data/newProducts';

const HomePage = () => {
  return (
    <ChakraProvider>
      {/* <h1>HomePage</h1> */}
      <Cards  product={guitarras}/>
    </ChakraProvider>
  )
}

export default HomePage;