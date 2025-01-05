import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ cart, setCart }) => {
  const services = [
    {
      id: 1,
      title: 'Art Consultation',
      description: 'Our expert consultants will help you choose the perfect art for your space.',
      price: '$200',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Framing Services',
      description: 'We offer professional framing services to protect and display your art beautifully.',
      price: '$100',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Art Installation',
      description: 'We will professionally install your artwork in your home or office.',
      price: '$150',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Art Restoration',
      description: 'We offer expert restoration services to bring your damaged art back to life.',
      price: '$300',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="service-description">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>{service.price}</p>
              <button onClick={() => addToCart(service)}>Add to Cart</button>
              <Link to="/enquiry">
                <button>Enquire for Price</button>
              </Link>
            </div>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
