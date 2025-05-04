"use client";
import { PaginationPropsDataTypes } from "@/types/props";
export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationPropsDataTypes) {
  return (
    <nav className='mt-6 flex items-center justify-center w-full gap-2 flex-wrap'>
      {Array.from({ length: totalPages }).map((_, i) => {
        const page: number = i + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`cursor-pointer w-10 h-10 rounded border ${
              currentPage === page ? "bg-burnt-orange font-bold" : "bg-charcoal"
            }`}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
}
