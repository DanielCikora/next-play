export type FetchGamesDataTypes = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};
export async function fetchGames(): Promise<FetchGamesDataTypes[]> {
  const res = await fetch("/api/games", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch games.");
  const data = await res.json();
  return data as FetchGamesDataTypes[];
}
