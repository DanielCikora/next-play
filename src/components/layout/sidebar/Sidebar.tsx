"use client";
import CheckBox from "@/components/ui/CheckBox";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
export default function Sidebar() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    select: (games) => games.map((game) => game.genre),
  });
  if (isLoading) return <p>Loading games....</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const genreArray = Array.from(
    new Set((data ?? []).map((genre) => genre.trim()))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <aside className='sidebar fixed w-full h-full'>
      <div className='wrapper'>
        <div className='sidebar-content px-7 py-6 rounded-lg bg-charcoal w-full max-w-[300px] min-h-dvh'>
          <h2>Categories</h2>
          <ul>
            {genreArray.map((genre, index) => (
              <li key={index}>
                <CheckBox htmlFor={genre} labelText={genre} name={genre} />
              </li>
            ))}
          </ul>
          <CheckBox htmlFor='Indy' name='Indy' labelText='Indy' />
          <h2>Platforms</h2>
          <h2>Price</h2>
        </div>
      </div>
    </aside>
  );
}
