import { CardPropsDataTypes } from "@/types/props";
import CTA from "./CTA";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
export default function Card({
  src,
  cardTitle,
  alt,
  platformName,
  genre,
  gameUrl,
  publisher,
  viewMoreUrl,
}: CardPropsDataTypes) {
  return (
    <CardContainer containerClassName='py-0 w-full'>
      <CardBody className='card w-full grid place-items-center h-full p-4 rounded-lg bg-charcoal'>
        <CardItem translateZ='50' className='w-full'>
          <img
            className='w-full h-auto max-w-[400px] rounded-md mb-4'
            src={src}
            alt={alt}
            loading='lazy'
          />
        </CardItem>
        <CardItem translateZ='20' className='text-left w-full'>
          <h2 className='text-2xl font-bold min-h-[70px]'>{cardTitle}</h2>
          <h3 className='text-xl font-semibold'>{genre}</h3>
          <h4 className='text-lg min-h-[60px]'>{platformName}</h4>
          <h5 className='text-md min-h-[40px]'>{publisher}</h5>
        </CardItem>
        <CardItem translateZ='20' className='flex justify-between gap-2 w-full'>
          <CTA ctaText='Details' href={viewMoreUrl} />
          <CTA ctaText='Download' href={gameUrl} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
