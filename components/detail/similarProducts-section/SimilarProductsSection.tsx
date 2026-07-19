"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import SimilarProductCard from "./SimilarProductCard";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import { ProductCardDto } from "@/lib/prisma-types";

function SaleSlider({ products }: { products: ProductCardDto[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="mt-12">
      <h3 className="font-medium text-xl mb-8">Similar Products</h3>
      <div className="relative">
        <button
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${isBeginning ? "opacity-50" : "opacity-100"}`}
        >
          <ArrowCircleLeft size={32} variant="Bold" color="#9E9E9E" />
        </button>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView={4}
          spaceBetween={24}
          className="px-12"
          slidesOffsetAfter={18}
          modules={[Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <SimilarProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${isEnd ? "opacity-50" : "opacity-100"}`}
        >
          <ArrowCircleRight size={32} variant="Bold" color="#9E9E9E" />
        </button>
      </div>
    </div>
  );
}

export default SaleSlider;
