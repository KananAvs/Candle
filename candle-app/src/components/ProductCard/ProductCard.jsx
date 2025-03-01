import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { navigateToProduct } from '../../utils/routeHelpers';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigateToProduct(navigate, product.name);
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