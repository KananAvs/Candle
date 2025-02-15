import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="py-4">
        <Row className="justify-content-center mb-3">
          <Col xs="auto" className="d-flex gap-4">
            <a href="https://facebook.com/KananAvs" target="_blank" rel="noopener noreferrer">
              <Facebook className={styles.icon} />
            </a>
            <a href="https://instagram.com/KananAvs" target="_blank" rel="noopener noreferrer">
              <Instagram className={styles.icon} />
            </a>
            <a href="https://linkedin.com/in/KananAvs" target="_blank" rel="noopener noreferrer">
              <LinkedIn className={styles.icon} />
            </a>
            <a href="https://github.com/KananAvs" target="_blank" rel="noopener noreferrer">
              <GitHub className={styles.icon} />
            </a>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="mb-1 text-secondary">
              &copy; {new Date().getFullYear()} Candle. All rights reserved.
            </p>
            <p className="text-secondary">
              Explore our exclusive collection of handmade scented candles.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;