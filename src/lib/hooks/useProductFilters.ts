"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >(() => {
    const filters: Record<string, string[]> = {};

    searchParams.forEach((value, key) => {
      if (
        key === "category" ||
        key === "minPrice" ||
        key === "maxPrice" ||
        key === "sort" ||
        key === "page"
      ) {
        return;
      }

      filters[key] = value.split(",");
    });

    return filters;
  });

  const handleFilterChange = (filterSlug: string, value: string) => {
    const currentValues = selectedFilters[filterSlug] ?? [];

    const newValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setSelectedFilters((prev) => ({
      ...prev,
      [filterSlug]: newValues,
    }));

    const params = new URLSearchParams(searchParams.toString());

    params.delete("page");

    if (newValues.length === 0) {
      params.delete(filterSlug);
    } else {
      params.set(filterSlug, newValues.join(","));
    }

    router.push(`?${params.toString()}`);
  };

  const clearAllFilters = () => {
    setSelectedFilters({});

    const category = searchParams.get("category");

    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    router.push(`?${params.toString()}`);
  };

  return {
    selectedFilters,
    handleFilterChange,
    clearAllFilters,
  };
}
