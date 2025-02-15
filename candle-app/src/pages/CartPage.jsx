import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Vanilla Candle', price: 15.99, quantity: 2 },
    { id: 2, name: 'Rose Candle', price: 18.99, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <h2 className="my-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: ${calculateTotal().toFixed(2)}</h4>
          <Button variant="success" className="mt-3">
            Checkout via WhatsApp
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
