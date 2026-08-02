"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getSelectedFiltersFromSearchParams } from "../utils/filter";

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedFilters = getSelectedFiltersFromSearchParams(searchParams);

  const selectedCategory = searchParams.get("category") ?? "All";

  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const selectedMinPrice = minPrice !== null ? Number(minPrice) : null;

  const selectedMaxPrice = maxPrice !== null ? Number(maxPrice) : null;

  const hasPriceFilter = selectedMinPrice !== null || selectedMaxPrice !== null;

  const hasSaleFilter = searchParams.get("sale") === "true";

  const hasAttributeFilters = Object.keys(selectedFilters).length > 0;

  const hasFilters = hasPriceFilter || hasSaleFilter || hasAttributeFilters;

  const setPriceRange = (min: number, max: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("minPrice", String(min));
    params.set("maxPrice", String(max));

    router.push(`/products?${params.toString()}`);
  };

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
    selectedMinPrice,
    selectedMaxPrice,
    setPriceRange,
    clearFilters,
    toggleFilter,
  };
}
