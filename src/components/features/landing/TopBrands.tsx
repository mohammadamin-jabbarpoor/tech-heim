"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { topBrandsImages } from "@/src/lib/constants/topBrandsImages";
import Image from "next/image";
import Line from "../../shared/ui/Line";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function TopBrands() {
  return (
    <section className="mt-6 xl:mt-12">
      <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[26px] xl:text-[32px]">
        Top Brands
      </p>

      <Line />

      <div className="block xl:hidden w-full h-17.5 md:h-24.5 lg:h-38.75">
        <Swiper
          className="h-full!"
          slidesPerView="auto"
          spaceBetween={16}
          loop
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1024: {
              spaceBetween: 24,
            },
          }}
        >
          {topBrandsImages.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-auto! h-full! flex! items-center! justify-center!"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="hidden xs:block"
              />

              <Image
                src={item.image}
                alt={item.alt}
                width={item.moWidth}
                height={item.moHeight}
                className="block xs:hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden xl:flex items-center justify-between w-full h-38.75">
        {topBrandsImages.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="hidden xs:block"
          />
        ))}
      </div>
    </section>
  );
}

export default TopBrands;
