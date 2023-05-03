import { RecommendedProduct, Subcategory } from "./global.types";
import { Product } from "./products.types";

export interface HomePageData {
  id: number;
  products: Product[];
  categories: Array<{
    id: number;
    name: string;
    slug: string;
    order: number;
    image?: string;
  }>;
  sections: Array<{
    categories: Subcategory[];
    id: number;
    name: string;
    order: number;
    products: RecommendedProduct[];
  }>;
}
