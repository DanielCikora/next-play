import Games from "@/components/layout/games/Games";
import Sidebar from "@/components/layout/sidebar/Sidebar";
export default function Home() {
  return (
    <main className='games-page'>
      <div className='wrapper flex md:flex-row flex-col md:justify-between md:items-start items-center'>
        <Sidebar />
        <Games />
      </div>
    </main>
  );
}
