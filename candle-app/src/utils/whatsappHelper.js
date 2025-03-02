import { formatPrice } from './formatPrice';

export const formatWhatsAppMessage = (cart, customerName) => {
  const now = new Date();
  const hour = now.getHours();
  let greeting = 'Good evening';
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 18) greeting = 'Good afternoon';

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isSingleItem = cart.length === 1;

  let messageBody;

  if (isSingleItem) {
    const item = cart[0];
    const candleText = item.quantity === 1 
      ? `one ${item.name} candle` 
      : `${item.quantity} ${item.name} candles`;
    messageBody = `${greeting}! My name is ${customerName} and I’d like to place an order for ${candleText}.`;
  } else {
    const itemsList = cart.map(item => {
      const itemTotal = item.price * item.quantity;
      return `• ${item.quantity}x ${item.name} - ${formatPrice(itemTotal)}`;
    }).join('\n');

    messageBody = `${greeting}! My name is ${customerName} and I’d like to order:\n${itemsList}`;
  }

  return `${messageBody}\n\n*Total: ${formatPrice(total)}*\n\nCould you please advise on payment and delivery options? Thank you!`;
};

export const openWhatsApp = (cart, customerName) => {
  const message = formatWhatsAppMessage(cart, customerName);
  const phoneNumber = '9720542895015';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};