import { ReviewType } from "@/app/types";
import { PlayCircle } from "iconsax-react";
import Image from "next/image";
import React from "react";

function ReviewsCard({ product }: { product: ReviewType }) {
  return (
    <div className="relative w-98 h-51.5 rounded-lg">
      <PlayCircle
        variant="Bold"
        size={48}
        color="white"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      />
      <Image src={product.image} alt={product.title} width={392} height={206} />

      {/* <div className="absolute w-full h-18 bottom-0 bg-[#101010]/40 backdrop-blur-sm text-white rounded-b-lg" /> */}

      <div className="absolute w-full h-18 bottom-0 px-2 bg-[#101010]/40 backdrop-blur-sm rounded-b-lg">
        <p className="flex items-center justify-center w-full h-full text-center text-white font-light">
          {product.title}
        </p>
      </div>
    </div>
  );
}

export default ReviewsCard;
