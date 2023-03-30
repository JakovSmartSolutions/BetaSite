import { ProductDeclaration } from "./types";

import { apiCall } from "api";

export const getDeclaration = async (
  categorySlug: string
): Promise<ProductDeclaration> => {
  const request = await apiCall();

  const { data } = await request({
    url: `categories/${categorySlug}/declaration`,
    method: "GET",
  });

  return data;
};
