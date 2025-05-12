import { useMediaQuery } from "react-responsive";
export default function useIsTablet() {
  return useMediaQuery({ maxWidth: 768 });
}
