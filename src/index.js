import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="checkout/:plan" element={<CheckoutPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
