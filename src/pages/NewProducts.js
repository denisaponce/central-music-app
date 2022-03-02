import React from 'react'
import { Container, Divider, Grid, Heading } from '@chakra-ui/react'
import Cards from '../components/Cards'
import {newProducts} from '../data/newProducts';


const NewProducts = () => {
  return (
    <Container mt='3rem' maxWidth='90%'>
      <Divider m='0 auto' width={['58px','110px','230px','58px']} color='#AB0433'/>
      <Heading textAlign='center'>New Products</Heading>
      <Grid mt='2rem' gap='1rem' gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3, 1fr)']}>
        <Cards product={newProducts}/>
      </Grid>
    </Container>
  )
}

export default NewProducts;