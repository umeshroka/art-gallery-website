import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '')) || 0;
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="text-end">Total: ${calculateTotal()}</h3>
          <div className="text-end">
            <Button variant="secondary" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      ) : (
        <h3 className="text-center">Your cart is empty.</h3>
      )}
    </Container>
  );
};

export default Cart;
