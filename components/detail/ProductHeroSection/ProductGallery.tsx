import { getImageUrl } from "@/lib/imagekit/index";
import { ProductDetail } from "@/lib/prisma-types";
import Image from "next/image";

function ProductGallery({ product }: { product: ProductDetail }) {
  const images =
    product.options.find((option) => option.isDefault)?.images ??
    product.images;

  const mainImage = images.find((image) => image.isPrimary) ?? images[0];

  return (
    <div>
      <div className="relative w-110 h-110">
      <Image
        src={getImageUrl(mainImage.path)}
        alt={mainImage.alt ?? product.title}
        fill
        className="object-contain"
      />
      </div>
      <div className="mt-6 flex gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            className="relative h-18 w-18 rounded-lg border border-gray-300 overflow-hidden"
          >
            <Image
              src={getImageUrl(image.path)}
              alt={image.alt ?? product.title}
              fill
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
