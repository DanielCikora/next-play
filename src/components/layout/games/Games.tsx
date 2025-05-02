"use client";
import Pagination from "@/components/ui/Pagination";
import { fetchGames } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
export default function Games() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });
  if (isLoading) {
    return <p>Loading game...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <section className='games min-h-dvh pt-26'>
      <div className='wrapper'>
        <Pagination data={data} />
      </div>
    </section>
  );
}
