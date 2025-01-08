import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ cart, setCart }) => {
    const artworks = [
        { id: 1, title: 'Mona Lisa', artist: 'Leonardo da Vinci', price: '$500', image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Starry Night', artist: 'Vincent van Gogh', price: null, image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'The Persistence of Memory', artist: 'Salvador Dalí', price: '$700', image: 'https://via.placeholder.com/150' },
        { id: 4, title: 'The Scream', artist: 'Edvard Munch', price: '$800', image: 'https://via.placeholder.com/150' },
        { id: 5, title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', price: null, image: 'https://via.placeholder.com/150' },
        { id: 6, title: 'The Birth of Venus', artist: 'Sandro Botticelli', price: '$650', image: 'https://via.placeholder.com/150' },
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
    <div className="gallery container py-4">
    <h2 className="text-center mb-4">Gallery</h2>
    <div className="row">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{artwork.title}</h5>
              <p className="card-text">Artist: {artwork.artist}</p>
              {artwork.price ? (
                <>
                  <p className="card-text">Price: {artwork.price}</p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => addToCart(artwork)}
                  >
                    Add to Cart
                  </button>
                </>
              ) : (
                <>
                <p className="card-text">Price upon enquiry</p>
                <Link to="/enquiry" className="btn btn-secondary w-100">
                  Enquire for Price
                </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Gallery;
