import { CategoryPageProduct, Meta } from "./categoriesPage.types";

export interface ProductItem {
  id: number;
  sku: string;
  name: string;
  slug: string;
  web_price: number;
  retail_price: number;
  authenticated_price: number;
  discount?: ProductItemDiscount;
  main_image?: ProductItemMainImage;
  mainCategory?: Array<Category>;
  catalog_stickers?: Array<ProductItemCatalogSticker>;
  ratings_count?: number;
  active: boolean;
  visible: boolean;
  attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
  valuable_attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
}

export interface Subcategory {
  id: number;
  name: string;
  slug: string;
}

export interface RecommendedProduct {
  id: number;
  sku: string;
  name: string;
  slug: string;
  web_price: number;
  retail_price: number;
  authenticated_price: number;
  main_image?: ProductItemMainImage;
  main_category_slug: string;
  order: number;
  discount?: ProductItemDiscount;
  catalog_stickers?: Array<ProductItemCatalogSticker>;
  attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
  valuable_attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
  subcategoriesLink: Subcategory[];
}

export interface ProductItemCatalogSticker {
  id: number;
  catalog_sticker_type_id: number;
  label_active: number;
  sticker_active: number;
  from: string;
  to: string;
  label: string;
  label_text: string;
  sticker: string;
}

export interface ProductItemDiscount {
  id: number;
  type: any;
  price: number;
  from: string;
  to: string;
  sticker?: any;
}

export interface ProductItemMainImage {
  id: number;
  main: boolean;
  large: string;
}

export interface Category {
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
  subcategories: Category[];
  subcategoriesLink: Subcategory[];
}

export interface SimilarProduct {
  id: number;
  brand_id?: number;
  supplier_id: number;
  sku: string;
  name: string;
  slug: string;
  description?: string;
  supplier_description?: string;
  entry_price: number;
  web_price: number;
  retail_price: number;
  dealer_price: number;
  authenticated_price: number;
  web_margin_id: number;
  recommended_price_id?: number;
  authenticated_discount_id?: number;
  country_of_origin?: string;
  active: boolean;
  visible: boolean;
  eponuda: number;
  eponuda_price: number;
  catalog_stickers?: Array<ProductItemCatalogSticker>;
  user_id?: number;
  connected_at?: Date;
  created_at: Date;
  updated_at: Date;
  price: number;
  pivot: {
    category_id: number;
    product_id: number;
    created_at: Date;
    updated_at: Date;
  };
  main_image: ProductItemMainImage;
  discount?: ProductItemDiscount;
  attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
  valuable_attributes: Array<{ attribute: Attribute; value: AttributeValue }>;
}

export type GenericProduct =
  | ProductItem
  | SimilarProduct
  | RecommendedProduct
  | CategoryPageProduct;

export interface Attribute {
  name: string;
}

export interface AttributeValue {
  value: string;
}

export interface ProductsResponse {
  data: GenericProduct[];
  meta: Meta;
}

export interface ProductSearchPayload {
  search?: any;
  sort?: string;
  page?: number;
}
