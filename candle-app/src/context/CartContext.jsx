import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [customerName, setCustName] = useState(() => {
    return localStorage.getItem('customerName') || '';
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (customerName) {
      localStorage.setItem('customerName', customerName);
    }
  }, [customerName]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCart = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const setCustomerName = (name) => {
    if (name) {
      localStorage.setItem('customerName', name);
    } else {
      localStorage.removeItem('customerName');
    }
    setCustName(name);
  };

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        addToCart, 
        updateCart, 
        removeFromCart, 
        clearCart,
        customerName,
        setCustomerName
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;