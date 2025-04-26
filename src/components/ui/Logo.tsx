import Link from "next/link";
export default function Logo() {
  return (
    <Link href='/' className='block max-w-32 w-full h-auto'>
      <img
        className='block w-full h-auto'
        src='/images/NextPlayDarkModeIcon.png'
        alt='logo'
      />
    </Link>
  );
}
