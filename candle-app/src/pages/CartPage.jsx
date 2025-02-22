import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useCart from '../hooks/useCart';

const CartPage = () => {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <h2 className="my-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={new URL(`../assets/product-images/${item.id}.jpg`, import.meta.url).href}
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
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
