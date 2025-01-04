import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Custom Framing',
    description: 'Professional framing services for your precious artwork.',
    image: 'https://via.placeholder.com/400x300',
    price: '$50',
  },
  {
    id: 2,
    title: 'Art Restoration',
    description: 'Restore and preserve your valuable art pieces.',
    image: 'https://via.placeholder.com/400x300',
    price: '$150',
  },
  {
    id: 3,
    title: 'Art Consultancy',
    description: 'Expert advice on curating and managing your art collection.',
    image: 'https://via.placeholder.com/400x300',
    price: '$100',
  },
  {
    id: 4,
    title: 'Gallery Installation',
    description: 'Seamless installation of artworks in galleries and homes.',
    image: 'https://via.placeholder.com/400x300',
    price: '$200',
  },
];

const Services = ({ addToCart }) => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`service-row ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
        >
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-description">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p className="service-price">{service.price}</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                addToCart({ id: service.id, title: service.title, price: service.price, quantity: 1 })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
