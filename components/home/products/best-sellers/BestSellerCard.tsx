import { Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "@/lib/imagekit/index";
import { ProductDetailDto } from "@/lib/prisma-types";
import { getDiscountPercent } from "@/lib/utils/product";
import WishlistButton from "@/components/ui/WishlistButton";
import { createWishlistItem } from "@/lib/wishlist/create-wishlist-item";

function BestSellerCard({ product }: { product: ProductDetailDto }) {
  const image = product.images.at(0);

  if (!image) return null;

  const price = Number(product.price);
  const compareAtPrice = product.compareAtPrice
    ? Number(product.compareAtPrice)
    : null;

  const hasDiscount = compareAtPrice !== null && compareAtPrice > price;

  const discount = hasDiscount
    ? getDiscountPercent(price, compareAtPrice)
    : null;

  const rating = (Math.random() * 2 + 3).toFixed(1);

  const title =
    product.title.length > 26
      ? `${product.title.slice(0, 26)}...`
      : product.title;

  const formatPrice = (value: number) =>
    value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="relative group flex h-46.5 w-37 flex-col items-center justify-between gap-2 rounded-lg p-2 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] transition-shadow hover:shadow-[-2px_2px_20px_-1px_rgba(113,113,113,0.2)] xs:h-54.5 xs:w-44 sm:h-62.5 sm:w-51 md:h-70.5 md:w-58 lg:h-78.5 lg:w-65 lg:gap-4 lg:p-4 xl:h-86.75 xl:w-72">
        <div className="absolute z-10 left-4 top-4 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
          <WishlistButton product={createWishlistItem(product)} />
        </div>

        {discount && (
          <div className="absolute left-0 top-4 z-10 rounded-br-lg rounded-tr-lg bg-secondary-100 px-1.5 py-1 text-xs font-light text-secondary group-hover:hidden">
            -{discount}%
          </div>
        )}

        <div className="relative h-28.5 w-33 xs:h-32.5 xs:w-39 sm:h-36.5 sm:w-45 md:h-40.5 md:w-51 lg:h-44.5 lg:w-57 xl:h-47.5 xl:w-64">
          <Image
            fill
            src={getImageUrl(image.path)}
            alt={image.alt ?? product.title}
            className="object-contain"
            sizes="
              (max-width:475px) 132px,
              (max-width:640px) 156px,
              (max-width:768px) 180px,
              (max-width:1024px) 204px,
              (max-width:1280px) 228px,
              256px
            "
          />
        </div>

        <div className="h-px w-full bg-linear-to-r from-gray-800/10 via-[#101010]/70 to-gray-800/10 transition-all duration-300 group-hover:from-[#428AF6]/30 group-hover:via-[#0951BE] group-hover:to-[#428AF6]/30" />

        <div className="flex w-full flex-col gap-2 lg:gap-4">
          <p className="line-clamp-1 text-xs font-light transition-colors duration-300 group-hover:text-primary-500 md:line-clamp-2 md:text-sm lg:h-12 lg:text-base">
            {title}
          </p>

          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              {hasDiscount ? (
                <>
                  <span className="text-[10px] text-gray-600 line-through md:text-xs lg:text-sm">
                    ${formatPrice(compareAtPrice)}
                  </span>

                  <span className="text-xs font-light md:text-sm lg:text-base xl:text-lg">
                    ${formatPrice(price)}
                  </span>
                </>
              ) : (
                <span className="mt-2.5 text-xs font-light md:text-sm lg:text-base xl:text-lg">
                  ${formatPrice(price)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
              <Star1
                variant="Bold"
                className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5"
                color="#063A88"
              />

              <span className="text-xs font-medium text-primary-500 md:text-sm lg:text-base">
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BestSellerCard;
