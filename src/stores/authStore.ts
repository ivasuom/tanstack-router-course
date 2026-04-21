import { create } from "zustand";

interface AuthState {
  username: string | null;
  logIn: (username: string) => void;
  logOut: () => void;
  isAuthenticated: () => boolean;
  updateUsername: (username: string) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  username: null,
  logIn: (username) => set({ username }),
  logOut: () => set({ username: null }),
  isAuthenticated: () => get().username !== null,
  updateUsername: (username) => set({ username }),
}));
