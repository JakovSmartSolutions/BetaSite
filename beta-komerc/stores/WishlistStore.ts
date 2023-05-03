import { CartItem, CartResponse } from 'api/cart/types';
import create from 'zustand';

// Koriste se isti tipovi kao za cart jer su apsolutno isti

interface State {
  items: CartItem[];
  totalPrice: number;
  setWishlist: (cartResp: CartResponse) => void;
  clearWishlist: () => void;
}

const useWishlistStore = create<State>((set) => ({
  items: [],
  totalPrice: 0,
  setWishlist: (cartResp: CartResponse) =>
    set((prev) => {
      return {
        ...prev,
        items: cartResp.items,
        totalPrice: +cartResp.total,
      };
    }),
  clearWishlist: () => set({ items: [], totalPrice: 0 }),
}));

export { useWishlistStore };
