import React from "react";
import { Link } from "react-router-dom";

const Services = ({ cart, setCart }) => {
  const services = [
    {
      id: 91,
      title: "Calligraphy Workshop",
      description:
        "Get started on your journey to learn calligraphy",
      price: "$399",
      image: "https://cdn.pixabay.com/photo/2018/11/12/10/12/calligraphy-3810556_1280.jpg"
    },
    {
      id: 92,
      title: "Commission a calligraphy art piece",
      description:
        "Tell us what your vision is",
      price: null,
      image: "https://cdn.pixabay.com/photo/2017/10/24/12/23/calligraphy-brush-2884392_1280.jpg",
    },
    {
      id: 93,
      title: "Consultation: Authenticity & Appraisal services ",
      description:
        "Build your collection with confidence",
      price: null,
      image: "https://cdn.pixabay.com/photo/2024/06/24/06/42/art-appraiser-8849270_1280.jpg",
    },
    {
      id: 94,
      title: "Art Repairs and Restoration",
      description:
        "We offer expert restoration services to bring your damaged art back to life.",
      price: null,
      image: "https://cdn.pixabay.com/photo/2017/07/26/18/01/china-2542574_1280.jpg",
    },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="services container py-4">
      <h2 className="text-center mb-4">Our Services</h2>
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`card mb-5 shadow border-0 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          } d-flex`}
          style={{ overflow: 'hidden' }}
        >
          {/* Image Section */}
          <div
            className="card-img"
            style={{
              flex: '1 1 50%',
              height: '300px',
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="img-fluid h-100 w-100"
              style={{ width: '100px', height: '150px' , objectFit:"cover"}} 
            />
          </div>

          {/* Description Section */}
          <div
            className="card-body d-flex flex-column justify-content-center"
            style={{ flex: '1 1 50%', padding: '20px' }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.price ? (
              <>
                <p className="fw-bold">{service.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(service)}
                >
                  Add to Cart
                </button>
              </>
            ) : (
              <Link to="/enquiry">
                <button className="btn btn-secondary">Enquire for Price</button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
