"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { categoryItems } from "@/data/categoryItems";
import ProductCategoryCard from "./ProductCategoryCard";
import { useRouter, useSearchParams } from "next/navigation";

function MobileProductCategories() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");

  const handleCategoryChange = (slug?: string) => {
    if (!slug) {
      router.push("/products");
      return;
    }

    router.push(`/products?category=${slug}`);
  };

  return (
    <div className="block lg:hidden mt-4 mb-6">
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        slidesOffsetAfter={18}
        modules={[Navigation]}
      >
        {categoryItems.map((category) => (
          <SwiperSlide className="w-auto!" key={category.title}>
            <ProductCategoryCard
              key={category.title}
              category={category}
              active={
                category.title === "All"
                  ? selectedCategory === null
                  : category.slug === selectedCategory
              }
              onClick={() => {
                if (category.disabled) return;
                handleCategoryChange(category.slug);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileProductCategories;
