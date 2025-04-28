import { ButtonPropsDataTypes } from "@/types/props";
export default function Button({ buttonText, onClick }: ButtonPropsDataTypes) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='bg-burnt-orange hover:bg-light-orange rounded-xl'
    >
      {buttonText}
    </button>
  );
}
