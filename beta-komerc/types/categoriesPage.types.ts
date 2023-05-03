import {
  Attribute,
  AttributeValue,
  ProductItemCatalogSticker,
} from "./global.types";
import { ProductDiscount } from "./products.types";

export interface CategoryPageProduct {
  id: number;
  sku: string;
  name: string;
  slug: string;
  description?: string;
  supplier_description?: string;
  price: number;
  entry_price: number;
  web_price: number;
  retail_price: number;
  dealer_price: number;
  authenticated_price: number;
  country_of_origin?: string;
  discount?: ProductDiscount;
  mainCategory: [
    {
      id: number;
      parent_id: number;
      name: string;
      slug: string;
      image: string;
      order: number;
      level: number;
      prefix: string;
      pdv: number;
      allowed_rebate: string;
      web_margin: number;
      retail_margin: number;
      dealer_margin: number;
      description_time?: any;
      min_price: number;
      top_description?: string;
      bottom_description?: string;
      parent?: {
        id: number;
        parent_id: number;
        name: string;
        slug: string;
        image: string;
        order: number;
        level: number;
        prefix: string;
        pdv: number;
        allowed_rebate: string;
        web_margin: number;
        retail_margin: number;
        dealer_margin: number;
        description_time: number;
        min_price: number;
        top_description?: string;
        bottom_description?: string;
        created_at: Date;
        updated_at: Date;
        last_sku: {
          id: number;
          category_id: number;
          sku: string;
          created_at: Date;
          updated_at: Date;
        };
      };
      last_sku: {
        id: number;
        sku: string;
      };
    }
  ];
  main_image: {
    id: number;
    main: boolean;
    tiny: string;
    small: string;
    medium: string;
    large: string;
  };
  energy_value_sticker?: any;
  catalog_stickers?: Array<ProductItemCatalogSticker>;
  ratings_count?: any;
  active: boolean;
  visible: boolean;
  attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
  valuable_attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
}

export interface CategoryPageProductsResponse {
  data: CategoryPageProduct[];
  meta: Meta;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
