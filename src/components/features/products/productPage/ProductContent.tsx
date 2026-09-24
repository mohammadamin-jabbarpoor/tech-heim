"use client";

import {
  LandingProductCards,
  ProductPage,
} from "@/src/features/products/types/productTypes";
import ProductHeroSection from "./ProductHeroSection";
import ProductTabsSection from "./ProductTabsSection";
import CommentsSection from "./commentsSection/CommentsSection";
import ReviewsSection from "./reviewsSection/ReviewsSection";
import SimilarProducts from "./similarProducts/SimilarProducts";
import { Suspense, useState } from "react";
import SimilarProductSkeleton from "./similarProducts/SimilarProductSkeleton";
import ProductBottomBar from "./ProductBottomBar";

type ProductContentProps = {
  product: ProductPage;
  similarProducts: LandingProductCards[];
};

function ProductContent({ product, similarProducts }: ProductContentProps) {
  const defaultOption =
    product.options.find((option) => option.isDefault) ?? null;
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  return (
    <>
      <div className="pb-20">
        <ProductHeroSection
          product={product}
          selectedOption={selectedOption}
          onSelectedOption={setSelectedOption}
        />
        <ProductTabsSection product={product} />
        <Suspense fallback={<SimilarProductSkeleton />}>
          <SimilarProducts products={similarProducts} />
        </Suspense>
        <CommentsSection />
        <ReviewsSection />
      </div>

      <ProductBottomBar product={product} selectedOption={selectedOption} />
    </>
  );
}

export default ProductContent;
