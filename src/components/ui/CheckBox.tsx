import { CheckBoxPropsDataTypes } from "@/types/props";
export default function CheckBox({
  name,
  htmlFor,
  labelText,
  value,
  onChange,
}: CheckBoxPropsDataTypes) {
  return (
    <label
      htmlFor={htmlFor}
      className='flex items-center gap-2 font-medium text-xl cursor-pointer'
    >
      <input
        onChange={onChange}
        value={value}
        name={name}
        id={htmlFor}
        type='radio'
        className='peer hidden'
        multiple={false}
      />
      <div className='w-6 h-6 rounded-sm border-2 border-orange-500 flex items-center justify-center peer-checked:bg-orange-500 transition-colors' />
      {labelText}
    </label>
  );
}
