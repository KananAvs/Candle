export const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  const morningAdjectives = ['Rise and shine!', 'Good morning', 'Sunshine ready?', 'Fresh start!'];
  const afternoonAdjectives = ['Lovely afternoon', 'Awesome day', 'Good afternoon', 'Productive day'];
  const eveningAdjectives = ['Cozy evening', 'Good evening', 'Wonderful night', 'Peaceful night'];

  const period = hour < 12 ? morningAdjectives :
    hour < 17 ? afternoonAdjectives : eveningAdjectives;
  
  return period[Math.floor(Math.random() * period.length)];
};

export const getDayBasedMessage = () => {
  const dayMessages = {
    0: ["Sunday serenity needs a special scent!", "Unwind with aromatic bliss this Sunday!", "Perfect Sunday to refresh your space 🌿"],
    1: ["Monday magic starts with good scents ✨", "Fresh week, fresh fragrances!", "Kickstart your week with calming aromas"],
    2: ["Turn Tuesday into a sensory adventure!", "Midweek mood needs magical scents 🌸", "Tuesday tranquility starts here"],
    3: ["Wednesday wellness with warm glows 🕯️", "Hump day happiness in every scent", "Midweek refresh for your space"],
    4: ["Thursday therapy through fragrance 🌼", "Almost there! Treat your senses", "Thursday vibes need aromatic love"],
    5: ["Friday feels deserve fabulous scents! 🎉", "Weekend prep with perfect perfumes", "TGIF! Time to scent celebrate"],
    6: ["Saturday self-care starts here 💆♀️", "Weekend wonder with wonderful aromas", "Scented Saturday relaxation time"]
  };

  const dayIndex = new Date().getDay();
  return dayMessages[dayIndex][Math.floor(Math.random() * dayMessages[dayIndex].length)];
};

export const getCartMessage = (cartItems) => {
  if (cartItems.length === 0) return null;

  const itemNames = cartItems.map(item => item.name);
  const compliments = ["brilliant pick!", "lovely choice!", "excellent selection!", "nose-approved pick! 👃"];

  if (cartItems.length === 1) {
    return `${itemNames[0]} is a ${compliments[Math.floor(Math.random() * compliments.length)]} ${cartItems[0].description}`;
  }

  if (cartItems.length === 2) {
    const combinations = ["dream team!", "perfect pair!", "scent soulmates!", "magical combo!"];
    return `${itemNames[0]} + ${itemNames[1]} = ${combinations[Math.floor(Math.random() * combinations.length)]} 🔥`;
  }

  const remainingCount = cartItems.length - 2;
  const reactions = ["impressive collection!", "scent party!", "aroma festival!", "fragrance fiesta!"];
  return `${itemNames.slice(0, 2).join(', ')}, and ${remainingCount} more... ${reactions[Math.floor(Math.random() * reactions.length)]} 🎉`;
};

export const getEmptyCartMessage = (products) => {
  const suggestions = [
    "Your scent journey awaits! Try our",
    "Empty cart, full potential! Explore",
    "Let's find your signature scent:",
    "Fresh start! How about"
  ];

  const safeProducts = products.length >= 2 ? products : [...products, {name: 'new arrivals'}, {name: 'bestsellers'}];
  const [last1, last2] = safeProducts.slice(-2);
  
  return `${suggestions[Math.floor(Math.random() * suggestions.length)]} ${last1.name} or ${last2.name}? 🛍️`;
};