import { CheckBoxPropsDataTypes } from "@/types/props";
export default function CheckBox({
  name,
  htmlFor,
  labelText,
}: CheckBoxPropsDataTypes) {
  return (
    <div className='flex gap-2 items-center'>
      <input name={name} id={htmlFor} type='checkbox' className='block' />
      <label htmlFor={htmlFor} className='block'>
        {labelText}
      </label>
    </div>
  );
}
