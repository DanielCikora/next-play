import { SortingOptions } from "./games";

export type FiltersStoreDataTypes = {
  genre: string;
  platform: string;
  setGenre: (genre: string) => void;
  setPlatform: (platform: string) => void;
};

export type SortingStoreDataTypes = {
  sortingOption: SortingOptions;
  setSortingOption: (sortingOption: SortingOptions) => void;
};
