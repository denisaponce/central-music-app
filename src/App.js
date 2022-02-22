import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import Sifunciona from './pages/Sifunciona';

const App = () => {
  return (
    <Router>    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/guitars' element={<Sifunciona/>}/>
        <Route path='/accessories' element={<Sifunciona/>}/>
        <Route path='/storage' element={<Sifunciona/>}/>
        <Route path='/lessons' element={<Sifunciona/>}/>
        <Route path='/repairs' element={<Sifunciona/>}/>
        <Route path='/cart' element={<Sifunciona/>}/>
        <Route path='/profile' element={<Sifunciona/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;