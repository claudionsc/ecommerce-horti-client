import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './components/pages/cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/pages/inicial/Header/Header';
import { Provider } from 'react-redux';
import store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

