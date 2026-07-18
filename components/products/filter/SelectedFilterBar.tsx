"use client";

import { useProductFilters } from "@/lib/hooks/useProductFilters";
import { CloseSquare } from "iconsax-react";

function SelectedFilterBar() {
  const { selectedFilters, toggleFilter } = useProductFilters();

  const selectedItems = Object.entries(selectedFilters).flatMap(
    ([title, values]) =>
      values.map((value) => ({
        title,
        value,
      })),
  );

  if (selectedItems.length === 0) return null;

  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-wrap gap-3">
        {selectedItems.map(({ title, value }) => (
          <button
            key={`${title}-${value}`}
            onClick={() => toggleFilter(title, value)}
            className="min-w-33 flex items-center justify-between gap-2 rounded-lg border-2 px-2 py-2 text-sm"
          >
            <span>{value}</span>
            <CloseSquare size={24} color="black" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectedFilterBar;
