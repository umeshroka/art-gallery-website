import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Side: Logo and Art Gallery Name */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="public/Art gallery picture.png" 
            alt="Logo"
            className="logo"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
          <span className="ms-2 fw-bold">My Art Gallery</span>
        </a>

        {/* Middle: Navigation Links (Centering with Flexbox) */}
        <div className="navbar-nav mx-auto">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Cart */}
        <div className="navbar-right">
          <Link className="nav-link" to="/cart">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
