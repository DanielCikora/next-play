import { FetchGamesDataTypes } from "@/types/games";
import { useState } from "react";
export const usePagination = (items: FetchGamesDataTypes[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 15;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  };
};
