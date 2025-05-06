import { SelectPropsDataTypes } from "@/types/props";
export default function Select({
  onChange,
  value,
  options,
  name,
}: SelectPropsDataTypes) {
  return (
    <select
      onChange={onChange}
      value={value}
      name={name}
      className='p-3 border border-solid border-white rounded text-white bg-charcoal'
    >
      {options.map((option, i) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  );
}
