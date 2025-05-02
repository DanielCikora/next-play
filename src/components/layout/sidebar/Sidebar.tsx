"use client";
import CheckBox from "@/components/ui/CheckBox";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import CategoryTitle from "./CategoryTitle";
import { useState } from "react";
import Loader from "@/components/ui/Loader";
export default function Sidebar() {
  const [input, setInput] = useState<string>("All");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    select: (games) => games.map((game) => game.genre),
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2 className='text-center'>Error: {error.message}</h2>;

  const genreArray = Array.from(
    new Set((data ?? []).map((genre) => genre.trim()))
  ).sort((a, b) => a.localeCompare(b));

  const categories = ["All", ...genreArray];

  return (
    <aside className='sidebar sticky top-0 left-0 pt-26 h-full w-full max-w-[350px]'>
      <div className='sidebar-content px-7 py-6 rounded-lg bg-charcoal'>
        <CategoryTitle titleText='Categories' />
        <ul className='categories'>
          {categories.map((genre, index) => (
            <li key={index}>
              <CheckBox
                onChange={() => setInput(`${genre}`)}
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
    </aside>
  );
}
