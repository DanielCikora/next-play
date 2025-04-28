"use client";
import Card from "@/components/ui/Card";
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
      <div className='wrapper grid place-items-center gap-5 2xl:grid-cols-4 xl:grid-cols-2 grid-cols-1'>
        {data?.map((game) => (
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
    </section>
  );
}
