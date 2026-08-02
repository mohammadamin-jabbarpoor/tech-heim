"use client";

import { useRouter, useSearchParams } from "next/navigation";

function DiscountFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const checked = searchParams.get("sale") === "true";

  const handleToggle = () => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.delete("sale");
    } else {
      params.set("sale", "true");
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="border-b border-b-gray-400 p-4">
      <div className="flex items-center justify-between">
        <span className="font-light text-base md:text-lg lg:text-xl">
          Discount
        </span>

        <button
          onClick={handleToggle}
          className={`relative h-6 w-12 lg:h-8 lg:w-17.5 rounded-full transition-colors ${checked ? "bg-primary" : "bg-gray-300"}`}
        >
          <span
            className={`absolute top-1 h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-white transition-all ${checked ? "right-1" : "left-1"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default DiscountFilter;
