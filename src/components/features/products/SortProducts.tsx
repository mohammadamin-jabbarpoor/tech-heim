"use client";

import { ArrowDown2 } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type SortOption = "newest" | "price-asc" | "price-desc";

const sortOptions: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "price-asc",
    label: "Price: Low to High",
  },
  {
    value: "price-desc",
    label: "Price: High to Low",
  },
];

function SortProducts() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const selected = (searchParams.get("sort") as SortOption) || "newest";

  const handleSort = (value: SortOption) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);

    router.push(`?${params.toString()}`);

    setIsOpen(false);
  };

  const selectedLabel =
    sortOptions.find((option) => option.value === selected)?.label ?? "Newest";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center p-2 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]"
      >
        <span className="hidden xs:block text-xs font-light md:text-base lg:text-lg">
          Sort by:
        </span>

        <span className="ml-1 flex items-center gap-1 whitespace-nowrap text-xs font-light md:text-base lg:text-lg">
          {selectedLabel}

          <ArrowDown2
            className={`h-3 w-3 transition-transform duration-200 md:h-4 md:w-4 lg:h-5 lg:w-5 ${
              isOpen ? "rotate-180" : ""
            }`}
            color="black"
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-20 mt-2 w-full rounded-md bg-white shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSort(option.value)}
              className={`block w-full px-3 py-3 text-left text-sm transition-colors hover:bg-gray-50 md:text-base ${
                selected === option.value
                  ? "font-medium text-primary"
                  : "font-light"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortProducts;
