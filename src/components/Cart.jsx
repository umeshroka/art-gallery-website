import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  ).toFixed(2);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.artist}</p>
                    <p>{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
