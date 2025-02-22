import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import favicon from "../../assets/images/candle-32x32.png";
import useCart from "../../hooks/useCart";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const { cart } = useCart();

  const isActive = (path) => location.pathname === path;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

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
            style={{ position: "relative" }}
          >
            <ShoppingCartIcon style={{ fontSize: "1.8rem" }} />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
