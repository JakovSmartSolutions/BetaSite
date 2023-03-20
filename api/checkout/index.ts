import { apiCall } from 'api';
import { getStorageItem } from 'utils/storage';
import { OrderPaylaod } from './types';

export const storeOrder = async (payload: OrderPaylaod) => {
  const request = await apiCall();
  const storageUserId = getStorageItem('userId');
  const cart_id = payload.userId ? payload.userId : storageUserId;

  const { data } = await request({
    url: 'orders',
    method: 'POST',
    data: {
      ...payload,
      cart_id: cart_id.toString(),
    },
  });

  return data;
};
