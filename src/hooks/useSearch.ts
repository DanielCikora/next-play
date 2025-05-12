"use client";
import { useRef, useState } from "react";
export const useSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.preventDefault();

    setSearch(value);
    setLoadingSearch(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setLoadingSearch(false);
    }, 800);
  };

  return {
    search,
    handleChange,
    loadingSearch,
  };
};
