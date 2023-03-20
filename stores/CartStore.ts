import { CartItem, CartResponse } from 'api/cart/types';
import create from 'zustand';

interface State {
  items: CartItem[];
  totalPrice: number;
  setCart: (cartResp: CartResponse) => void;
  clearCart: () => void;
}

const useCartStore = create<State>((set) => ({
  items: [],
  totalPrice: 0,
  setCart: (cartResp: CartResponse) =>
    set((prev) => {
      return {
        ...prev,
        items: cartResp.items,
        totalPrice: +cartResp.total,
      };
    }),
  clearCart: () => set({ items: [], totalPrice: 0 }),
}));

export { useCartStore };
