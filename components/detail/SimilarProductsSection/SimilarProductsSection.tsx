"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SimilarProductType } from "@/app/types";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import SimilarProductCard from "./SimilarProductCard";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

const similarProducts: SimilarProductType[] = [
  {
    id: crypto.randomUUID(),
    image: "/similar-products/macbook-pro-2020.svg",
    title: "Apple 2020 MacBook Pro Laptop with M2 chip 14-inch",
    price: 1199,
    star: 4.5,
  },
  {
    id: crypto.randomUUID(),
    image: "/similar-products/macbook-air-2022.svg",
    title: "Apple 2022 MacBook Air Laptop with M2 chip",
    price: 1299,
    star: 4.4,
  },
  {
    id: crypto.randomUUID(),
    image: "/similar-products/macbook-pro-2022.svg",
    title: "Apple 2022 MacBook Pro Laptop with M2 chip: 15.3-inch",
    price: 1399,
    star: 4.5,
  },
  {
    id: crypto.randomUUID(),
    image: "/similar-products/macbook-air-2020.svg",
    title: "Apple 2020 MacBook Air Laptop with M2 chip",
    price: 1099,
    star: 4.2,
  },
  {
    id: crypto.randomUUID(),
    image: "/similar-products/macbook-pro-2020.svg",
    title: "Apple 2020 MacBook Pro Laptop with M2 chip 14-inch",
    price: 1199,
    star: 4.5,
  },
  {
    id: crypto.randomUUID(),
    image: "/similar-products/macbook-air-2022.svg",
    title: "Apple 2022 MacBook Air Laptop with M2 chip",
    price: 1299,
    star: 4.4,
  },
];

function SaleSlider() {
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
          {similarProducts.map((product) => (
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
