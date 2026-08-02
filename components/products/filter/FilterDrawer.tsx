"use client";

import { CategoryFilter } from "@/lib/filter-config";
import { PriceRange } from "@/lib/prisma-types";

import FilterSidebar from "./FilterSidebar";
import { useEffect } from "react";

type FilterDrawerProps = {
  open: boolean;
  onClose: () => void;

  productsCount: number;

  filters: CategoryFilter[];
  priceRange: PriceRange;

  hasFilters: boolean;
  onClear: () => void;
};

export default function FilterDrawer({
  open,
  onClose,
  productsCount,
  filters,
  priceRange,
  hasFilters,
  onClear,
}: FilterDrawerProps) {
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999 bg-white overflow-y-auto max-h-dvh lg:hidden">
      <div className="px-6 pb-20 sm:px-8 md:px-10">
        <FilterSidebar
          filters={filters}
          priceRange={priceRange}
          hasFilters={hasFilters}
          onClear={onClear}
        />

        <div className="fixed inset-x-0 bottom-0 bg-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:px-8 md:px-10">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg bg-primary py-3 text-white"
          >
            View {productsCount} items
          </button>
        </div>
      </div>
    </div>
  );
}
