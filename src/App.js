
import './App.css';


import "./global.css"
import Admin from './pages/admin/Admin';
import Cart from './pages/cart/Cart';

import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin/>} />
       
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
