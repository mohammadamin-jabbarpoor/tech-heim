import { FrequentlyProductType } from "@/app/types";
import { Heart, Star1 } from "iconsax-react";
import Image from "next/image";

function FrequentlyProductCard({
  product,
}: {
  product: FrequentlyProductType;
}) {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-4 w-72 h-87 p-4 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] hover:shadow-[-2px_2px_20px_-1px_rgba(113,113,113,0.2)] cursor-pointer">
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Heart variant="Outline" size={24} color="#063A88" />
      </div>
      <Image
        className="z-8 "
        src={product.image}
        alt={product.title}
        width={256}
        height={190}
      />
      <div className="w-full h-px bg-linear-to-r from-gray-800/10 via-[#101010]/70 to-gray-800/10 group-hover:from-[#428AF6]/30 group-hover:via-[#0951BE] group-hover:to-[#428AF6]/30 transition-all duration-300" />
      <div className="z-10 w-full flex flex-col items-center justify-center gap-2">
        <p className="w-full text-left font-light line-clamp-2 group-hover:text-primary-500 transition-all duration-300">
          {product.title}
        </p>
        <div className="w-full flex items-center justify-between transition-all duration-300">
          <p className="text-lg font-light">${product.price.toFixed(2)}</p>
          <span className="flex items-center justify-center gap-1">
            <Star1 variant="Bold" size={20} color="#063A88" />
            <p className="font-medium text-primary-500">{product.star}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyProductCard;
