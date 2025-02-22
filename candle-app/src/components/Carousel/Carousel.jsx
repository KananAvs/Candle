import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const ControlledCarousel = ({ products }) => {
  const [index, setIndex] = useState(0);

  const generateSlug = (name) => `Candle/${name.replace(/\s+/g, '-')}`;

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
              onClick={() => window.location.assign(`/${generateSlug(product.name)}`)}
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