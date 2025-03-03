import useCart from '../hooks/useCart'; // Change from { useCart } to useCart
import products from '../data/products.json'; // Import the products

export const useGreetingMessages = () => {
  const { cart, customerName } = useCart();
  const now = new Date();
  
  // Time-based components
  const hour = now.getHours();
  const dayIndex = now.getDay();
  const month = now.getMonth();
  const timePeriod = hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Seasonal configuration
  const getSeasonalGreeting = () => {
    const seasons = [
      { months: [11,0,1], adjectives: ['Cozy', 'Warm', 'Frosty'] },
      { months: [2,3,4], adjectives: ['Fresh', 'Blooming', 'Vibrant'] },
      { months: [5,6,7], adjectives: ['Sunny', 'Bright', 'Radiant'] },
      { months: [8,9,10], adjectives: ['Crisp', 'Golden', 'Misty'] }
    ];
    const { adjectives } = seasons.find(s => s.months.includes(month));
    return `${adjectives[hour % adjectives.length]} ${timePeriod}`;
  };

  // Greeting composition
  const greetingMessage = () => {
    const seasonal = getSeasonalGreeting();
    const dayTheme = {
      0: 'serene Sunday', 1: 'fresh start', 2: 'balanced Tuesday',
      3: 'wellness Wednesday', 4: 'productive Thursday', 
      5: 'festive Friday', 6: 'self-care Saturday'
    }[dayIndex];
    
    return `${seasonal}! Wishing you a ${dayTheme}${customerName ? `, ${customerName}` : ''}`;
  };

  // Cart message logic
  const cartMessage = () => {
    if (cart.length === 0) {
      const latestProducts = products.slice(-2);
      if (latestProducts.length === 0) return "Explore our candle collection";
      
      const productList = latestProducts.map(p => p.name).join(' and ');
      return `Your scent journey awaits! Discover our latest candles like ${productList}`;
    }

    const itemNames = cart.map(item => item.name);
    const firstTwo = itemNames.slice(0, 2).join(' and ');
    
    switch(cart.length) {
      case 1:
        return `Excellent choice with ${firstTwo} - a wonderful aromatic companion!`;
      case 2:
        return `${firstTwo} create a perfectly harmonious scent combination!`;
      default:
        const remaining = cart.length - 2;
        return `${firstTwo} and ${remaining} more carefully selected items - your perfect scent wardrobe!`;
    }
  };

  return { greetingMessage: greetingMessage(), cartMessage: cartMessage() };
};