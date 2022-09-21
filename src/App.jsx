import './App.css';

import React from 'react';
import 'core-js/actual';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';

import CartProvider from './context/CartContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/cat/:catID' element={<ItemListContainer />} />
            <Route path='/item/:itemID' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
