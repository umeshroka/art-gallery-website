import React from 'react';
import './Gallery.css';

const artworks = [
  { id: 1, title: 'Artwork 1', image: 'https://via.placeholder.com/300x300', price: '$200' },
  { id: 2, title: 'Artwork 2', image: 'https://via.placeholder.com/300x300', price: '$150' },
  { id: 3, title: 'Artwork 3', image: 'https://via.placeholder.com/300x300', price: 'Request Price' },
  { id: 4, title: 'Artwork 4', image: 'https://via.placeholder.com/300x300', price: '$200' },
  { id: 5, title: 'Artwork 5', image: 'https://via.placeholder.com/300x300', price: '$150' },
  { id: 6, title: 'Artwork 6', image: 'https://via.placeholder.com/300x300', price: 'Request Price' },
];

const Gallery = ({ addToCart }) => {
    return (
      <div className="gallery-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="gallery-card">
            <img src={artwork.image} alt={artwork.title} className="gallery-card-image" />
            <div className="gallery-card-body">
              <h5 className="gallery-card-title">{artwork.title}</h5>
              <p className="gallery-card-artist">by {artwork.artist}</p>
              {artwork.price === 'Request Price' ? (
                <button className="btn btn-secondary">Request Price</button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart({ ...artwork, quantity: 1 })}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Gallery;
