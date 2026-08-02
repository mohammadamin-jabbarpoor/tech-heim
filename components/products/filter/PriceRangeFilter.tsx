"use client";

import { useEffect, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { ArrowDown2 } from "iconsax-react";
import { useProductFilters } from "@/lib/hooks/useProductFilters";
import { PriceRange } from "@/lib/prisma-types";

type PriceRangeFilterProps = {
  priceRange: PriceRange;
};

function PriceRangeFilter({ priceRange }: PriceRangeFilterProps) {
  const [isOpen, setIsOpen] = useState(true);

  const { selectedMinPrice, selectedMaxPrice, setPriceRange } =
    useProductFilters();

  const [values, setValues] = useState<[number, number]>([
    selectedMinPrice ?? priceRange.minPrice,
    selectedMaxPrice ?? priceRange.maxPrice,
  ]);

  useEffect(() => {
    setValues([
      selectedMinPrice ?? priceRange.minPrice,
      selectedMaxPrice ?? priceRange.maxPrice,
    ]);
  }, [selectedMinPrice, selectedMaxPrice, priceRange]);

  const MIN = priceRange.minPrice;
  const MAX = priceRange.maxPrice;
  const STEP = 50;

  return (
    <div className="border-b border-gray-300">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between p-4 cursor-pointer"
      >
        <span className="font-light text-base md:text-lg lg:text-xl">
          Price
        </span>

        <ArrowDown2
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="px-4 pb-6">
          <div className="flex justify-center gap-6 mb-6">
            <input
              type="number"
              value={values[0]}
              onChange={(e) => setValues([Number(e.target.value), values[1]])}
              onBlur={() => setPriceRange(values[0], values[1])}
              className="w-21 h-11 rounded-md border text-center"
            />

            <input
              type="number"
              value={values[1]}
              onChange={(e) => setValues([values[0], Number(e.target.value)])}
              onBlur={() => setPriceRange(values[0], values[1])}
              className="w-21 h-11 rounded-md border text-center"
            />
          </div>

          <Slider.Root
            className="relative flex w-full touch-none select-none items-center"
            min={MIN}
            max={MAX}
            step={STEP}
            value={values}
            onValueChange={([min, max]) => setValues([min, max])}
            onValueCommit={([min, max]) => setPriceRange(min, max)}
          >
            <Slider.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-300">
              <Slider.Range className="absolute h-full bg-primary" />
            </Slider.Track>

            <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-primary shadow focus:outline-none" />

            <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-primary shadow focus:outline-none" />
          </Slider.Root>
        </div>
      )}
    </div>
  );
}

export default PriceRangeFilter;
