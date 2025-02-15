import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/store');
  };

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={8} className="text-center">
          <h1>Welcome to Candle</h1>
          <p>Discover our beautiful selection of candles designed to create the perfect ambiance.</p>
          <Button variant="outline-danger" onClick={handleShopNow}>
            Shop Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
