import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import PriceEnquiryForm from "./components/PriceEnquiryForm";
import Services from "./components/Services";
import { fetchArtworks } from "./services/services";

const App = () => {
  const [artworks, setArtworks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getArtworks = async () => {
      const fetchedArtworks = await fetchArtworks();
      setArtworks(fetchedArtworks);
    };
    getArtworks();
  }, []);

  const handleEnquirySubmit = (data) => {
    console.log("Enquiry Submitted:", data);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gallery"
          element={
            <Gallery
              cart={cart}
              setCart={setCart}
              artworks={artworks}
            />
          }
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
