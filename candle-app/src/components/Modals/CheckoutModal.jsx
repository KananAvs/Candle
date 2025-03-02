import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PropTypes from 'prop-types';

const CheckoutModal = ({ show, onHide, onCheckout }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Review & Confirm Your Order</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        You're almost done! Would you like to proceed with your order?
      </p>
      <p>
        This will open WhatsApp so you can send your order details directly to the seller.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="success" onClick={onCheckout}>
        <WhatsAppIcon sx={{ mr: 1 }} />
        Proceed to WhatsApp
      </Button>
    </Modal.Footer>
  </Modal>
);

CheckoutModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default CheckoutModal;
