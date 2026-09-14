"use client";

import { LandingProductCards } from "@/src/features/products/types/product.types";
import ProductCard from "./ProductCard";

type ProductsGridProps = {
  products: LandingProductCards[];
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-4 justify-items-center md:gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
