import { FetchGamesDataTypes, SortingOptions } from "./games";

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

export type FavoritesStoreDataTypes = {
  favorites: FetchGamesDataTypes[];
  addFavorite: (game: FetchGamesDataTypes) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};
