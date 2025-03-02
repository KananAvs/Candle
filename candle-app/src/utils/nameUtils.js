export const formatName = (name) => {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(word => word.trim())
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const validateName = (name) => {
  if (!name) return true;
  
  const nameRegex = /^[A-Za-z\s\-']+$/;
  return nameRegex.test(name);
};

export const sanitizeName = (name) => {
  if (!name) return '';
  
  return name.trim().slice(0, 20);
};