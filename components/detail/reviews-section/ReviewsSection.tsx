"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewsType } from "@/app/types";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import ReviewsCard from "./ReviewsCard";

const reviewsProducts: ReviewsType = [
  {
    id: crypto.randomUUID(),
    image: "/reviews/video-1.svg",
    title: "MacBook Pro 2022 Review: Apple's M2 Revs Up",
  },
  {
    id: crypto.randomUUID(),
    image: "/reviews/video-2.svg",
    title: "M2 MacBook Pro 13 Unboxing, Comparison and First Look",
  },
  {
    id: crypto.randomUUID(),
    image: "/reviews/video-3.svg",
    title: "M2 MacBook Pro 13 Review - Don't Choose Wrong!",
  },
  {
    id: crypto.randomUUID(),
    image: "/reviews/video-1.svg",
    title: "MacBook Pro 2022 Review: Apple's M2 Revs Up",
  },
  {
    id: crypto.randomUUID(),
    image: "/reviews/video-2.svg",
    title: "M2 MacBook Pro 13 Unboxing, Comparison and First Look",
  },
];

function ReviewsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="mt-6 lg:mt-12 mb-6 lg:mb-14">
      <h3 className="font-medium text-sm md:text-base lg:text-xl mb-3 md:mb-6 lg:mb-8">
        Reviews
      </h3>
      <div className="relative">
        <button
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
          className={`hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${isBeginning ? "opacity-50" : "opacity-100"}`}
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
          {reviewsProducts.map((product) => (
            <SwiperSlide key={product.id} className="w-37! md:w-68! lg:w-98!">
              <ReviewsCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
          className={`hidden lg:block absolute -right-1 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${isEnd ? "opacity-50" : "opacity-100"}`}
        >
          <ArrowCircleRight size={32} variant="Bold" color="#9E9E9E" />
        </button>
      </div>
    </div>
  );
}

export default ReviewsSection;
