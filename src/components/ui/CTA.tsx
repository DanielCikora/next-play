import Link from "next/link";
import { CTAPropsDataTypes } from "@/types/props";
export default function CTA({ href, ctaText, className }: CTAPropsDataTypes) {
  return (
    <Link
      className={`block text-lg font-medium bg-burnt-orange hover:bg-light-orange px-4 py-1 rounded-md text-white ${className}`}
      href={href}
    >
      {ctaText}
    </Link>
  );
}
