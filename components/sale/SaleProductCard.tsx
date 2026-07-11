import { getImageUrl } from "@/lib/imagekit/index";
import { SaleProduct } from "@/lib/prisma-types";
import Image from "next/image";
import Link from "next/link";

function SaleProductCard({ product }: { product: SaleProduct }) {
  const image = product.images[0];

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="w-full h-full relative flex flex-col items-center justify-center gap-3 p-2 cursor-pointer rounded bg-white">
        <div className="z-10 absolute top-1 md:top-2 left-0 text-xs font-light text-secondary bg-secondary-100 px-1.5 py-1 rounded-tr-lg rounded-br-lg">
          -{product.discount}%
        </div>
        <div className="w-21.5 h-18 sm:w-26 sm:h-22.5 md:w-31 md:h-27 lg:w-36 lg:h-31.5 xl:w-42 xl:h-36.5 relative">
          <Image
            className="z-8 object-contain"
            src={getImageUrl(image.path)}
            alt={image.alt ?? product.title}
            fill
            sizes="
            (max-width: 640px) 86px,
            (max-width: 768px) 104px,
            (max-width: 1024px) 124px,
            (max-width: 1280px) 144px,
            168px"
          />
        </div>
        <div className="z-10 w-full flex flex-col items-center justify-center gap-3 xl:gap-2">
          <p className="w-full xl:text-left text-xs font-light leading-4 line-clamp-1 xl:leading-4 xl:line-clamp-2 xl:min-h-8">
            {product.title}
          </p>
          <div className="w-full flex items-center justify-between">
            <p className="text-[9px] sm:text-xs xl:text-sm font-light text-gray-600 line-through">
              $
              {`${product.compareAtPrice?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            </p>
            <p className="text-[9px] sm:text-xs xl:text-sm font-light">
              $
              {`${product.price?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SaleProductCard;
