"use client";

import { ShoppingCart, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "@/lib/imagekit/index";
import { ProductCardDto } from "@/lib/prisma-types";
import { getDiscountPercent } from "@/lib/utils/product";
import { useCartStore } from "@/store/cart-store";
import { createCartItem } from "@/lib/cart/create-cart-item";
import { toast } from "sonner";
import WishlistButton from "../ui/WishlistButton";
import { createWishlistItem } from "@/lib/wishlist/create-wishlist-item";

function ProductCard({ product }: { product: ProductCardDto }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    const defaultOption = product.options.find((option) => option.isDefault);

    const cartItem = createCartItem({
      product,
      optionId: defaultOption?.id,
    });

    addItem(cartItem);

    toast.success("Product added to cart");
  };

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
        {discount && (
          <div className="absolute left-0 top-4 z-10 rounded-br-lg rounded-tr-lg bg-secondary-100 px-1.5 py-1 text-xs font-light text-secondary">
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
          <p className="line-clamp-1 text-xs font-light transition-colors duration-300 group-hover:text-primary-500 md:text-sm lg:text-base">
            {title}
          </p>

          <div className="flex items-end justify-between transition-all duration-300 group-hover:hidden">
            <div className="flex h-12 flex-col">
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
                <span className="mt-5 text-xs font-light md:text-sm lg:text-base xl:text-lg">
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
                4.1
              </span>
            </div>
          </div>

          <div className="hidden w-full items-center justify-between transition-all duration-300 group-hover:mt-1 group-hover:flex">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart();
              }}
              className="flex gap-2 rounded-lg border-2 border-primary-500 text-primary-500 hover:text-white hover:bg-primary-500 px-4 py-2.5 cursor-pointer transition-all duration-300"
            >
              <ShoppingCart variant="Outline" size={24} color="currentColor" />

              <span className="">Add to cart</span>
            </button>

            <span className="flex items-center justify-center gap-1">
              <WishlistButton product={createWishlistItem(product)} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
