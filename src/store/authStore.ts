import { create } from 'zustand';
import { createClient } from '@supabase/supabase-js';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, type: 'individual' | 'dealer') => Promise<void>;
  signOut: () => Promise<void>;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  signIn: async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  },
  signUp: async (email, password, type) => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          type,
        },
      },
    });
    if (error) throw error;
    return data;
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null });
  },
}));