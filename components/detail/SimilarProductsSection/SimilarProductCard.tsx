import { SimilarProductType } from "@/app/types";
import { Heart, ShoppingCart, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

function SimilarProductCard({ product }: { product: SimilarProductType }) {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-4 w-72 h-87 p-4 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] hover:shadow-[-2px_2px_20px_-1px_rgba(113,113,113,0.2)] cursor-pointer">
      <Image
        className="z-8 "
        src={product.image}
        alt={product.title}
        width={256}
        height={190}
      />
      <div className="w-full h-px bg-linear-to-r from-gray-800/10 via-[#101010]/70 to-gray-800/10 group-hover:from-[#428AF6]/30 group-hover:via-[#0951BE] group-hover:to-[#428AF6]/30 transition-all duration-300" />
      <div className="z-10 w-full flex flex-col items-center justify-center gap-2">
        <p className="w-full text-left font-light line-clamp-2 group-hover:text-primary-500 group-hover:line-clamp-1 transition-all duration-300">
          {product.title}
        </p>
        <div className="w-full flex items-center justify-between group-hover:hidden transition-all duration-300">
          <p className="text-lg font-light">${product.price.toFixed(2)}</p>
          <span className="flex items-center justify-center gap-1">
            <Star1 variant="Bold" size={20} color="#063A88" />
            <p className="font-medium text-primary-500">{product.star}</p>
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
