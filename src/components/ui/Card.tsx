import { CardPropsDataTypes } from "@/types/props";
import CTA from "./CTA";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useFavoriteStore } from "@/store/store";
export default function Card({ game }: CardPropsDataTypes) {
  const { addFavorite, isFavorite, removeFavorite } = useFavoriteStore();
  const isFav = isFavorite(game.id);
  return (
    <CardContainer containerClassName='py-0 w-full'>
      <CardBody className='card w-full grid place-items-center h-full p-4 rounded-lg bg-charcoal'>
        <CardItem translateZ='50' className='w-full'>
          <img
            className='w-full h-auto max-w-[400px] rounded-md mb-4'
            src={game.thumbnail}
            alt={game.title}
          />
        </CardItem>
        <CardItem translateZ='20' className='text-left w-full'>
          <span className='flex justify-between items-start w-full h-[70px]'>
            <h2 className='text-2xl font-bold'>{game.title}</h2>
            <button
              onClick={() => {
                isFav ? removeFavorite(game.id) : addFavorite(game);
              }}
              type='button'
              className='button__fav cursor-pointer'
              aria-label='Add or Remove from Favorites'
            >
              {isFav ? (
                <FontAwesomeIcon
                  className='block text-3xl text-burnt-orange'
                  icon={solidHeart}
                />
              ) : (
                <FontAwesomeIcon
                  className='block text-3xl text-burnt-orange'
                  icon={regularHeart}
                />
              )}
            </button>
          </span>
          <h3 className='text-xl font-semibold'>{game.genre}</h3>
          <h4 className='text-lg min-h-[60px]'>{game.platform}</h4>
          <h5 className='text-md min-h-[40px]'>{game.publisher}</h5>
        </CardItem>
        <CardItem translateZ='20' className='flex justify-between gap-2 w-full'>
          <CTA ctaText='Details' href={game.freetogame_profile_url} />
          <CTA ctaText='Download' href={game.game_url} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
