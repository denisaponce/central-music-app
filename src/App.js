import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import Sifunciona from './pages/Sifunciona';
import "./css/header.css"
import "./css/Gearhead.css"
import "./css/hero.css"
import "./css/subhero.css"

import Navbar from './pages/navbar'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


const App = () => {
  return (
    <Router>   
      <Navbar/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path='/guitars' element={<Sifunciona/>}/>
        <Route path='/accessories' element={<Sifunciona/>}/>
        <Route path='/storage' element={<Sifunciona/>}/>
        <Route path='/lessons' element={<Sifunciona/>}/>
        <Route path='/repairs' element={<Sifunciona/>}/>
        <Route path='/cart' element={<Sifunciona/>}/>
        <Route path='/profile' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
    </Router>

)
}

export default App;