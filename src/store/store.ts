import { create } from "zustand";
export const useGenreStore = create((set) => ({
  selectedGenre: "",
  setGenre: (genre: string) => set({ selectedGenre: genre }),
}));
