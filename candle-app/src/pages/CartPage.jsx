import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import CartTable from '../components/CartTable/CartTable';

const CartPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted mb-4">
            Your cart is empty. Discover our amazing collection of handcrafted candles!
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => navigate('/store')}
          >
            <ShoppingBagIcon /> Shop Now
          </Button>
        </div>
      ) : (
        <>
          <Row className="justify-content-between align-items-center mb-4">
            <Col >
              <h4>Total: ${calculateTotal().toFixed(2)}</h4>
            </Col>
            <Col className="text-center">
              <Button variant="success" size="lg">
                Checkout
                <br />
                <WhatsAppIcon />
              </Button>
            </Col>
            <Col  className="text-end">
              <Button variant="danger" onClick={clearCart}>
                Clear Cart
              </Button>
            </Col>
          </Row>
          <CartTable cart={cart} />
        </>
      )}
    </Container>
  );
};

export default CartPage;