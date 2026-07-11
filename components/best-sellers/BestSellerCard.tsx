import { getImageUrl } from "@/lib/imagekit/index";
import { ProductCard } from "@/lib/prisma-types";
import { getDiscountPercent } from "@/lib/services/product.service";
import { Heart, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

function BestSellerCard({ product }: { product: ProductCard }) {
  const image = product.images[0];

  const price = Number(product.price);
  const compareAtPrice = product.compareAtPrice
    ? Number(product.compareAtPrice)
    : null;

  const discount = getDiscountPercent(
    Number(product.price),
    Number(product.compareAtPrice),
  );
  const rating = (Math.random() * 2 + 3).toFixed(1);

  const hasDiscount = compareAtPrice !== null && compareAtPrice > price;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="relative group w-37 h-46.5 xs:w-44 xs:h-54.5 sm:w-51 sm:h-62.5 md:w-58 md:h-70.5 lg:w-65 lg:h-78.5 xl:w-72 xl:h-86.75 flex flex-col justify-between items-center gap-2 p-2 lg:gap-4 lg:p-4 rounded-lg cursor-pointer shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] hover:shadow-[-2px_2px_20px_-1px_rgba(113,113,113,0.2)]">
        <div className="hidden lg:block absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Heart variant="Outline" size={24} color="#063A88" />
        </div>
        {discount && (
          <div className="z-10 absolute top-4 left-0 block group-hover:hidden transition-opacity duration-300 text-xs font-light text-secondary bg-secondary-100 px-1.5 py-1 rounded-tr-lg rounded-br-lg">
            -{discount}%
          </div>
        )}
        <div className="relative w-33 h-28.5 xs:w-39 xs:h-32.5 sm:w-45 sm:h-36.5 md:w-51 md:h-40.5 lg:w-57 lg:h-44.5 xl:w-64 xl:h-47.5">
          <Image
            src={getImageUrl(image.path)}
            alt={image.alt ?? product.title}
            fill
            sizes="
            (max-width: 475px) 132px,
            (max-width: 640px) 156px,
            (max-width: 768px) 180px,
            (max-width: 1024px) 204px,
            (max-width: 1280px) 228px,
            256px"
            className="object-contain"
          />
        </div>

        <div className="w-full h-px bg-linear-to-r from-gray-800/10 via-[#101010]/70 to-gray-800/10 group-hover:from-[#428AF6]/30 group-hover:via-[#0951BE] group-hover:to-[#428AF6]/30 transition-all duration-300" />

        <div className="w-full flex flex-col gap-2 lg:gap-4">
          <p className="items-start lg:h-12 line-clamp-1 md:line-clamp-2 text-xs md:text-sm lg:text-base font-light group-hover:text-primary-500 transition-all duration-300">
            {product.title.length > 26
              ? product.title.slice(0, 26) + "..."
              : product.title}
          </p>
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col">
                {hasDiscount ? (
                  <>
                    <span className="text-[10px] md:text-xs lg:text-sm text-gray-600 line-through">
                      $
                      {`${compareAtPrice?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    </span>
                    <span className="font-light text-xs md:text-sm lg:text-base xl:text-lg">
                      $
                      {`${price?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    </span>
                  </>
                ) : (
                  <span className="mt-2.5 font-lighttext-xs md:text-sm lg:text-base xl:text-lg">
                    $
                    {`${price?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  </span>
                )}
              </div>
            </div>
            <span className="flex items-center justify-center gap-1">
              <Star1
                variant="Bold"
                className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5"
                color="#063A88"
              />
              <p className="font-medium text-xs md:text-sm lg:text-base text-primary-500">
                {rating}
              </p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BestSellerCard;
