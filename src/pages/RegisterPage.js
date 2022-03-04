import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, FormControl, Input, Text } from '@chakra-ui/react'
import image from '../assets/images/Vector.png';

import '../css/RegisterPage.css';

const RegisterPage = () => {
  const [values, setvalues] = useState({
    name:'',
    email: '',
    password: '',
    confirmpassword: '',
  })
  
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(values);
  }

  return (
    <>
      <Container maxWidth='90%' m='3rem auto 0'>
        <FormControl borderRadius='2px' m='0 auto' w='325px' color='white' p='2rem' bg='black' d='flex' flexDirection='column' gap='0.6rem' mb='2rem'>
          {/* <Heading>Register</Heading> */}
          <Box m='0 auto' d='flex' gap='0.6rem' alignItems='center'>
            <img src={image} alt='imagen'/>
            <Text color='white' fontSize='20px'><strong>Central</strong> Music</Text>
          </Box>
          <div className="form">
            <form onSubmit={submitHandler} className='form-info'>
              <label>Name</label>
              <Input id='name' variant='flushed'  p='0' type="text" value={values.name} placeholder='Enter your name' 
              onChange={(e)=> setvalues({...values, name: e.target.value})} 
              />
              <label>Email</label>
              <Input id='email' variant='flushed'  p='0' type="email" value={values.email} placeholder='Enter your email'
              onChange={(e)=> setvalues({...values, email: e.target.value})} />
              <label>Password</label>
              <Input id='password' variant='flushed'  p='0' type="password" value={values.password} placeholder='Enter your password'
              onChange={(e)=> setvalues({...values, password: e.target.value})} />
              <label>Confirm Password</label>
              <Input id='confirmpassword' variant='flushed'  p='0' type="password" value={values.confirmpassword} placeholder='Please confirm your password'
              onChange={(e)=> setvalues({...values, confirmpassword: e.target.value})} />
              <button type='submit' className='btn'>Register</button>
            </form>
            <Text >¿Ya tienes una cuenta? </Text>
            <Link className='link' to='/profile'>Log in</Link>
          </div>
        </FormControl>
      </Container>
    </>
  )
}

export default RegisterPage;