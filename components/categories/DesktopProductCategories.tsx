"use client";

import { categoryItems } from "@/data/categoryItems";
import ProductCategoryCard from "./ProductCategoryCard";
import { useRouter, useSearchParams } from "next/navigation";

function DesktopProductCategories() {
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
    <div className="hidden lg:block max-w-271 mx-auto">
      <div className="flex items-center justify-between gap-8 my-6 md:my-8 lg:my-10">
        {categoryItems.map((category) => (
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
        ))}
      </div>
    </div>
  );
}

export default DesktopProductCategories;
