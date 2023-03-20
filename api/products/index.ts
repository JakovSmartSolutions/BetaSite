import { apiCall } from "api";
import { ProductsResponse } from "types/global.types";
import { SearchProductsPaylaod } from "./types";

export const getSearchResult = async (
  search: string
): Promise<ProductsResponse> => {
  const request = await apiCall();

  const { data } = await request({
    url: `products`,
    method: "GET",
    params: { search },
  });

  return data;
};

export const getSearchData = async (
  payload: SearchProductsPaylaod
): Promise<ProductsResponse> => {
  const request = await apiCall("https://athena-eu.syncitgroup.com/api/v1");

  const { data } = await request({
    url: "search/data",
    method: "POST",
    data: {
      ...payload,
    },
  });

  return data;
};
