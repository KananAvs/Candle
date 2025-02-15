import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard/ProductCard';

const StorePage = () => {
  const [page, setPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedProducts = products.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <Container>
      <h2 className="my-4">Our Candles</h2>
      <div className="d-flex justify-content-center my-4">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="standard"
        />
      </div>
      <Row>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center my-4">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="standard"
        />
      </div>
    </Container>
  );
};

export default StorePage;
