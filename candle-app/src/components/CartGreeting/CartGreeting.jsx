import React, { useState } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Edit } from '@mui/icons-material';
import useCart from '../../hooks/useCart';
import products from '../../data/products.json';
import {
  getTimeBasedGreeting,
  getDayBasedMessage,
  getCartMessage,
  getEmptyCartMessage
} from '../../utils/greetingUtils';
import EditNameModal from '../Modals/EditNameModal';

const CartGreeting = () => {
  const { cart, customerName } = useCart();
  const navigate = useNavigate();
  const [showNameModal, setShowNameModal] = useState(false);

  const nameGreeting = customerName ? `, ${customerName}` : '';
  const timeGreeting = getTimeBasedGreeting();
  const dayMessage = getDayBasedMessage();
  const cartMessage = getCartMessage(cart);
  const emptyCartMessage = cart.length === 0 ? getEmptyCartMessage(products) : null;

  return (
    <Container className='glass-container'>
      <Row>
        <Col md={12}>
          <h4>
            {`${dayMessage} ${timeGreeting}${nameGreeting}! `}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setShowNameModal(true)}
            >
              <Edit fontSize="small" />
            </Button>
          </h4>
          {cartMessage && (<p> {cartMessage} </p>)}
        </Col>
        {cart.length === 0 &&
            <Col md={12}>
              <p>
                {emptyCartMessage}
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/store')}
                className="discover-button"
              >
                <ShoppingBagIcon className="mb-1 me-1" />
                Our Latest Collection
              </Button>
            </Col>
        }
      </Row>

      <EditNameModal 
        show={showNameModal}
        onHide={() => setShowNameModal(false)}
      />
    </Container>
  );
};

export default CartGreeting;
