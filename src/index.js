import "./css/hero.css"
import "./css/subhero.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import Navbar from './pages/navbar'
import Hero from './components/Hero'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { ChakraProvider } from '@chakra-ui/react';
import "./css/header.css"
import Subhero from './components/Subhero'

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <Navbar/>
      <Hero/>
      <Subhero/>
      <App />
    </ChakraProvider>
    
  </Provider>,
  document.getElementById('root')
);

