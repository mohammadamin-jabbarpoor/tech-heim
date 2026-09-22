"use client";

import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";

type CategoryFiltersProps = {
  id: string;
  name: string;
  options: {
    id: string;
    slug: string;
    value: string;
  }[];
  slug: string;
};

function FilterSidebar({ filters }: { filters: CategoryFiltersProps[] }) {
  const [checked, setChecked] = useState<string[]>([]);
  console.log(checked);

  const handleCheck = (slug: string) => {
    setChecked((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug],
    );
  };

  return (
    <section className="w-full mb-20">
      <header className="flex items-center justify-between px-4">
        <h2 className="py-4 text-xl font-medium">Filters</h2>

        <button
          type="button"
          className="cursor-pointer text-sm text-primary xl:hover:text-primary-400 text-nowrap"
        >
          Clear all
        </button>
      </header>
      {filters.map((filter) => (
        <div key={filter.name}>
          <div className="border-b border-b-gray-400 pb-2">
            <div className="w-full flex items-center justify-between p-4 cursor-pointer">
              <span className="font-light text-base md:text-lg lg:text-xl">
                {filter.name}
              </span>
              <ArrowDown2
                size={18}
                color="#292D32"
                className="transition-transform duration-300"
              />
            </div>
            <div>
              {filter.options.map((option) => (
                <div key={option.id} className="flex items-center gap-4 pl-4">
                  <input
                    id={option.slug}
                    type="checkbox"
                    checked={checked.includes(option.slug)}
                    onChange={() => handleCheck(option.slug)}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor={option.value}
                    className="font-light text-lg cursor-pointer"
                  >
                    {option.value}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FilterSidebar;
