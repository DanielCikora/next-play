import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch("https://www.freetogame.com/api/games");
  const data = await res.json();
  return NextResponse.json(data);
}
