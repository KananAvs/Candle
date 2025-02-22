import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCarousel from '../components/Carousel/Carousel';
import products from '../data/products.json';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const latestProducts = products.slice(-3);

  const handleShopNow = () => navigate('/store');

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-5 mb-md-0">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
          >
            Welcome to Candle
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6
            }}
          >
            {isSmallScreen
              ? 'Discover our curated candles that add warmth and ambiance. Browse and order effortlessly!'
              : 'Discover our curated selection of beautifully crafted candles designed to bring a warm, inviting ambiance to any space. Our lightweight, elegant e-commerce site lets you effortlessly browse, select, and order your favorite scents via WhatsApp – all without the hassle of registration. Dive in to explore more and light up your world!'}
          </Typography>
          <Button
            variant="primary"
            onClick={handleShopNow}
            size="lg"
          >
            <ShoppingBagIcon sx={{ mr: 1 }} />
            Shop Now
          </Button>
        </Col>

        <Col md={6}>
          <ProductCarousel products={latestProducts} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;