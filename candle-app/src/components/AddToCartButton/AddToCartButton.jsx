import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCart from '../../hooks/useCart';

const AddToCartButton = ({ product }) => {
  const [show, setShow] = useState(false);
  const { addToCart } = useCart();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddToCart = () => {
    addToCart(product);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <ShoppingCartIcon />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You want to add {product.name} to your cart?
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
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