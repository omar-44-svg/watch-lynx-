import { create } from 'zustand';
import { createClient } from '@supabase/supabase-js';
import { Watch } from '../types';

interface WatchState {
  savedWatches: string[];
  toggleSaved: (watchId: string) => void;
  isSaved: (watchId: string) => boolean;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const useWatchStore = create<WatchState>((set, get) => ({
  savedWatches: [],
  toggleSaved: (watchId) => {
    set((state) => {
      const isSaved = state.savedWatches.includes(watchId);
      return {
        savedWatches: isSaved
          ? state.savedWatches.filter((id) => id !== watchId)
          : [...state.savedWatches, watchId],
      };
    });
  },
  isSaved: (watchId) => {
    return get().savedWatches.includes(watchId);
  },
}));