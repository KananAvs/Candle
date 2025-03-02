import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ClearCartModal = ({ show, onHide, onClear }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Empty Your Cart?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Are you sure you want to remove all items from your cart? You can always add them back later if you change your mind.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Keep Items
      </Button>
      <Button variant="danger" onClick={onClear}>
        Yes, Clear Cart
      </Button>
    </Modal.Footer>
  </Modal>
);

ClearCartModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default ClearCartModal;
