import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const imagePath = new URL(`../../assets/images/${product.image}`, import.meta.url).href;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imagePath} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
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
