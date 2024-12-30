import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import AboutUs from "./components/Aboutus";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
