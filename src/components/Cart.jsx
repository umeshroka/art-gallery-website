import React from 'react';

const Cart = ({ cart, setCart }) => {
  // Remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  ).toFixed(2);

  return (
    <div
      className="shopping-cart"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px', // Adjust the top margin as needed
        padding: '20px',
      }}
    >
     
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100px', height: '100px', marginRight: '20px' }}
                />
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.artist}</p>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      backgroundColor: '#FF6347',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p><strong>Total: ${totalPrice}</strong></p>
          <div>
            <button
              onClick={clearCart}
              style={{
                backgroundColor: '#FF6347',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
                marginRight: '10px',
              }}
            >
              Clear Cart
            </button>
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
