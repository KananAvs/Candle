import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { cart, addToCart, updateCart, removeFromCart, clearCart, customerName, setCustomerName } = useContext(CartContext);

  return { 
    cart, 
    addToCart, 
    updateCart, 
    removeFromCart, 
    clearCart,
    customerName,
    setCustomerName 
  };
};

export default useCart;