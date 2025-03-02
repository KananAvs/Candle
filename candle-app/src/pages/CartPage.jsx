import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Delete } from '@mui/icons-material';
import useCart from '../hooks/useCart';
import CartTable from '../components/CartTable/CartTable';
import { formatPrice } from '../utils/formatPrice';
import { openWhatsApp } from '../utils/whatsappHelper';
import CartGreeting from '../components/CartGreeting/CartGreeting';
import ClearCartModal from '../components/Modals/ClearCartModal';
import EditNameModal from '../components/Modals/EditNameModal';
import CheckoutModal from '../components/Modals/CheckoutModal';

const CartPage = () => {
  const { cart, clearCart, customerName } = useCart();
  const [showClearModal, setShowClearModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleClearCart = () => {
    setShowClearModal(false);
    clearCart();
  };

  const handleCheckout = () => {
    openWhatsApp(cart, customerName);
    clearCart();
    setShowCheckoutModal(false);
  };

  const handleCheckoutClick = () => {
    if (!customerName) {
      setShowNameModal(true);
    } else {
      setShowCheckoutModal(true);
    }
  };

  const handleNameModalHide = () => {
    setShowNameModal(false);
    setShowCheckoutModal(true); // Proceed to checkout even without name
  };

  return (
    <Container className="py-5">
      <CartGreeting />
      {cart.length > 0 && (
        <>
          <Row className="justify-content-between align-items-center mb-4">
            <Col>
              <h4>Total: {formatPrice(calculateTotal())}</h4>
            </Col>
            <Col className="text-center">
              <Button variant="success" size="lg" onClick={handleCheckoutClick}>
                <WhatsAppIcon />
                <br />
                Checkout
              </Button>
            </Col>
            <Col className="text-end">
              <Button variant="danger" onClick={() => setShowClearModal(true)}>
                <Delete />
                <br />
                Clear
              </Button>
            </Col>
          </Row>
          <CartTable cart={cart} />

          <ClearCartModal
            show={showClearModal}
            onHide={() => setShowClearModal(false)}
            onClear={handleClearCart}
          />

          <EditNameModal
            show={showNameModal}
            onHide={handleNameModalHide}
          />

          <CheckoutModal
            show={showCheckoutModal}
            onHide={() => setShowCheckoutModal(false)}
            onCheckout={handleCheckout}
          />
        </>
      )}
    </Container>
  );
};

export default CartPage;