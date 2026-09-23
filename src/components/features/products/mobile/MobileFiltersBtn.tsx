"use client";

import { Setting4 } from "iconsax-react";
import { useState } from "react";
import MobileFiltersSection from "./MobileFiltersSection";

type CategoryFiltersProps = {
  id: string;
  name: string;
  options: {
    id: string;
    name: string;
    value: string;
  }[];
  slug: string;
};
type PriceRange = {
  min: number;
  max: number;
};
type MobileFiltersProps = {
  productsCount: number;
  filters: CategoryFiltersProps[];
  priceRange: PriceRange;
};

function MobileFiltersBtn({
  productsCount,
  filters,
  priceRange,
}: MobileFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsFilterOpen(true)}
        className="w-full flex items-center gap-2 p-2 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]"
      >
        <Setting4 variant="Outline" color="black" size={16} />

        <span className="text-xs font-light md:text-base">Filters</span>
      </button>

      <MobileFiltersSection
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        productsCount={productsCount}
        filters={filters}
        priceRange={priceRange}
      />
    </>
  );
}

export default MobileFiltersBtn;
