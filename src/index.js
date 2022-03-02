import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
     
      <App />
    </ChakraProvider>
    
  </Provider>,
  document.getElementById('root')
);

