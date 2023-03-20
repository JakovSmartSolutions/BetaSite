import { apiCall } from 'api';

import { toast } from 'react-toastify';
import { UserAddress } from 'types/auth.types';
import { getStorageItem, setStorageItem } from 'utils/storage';

import {
  SignInPayload,
  SignUpPayload,
  UpdateUserPasswordPayload,
  UpdateUserPayload,
} from './types';

export const signUp = async (body: SignUpPayload) => {
  const request = await apiCall();

  try {
    const { data } = await request({
      url: `register`,
      method: 'POST',
      data: body,
    });

    setStorageItem('token', data.data.token);
    toast('Uspešno ste se registrovali!', { type: 'success' });
  } catch (error: any) {
    throw toast('Nalog je već registrovan', { type: 'error' });
  }
};

export const signIn = async (body: SignInPayload) => {
  const request = await apiCall();

  const cart_id = getStorageItem('userId');
  const wishlist_id = getStorageItem('favoriteId');

  try {
    const { data } = await request({
      url: `login`,
      method: 'POST',
      data: body,
    });

    await request({
      url: 'cart/transfer',
      method: 'post',
      data: {
        cart_id,
        wishlist_id,
      },
      headers: {
        Authorization: `Bearer ${data.data.token}`,
      },
    });

    setStorageItem('token', data.data.token);
    toast('Uspešno ste se ulogovali!', { type: 'success' });
  } catch (error: any) {
    throw toast('Podaci su neispravni. Pokušajte ponovo', { type: 'error' });
  }
};

export const fetchAuthUser = async () => {
  const request = await apiCall();

  const { data } = await request({
    url: `users/token?include=addresses`,
    method: 'GET',
  });

  return data;
};

export const transferCartAndWishlist = async () => {
  const request = await apiCall();

  const cart_id = getStorageItem('userId');
  const wishlist_id = getStorageItem('favoriteId');

  await request({
    url: 'cart/transfer',
    method: 'post',
    data: {
      cart_id,
      wishlist_id,
    },
  });
};

export const updateAuthUser = async (body: UpdateUserPayload) => {
  const request = await apiCall();
  const { id, ...rest } = body;

  try {
    await request({ url: `users/${id}/profile`, method: 'PATCH', data: rest });
    toast('Uspešno ste promenili svoje podatke.', { type: 'success' });
  } catch (error) {
    console.log(error);
  }
};

export const updateAuthUserPassword = async (
  body: UpdateUserPasswordPayload
) => {
  const request = await apiCall();
  const { id, ...rest } = body;

  try {
    await request({ url: `users/${id}/password`, method: 'PATCH', data: rest });
    toast('Uspešno ste promenili lozinku.', { type: 'success' });
  } catch (error) {
    toast('Uneli ste pogrešne podatke. Pokušajte ponovo.', { type: 'error' });
  }
};

export const signOut = async () => {
  const request = await apiCall();

  await request({ url: `logout`, method: 'POST' });
  toast('Uspešno ste promenili lozinku.', { type: 'success' });
};

export const createAddress = async (id: number, body: UserAddress) => {
  const request = await apiCall();

  try {
    await request({ url: `users/${id}/addresses`, method: 'POST', data: body });
    toast('Uspešno ste dodali adresu.', { type: 'success' });
  } catch (error) {}
};

export const updateAddress = async (id: number, body: UserAddress) => {
  const request = await apiCall();

  try {
    await request({
      url: `users/${id}/addresses/${body.id}`,
      method: 'PATCH',
      data: body,
    });
    toast('Uspešno ste izmenili adresu.', { type: 'success' });
  } catch (error) {}
};

export const deleteAddress = async (id: number, addressId: number) => {
  const request = await apiCall();

  try {
    await request({
      url: `users/${id}/addresses/${addressId}`,
      method: 'DELETE',
    });
    toast('Uspešno ste obrisali adresu.', { type: 'success' });
  } catch (error) {}
};
