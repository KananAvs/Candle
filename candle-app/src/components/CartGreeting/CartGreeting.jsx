import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Edit } from '@mui/icons-material';
import { useGreetingMessages } from '../../utils/greetingUtils';
import EditNameModal from '../Modals/EditNameModal';
import useCart from '../../hooks/useCart';

const CartGreeting = () => {
  const navigate = useNavigate();
  const [showNameModal, setShowNameModal] = useState(false);
  const { greetingMessage, cartMessage } = useGreetingMessages();
  const { cart } = useCart();

  return (
    <Container className='glass-container'>
      <h4 className="my-4 text-center">
        {greetingMessage}
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setShowNameModal(true)}
          className="ms-2"
        >
          <Edit fontSize="small" />
        </Button>
      </h4>
      <p className="lead text-center">{cartMessage}</p>
      {cart.length === 0 && (
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/store')}
            className="mt-3"
          >
            <ShoppingBagIcon fontSize='large' />
            <br />
            Explore Candle Collection
          </Button>
        </div>
      )}
      <EditNameModal
        show={showNameModal}
        onHide={() => setShowNameModal(false)}
      />
    </Container>
  );
};

export default CartGreeting;