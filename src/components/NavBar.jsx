// src/components/Navbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Import the custom CSS file

const NavigationBar = () => (
  <Navbar bg="light" expand="lg" className="navbar-custom">
    <Container fluid>
      {/* Left: Logo and Company Name */}
      <Navbar.Brand href="/" className="navbar-left">
        <img 
          src="https://via.placeholder.com/150"  // Placeholder image URL
          alt="Logo"
          className="navbar-logo"  // Custom class to size the logo
        />
        <span className="company-name">Art Gallery</span> {/* Company name next to the logo */}
      </Navbar.Brand>

      {/* Center: Links for Gallery, Services, About Us */}
      <div className="navbar-center">
        <Nav>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav>
      </div>

      {/* Right: Cart */}
      <div className="navbar-right">
        <Nav>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </div>
    </Container>
  </Navbar>
);

export default NavigationBar;
