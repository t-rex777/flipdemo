export const sortByHighToLow = (products) => {
  return [...products].sort((a, b) => b.price - a.price);
};
export const sortByLowToHigh = (products) => {
  return [...products].sort((a, b) => a.price - b.price);
};
