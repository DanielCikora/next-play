"use client";
import CheckBox from "@/components/ui/CheckBox";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import CategoryTitle from "./CategoryTitle";
import { useState } from "react";
export default function Sidebar() {
  const [input, setInput] = useState<string>("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    select: (games) => games.map((game) => game.genre),
  });

  if (isLoading) return <h2 className='text-center'>Loading games....</h2>;
  if (isError) return <h2 className='text-center'>Error: {error.message}</h2>;

  const genreArray = Array.from(
    new Set((data ?? []).map((genre) => genre.trim()))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <aside className='sidebar fixed w-full h-full'>
      <div className='wrapper'>
        <div className='sidebar-content px-7 py-6 rounded-lg bg-charcoal w-full max-w-[300px] h-full'>
          <CategoryTitle titleText='Categories' />
          <ul className='categories'>
            {genreArray.map((genre, index) => (
              <li key={index}>
                <CheckBox
                  onChange={() => setInput(genre)}
                  value={input}
                  htmlFor={genre}
                  labelText={genre}
                  name='category'
                />
              </li>
            ))}
          </ul>
          <CategoryTitle titleText='Platforms' />
          <CategoryTitle titleText='Price' />
        </div>
      </div>
    </aside>
  );
}
