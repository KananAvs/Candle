import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography, Button } from '@mui/material';
import windowGif from '../assets/images/window.gif';

const NotFoundPage = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Overlay */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '110vh',
          backgroundColor: 'rgb(4,16,33)',
          zIndex: -1,
        }}
      />

      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: '100vh' }}
        >
          {/* Content Column */}
          <Col md={6} className="text-center">
            <Typography
              variant="h1"
              component="div"
              sx={{ 
                fontWeight: 'bold', 
                color: '#ff6f61',
                mb: 2,
              }}
            >
              404
            </Typography>
            
            <Typography
              variant="h3"
              component="div"
              sx={{ 
                mb: 3,
                color: 'common.white',
              }}
            >
              Page Not Found
            </Typography>
            
            <Typography
              variant="body1"
              sx={{ 
                mb: 4,
                color: 'common.white',
                maxWidth: '80%',
                mx: 'auto',
              }}
            >
              Sorry, the page you are looking for does not exist. It might have been removed or the URL may be incorrect.
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/"
              sx={{ 
                textTransform: 'none',
                px: 4,
                py: 1.5,
              }}
            >
              Go Back Home
            </Button>
          </Col>

          {/* Image Column */}
          <Col md={6} className="text-center">
            <Box
              component="img"
              src={windowGif}
              alt="Window animation indicating missing page"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default NotFoundPage;