import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ cart, setCart }) => {
  const artworks = [
    { id: 1, title: 'Mona Lisa', artist: 'Leonardo da Vinci', price: '$500', image: 'https://via.placeholder.com/50' },
    { id: 2, title: 'Starry Night', artist: 'Vincent van Gogh', price: '$600', image: 'https://via.placeholder.com/50' },
    { id: 3, title: 'The Persistence of Memory', artist: 'Salvador Dalí', price: '$700', image: 'https://via.placeholder.com/50' },
    // More artworks...
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
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="artworks">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="card">
            <img src={artwork.image} alt={artwork.title} />
            <div className="card-body">
              <h5>{artwork.title}</h5>
              <p>{artwork.artist}</p>
              <p>{artwork.price}</p>
              <button onClick={() => addToCart(artwork)}>Add to Cart</button>
              <Link to="/enquiry">
                <button>Enquire for Price</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
