"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderNavigation from "./SliderNavigation";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import SaleProductCard from "./SaleProductCard";
import { ProductCardDto } from "@/lib/prisma-types";

function SaleSlider({ products }: { products: ProductCardDto[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="relative flex-1 min-w-0">
        <div className="hidden lg:block absolute -bottom-4 xl:-bottom-9 right-3.5">
          <SliderNavigation swiperRef={swiperRef} />
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          breakpoints={{
            1024: {
              spaceBetween: 24,
            },
          }}
          slidesOffsetAfter={18}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide
              className="w-25.5! sm:w-31! md:w-36! lg:w-41! xl:w-46!"
              key={product.id}
            >
              <SaleProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SaleSlider;
