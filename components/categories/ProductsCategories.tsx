"use client";

import {
  Airpods,
  Camera,
  Category,
  Data,
  Game,
  Mobile,
  Monitor,
  MonitorMobbile,
  Watch,
} from "iconsax-react";
import ProductCategoryCard from "./ProductCategoryCard";
import { useRouter, useSearchParams } from "next/navigation";

const categoryItems = [
  {
    title: "All",
    slug: undefined,
    icon: Category,
  },
  {
    title: "Mobile",
    slug: "mobile",
    icon: Mobile,
  },
  {
    title: "Laptop",
    slug: "laptop",
    icon: Monitor,
  },
  {
    title: "Audio",
    slug: undefined,
    disabled: true,
    icon: Airpods,
  },
  {
    title: "Wearable",
    slug: "watch",
    icon: Watch,
  },
  {
    title: "Camera",
    slug: undefined,
    disabled: true,
    icon: Camera,
  },
  {
    title: "Gaming",
    slug: "gaming",
    icon: Game,
  },
  {
    title: "Network",
    slug: undefined,
    disabled: true,
    icon: Data,
  },
  {
    title: "Accessories",
    slug: "accessories",
    icon: MonitorMobbile,
  },
];

function ProductsCategories() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");

  return (
    <div className="max-w-271 mx-auto">
      <div className="flex items-center justify-between gap-8 my-10">
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
              const params = new URLSearchParams(searchParams);

              if (category.slug) {
                params.set("category", category.slug);
              } else {
                params.delete("category");
              }

              router.push(`/products?${params.toString()}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsCategories;
