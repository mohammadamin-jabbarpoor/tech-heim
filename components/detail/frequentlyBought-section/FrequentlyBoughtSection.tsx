"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FrequentlyProductType } from "@/app/types";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import FrequentlyProductCard from "./FrequentlyProductCard";

const frequentlyProducts: FrequentlyProductType[] = [
  {
    id: crypto.randomUUID(),
    image: "/frequently-products/laptop-sleeve.svg",
    title: "Laptop sleeve for macBook pro M2 MNEJ3 LLA 13.3 inch",
    price: 39.2,
    star: 4.0,
  },
  {
    id: crypto.randomUUID(),
    image: "/frequently-products/privacy-screen.svg",
    title:
      "StarTech.com Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air",
    price: 23.26,
    star: 4.6,
  },
  {
    id: crypto.randomUUID(),
    image: "/frequently-products/laptop-case.svg",
    title:
      "Inateck 12.3-13 Inch Laptop Case Sleeve 360° Protection Compatible with 13 inch MacBook",
    price: 63.5,
    star: 4.7,
  },
  {
    id: crypto.randomUUID(),
    image: "/frequently-products/charge.svg",
    title:
      "Belkin USB C to VGA + Charge Adapter - USB C to VGA Cable for MacBook Pro",
    price: 27,
    star: 4.3,
  },
  {
    id: crypto.randomUUID(),
    image: "/frequently-products/laptop-sleeve.svg",
    title: "Laptop sleeve for macBook pro M2 MNEJ3 LLA 13.3 inch",
    price: 39.2,
    star: 4.0,
  },
  {
    id: crypto.randomUUID(),
    image: "/frequently-products/privacy-screen.svg",
    title:
      "StarTech.com Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air",
    price: 23.26,
    star: 4.6,
  },
];

function FrequentlyBoughtSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="mt-12">
      <h3 className="font-medium text-xl mb-8">Frequently bought together</h3>
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
          {frequentlyProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <FrequentlyProductCard product={product} />
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

export default FrequentlyBoughtSection;
