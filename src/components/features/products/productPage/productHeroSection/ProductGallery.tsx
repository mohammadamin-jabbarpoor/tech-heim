"use client";

import { ProductPage } from "@/src/features/products/types/productTypes";
import { getImageUrl } from "@/src/lib/imageKit";
import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  product: ProductPage;
  selectedOption: ProductPage["options"][number] | null;
};

function ProductGallery({ product, selectedOption }: ProductGalleryProps) {
  const images = selectedOption?.images.length
    ? selectedOption.images
    : product.images;

  const defaultImage = images.find((image) => image.isPrimary) ?? images[0];

  const [manualSelection, setManualSelection] = useState<{
    imageId: string;
    optionId: string | null;
  } | null>(null);

  const optionId = selectedOption?.id ?? null;

  const selectedImage =
    manualSelection?.optionId === optionId
      ? (images.find((image) => image.id === manualSelection.imageId) ??
        defaultImage)
      : defaultImage;

  if (!selectedImage) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center sm:w-78 lg:w-110">
      <div className="relative h-50 w-78 lg:h-75 lg:w-110">
        <Image
          src={getImageUrl(selectedImage.path)}
          alt={selectedImage.alt ?? product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 200px, 440px"
          loading="eager"
        />
      </div>

      <div className="flex gap-2 lg:mt-6 lg:gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() =>
              setManualSelection({
                imageId: image.id,
                optionId,
              })
            }
            aria-label={image.alt ?? `View image of ${product.title}`}
            aria-pressed={selectedImage.id === image.id}
            className={`relative h-10 w-10 cursor-pointer overflow-hidden rounded-lg border transition-all duration-200 sm:h-15 sm:w-15 lg:h-18 lg:w-18 ${
              selectedImage.id === image.id
                ? "border-primary-500 ring-2 ring-primary-200"
                : "border-gray-300 hover:border-primary-300"
            }`}
          >
            <Image
              src={getImageUrl(image.path)}
              alt={image.alt ?? product.title}
              fill
              className="object-contain p-1"
              sizes="(max-width: 768px) 60px, 72px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
