export interface Banner {
  id: number;
  name: string;
  link?: string;
  products: boolean;
  mobile_image: string;
  desktop_image: string;
  position: {
    id: number;
    name: string;
  };
  category_id: number | null;
  brand_id: number | null;
  order: number;
  created_at: Date;
  updated_at: Date;
}
