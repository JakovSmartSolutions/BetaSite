import { ProductItemDiscount } from 'types/global.types';

import { useAuthStore } from 'stores/AuthStore';

interface Item {
  authenticated_price: number;
  discount?: ProductItemDiscount;
  web_price: number;
}

export const useProductPrice = () => {
  const { user } = useAuthStore();

  const getProductPrice = (product: Item) => {
    if (product.discount) return product.discount.price;
    else if (user) return product.authenticated_price;
    return product.web_price;
  };

  return { getProductPrice };
};
