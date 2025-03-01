import React from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import { navigateToProduct } from '../../utils/routeHelpers';
import './CartTable.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 999) {
      onUpdateQuantity(item.id, value);
    }
  };

  const handleRowClick = () => {
    navigateToProduct(navigate, item.name);
  };

  const handleControlClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="cart-row" onClick={handleRowClick}>
      <Col xs={3} lg={2} className="p-0">
        <Image
          src={new URL(`../../assets/product-images/${item.id}.jpg`, import.meta.url).href}
          alt={item.name}
          className="cart-image"
        />
      </Col>
      <Col xs={9} lg={10} className="cart-content">
        <Row className="align-items-center h-100">
          <Col xs={12} lg={6}>
            <h4 className="mb-1">{item.name}</h4>
            <div className="mb-1">{formatPrice(item.price)}</div>
            <div>Total: {formatPrice(item.price * item.quantity)}</div>
          </Col>
          <Col xs={10} lg={5}>
            <div className="quantity-control" onClick={handleControlClick}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                <Remove fontSize="small" />
              </Button>
              <Form.Control
                type="number"
                value={item.quantity}
                onChange={handleInputChange}
                min="1"
                max="999"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Add fontSize="small" />
              </Button>
            </div>
          </Col>
          <Col xs={2} lg={1} className="p-0">
            <div className="delete-button" onClick={handleControlClick}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
              >
                <Delete fontSize="small" />
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

const CartTable = ({ cart }) => {
  const { updateCart, removeFromCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1 && quantity <= 999) {
      updateCart(productId, quantity);
    }
  };

  return (
    <div className="cart-table mt-4">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={handleQuantityChange}
          onRemove={removeFromCart}
        />
      ))}
    </div>
  );
};

export default CartTable;
