import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <NavigationBar cartCount={cart.length}/>
      <Routes>
        <Route path="/gallery" element={<Gallery addToCart={addToCart}/>} />
        <Route path="/services" element={<Services addToCart={addToCart}/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
