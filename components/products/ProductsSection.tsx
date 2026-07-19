"use client";

import { useMemo, useState } from "react";
import { ArrowDown2 } from "iconsax-react";
import ProductCard from "./ProductCard";
import { ProductCardDto } from "@/lib/prisma-types";

type ProductsSectionProps = {
  products: ProductCardDto[];
};

const options = [
  "Most relevant",
  "Price: ascending",
  "Price: descending",
  "New Arrivals",
];

function ProductsSection({ products }: ProductsSectionProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Most relevant");

  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (selected) {
      case "Price: ascending":
        return sorted.sort((a, b) => Number(a.price) - Number(b.price));

      case "Price: descending":
        return sorted.sort((a, b) => Number(b.price) - Number(a.price));

      case "New Arrivals":
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

      case "Most relevant":
      default:
        return sorted;
    }
  }, [products, selected]);

  return (
    <div className="flex-19">
      <div className="flex justify-end">
        <div className="relative min-w-51">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center p-2 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]"
          >
            <span className="font-light text-lg">Sort by:</span>

            <button className="flex items-center gap-1 font-light text-lg ml-1 whitespace-nowrap">
              {selected}

              <ArrowDown2
                size={18}
                color="black"
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {open && (
            <div className="absolute left-0 top-full z-20 w-full bg-white shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className="block w-full text-left px-2 py-3 font-light text-lg hover:bg-gray-50"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
