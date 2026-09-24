"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LandingProductCards } from "@/src/features/products/types/productTypes";
import SimilarProductCard from "./SimilarProductCard";

function SimilarProducts({ products }: { products: LandingProductCards[] }) {
  return (
    <div className="mt-4 md:mt-8 lg:mt-12">
      <h3 className="font-medium text-sm md:text-base lg:text-lg xl:text-xl mb-8">
        Similar Products
      </h3>
      <div className="relative">
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
            <SwiperSlide className="w-auto!" key={product.id}>
              <SimilarProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SimilarProducts;
