import Games from "@/components/layout/games/Games";
import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function GamesPage() {
  return (
    <main className='games-page'>
      <div className='wrapper flex justify-between'>
        <Sidebar />
        <Games />
      </div>
    </main>
  );
}
