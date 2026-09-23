"use client";

import { ArrowDown2 } from "iconsax-react";
import PriceRangeFilter from "./PriceRangeFilter";
import { useState } from "react";

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

type FilterProps = {
  filters: CategoryFiltersProps[];
  priceRange: PriceRange;
  selectedFilters: Record<string, string[]>;
  handleFilterChange: (filterSlug: string, value: string) => void;
  clearAllFilters: () => void;
};

function FilterSidebar({
  filters,
  priceRange,
  selectedFilters,
  handleFilterChange,
  clearAllFilters,
}: FilterProps) {
  const [openFilterId, setOpenFilterId] = useState<string | null>(null);

  return (
    <section className="w-full mb-20">
      <header className="flex items-center justify-between px-4">
        <h2 className="py-4 text-xl font-medium">Filters</h2>

        <button
          type="button"
          onClick={() => {
            clearAllFilters();
            setOpenFilterId(null);
          }}
          className="cursor-pointer text-sm text-primary xl:hover:text-primary-400 text-nowrap"
        >
          Clear all
        </button>
      </header>

      <PriceRangeFilter priceRange={priceRange} />

      {filters.map((filter) => (
        <div key={filter.id}>
          <div className="border-b border-b-gray-400 pb-2">
            <div
              onClick={() =>
                setOpenFilterId((prev) =>
                  prev === filter.id ? null : filter.id,
                )
              }
              className="w-full flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="font-light text-base md:text-lg lg:text-xl">
                {filter.name}
              </span>
              <ArrowDown2
                size={18}
                color="#292D32"
                className={`transition-transform duration-300 ${
                  openFilterId === filter.id ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300
                ${openFilterId === filter.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="space-y-4 mb-8">
                {filter.options.map((option) => {
                  const isChecked =
                    selectedFilters[filter.slug]?.includes(option.value) ??
                    false;

                  return (
                    <div
                      key={option.id}
                      className="flex items-center gap-4 pl-4"
                    >
                      <input
                        id={`${filter.slug}-${option.id}`}
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          handleFilterChange(filter.slug, option.value)
                        }
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor={`${filter.slug}-${option.id}`}
                        className="font-light text-lg cursor-pointer"
                      >
                        {option.value}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FilterSidebar;
