"use client";

import { ProductDetailDto } from "@/lib/prisma-types";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

function DetailTable({ product }: { product: ProductDetailDto }) {
  const [showMore, setShowMore] = useState(false);

  const visibleSpecifications = showMore
    ? product.specifications
    : product.specifications.slice(0, 4);
  return (
    <div className="mt-6 md:mt-8">
      <table className="w-full">
        <caption className="mb-4 text-left font-medium text-sm md:text-base lg:text-xl">
          Technical Details
        </caption>
        <tbody>
          {visibleSpecifications.map((detail, index) => (
            <tr
              key={detail.title}
              className={`flex items-center justify-between gap-5 ${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="font-medium text-xs md:text-sm lg:text-base rounded-l-lg pl-2 lg:pl-3 py-4 text-gray-600">
                {detail.title}
              </td>

              <td className="font-light text-xs md:text-sm lg:text-base rounded-r-lg pr-2 lg:pr-3 py-4 text-gray-900">
                {detail.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {product.specifications.length > 4 && (
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="flex items-center gap-1 text-primary text-sm px-2 py-3 lg:px-0 lg:py-1"
        >
          {showMore ? "Show Less" : "Show More"}
          {showMore ? (
            <ArrowUp2 variant="Outline" size={12} color="#0C68F4" />
          ) : (
            <ArrowDown2 variant="Outline" size={12} color="#0C68F4" />
          )}
        </button>
      )}
    </div>
  );
}

export default DetailTable;
