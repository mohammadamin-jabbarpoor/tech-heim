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
    <div>
      <div className="relative w-110 h-110">
        <Image
          src={getImageUrl(selectedImage.path)}
          alt={selectedImage.alt ?? product.title}
          fill
          className="object-contain"
          sizes="440px"
          loading="eager"
        />
      </div>
      <div className="mt-6 flex gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`relative h-18 w-18 rounded-lg border border-gray-300 overflow-hidden transition-all duration-200 cursor-pointer ${selectedImage.id === image.id ? "border-primary-500 ring-2 ring-primary-200" : "border-gray-300 hover:border-primary-300"}`}
          >
            <Image
              src={getImageUrl(image.path)}
              alt={image.alt ?? product.title}
              fill
              className="object-contain p-1"
              sizes="72px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
