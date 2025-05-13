"use client";
import { useFavoriteStore } from "@/store/store";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function FavoritesPage() {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <main className='min-h-dvh pt-24 bg-gunmetal'>
      <div className='md:px-5 w-full max-w-fit mx-auto'>
        <section className='favorites-content'>
          <h2 className='text-3xl font-bold mb-20 text-center'>
            Your Favorite Games
          </h2>
          <div className='grid place-items-center gap-5 custom-grid'>
            {favorites.length === 0 ? (
              <div className='min-h-dvh pt-20 grid place-items-center text-center'>
                <div className='flex flex-col gap-10'>
                  <h2 className='text-4xl font-medium'>No favorites yet</h2>
                  <p className='text-xl'>
                    Go add some games you love{" "}
                    <FontAwesomeIcon
                      className='block text-3xl text-burnt-orange'
                      icon={faHeart}
                    />
                  </p>
                </div>
              </div>
            ) : (
              favorites.map((game) => <Card key={game.id} game={game} />)
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
