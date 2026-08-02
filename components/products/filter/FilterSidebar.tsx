"use client";

import { CategoryFilter } from "@/lib/filter-config";
import { PriceRange } from "@/lib/prisma-types";

import SaleFilter from "./DiscountFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import FilterSection from "./FilterSection";

type FilterSidebarProps = {
  filters: CategoryFilter[];
  priceRange: PriceRange;
  hasFilters: boolean;
  onClear: () => void;
};

export default function FilterSidebar({
  filters,
  priceRange,
  hasFilters,
  onClear,
}: FilterSidebarProps) {
  return (
    <section className="w-full mb-20">
      <header className="flex items-center justify-between px-4">
        <h2 className="py-4 text-xl font-medium">Filters</h2>

        <button
          type="button"
          onClick={onClear}
          disabled={!hasFilters}
          className={`px-2 py-3 lg:px-13 lg:py-4.5 ${
            hasFilters
              ? "cursor-pointer text-primary"
              : "cursor-not-allowed text-gray-400"
          }`}
        >
          Clear all
        </button>
      </header>

      <SaleFilter />

      <PriceRangeFilter priceRange={priceRange} />

      {filters.map((filter) => (
        <FilterSection key={filter.title} filter={filter} />
      ))}
    </section>
  );
}
