"use client";

import { useEffect, useState } from "react";
import { Setting4 } from "iconsax-react";

import { CategoryFilter } from "@/lib/filter-config";
import { PriceRange } from "@/lib/prisma-types";

import SortDropdown from "./SortDropdown";
import FilterDrawer from "../filter/FilterDrawer";
import { SortValue } from "@/data/sortOptions";

type ProductsToolbarProps = {
  productsCount: number;
  filters: CategoryFilter[];
  priceRange: PriceRange;
  hasFilters: boolean;
  onClear: () => void;

  selectedSort: SortValue;

  onSortChange: (value: SortValue) => void;
};

export default function ProductsToolbar({
  productsCount,
  filters,
  priceRange,
  hasFilters,
  onClear,
  selectedSort,
  onSortChange,
}: ProductsToolbarProps) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 lg:justify-end">
        <div className="block w-1/2 xs:w-fit lg:hidden">
          <button
            type="button"
            onClick={() => setIsFilterDrawerOpen(true)}
            className="w-full flex items-center gap-2 p-2 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]"
          >
            <Setting4 variant="Outline" color="black" size={16} />

            <span className="text-xs font-light md:text-base">Filters</span>
          </button>
        </div>

        <div className="w-1/2 xs:w-fit">
          <SortDropdown selected={selectedSort} onChange={onSortChange} />
        </div>
      </div>

      <FilterDrawer
        open={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        productsCount={productsCount}
        filters={filters}
        priceRange={priceRange}
        hasFilters={hasFilters}
        onClear={onClear}
      />
    </>
  );
}
