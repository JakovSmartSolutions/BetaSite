import { User } from 'types/auth.types';
import create from 'zustand';

interface State {
  user: null | User;
  setUser: (user: User | null) => void;
}

const useAuthStore = create<State>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));

export { useAuthStore };
