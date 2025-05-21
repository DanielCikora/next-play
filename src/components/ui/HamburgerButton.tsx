import { HamburgerButtonPropsDataTypes } from "@/types/props";
export default function HamburgerButton({
  onClick,
  openMenu,
}: HamburgerButtonPropsDataTypes) {
  return (
    <button
      className='button cursor-pointer md:hidden flex items-end flex-col gap-1.5'
      type='button'
      onClick={onClick}
    >
      <span
        className={`rounded block h-1 w-9 transition-all duration-300 ease-in-out bg-white ${
          openMenu && "w-10 translate-y-[9px] translate-x-[5px] rotate-[45deg]"
        }`}
      ></span>
      <span
        className={`rounded block h-1 w-11 duration-300 opacity-100 ease-in-out bg-white ${
          openMenu && "translate-x-[100px] opacity-0"
        }`}
      ></span>
      <span
        className={`rounded block h-1 w-7 duration-300 ease-in-out bg-white ${
          openMenu &&
          "w-10 -translate-y-[11px] translate-x-[5px] -rotate-[45deg]"
        }`}
      ></span>
    </button>
  );
}
