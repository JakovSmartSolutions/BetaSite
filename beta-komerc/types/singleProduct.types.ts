import { ProductItemDiscount, SimilarProduct } from './global.types';
import { Category } from './categories.types';
import { ProductMainImage } from './products.types';

export interface SingleProduct {
  id: number;
  sku: string;
  name: string;
  slug: string;
  description: any;
  supplier_description: any;
  price: number;
  entry_price: number;
  web_price: number;
  retail_price: number;
  dealer_price: number;
  authenticated_price: number;
  country_of_origin: null;
  discount?: ProductItemDiscount;
  brand?: { id: number; name: string };
  supplier?: { id: number; name: string; updated_at: Date };
  categories: Category[];
  mainCategory: Array<Category>;
  images: Array<ProductMainImage>;
  energy_value_sticker?: any;
  attributes: Array<SingleProductAttribute>;
  catalog_stickers: any[];
  questions: any[];
  ratings: any[];
  ratings_count?: number;
  avg_rating?: number;
  similarProducts: Array<SimilarProduct>;
  active: boolean;
  visible: boolean;
}

export interface SingleProductAttribute {
  order: number;
  attribute: {
    id: number;
    name: string;
  };
  value: {
    id: number;
    value: string;
    products_count: number;
  };
}
