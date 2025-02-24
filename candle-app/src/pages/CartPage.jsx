import React, { useState } from 'react';
import { Container, Button, Row, Col, Modal } from 'react-bootstrap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import CartTable from '../components/CartTable/CartTable';
import { Delete } from '@mui/icons-material';
import { formatPrice } from '../utils/formatPrice';

const CartPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [showClearModal, setShowClearModal] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleClearCart = () => {
    setShowClearModal(false);
    clearCart();
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
            <Col>
              <h4>Total: {formatPrice(calculateTotal())}</h4>
            </Col>
            <Col className="text-center">
              <Button variant="success" size="lg">
                <WhatsAppIcon />
                <br />
                Checkout
              </Button>
            </Col>
            <Col className="text-end">
              <Button 
                variant="danger" 
                onClick={() => setShowClearModal(true)}
              >
                <Delete />
                <br />
                Clear
              </Button>
            </Col>
          </Row>
          <CartTable cart={cart} />

          <Modal show={showClearModal} onHide={() => setShowClearModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Clear Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to remove all items from your cart?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowClearModal(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleClearCart}>
                Clear All Cart
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default CartPage;