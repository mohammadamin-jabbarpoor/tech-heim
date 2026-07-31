import { ReviewType } from "@/app/types";
import { PlayCircle } from "iconsax-react";
import Image from "next/image";

function ReviewsCard({ product }: { product: ReviewType }) {
  return (
    <div className="w-37 h-37 md:w-68 md:h-44 lg:w-98 lg:h-51.5 rounded-lg">
      <div className="relative w-37 h-37 md:w-68 md:h-44 lg:w-98 lg:h-51.5">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
        <PlayCircle
          variant="Bold"
          size={48}
          color="white"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <div className="absolute w-full flex items-center justify-center h-10 lg:h-18 bottom-0 px-2 bg-[#101010]/40 backdrop-blur-sm rounded-b-lg">
          <p className="text-white font-light text-xs md:text-sm lg:text-base line-clamp-2 lg:line-clamp-1 overflow-hidden">
            {product.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;
