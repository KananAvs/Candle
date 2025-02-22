import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AddToCartButton = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddToCart = () => {
    // Functionality will be added for adding the product to the cart
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="add-to-cart-button">
        <ShoppingCartIcon />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You want to add {product.name} to your cart?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddToCartButton;