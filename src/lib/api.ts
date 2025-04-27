import { FetchGamesDataTypes } from "@/types/games";
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
