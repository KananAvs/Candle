import React from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import './CartTable.css';

const CartTable = ({ cart }) => {
  const { updateCart, removeFromCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1 && quantity <= 999) {
      updateCart(productId, quantity);
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="mt-4">
      {cart.map((item) => (
        <div key={item.id} className="cart-row position-relative mb-4">
          <Row className="align-items-center">
            <Col xs={3} className="p-0">
              <Image
                src={new URL(`../../assets/product-images/${item.id}.jpg`, import.meta.url).href}
                alt={item.name}
                fluid
                className="cart-image"
              />
            </Col>
            <Col xs={9}>
              <Row className="align-items-center">
                <Col md={3} className="mb-2 mb-md-0">
                  <h5 className="m-0">{item.name}</h5>
                </Col>
                <Col md={3} className="mb-2 mb-md-0">
                  <Form.Control
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    min="1"
                    max="999"
                  />
                </Col>
                <Col md={3} className="mb-2 mb-md-0">
                  Price: ${item.price.toFixed(2)}
                </Col>
                {item.quantity > 1 && (
                  <Col md={3} className="text-md-right">
                    <strong>Subtotal: ${(item.price * item.quantity).toFixed(2)}</strong>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
          <Button
            variant="light"
            size="sm"
            className="position-absolute top-0 end-0 m-2"
            onClick={() => handleRemoveItem(item.id)}
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CartTable;
