import { GenericProduct } from 'types/global.types';

export interface CartItemPayload {
  product_id: number;
  quantity: number;
}

export interface CartItem {
  product: GenericProduct;
  quantity: number;
  price: number;
}

export interface AddToCartPayload extends CartItemPayload {
  id?: number;
}
export interface CartResponse {
  items: CartItem[];
  total: string;
}

export interface DeletePayload {
  id?: number;
  product_id: number;
}

export interface TransferFromWishlistPayload extends DeletePayload {}
