"use client";
import Card from "@/components/ui/Card";
import Loader from "@/components/ui/Loader";
import Pagination from "@/components/layout/navigation/Pagination";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useSortingStore } from "@/store/store";
import Select from "@/components/ui/Select";
import { useFilteredSortedGames } from "@/hooks/useFilteredSortedGames";
import { SortingOptions } from "@/types/games";
import Search from "@/components/ui/Search";
import { usePagination } from "@/hooks/usePagination";
import { useSearch } from "@/hooks/useSearch";
export default function Games() {
  const { handleChange, search } = useSearch();
  const sortingOption = useSortingStore((state) => state.sortingOption);
  const setSortingOption = useSortingStore((state) => state.setSortingOption);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  const sortedGames = useFilteredSortedGames(data);

  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(sortedGames);

  if (isLoading) {
    return <p>Loading game...</p>;
  }

  if (isError || !data || data.length === 0) return <Loader />;

  const filteredItems =
    search.length > 0
      ? sortedGames.filter((game) =>
          game.title.toLowerCase().includes(search.toLowerCase())
        )
      : currentItems;

  return (
    <section className='games min-h-dvh md:pt-26 w-full'>
      <div className='md:px-5 w-full'>
        <div className='mb-6 w-full flex md:flex-row flex-col gap-5'>
          <Search
            onChange={handleChange}
            value={search}
            ariaLabel='Search games'
          />
          <Select
            onChange={(e) => setSortingOption(e.target.value as SortingOptions)}
            options={Object.values(SortingOptions)}
            value={sortingOption}
            name='sorting'
          />
        </div>
        <div className='grid place-items-center gap-5 custom-grid'>
          {filteredItems.map((game) => (
            <Card
              key={game.id}
              alt={game.title}
              src={game.thumbnail}
              gameUrl={game.game_url}
              genre={game.genre}
              publisher={game.publisher}
              viewMoreUrl={game.freetogame_profile_url}
              cardTitle={game.title}
              platformName={game.platform}
            />
          ))}
        </div>
      </div>
      {search.length === 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </section>
  );
}
