import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'; // Adjust the path if needed
import React from "react";
import Home from "./Pages/Home"; // Adjust the path if needed
import Footer from "./components/Footer"; // Import Footer if it exists
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;

