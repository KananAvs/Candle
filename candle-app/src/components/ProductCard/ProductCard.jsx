import { useCallback, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const generateSlug = useCallback(
    (name) => `Candle/${name.replace(/\s+/g, '-')}`,
    []
  );

  const handleCardClick = () => {
    window.location.assign(`/${generateSlug(product.name)}`);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
  };

  const imageUrl = new URL(`../../assets/product-images/${product.id}.jpg`, import.meta.url).href;

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
    }
  }, []);

  return (
    <Card className="product-card shadow-hover" onClick={handleCardClick}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={product.name}
        className="img-scale-hover"
      />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end product-overlay">
        <Row className="g-2">
          <Col>
            <Card.Title className="text-white mb-0">{product.name}</Card.Title>
            <Card.Text className="text-white fw-bold mb-0">${product.price}</Card.Text>
          </Col>
          <Col xs="auto" className="add-to-cart-col" onClick={handleAddToCartClick}>
            <AddToCartButton product={product} />
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ProductCard;