import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/checkout';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;

