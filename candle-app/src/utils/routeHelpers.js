export const generateSlug = (name) => name.replace(/\s+/g, '-');

export const getProductPath = (name) => `/Candle/${generateSlug(name)}`;

export const navigateToProduct = (navigate, name) => {
  navigate(`/${generateSlug(name)}`);
};
