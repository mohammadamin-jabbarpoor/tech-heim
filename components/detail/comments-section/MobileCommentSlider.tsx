"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { commentsInfo } from "./CommentsList";
import MobileCommentCard from "./MobileCommentCard";

function MobileCommentSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
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
        {commentsInfo.map((comment) => (
          <SwiperSlide
            className="w-58! xs:w-68! sm:w-78! md:w-88!"
            key={comment.id}
          >
            <MobileCommentCard comment={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileCommentSlider;
