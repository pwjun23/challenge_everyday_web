// store/authStore.ts
import { create } from "zustand";

interface AuthState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
  role: string | null;
  setUser: (user: any | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setRole: (role: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  role: null,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setRole: (role) => set({ role }),
}));

export default useAuthStore;