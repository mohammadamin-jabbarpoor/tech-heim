import { getImageUrl } from "@/lib/imagekit/index";
import { ProductCardDto } from "@/lib/prisma-types";
import { Heart, ShoppingCart, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

function SimilarProductCard({ product }: { product: ProductCardDto }) {
  const rating = (Math.random() * 2 + 3).toFixed(1);

  const image = product.images[0];

  return (
    <div className="group relative flex flex-col items-center justify-center gap-4 w-72 h-87 p-4 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] hover:shadow-[-2px_2px_20px_-1px_rgba(113,113,113,0.2)] cursor-pointer">
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
          256px"
        />
      </div>
      <div className="w-full h-px bg-linear-to-r from-gray-800/10 via-[#101010]/70 to-gray-800/10 group-hover:from-[#428AF6]/30 group-hover:via-[#0951BE] group-hover:to-[#428AF6]/30 transition-all duration-300" />
      <div className="z-10 w-full flex flex-col gap-2 lg:gap-4">
        <p className="items-start line-clamp-1 text-xs font-light transition-colors duration-300 group-hover:text-primary-500 md:text-sm lg:text-base">
          {product.title}
        </p>
        <div className="w-full flex items-center justify-between h-12 group-hover:hidden transition-all duration-300">
          <p className="text-lg font-light">${product.price.toFixed(2)}</p>
          <span className="flex items-center justify-center gap-1">
            <Star1 variant="Bold" size={20} color="#063A88" />
            <p className="font-medium text-primary-500">{rating}</p>
          </span>
        </div>
        <div className="w-full items-center justify-between hidden group-hover:flex group-hover:mt-1 transition-all duration-300">
          <Link
            href="/cart"
            className="flex gap-2 px-4 py-2.5 border-2 border-primary-500 rounded-lg"
          >
            <ShoppingCart variant="Outline" size={24} color="#063A88" />
            <span className="text-primary-500">Add to cart</span>
          </Link>
          <span className="flex items-center justify-center gap-1">
            <Heart variant="Outline" size={24} color="#063A88" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SimilarProductCard;
