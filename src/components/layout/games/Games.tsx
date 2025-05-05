"use client";
import Card from "@/components/ui/Card";
import Loader from "@/components/ui/Loader";
import Pagination from "@/components/layout/navigation/Pagination";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSortingStore } from "@/store/store";
import Select from "@/components/ui/Select";
import { useFilteredSortedGames } from "@/hooks/useFilteredSortedGames";
import { SortingOptions } from "@/types/games";
import Search from "@/components/ui/Search";
export default function Games() {
  const [search, setSearch] = useState<string>("");

  const sortingOption = useSortingStore((state) => state.sortingOption);
  const setSortingOption = useSortingStore((state) => state.setSortingOption);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 16;

  const { data, isError, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  const sortedGames = useFilteredSortedGames(data);
  if (isLoading) {
    return <p>Loading game...</p>;
  }

  if (isError || !data || data.length === 0) return <Loader />;

  const totalPages = Math.ceil(sortedGames.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedGames?.slice(startIndex, endIndex);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const filteredItems = currentItems.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className='games min-h-dvh pt-26'>
      <div className='wrapper'>
        <div className='mb-6 w-full flex justify-end'>
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
        <div className='grid place-items-center gap-5 2xl:grid-cols-4 xl:grid-cols-2 grid-cols-1'>
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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
}
