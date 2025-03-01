import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import AddToCartButton from '../components/AddToCartButton/AddToCartButton';
import products from '../data/products.json';

const ProductPage = () => {
  const { productSlug } = useParams();
  
  const product = useMemo(() => {
    const productName = productSlug?.replace(/-/g, ' ');
    return products.find(p => p.name === productName);
  }, [productSlug]);

  if (!product) {
    return <Navigate to="*" replace />;
  }

  const imageUrl = new URL(
    `../assets/product-images/${product.id}.jpg`,
    import.meta.url
  ).href;

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          <div className="ps-md-4">
            <Typography variant="h3" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography
              variant="h4"
              component="p"
              gutterBottom
            >
              ${product.price}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 4
              }}
            >
              {product.description}
            </Typography>
            <div style={{ maxWidth: '200px' }}>
              <AddToCartButton product={product} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
