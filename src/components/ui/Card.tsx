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
    <CardContainer containerClassName='py-0 items-start justify-start'>
      <CardBody className='card w-fit grid place-items-center h-full p-4 rounded-lg bg-gray-700'>
        <CardItem translateZ='50' className='w-full'>
          <img
            className='w-full h-auto max-w-[400px] rounded-md mb-4'
            src={src}
            alt={alt}
            loading='lazy'
          />
        </CardItem>
        <CardItem translateZ='20' className='text-left w-full mb-4'>
          <h2 className='text-2xl font-semibold'>{cardTitle}</h2>
          <h3 className='text-xl'>{genre}</h3>
          <h4 className='text-lg'>{platformName}</h4>
          <h5 className='text-md'>{publisher}</h5>
        </CardItem>
        <CardItem translateZ='20' className='flex justify-between gap-2 w-full'>
          <CTA ctaText='Details' href={viewMoreUrl} />
          <CTA ctaText='Download' href={gameUrl} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
