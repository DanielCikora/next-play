import { SearchPropsDataTypes } from "@/types/props";
export default function Search({
  onChange,
  value,
  ariaLabel,
}: SearchPropsDataTypes) {
  return (
    <input
      name='search'
      type='search'
      placeholder='Search Game...'
      value={value}
      aria-label={ariaLabel}
      autoComplete='off'
      className='block border border-solid border-white p-2 rounded'
      onChange={onChange}
    />
  );
}
