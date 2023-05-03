export interface OrderPaylaod {
  address: string;
  cart_id: string;
  city: string;
  company_name: string;
  company_pib: string;
  email: string;
  last_name: string;
  name: string;
  note: string;
  payment_method: PaymentMethod;
  phone_number: number;
  post_code: number;
  terms: boolean;
  userId?: number;
}

type PaymentMethod =
  | 'upon_delivery'
  | 'checks_upon_delivery'
  | 'in_store'
  | 'current_account';
