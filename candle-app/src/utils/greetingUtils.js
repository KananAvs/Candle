export const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
};

export const getDayBasedMessage = () => {
  const days = [
    'Perfect Sunday to light up your space!',
    'Starting the week with wonderful scents!',
    'Tuesday is for transforming your ambiance!',
    "Wednesday's gentle glow awaits you!",
    'Add some warmth to your Thursday!',
    "It's Friday - time for some aromatic bliss!",
    'Saturday self-care with soothing scents!'
  ];
  return days[new Date().getDay()];
};

export const getCartMessage = (cartItems) => {
  if (cartItems.length === 0) return null;
  
  const itemNames = cartItems.map(item => item.name);
  
  if (cartItems.length === 1) {
    return `Ah, ${itemNames[0]} is a lovely choice! Its ${getItemDescription(cartItems[0])}`;
  }
  
  if (cartItems.length === 2) {
    return `${itemNames[0]} and ${itemNames[1]} make a wonderful combination!`;
  }
  
  const remainingCount = cartItems.length - 2;
  return `${itemNames[0]}, ${itemNames[1]}, and ${remainingCount} more delightful ${
    remainingCount === 1 ? 'candle' : 'candles'
  } in your cart!`;
};

export const getEmptyCartMessage = (products) => {
  const lastTwoProducts = products.slice(-2);
  return `Discover our latest arrivals like ${lastTwoProducts[0].name} and ${lastTwoProducts[1].name}!`;
};

const getItemDescription = (item) => {
  const descriptions = {
    'Teddy Bear': 'cozy warmth will make your day!',
    'Dancing Lady': 'elegant fragrance will enchant your space!',
    default: 'wonderful fragrance will enhance your space!'
  };
  
  return descriptions[item.name] || descriptions.default;
};
