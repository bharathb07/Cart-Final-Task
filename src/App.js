//import default package and modules...
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//import components modules...
import { CartProvider } from './contextAPI/cardContext';
import ProductList from './components/productList';
import Cart from './components/cart';
import Layout from './layout';

//import css modules...
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='app'>
          {/* react-toaster component */}
          <ToastContainer />
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" exact element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
