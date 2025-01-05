import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ cart }) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Left Side: Logo and Art Gallery Name */}
        <div className="navbar-left d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="logo"
            />
            <span className="ms-2">My Art Gallery</span>
          </a>
        </div>

        {/* Middle: Navigation Links */}
        <div className="navbar-center mx-auto">
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
