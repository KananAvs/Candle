import React from 'react';
import { Container } from 'react-bootstrap';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import styles from './Footer.module.css';

const socialLinks = [
  { Icon: Facebook, url: 'https://facebook.com/KananAvs' },
  { Icon: Instagram, url: 'https://instagram.com/KananAvs' },
  { Icon: LinkedIn, url: 'https://linkedin.com/in/KananAvs' },
  { Icon: GitHub, url: 'https://github.com/KananAvs' }
];

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <div className={styles.socialLinks}>
        {socialLinks.map(({ Icon, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <Icon className={styles.icon} />
          </a>
        ))}
      </div>
      <div className={styles.content}>
        <p className={styles.text}>&copy; {new Date().getFullYear()} Candle. All rights reserved.</p>
        <p className={styles.text}>Explore our exclusive collection of handmade scented candles.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;