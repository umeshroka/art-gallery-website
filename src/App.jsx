import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import PriceEnquiryForm from "./components/PriceEnquiryForm";
import Services from "./components/Services";

const App = () => {
  const [cart, setCart] = useState([]);
  const [enquiryDetails, setEnquiryDetails] = useState(null);

  const handleEnquirySubmit = (data) => {
    setEnquiryDetails(data);
    alert("Thank you for your enquiry. We will contact you soon!");
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gallery"
          element={<Gallery cart={cart} setCart={setCart} />}
        />
        <Route
          path="/services"
          element={<Services cart={cart} setCart={setCart} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/enquiry"
          element={<PriceEnquiryForm onSubmit={handleEnquirySubmit} />}
        />
      </Routes>
    </>
  );
};

export default App;
