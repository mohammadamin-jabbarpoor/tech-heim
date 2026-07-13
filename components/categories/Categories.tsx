"use client";

import { CategoriesType } from "@/app/types";
import Category from "./Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const categories: CategoriesType = [
  {
    id: crypto.randomUUID(),
    image: "/categories/case.png",
    name: "Accessories",
  },
  {
    id: crypto.randomUUID(),
    image: "/categories/camera.png",
    name: "Camera",
  },
  {
    id: crypto.randomUUID(),
    image: "/categories/laptop.png",
    name: "Laptop",
  },
  {
    id: crypto.randomUUID(),
    image: "/categories/phone.png",
    name: "Smart Phone",
  },
  {
    id: crypto.randomUUID(),
    image: "/categories/gaming.png",
    name: "Gaming",
  },
  {
    id: crypto.randomUUID(),
    image: "/categories/watch.png",
    name: "Smart Watch",
  },
];

function Categories() {
  return (
    <>
      <section className="hidden lg:flex items-center justify-center gap-5 lg:gap-6 w-full md:h-37 lg:h-43 xl:h-49 mt-6 lg:mt-12">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </section>
      <section className="flex lg:hidden items-center justify-center gap-5 lg:gap-6 w-full h-25 sm:h-31 md:h-37 lg:h-43 xl:h-49 mt-6">
        <Swiper slidesPerView="auto" spaceBetween={16} modules={[Navigation]}>
          {categories.map((category) => (
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
