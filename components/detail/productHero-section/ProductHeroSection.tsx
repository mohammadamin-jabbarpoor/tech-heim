"use client";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductPurchaseCard from "./purchase-card/ProductPurchaseCard";
import { ProductDetailDto, ProductOptionDto } from "@/lib/prisma-types";
import Breadcrumb from "@/components/ui/BreadCrumb";

type HeroSectionProps = {
  product: ProductDetailDto;
  selectedOption: ProductOptionDto | null;
  onSelectOption: React.Dispatch<React.SetStateAction<ProductOptionDto | null>>;
};

function ProductHeroSection({
  product,
  selectedOption,
  onSelectOption,
}: HeroSectionProps) {
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
          onSelectOption={onSelectOption}
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
