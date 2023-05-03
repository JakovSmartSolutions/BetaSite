import Axios from 'axios';

import { getStorageItem } from 'utils/storage';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const apiCall = async (url?: string) => {
  const axios = Axios.create({
    baseURL: url ? url : baseURL,
    headers: { Accept: 'application/json' },
  });

  axios.interceptors.response.use(
    (res) => res,
    ({ response }) => Promise.reject(response)
  );

  const token = getStorageItem('token');
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return axios;
};

export { apiCall };
