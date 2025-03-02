import React, { useState } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Edit } from '@mui/icons-material';
import useCart from '../../hooks/useCart';
import products from '../../data/products.json';
import NameInputModal from '../Modals/NameInputModal';
import {
  getTimeBasedGreeting,
  getDayBasedMessage,
  getCartMessage,
  getEmptyCartMessage
} from '../../utils/greetingUtils';
import './CartGreeting.css';

const CartGreeting = () => {
  const { cart, customerName, setCustomerName } = useCart();
  const navigate = useNavigate();
  const [showNameModal, setShowNameModal] = useState(false);
  const [tempName, setTempName] = useState('');

  const handleEditName = () => {
    setTempName(customerName);
    setShowNameModal(true);
  };

  const handleNameSubmit = () => {
    if (tempName.trim()) {
      setCustomerName(tempName.trim());
      setShowNameModal(false);
    }
  };

  const nameGreeting = customerName ? `, ${customerName}` : '';
  const timeGreeting = getTimeBasedGreeting();
  const dayMessage = getDayBasedMessage();
  const cartMessage = getCartMessage(cart);
  const emptyCartMessage = cart.length === 0 ? getEmptyCartMessage(products) : null;

  return (
    <Container fluid className="greeting-container mb-4">
      <Paper elevation={3} className="greeting-paper">
        <div className="position-relative">
          <div className="edit-button-container">
            <Button 
              variant="outline-secondary" 
              size="sm" 
              onClick={handleEditName}
            >
              <Edit fontSize="small" />
            </Button>
          </div>
          
          <Row className="align-items-center">
            <Col xs={12} md={cart.length === 0 ? 12 : 8} lg={cart.length === 0 ? 12 : 9}>
              <Typography variant="h4" component="h3" className="greeting-title">
                {`${timeGreeting}${nameGreeting}!`}
              </Typography>
              <Typography variant="subtitle1" className="greeting-subtitle">
                {dayMessage}
              </Typography>
              
              {cartMessage && (
                <Typography variant="body1" className="cart-message">
                  {cartMessage}
                </Typography>
              )}
              
              {cart.length === 0 && (
                <div className="empty-cart-content">
                  <Typography variant="body1" className="empty-cart-message">
                    Your cart is waiting to be filled with amazing candles!
                  </Typography>
                  <Typography variant="body1" className="suggestion-message">
                    {emptyCartMessage}
                  </Typography>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/store')}
                    className="discover-button mt-3"
                  >
                    <ShoppingBagIcon sx={{ mr: 1 }} />
                    Discover Our Collection
                  </Button>
                </div>
              )}
            </Col>
            
            {cart.length > 0 && (
              <Col xs={12} md={4} lg={3} className="text-md-end mt-3 mt-md-0">
                <Typography 
                  variant="h6" 
                  component="div" 
                  className="cart-items-count"
                >
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart
                </Typography>
              </Col>
            )}
          </Row>
        </div>
      </Paper>

      <NameInputModal
        show={showNameModal}
        onHide={() => setShowNameModal(false)}
        onSubmit={handleNameSubmit}
        name={tempName}
        onNameChange={setTempName}
      />
    </Container>
  );
};

export default CartGreeting;
