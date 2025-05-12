"use client";

import { useFavoriteStore } from "@/store/store";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function FavoritesPage() {
  const { favorites } = useFavoriteStore();
  return (
    <main className='min-h-dvh pt-24'>
      <div className='wrapper'>
        <section className='favorites-content'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            Your Favorite Games
          </h2>
          <div className='grid place-items-center gap-5 custom-grid'>
            {favorites.length === 0 ? (
              <section className='min-h-dvh pt-20 grid place-items-center text-center'>
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
              </section>
            ) : (
              favorites.map((game) => <Card key={game.id} game={game} />)
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
