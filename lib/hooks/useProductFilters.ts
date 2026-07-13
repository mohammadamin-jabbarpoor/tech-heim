"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getSelectedFiltersFromSearchParams } from "../utils/filter";

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedFilters = getSelectedFiltersFromSearchParams(searchParams);

  const selectedCategory = searchParams.get("category") ?? "All";

  const hasFilters = Object.keys(selectedFilters).length > 0;

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);

    params.forEach((_, key) => {
      if (key !== "category") {
        params.delete(key);
      }
    });

    router.push(`/products?${params.toString()}`);
  };

  const toggleFilter = (title: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    const currentValues = params.get(title)?.split(",") ?? [];

    const exists = currentValues.includes(value);

    const newValues = exists
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    if (newValues.length === 0) {
      params.delete(title);
    } else {
      params.set(title, newValues.join(","));
    }

    router.push(`/products?${params.toString()}`);
  };

  return {
    router,
    searchParams,
    selectedFilters,
    selectedCategory,
    hasFilters,
    clearFilters,
    toggleFilter,
  };
}
