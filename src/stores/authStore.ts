import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  username: string | null;
  logIn: (username: string) => void;
  logOut: () => void;
  isAuthenticated: () => boolean;
  updateUsername: (username: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      username: null,
      logIn: (username) => set({ username }),
      logOut: () => set({ username: null }),
      isAuthenticated: () => get().username !== null,
      updateUsername: (username) => set({ username }),
    }),
    { name: "auth-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
