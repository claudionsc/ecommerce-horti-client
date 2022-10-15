import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './components/pages/cart/Cart'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Header from './components/pages/inicial/Header/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route exact path='/' element={<App/>}/>    
      <Route path='/cart' element={<Cart />}/>    
       
    </Routes>          
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// https://www.youtube.com/watch?v=ypUhUX2NoAU