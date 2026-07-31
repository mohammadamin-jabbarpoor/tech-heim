"use client";

import { ProductDetailDto, ProductOptionDto } from "@/lib/prisma-types";
import { ArrowRight2, Shop, Star1, Truck, Verify } from "iconsax-react";
import { useState } from "react";

type Props = {
  product: ProductDetailDto;
  selectedOption: ProductOptionDto | null;
  onSelectOption: (option: ProductOptionDto) => void;
};

function ProductInfo({ product, selectedOption, onSelectOption }: Props) {
  const [showMore, setShowMore] = useState(false);
  const visibleSpecifications = showMore
    ? product.specifications
    : product.specifications.slice(0, 4);

  return (
    <div className="w-full sm:w-81.75 flex flex-col gap-4 md:gap-8 md:mx-6">
      <div className="flex flex-col gap-3 md:gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-lg md:text-xl">{product.title}</h2>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center justify-center gap-0.5 p-1 bg-primary-500 rounded">
              <Star1 variant="Bold" size={16} color="white" />
              <span className="font-medium text-xs text-white">4.1</span>
            </div>
            <div className="w-px h-6.25 bg-gray-600" />
            <span className="font-medium text-sm text-gray-600">
              Stock: {product.stock}
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Shop variant="Outline" size={20} color="#0C68F4" />
            <span className="font-medium text-xs text-gray-600">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Verify variant="Outline" size={20} color="#0C68F4" />
            <span className="font-medium text-xs text-gray-600">
              Guaranteed
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Truck variant="Outline" size={20} color="#0C68F4" />
            <span className="font-medium text-xs text-gray-600">
              Free Delivery
            </span>
          </div>
        </div>
        <div className="block sm:hidden w-full border-b border-b-gray-200 my-3" />
        {product.options.length > 0 && (
          <div className="flex items-center justify-between">
            <span className="font-light">Select {product.options[0].type}</span>

            <div className="ml-3 flex flex-wrap gap-2">
              {product.options.map((option) =>
                option.type === "color" ? (
                  <button
                    key={option.id}
                    onClick={() => onSelectOption(option)}
                    className={`w-6 h-6 rounded-full border cursor-pointer ${
                      selectedOption?.id === option.id
                        ? "border-none ring-2 ring-primary"
                        : ""
                    }`}
                    style={{ backgroundColor: option.value ?? "#fff" }}
                  />
                ) : (
                  <button
                    key={option.id}
                    onClick={() => onSelectOption(option)}
                    className={`w-16 h-8 border cursor-pointer rounded ${
                      selectedOption?.id === option.id
                        ? "border-none ring-2 ring-primary"
                        : ""
                    }`}
                  >
                    {option.name}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </div>
      <div className="block sm:hidden w-full border-b border-b-gray-200 my-3" />
      <div className="flex flex-col gap-2 md:gap-4">
        {visibleSpecifications.map((item) => (
          <div key={item.id} className="grid grid-cols-2 items-center">
            <div className="flex items-center gap-2">
              <span>•</span>

              <span className="font-medium text-xs sm:text-sm text-gray-600">
                {item.title}
              </span>
            </div>

            <span className="font-medium text-xs sm:text-sm">{item.value}</span>
          </div>
        ))}

        {!showMore && product.specifications.length > 4 && (
          <button
            onClick={() => setShowMore(true)}
            className="flex items-center gap-1 ml-4 self-start text-primary font-medium hover:underline"
          >
            <span className="text-sm">Show More</span>
            <ArrowRight2 variant="Outline" size={12} color="#0C68F4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductInfo;
