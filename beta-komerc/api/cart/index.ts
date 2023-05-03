import { apiCall } from 'api';
import { getStorageItem } from 'utils/storage';
import { AddToCartPayload, DeletePayload } from './types';

export const getCart = async (id?: number) => {
  const userId = getStorageItem('userId');
  const token = getStorageItem('token');
  if (token && !id) return;

  const request = await apiCall();
  const cartId = id ? id : userId;
  const { data } = await request({
    url: 'cart',
    method: 'GET',
    params: {
      instance: 'cart',
      cart_id: cartId.toString(),
    },
  });

  return data;
};

export const addCartItem = async (payload: AddToCartPayload) => {
  const userId = getStorageItem('userId');
  const request = await apiCall();
  const { product_id, quantity, id } = payload;
  const cartId = id ? id : userId;

  const { data } = await request({
    url: 'cart/items',
    method: 'POST',
    data: {
      product_id,
      quantity,
      cart_id: cartId.toString(),
      instance: 'cart',
    },
  });

  return data.data.cart;
};

export const updateCartItem = async (payload: AddToCartPayload) => {
  const userId = getStorageItem('userId');
  const request = await apiCall();
  const { product_id, quantity, id } = payload;
  const cartId = id ? id : userId;

  const { data } = await request({
    url: 'cart/items',
    method: 'PATCH',
    data: {
      product_id,
      quantity,
      cart_id: cartId.toString(),
      instance: 'cart',
    },
  });

  return data.data.cart;
};

export const deleteItem = async (payload: DeletePayload) => {
  const userId = getStorageItem('userId');
  const request = await apiCall();
  const { product_id, id } = payload;
  const cartId = id ? id : userId;

  const { data } = await request({
    url: 'cart/items',
    method: 'DELETE',
    data: {
      product_id,
      cart_id: cartId.toString(),
      instance: 'cart',
    },
  });

  return data.data.cart;
};

export const deleteCart = async (id?: number) => {
  const userId = getStorageItem('userId');
  const request = await apiCall();
  const cartId = id ? id : userId;

  await request({
    url: 'cart',
    method: 'DELETE',
    data: {
      cart_id: cartId.toString(),
      instance: 'cart',
    },
  });
};
