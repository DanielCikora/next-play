"use client";
import { PaginationPropsDataTypes } from "@/types/props";
import { useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
export default function Pagination({ data }: PaginationPropsDataTypes) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 16;
  if (!data || data.length === 0) {
    return <Loader />;
  }
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.slice(startIndex, endIndex);
  return (
    <div>
      <div className='grid place-items-center gap-5 2xl:grid-cols-4 xl:grid-cols-2 grid-cols-1'>
        {currentItems?.map((game) => (
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
      <nav className='mt-6 flex items-center justify-center w-full gap-2 flex-wrap'>
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`cursor-pointer px-4 py-2 rounded border ${
                currentPage === page
                  ? "bg-burnt-orange font-bold"
                  : "bg-gray-200 text-black"
              }`}
            >
              {page}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
