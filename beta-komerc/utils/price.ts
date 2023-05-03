export const formatPrice = (price: number) =>
  price.toLocaleString('sr-RS', {
    style: 'currency',
    currency: 'RSD',
    minimumFractionDigits: 2,
  });
