"use client";

import { ShoppingCart, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { ProductCardDto } from "@/lib/prisma-types";
import { getDiscountPercent } from "@/lib/utils/product";
import { createCartItem } from "@/lib/cart/create-cart-item";
import { createWishlistItem } from "@/lib/wishlist/create-wishlist-item";

import { useCartStore } from "@/store/cart-store";

import WishlistButton from "../ui/WishlistButton";
import { getImageUrl } from "@/lib/imagekit/index";

const MAX_TITLE_LENGTH = 26;

const formatPrice = (value: number) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function ProductCard({ product }: { product: ProductCardDto }) {
  const addItem = useCartStore((state) => state.addItem);

  const image = product.images[0];

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
    product.title.length > MAX_TITLE_LENGTH
      ? `${product.title.slice(0, MAX_TITLE_LENGTH)}...`
      : product.title;

  const handleAddToCart = () => {
    const defaultOption = product.options.find((option) => option.isDefault);

    addItem(
      createCartItem({
        product,
        optionId: defaultOption?.id,
      }),
    );

    toast.success("Product added to cart");
  };

  return (
    <article className="group relative flex h-46.5 w-37 flex-col items-center justify-between gap-2 rounded-lg p-2 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] transition-shadow hover:shadow-[-2px_2px_20px_-1px_rgba(113,113,113,0.2)] xs:h-54.5 xs:w-44 sm:h-62.5 sm:w-51 md:h-70.5 md:w-58 lg:h-78.5 lg:w-65 lg:gap-4 lg:p-4 xl:h-86.75 xl:w-72">
      {discount && (
        <div
          className="
          absolute left-0 top-4 z-10 rounded-br-lg
          rounded-tr-lg bg-secondary-100 px-1.5 py-1
          text-xs font-light text-secondary
          "
        >
          -{discount}%
        </div>
      )}

      <Link
        href={`/products/${product.slug}`}
        className="flex w-full flex-col items-center"
      >
        <div className="relative h-26 w-33 xs:h-32.5 xs:w-39 sm:h-36.5 sm:w-45 md:h-40.5 md:w-51 lg:h-44.5 lg:w-57 xl:h-47.5 xl:w-64">
          <Image
            fill
            src={getImageUrl(image.path)}
            alt={image.alt ?? product.title}
            className="object-contain"
            sizes="(max-width:475px) 132px,
                   (max-width:640px) 156px,
                   (max-width:768px) 180px,
                   (max-width:1024px) 204px,
                   (max-width:1280px) 228px,
                   256px"
          />
        </div>

        <div className="my-2 h-px w-full bg-linear-to-r from-gray-800/10 via-[#101010]/70 to-gray-800/10 transition-all duration-300 group-hover:from-[#428AF6]/30 group-hover:via-[#0951BE] group-hover:to-[#428AF6]/30" />

        <p className="line-clamp-1 w-full text-xs font-light transition-colors duration-300 group-hover:text-primary-500 md:text-sm lg:text-base">
          {title}
        </p>
      </Link>

      <div className="flex h-7 w-full items-end justify-between md:h-10 lg:h-12 lg:group-hover:opacity-0">
        <div className="flex flex-col">
          {hasDiscount ? (
            <>
              <span className="text-[10px] text-gray-600 line-through md:text-xs lg:text-sm">
                ${formatPrice(compareAtPrice!)}
              </span>

              <span className="text-xs font-light md:text-sm lg:text-base xl:text-lg">
                ${formatPrice(price)}
              </span>
            </>
          ) : (
            <span className="mt-1.5 text-xs font-light lg:mt-5 md:text-sm lg:text-base xl:text-lg">
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

      <div className="absolute bottom-4 left-4 right-4 hidden h-12 items-center justify-between lg:flex opacity-0 group-hover:opacity-100">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex cursor-pointer gap-2 rounded-lg border-2 border-primary-500 px-4 py-2.5 text-primary-500 transition-all duration-300 hover:bg-primary-500 hover:text-white"
        >
          <ShoppingCart variant="Outline" size={24} color="currentColor" />
          Add to cart
        </button>

        <WishlistButton product={createWishlistItem(product)} />
      </div>
    </article>
  );
}

export default ProductCard;
