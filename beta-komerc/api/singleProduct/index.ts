import { Declaration } from './types';

import { apiCall } from 'api';

export const getDeclaration = async (
  categorySlug: string
): Promise<Declaration> => {
  const request = await apiCall();

  const { data } = await request({
    url: `categories/${categorySlug}/declaration`,
    method: 'GET',
  });

  return data;
};
