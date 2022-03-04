import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, FormControl, Input, Text } from '@chakra-ui/react'
import image from '../assets/images/Vector.png';

import '../css/LoginPage.css';
const LoginPage = () => {
  const [values, setvalues] = useState({
    email: '',
    password: '',
  })
  
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(values);
  }

  return (
    <>
      <Container maxWidth='90%' m='3rem auto 0'>
        <FormControl borderRadius='2px' m='0 auto' w='325px' color='white' p='2rem' bg='black' d='flex' flexDirection='column' gap='0.6rem' mb='2rem'>
          {/* <Heading color='red' bg='green'>Login</Heading> */}
          <Box m='0 auto' d='flex' gap='0.6rem' alignItems='center'>
            <img src={image} alt='imagen'/>
            <Text color='white' fontSize='20px'><strong>Central</strong> Music</Text>
          </Box>
          <div className="form">
            <form onSubmit={submitHandler} className='form-info'>
              <label>Email</label>
              <Input id='email' variant='flushed'  p='0' type="email" value={values.email} placeholder='Enter your email' 
              onChange={(e)=> setvalues({...values, email: e.target.value})} 
              />
              <label>Contraseña</label>
              <Input id='password' variant='flushed'  p='0' type="password" value={values.password} placeholder='Enter your password'
              onChange={(e)=> setvalues({...values, password: e.target.value})} />
              <button type='submit' className='btn'>Log in</button>
            </form>
            <Text >You do not have an account? </Text>
            <Link className='link' to='/register'>Create an Account</Link>
          </div>
        </FormControl>
      </Container>
    </>
  )
}

export default LoginPage;