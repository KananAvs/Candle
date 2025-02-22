import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { cart, addToCart, updateCart, removeFromCart, clearCart } = useContext(CartContext);

  return { cart, addToCart, updateCart, removeFromCart, clearCart };
};

export default useCart;