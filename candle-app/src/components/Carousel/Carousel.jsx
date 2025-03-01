import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { navigateToProduct } from '../../utils/routeHelpers';
import './Carousel.css';

const ControlledCarousel = ({ products }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="custom-carousel-wrapper">
      <Carousel activeIndex={index} onSelect={setIndex} className="rounded">
        {products.map((product) => {
          const imageUrl = new URL(
            `../../assets/product-images/${product.id}.jpg`,
            import.meta.url
          ).href;
          
          return (
            <Carousel.Item
              key={product.id}
              onClick={() => navigateToProduct(navigate, product.name)}
            >
              <img
                className="d-block w-100 carousel-image"
                src={imageUrl}
                alt={product.name}
              />
              <Carousel.Caption className="carousel-caption-custom">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;