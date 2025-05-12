import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  FiltersStoreDataTypes,
  SortingStoreDataTypes,
  FavoritesStoreDataTypes,
} from "@/types/store";
import { SortingOptions } from "@/types/games";

export const useFiltersStore = create<FiltersStoreDataTypes>((set) => ({
  genre: "All",
  platform: "All",
  setGenre: (genre) => set({ genre }),
  setPlatform: (platform) => set({ platform }),
}));

export const useSortingStore = create<SortingStoreDataTypes>((set) => ({
  sortingOption: SortingOptions.ReleaseDateNewest,
  setSortingOption: (sortingOption) => set({ sortingOption }),
}));

export const useFavoriteStore = create<FavoritesStoreDataTypes>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (game) => {
        if (!get().favorites.find((g) => g.id === game.id)) {
          set({ favorites: [...get().favorites, game] });
        }
      },
      removeFavorite: (id) => {
        set({ favorites: get().favorites.filter((g) => g.id !== id) });
      },
      isFavorite: (id) => {
        return get().favorites.some((g) => g.id === id);
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
