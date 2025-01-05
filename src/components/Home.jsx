import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Art Gallery</h1>
      <p>Explore beautiful artworks and more!</p>
      <div>
        <Link to="/gallery">View Gallery</Link>
        <Link to="/services">Our Services</Link>
      </div>
    </div>
  );
};

export default Home;
