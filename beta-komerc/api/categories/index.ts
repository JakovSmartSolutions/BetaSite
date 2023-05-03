import { apiCall } from "api";
import { Category } from "types/categories.types";
import { CategoryPageProductsResponse } from "types/categoriesPage.types";

export const getAllCategories = async (): Promise<Category[]> => {
  const request = await apiCall();

  const { data } = await request({
    url: `categories`,
    method: "GET",
    params: {
      include: "all_subcategories",
      main: 1,
    },
  });

  return data.data;
};

export const getCategotyProducts = async (
  slug: string,
  params?: any,
  sort?: string,
  page?: number
): Promise<CategoryPageProductsResponse> => {
  const request = await apiCall();
  let url = `categories/${slug}/products?include=discount,mainImage,mainCategory`;
  if (params) url += `&attribute_values=${params}`;
  if (sort) url += `&${sort}`;
  if (page) url += `&page=${page}`;

  const { data } = await request({ url, method: "GET" });

  return data;
};
