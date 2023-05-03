export interface Category {
  id: number;
  parent_id?: number;
  name: string;
  slug: string;
  image?: string;
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
  top_description: any;
  bottom_description: any;
  parent?: Category;
  subcategories: Category[];
  last_sku: {
    id: number;
    sku: string;
  };
}

export interface Attribute {
  id: number;
  attribute: {
    id: number;
    name: string;
  };
  order: number;
  active: boolean;
  values: Array<{
    id: number;
    order: number;
    active: boolean;
    value: {
      id: number;
      value: string;
      products_count: number;
    };
  }>;
}
