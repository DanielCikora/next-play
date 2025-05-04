export type FetchGamesDataTypes = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export enum SortingOptions {
  TitleAZ = "Title (A-Z)",
  TitleZA = "Title (Z-A)",
  ReleaseDateNewest = "Release Date (Newest)",
  ReleaseDateOldest = "Release Date (Oldest)",
}
