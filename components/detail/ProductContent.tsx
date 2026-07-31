"use client";

import { useState } from "react";
import {
  ProductCardDto,
  ProductDetailDto,
  ProductOptionDto,
} from "@/lib/prisma-types";

import ProductHeroSection from "./productHero-section/ProductHeroSection";
import ProductBottomBar from "./product-bottom/ProductBottomBar";
import ProductTabsSection from "./productTabs-section/ProductTabsSection";
import SimilarProductsSection from "./similarProducts-section/SimilarProductsSection";
import CommentsSection from "./comments-section/CommentsSection";
import ReviewsSection from "./reviews-section/ReviewsSection";

type Props = {
  product: ProductDetailDto;
  similarProducts: ProductCardDto[];
};

export default function ProductContent({ product, similarProducts }: Props) {
  const defaultOption =
    product.options.find((option) => option.isDefault) ?? null;

  const [selectedOption, setSelectedOption] = useState<ProductOptionDto | null>(
    defaultOption,
  );

  return (
    <>
      <div className="pb-20">
        <ProductHeroSection
          product={product}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
        />

        <ProductTabsSection product={product} />

        <SimilarProductsSection products={similarProducts} />

        <CommentsSection />

        <ReviewsSection />
      </div>

      <ProductBottomBar product={product} selectedOption={selectedOption} />
    </>
  );
}
