"use client";

import { ProductPage } from "@/src/features/products/types/productTypes";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductPurchaseCard from "./ProductPurchaseCard";
import Breadcrumb from "@/src/components/shared/ui/Breadcrumb";

type ProductHeroSectionProps = {
  product: ProductPage;
  selectedOption: ProductPage["options"][number] | null;
  onSelectedOption: (option: ProductPage["options"][number]) => void;
};

function ProductHeroSection({
  product,
  selectedOption,
  onSelectedOption,
}: ProductHeroSectionProps) {
  return (
    <div>
      <div className="mt-4 md:mt-6 flex">
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
      <div className="flex flex-col items-start gap-3 sm:gap-0 justify-center sm:flex-row sm:items-start sm:justify-between mt-10">
        <ProductGallery product={product} selectedOption={selectedOption} />
        <ProductInfo
          product={product}
          selectedOption={selectedOption}
          onSelectOption={onSelectedOption}
        />
        <ProductPurchaseCard
          product={product}
          selectedOption={selectedOption}
        />
      </div>
    </div>
  );
}

export default ProductHeroSection;
