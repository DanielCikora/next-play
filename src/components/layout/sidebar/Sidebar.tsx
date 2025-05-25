"use client";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import CategoryTitle from "./CategoryTitle";
import Loader from "@/components/ui/Loader";
import { useFiltersStore } from "@/store/store";
import RadioButton from "@/components/ui/RadioButton";
import { useEffect, useState } from "react";
import useIsTablet from "@/hooks/useIsTablet";
export default function Sidebar() {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(true);
  const isTablet = useIsTablet();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  useEffect(() => {
    if (isTablet) {
      setFiltersOpen(false);
    } else {
      setFiltersOpen(true);
    }
  }, [isTablet]);

  const toggleFiltersOpen = () => {
    setFiltersOpen((prevState) => !prevState);
  };

  const gameGenre = useFiltersStore((state) => state.genre);
  const setGenre = useFiltersStore((state) => state.setGenre);

  const gamePlatform = useFiltersStore((state) => state.platform);
  const setPlatform = useFiltersStore((state) => state.setPlatform);

  if (isLoading) return <Loader />;
  if (isError) return <h2 className='text-center'>Error: {error.message}</h2>;

  const genreArray = Array.from(
    new Set((data ?? []).map((game) => game.genre.trim()))
  ).sort((a, b) => a.localeCompare(b));

  const platformArray = Array.from(
    new Set((data ?? []).map((game) => game.platform.trim()))
  ).sort((a, b) => a.localeCompare(b));

  const categories = ["All", ...genreArray];
  const platforms = ["All", ...platformArray];

  return (
    <aside className='sidebar md:sticky static top-0 left-0 pt-26 w-full md:max-w-[350px] max-w-full mb-5'>
      <button
        type='button'
        onClick={toggleFiltersOpen}
        className='button cursor-pointer text-white px-3 py-4 md:hidden bg-[#1A1A1A] block border border-solid hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 ease-in-out border-white rounded text-center w-full font-semibold'
      >
        Filters
      </button>
      <div
        className={`sidebar-content px-7 rounded-lg bg-charcoal ${
          filtersOpen
            ? "h-full opacity-100 py-6 max-h-[1000px] max-w-full transition-all ease-in-out duration-700"
            : "h-full opacity-0 max-h-0 overflow-hidden transition-all ease-in-out duration-700"
        }`}
      >
        <CategoryTitle titleText='Categories' />
        <ul className='categories py-4 md:block grid sm:grid-cols-3 gap-1.5 xs:grid-cols-2 grid-cols-1'>
          {categories.map((genre, index) => (
            <li key={index}>
              <RadioButton
                onChange={() => setGenre(genre)}
                value={gameGenre}
                htmlFor={`${genre}-category`}
                labelText={genre}
                name='category'
                checked={gameGenre === genre}
              />
            </li>
          ))}
        </ul>
        <CategoryTitle titleText='Platforms' />
        <ul className='platforms py-4 md:block grid sm:grid-cols-3 gap-1.5 xs:grid-cols-2 grid-cols-1'>
          {platforms.map((platform, i) => (
            <li key={i}>
              <RadioButton
                onChange={() => setPlatform(platform)}
                value={gamePlatform}
                htmlFor={`${platform}-platform`}
                labelText={platform}
                name='platform'
                checked={gamePlatform === platform}
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
