import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import favicon from "../../assets/images/candle-32x32.png";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container className="d-flex justify-content-center">
        <div className="d-flex align-items-center nav-items-container">
          {/* Store Icon */}
          <Link
            to="/store"
            className={`nav-link px-3 ${isActive("/store") ? "active" : ""}`}
          >
            <ShoppingBagIcon style={{ fontSize: "1.8rem" }} />
          </Link>

          {/* Brand Icon */}
          <Link
            to="/"
            className={`brand-container mx-4 ${isActive("/") ? "active" : ""}`}
          >
            <img src={favicon} alt="Candle Logo" className="brand-icon" />
          </Link>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className={`nav-link px-3 ${isActive("/cart") ? "active" : ""}`}
          >
            <ShoppingCartIcon style={{ fontSize: "1.8rem" }} />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
