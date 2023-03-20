import { apiCall } from 'api';
import {
  AddToCartPayload,
  CartResponse,
  DeletePayload,
  TransferFromWishlistPayload,
} from 'api/cart/types';
import { getStorageItem } from 'utils/storage';

export const getWishlist = async (id?: number) => {
  const favoriteId = getStorageItem('favoriteId');
  const token = getStorageItem('token');
  if (token && !id) return;

  const request = await apiCall();
  const cartId = id ? id : favoriteId;

  const { data } = await request({
    url: 'cart',
    method: 'GET',
    params: {
      instance: 'wishlist',
      cart_id: cartId.toString(),
    },
  });

  return data;
};

export const addWishlistItem = async (payload: AddToCartPayload) => {
  const favoriteId = getStorageItem('favoriteId');
  const request = await apiCall();
  const { product_id, quantity, id } = payload;

  const cartId = id ? id : favoriteId;

  const { data } = await request({
    url: 'cart/items',
    method: 'POST',
    data: {
      product_id,
      quantity,
      cart_id: cartId.toString(),
      instance: 'wishlist',
    },
  });

  return data.data.cart;
};

export const updateWishlistItem = async (payload: AddToCartPayload) => {
  const favoriteId = getStorageItem('favoriteId');
  const request = await apiCall();
  const { product_id, quantity, id } = payload;
  const cartId = id ? id : favoriteId;

  const { data } = await request({
    url: 'cart/items',
    method: 'PATCH',
    data: {
      product_id,
      quantity,
      cart_id: cartId.toString(),
      instance: 'wishlist',
    },
  });

  return data.data.cart;
};

export const deleteWishlistItem = async (payload: DeletePayload) => {
  const favoriteId = getStorageItem('favoriteId');
  const request = await apiCall();
  const { product_id, id } = payload;
  const cartId = id ? id : favoriteId;

  const { data } = await request({
    url: 'cart/items',
    method: 'DELETE',
    data: {
      product_id,
      cart_id: cartId.toString(),
      instance: 'wishlist',
    },
  });

  return data.data.cart;
};

export const transferToCart = async (payload: TransferFromWishlistPayload) => {
  const favoriteId = getStorageItem('favoriteId');
  const userId = getStorageItem('userId');

  const { product_id, id } = payload;
  const wishlistId = id ? id : favoriteId;
  const cartId = id ? id : userId;

  const request = await apiCall();

  const { data } = await request({
    url: 'wishlist-to-cart/single',
    method: 'POST',
    data: {
      product_id,
      cart_id: cartId.toString(),
      wishlist_id: wishlistId.toString(),
    },
  });

  return {
    cart: data.data.cart,
    wishlist: data.data.wishlist,
  };
};

export const transferAllToCart = async (id?: number) => {
  const favoriteId = getStorageItem('favoriteId');
  const userId = getStorageItem('userId');

  const request = await apiCall();

  const wishlistId = id ? id : favoriteId;
  const cartId = id ? id : userId;

  const { data } = await request({
    url: 'wishlist-to-cart',
    method: 'POST',
    data: {
      cart_id: cartId.toString(),
      wishlist_id: wishlistId.toString(),
    },
  });

  return {
    cart: data.data.cart,
    wishlist: data.data.wishlist,
  };
};
export const deleteWishlist = async (id?: number) => {
  const favoriteId = getStorageItem('favoriteId');
  const request = await apiCall();
  const cartId = id ? id : favoriteId;

  await request({
    url: 'cart',
    method: 'DELETE',
    data: {
      cart_id: cartId.toString(),
      instance: 'wishlist',
    },
  });
};
