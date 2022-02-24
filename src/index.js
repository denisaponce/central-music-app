import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import Navbar from './pages/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <Navbar/>
    <App />
  </Provider>,
  document.getElementById('root')
);

