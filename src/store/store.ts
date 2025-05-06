import { create } from "zustand";
import { FiltersStoreDataTypes, SortingStoreDataTypes } from "@/types/store";
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
