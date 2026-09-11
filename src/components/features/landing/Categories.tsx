"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { categoryItems } from "@/src/lib/constants/categoryItems";
import Category from "./Category";

import "swiper/css";
import "swiper/css/navigation";

function Categories() {
  return (
    <>
      <section className="hidden lg:flex items-center justify-center gap-5 lg:gap-6 w-full md:h-37 lg:h-43 xl:h-49 mt-6 lg:mt-12">
        {categoryItems.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </section>

      <section className="block lg:hidden w-full overflow-hidden mt-6 px-4">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          modules={[Navigation]}
          className="w-full"
        >
          {categoryItems.map((category) => (
            <SwiperSlide className="w-auto!" key={category.id}>
              <Category category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Categories;
