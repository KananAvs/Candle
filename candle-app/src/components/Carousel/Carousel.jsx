import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Carousel.css';

const ProductCarousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="product-carousel">
      <Carousel
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        indicators={false}
        interval={null}
        fade
      >
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <div className="image-container">
              <img
                className="d-block w-100"
                src={new URL(`../../assets/product-images/${product.id}.jpg`, import.meta.url).href}
                alt={product.name}
              />
              <div className="image-overlay">
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="price-container">
                    <span className="price">${product.price}</span>
                    <ShoppingCartIcon className="cart-icon" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="custom-indicators">
        {products.map((_, index) => (
          <div
            key={index}
            className={`indicator-line ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;