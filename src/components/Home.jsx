import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Home = () => {
  return (
    <>
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 - Gallery */}
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/21/17/52/museum-398761_1280.jpg"
              className="d-block w-100"
              alt="Gallery"
              style={{ width: '1200px', height: '600px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Our Gallery</h5>
              <p>Browse our collection of beautiful artworks.</p>
              <Link to="/gallery" className="btn btn-primary">
                Go to Gallery
              </Link>
            </div>
          </div>
          {/* Slide 2 - Services */}
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://cdn.pixabay.com/photo/2019/07/27/17/32/calligraphy-4367228_1280.jpg"
              className="d-block w-100"
              alt="Services"
              style={{ width: '1200px', height: '600px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Our Services</h5>
              <p>Discover the professional services we offer.</p>
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
