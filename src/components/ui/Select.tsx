import { SelectPropsDataTypes } from "@/types/props";
export default function Select({
  onChange,
  value,
  options,
}: SelectPropsDataTypes) {
  return (
    <select
      onChange={onChange}
      value={value}
      className='p-2 border border-solid border-white rounded text-white bg-charcoal'
    >
      {options.map((option, i) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  );
}
