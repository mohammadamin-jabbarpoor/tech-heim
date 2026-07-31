"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import SimilarProductCard from "./SimilarProductCard";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import { ProductCardDto } from "@/lib/prisma-types";

function SimilarProductsSection({ products }: { products: ProductCardDto[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="mt-4 md:mt-8 lg:mt-12">
      <h3 className="font-medium text-sm md:text-base lg:text-lg xl:text-xl mb-8">
        Similar Products
      </h3>
      <div className="relative">
        <button
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
          className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${isBeginning ? "opacity-50" : "opacity-100"}`}
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
          slidesPerView="auto"
          spaceBetween={8}
          breakpoints={{
            640: {
              spaceBetween: 16,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
          slidesOffsetAfter={18}
          modules={[Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide
              className="w-37! xs:w-44! sm:w-51! md:w-58! lg:65! xl:w-86.75!"
              key={product.id}
            >
              <SimilarProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
          className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${isEnd ? "opacity-50" : "opacity-100"}`}
        >
          <ArrowCircleRight size={32} variant="Bold" color="#9E9E9E" />
        </button>
      </div>
    </div>
  );
}

export default SimilarProductsSection;
