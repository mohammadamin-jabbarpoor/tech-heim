"use client";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductPurchaseCard from "./ProductPurchaseCard";
import { ProductDetailDto, ProductOptionDto } from "@/lib/prisma-types";
import Breadcrumb from "@/components/ui/BreadCrumb";
import { useState } from "react";

function ProductHeroSection({ product }: { product: ProductDetailDto }) {
  const defaultOption =
    product.options.find((option) => option.isDefault) ?? null;

  const [selectedOption, setSelectedOption] = useState<ProductOptionDto | null>(
    defaultOption,
  );

  return (
    <div>
      <div className="mt-6 flex">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            {
              label: product.category.name,
              href: `/products?category=${product.category.slug}`,
            },
            {
              label: product.title,
              href: `/products/${product.slug}`,
            },
          ]}
        />
      </div>
      <div className="flex items-start justify-between mt-10">
        <ProductGallery product={product} selectedOption={selectedOption} />
        <ProductInfo
          product={product}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
        />
        <ProductPurchaseCard product={product} />
      </div>
    </div>
  );
}

export default ProductHeroSection;
