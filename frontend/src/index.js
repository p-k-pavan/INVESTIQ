import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home/HomePage'
import About from './landing_page/About/AboutPage'
import Pricing from './landing_page/Pricing/PricingPage'
import Product from './landing_page/Product/ProductPage'
import SignUp from './landing_page/Sign_up/SignUp'
import Support from './landing_page/Support/SupportPage'
import Footer from './landing_page/Footer'
import Navbar from './landing_page/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/product" element={<Product />} />
      <Route path="/support" element={<Support />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);



