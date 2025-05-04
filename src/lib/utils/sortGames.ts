import { FetchGamesDataTypes, SortingOptions } from "@/types/games";
export function sortGames(
  games: FetchGamesDataTypes[],
  sortBy: SortingOptions
): FetchGamesDataTypes[] {
  return [...games].sort((a, b) => {
    switch (sortBy) {
      case SortingOptions.TitleAZ:
        return a.title.localeCompare(b.title);
      case SortingOptions.TitleZA:
        return b.title.localeCompare(a.title);
      case SortingOptions.ReleaseDateNewest:
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        );
      case SortingOptions.ReleaseDateOldest:
        return (
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime()
        );
      default:
        return 0;
    }
  });
}
