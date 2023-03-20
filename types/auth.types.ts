export interface User {
  id: number;
  name: string;
  email: string;
  addresses?: UserAddress[];
}

export interface UserAddress {
  id: number;
  address: string;
  city: string;
  company_name: string;
  company_pib: string;
  email: string;
  last_name: string;
  name: string;
  phone_number: string;
  post_code: string;
  type: 'billing_address' | 'shipping_address';
}
