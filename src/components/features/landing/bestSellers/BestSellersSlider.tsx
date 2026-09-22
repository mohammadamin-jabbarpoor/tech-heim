"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LandingProductCards } from "@/src/features/products/types/productTypes";
import BestSellersCard from "./BestSellersCard";

function BestSellersSlider({ products }: { products: LandingProductCards[] }) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="w-auto!">
            <BestSellersCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BestSellersSlider;
