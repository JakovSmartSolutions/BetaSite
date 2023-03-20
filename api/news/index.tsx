import { apiCall } from 'api';
import { NewsType } from 'types/news.types';

export const getNews = async (): Promise<NewsType[]> => {
  const request = await apiCall();
  const { data } = await request({ url: `news`, method: 'GET' });

  return data.data || [];
};
