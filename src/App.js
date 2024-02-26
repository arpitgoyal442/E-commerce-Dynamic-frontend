
import './App.css';


import "./global.css"
import Admin from './pages/admin/Admin';
import Cart from './pages/cart/Cart';

import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/products/Products';
import Product from './pages/product/Product';


function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin/>} />
        

       
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
