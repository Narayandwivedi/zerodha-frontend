import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import HomePage from "./Landing_page/home/HomePage";
import Signup from "./Landing_page/signup/Signup"
import AboutPage from "./Landing_page/about/AboutPage"
import ProductPage from "./Landing_page/products/productPage"
import PricingPage from "./Landing_page/pricing/PricingPage";
import SupportPage from "./Landing_page/support/SupportPage"
import NotFound from "./Landing_page/Notfound";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./index.css";
import Pricing from "./Landing_page/home/Pricing";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<HomePage/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="about" element={<AboutPage/>}/>
    <Route path="products" element={<ProductPage/>}></Route>
    <Route path="pricing" element={<PricingPage/>}></Route>
    <Route path="support" element={<SupportPage/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>

  </Routes>
  <Footer/>
  </BrowserRouter>
);
