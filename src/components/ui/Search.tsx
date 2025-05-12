import { SearchPropsDataTypes } from "@/types/props";
export default function Search({
  onChange,
  value,
  ariaLabel,
}: SearchPropsDataTypes) {
  return (
    <input
      name='search'
      type='text'
      placeholder='Search Game...'
      value={value}
      aria-label={ariaLabel}
      autoComplete='off'
      className='block selection:outline-none focus:ringt-0 outline-none w-full max-w-[700px] bg-charcoal border border-solid border-white p-3 rounded'
      onChange={onChange}
    />
  );
}
