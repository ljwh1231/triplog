import { create } from 'zustand';
import { AuthApiType } from '@repo/apis';

type AuthStore = {
  user: AuthApiType.SignInResponse | null;
  setUser: (user: AuthApiType.SignInResponse | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
