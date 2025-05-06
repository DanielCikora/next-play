"use client";
import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return {
    search,
    handleChange,
  };
};
