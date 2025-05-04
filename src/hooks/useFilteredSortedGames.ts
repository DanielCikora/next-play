import { FetchGamesDataTypes } from "@/types/games";
import { useFiltersStore, useSortingStore } from "@/store/store";
import { sortGames } from "@/lib/utils/sortGames";

export function useFilteredSortedGames(
  data?: FetchGamesDataTypes[]
): FetchGamesDataTypes[] {
  const genre = useFiltersStore((state) => state.genre);
  const platform = useFiltersStore((state) => state.platform);
  const sortingOption = useSortingStore((state) => state.sortingOption);

  if (!data) return [];

  const filtered = data.filter((game) => {
    const genreMatch = genre === "All" || game.genre === genre;
    const platformMatch = platform === "All" || game.platform === platform;
    return genreMatch && platformMatch;
  });

  return sortGames(filtered, sortingOption);
}
