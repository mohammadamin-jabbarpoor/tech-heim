"use client";

import * as Slider from "@radix-ui/react-slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type PriceRange = {
  min: number;
  max: number;
};

type PriceRangeFilterProps = {
  priceRange: PriceRange;
};

function PriceRangeFilter({ priceRange }: PriceRangeFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const MIN = priceRange.min;
  const MAX = priceRange.max;
  const STEP = 1;

  const [values, setValues] = useState<[number, number]>([MIN, MAX]);

  useEffect(() => {
    setValues([MIN, MAX]);
  }, [MIN, MAX]);

  useEffect(() => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    setValues([
      minPrice ? Number(minPrice) : MIN,
      maxPrice ? Number(maxPrice) : MAX,
    ]);
  }, [searchParams, MIN, MAX]);

  const updateURL = (min: number, max: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (min > MIN) {
      params.set("minPrice", min.toString());
    } else {
      params.delete("minPrice");
    }

    if (max < MAX) {
      params.set("maxPrice", max.toString());
    } else {
      params.delete("maxPrice");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="px-4 pb-6">
      <div className="mb-6 flex justify-center gap-6">
        <input
          type="number"
          min={MIN}
          max={values[1]}
          value={values[0]}
          onChange={(e) => {
            const min = Number(e.target.value);

            setValues([Math.min(min, values[1]), values[1]]);
          }}
          onBlur={() => {
            updateURL(values[0], values[1]);
          }}
          className="h-11 w-21 rounded-md border text-center"
        />

        <input
          type="number"
          min={values[0]}
          max={MAX}
          value={values[1]}
          onChange={(e) => {
            const max = Number(e.target.value);

            setValues([values[0], Math.max(max, values[0])]);
          }}
          onBlur={() => {
            updateURL(values[0], values[1]);
          }}
          className="h-11 w-21 rounded-md border text-center"
        />
      </div>

      <Slider.Root
        className="relative flex w-full touch-none select-none items-center"
        min={MIN}
        max={MAX}
        step={STEP}
        value={values}
        onValueChange={([min, max]) => {
          setValues([min, max]);
        }}
        onValueCommit={([min, max]) => {
          updateURL(min, max);
        }}
      >
        <Slider.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-300">
          <Slider.Range className="absolute h-full bg-primary" />
        </Slider.Track>

        <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-primary shadow focus:outline-none" />

        <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-primary shadow focus:outline-none" />
      </Slider.Root>
    </div>
  );
}

export default PriceRangeFilter;
