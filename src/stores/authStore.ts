import { create } from "zustand";

interface AuthState {
  username: string | null;
  logIn: (username: string) => void;
  logOut: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  username: null,
  logIn: (username) => set({ username }),
  logOut: () => set({ username: null }),
  isAuthenticated: () => get().username !== null,
}));
