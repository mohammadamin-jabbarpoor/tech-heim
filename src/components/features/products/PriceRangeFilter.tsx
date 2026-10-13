"use client";

import * as Slider from "@radix-ui/react-slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type PriceRange = {
  min: number;
  max: number;
};

type PriceRangeFilterProps = {
  priceRange: PriceRange;
};

type RangeState = {
  key: string;
  values: [number, number];
};

function PriceRangeFilter({ priceRange }: PriceRangeFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const MIN = priceRange.min;
  const MAX = priceRange.max;
  const STEP = 1;

  const paramsString = searchParams.toString();
  const syncKey = `${MIN}:${MAX}:${paramsString}`;

  const minParam = searchParams.get("minPrice");
  const maxParam = searchParams.get("maxPrice");

  const parsedMin = minParam === null ? MIN : Number(minParam);
  const parsedMax = maxParam === null ? MAX : Number(maxParam);

  const urlMin = Number.isFinite(parsedMin)
    ? Math.min(MAX, Math.max(MIN, parsedMin))
    : MIN;

  const boundedMax = Number.isFinite(parsedMax)
    ? Math.min(MAX, Math.max(MIN, parsedMax))
    : MAX;

  const urlValues: [number, number] = [urlMin, Math.max(urlMin, boundedMax)];

  const [rangeState, setRangeState] = useState<RangeState>(() => ({
    key: syncKey,
    values: urlValues,
  }));

  // When the URL or available price range changes, use its values.
  // Otherwise, preserve the user's in-progress edits.
  const values = rangeState.key === syncKey ? rangeState.values : urlValues;

  const setValues = (nextValues: [number, number]) => {
    setRangeState({
      key: syncKey,
      values: nextValues,
    });
  };

  const updateURL = (min: number, max: number) => {
    const params = new URLSearchParams(paramsString);

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

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
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

            setValues([Math.min(Math.max(min, MIN), values[1]), values[1]]);
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

            setValues([values[0], Math.max(Math.min(max, MAX), values[0])]);
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
