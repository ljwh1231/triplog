import { AuthApiType } from '@repo/apis';
import { create } from 'zustand';

type AuthStore = {
  user: AuthApiType.GetProfileResponse | null;
  setUser: (user: AuthApiType.GetProfileResponse | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
