import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import favicon from "../../assets/images/candle-32x32.png";
import useCart from "../../hooks/useCart";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { pathname } = useLocation();
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const NavLink = ({ to, children }) => (
    <Link 
      to={to} 
      className={`${styles.navLink} ${pathname === to ? styles.active : ""}`}
    >
      {children}
    </Link>
  );

  return (
    <Navbar className={styles.navbar}>
      <Container className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to="/store">
            <ShoppingBag sx={{ fontSize: "1.8rem" }} />
          </NavLink>
          <Link 
            to="/" 
            className={`${styles.brandLink} ${pathname === "/" ? styles.active : ""}`}
          >
            <img src={favicon} alt="Candle Logo" className={styles.brandIcon} />
          </Link>
          <NavLink to="/cart">
            <Badge badgeContent={cartItemCount} color="error" max={99}>
              <ShoppingCart />
            </Badge>
          </NavLink>
        </nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
