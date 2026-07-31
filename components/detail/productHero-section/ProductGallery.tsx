"use client";

import { getImageUrl } from "@/lib/imagekit/index";
import { ProductDetailDto, ProductOptionDto } from "@/lib/prisma-types";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  product: ProductDetailDto;
  selectedOption: ProductOptionDto | null;
};

function ProductGallery({ product, selectedOption }: Props) {
  const images = selectedOption?.images.length
    ? selectedOption.images
    : product.images;

  const defaultImage = images.find((image) => image.isPrimary) ?? images[0];

  const [selectedImage, setSelectedImage] = useState(defaultImage);

  useEffect(() => {
    const first = images.find((image) => image.isPrimary) ?? images[0];

    setSelectedImage(first);
  }, [images]);

  return (
    <div className="w-full sm:w-78 lg:w-110 flex items-center justify-center flex-col">
      <div className="relative w-78 h-50 lg:w-110 lg:h-75">
        <Image
          src={getImageUrl(selectedImage.path)}
          alt={selectedImage.alt ?? product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 200px, 440px"
          loading="eager"
        />
      </div>
      <div className="flex lg:mt-6 gap-2 lg:gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`relative h-10 w-10 sm:h-15 sm:w-15 lg:h-18 lg:w-18 rounded-lg border border-gray-300 overflow-hidden transition-all duration-200 cursor-pointer ${selectedImage.id === image.id ? "border-primary-500 ring-2 ring-primary-200" : "border-gray-300 hover:border-primary-300"}`}
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
