import Inicial from "./components/pages/inicial/Inicial";
import Cart from './components/pages/cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import "./styles/Global.css"

function App() {

  return (
    <div className="Main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element = {<Inicial />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
