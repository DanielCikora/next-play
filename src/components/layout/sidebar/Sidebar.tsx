"use client";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import CategoryTitle from "./CategoryTitle";
import Loader from "@/components/ui/Loader";
import { useFiltersStore } from "@/store/store";
import RadioButton from "@/components/ui/RadioButton";
export default function Sidebar() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

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
    <aside className='sidebar sticky top-0 left-0 pt-26 h-full w-full max-w-[350px]'>
      <div className='sidebar-content px-7 py-6 rounded-lg bg-charcoal'>
        <CategoryTitle titleText='Categories' />
        <ul className='categories py-4'>
          {categories.map((genre, index) => (
            <li key={index}>
              <RadioButton
                onChange={() => setGenre(genre)}
                value={gameGenre}
                htmlFor={genre}
                labelText={genre}
                name='category'
                checked={gameGenre === genre}
              />
            </li>
          ))}
        </ul>
        <CategoryTitle titleText='Platforms' />
        <ul className='platforms py-4'>
          {platforms.map((platform, i) => (
            <li key={i}>
              <RadioButton
                onChange={() => setPlatform(platform)}
                value={gamePlatform}
                htmlFor={platform}
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
