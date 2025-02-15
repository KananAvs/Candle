import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const imagePath = new URL(`../../assets/images/${product.image}`, import.meta.url).href;

  return (
    <Card className="h-100 card">
      <Card.Img variant="top" src={imagePath} alt={product.name} />
      <Card.Body>
        <Row>
          <Col xs={10} sm={12} md={12} lg={12} xl={12} xxl={10}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price.toFixed(2)}</Card.Text>
          </Col>
          <Col xs={2} sm={12} md={12} lg={12} xl={12} xxl={2}
          className="d-flex align-items-center justify-content-end">
            <Button variant="light">
              <ShoppingCartIcon />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;