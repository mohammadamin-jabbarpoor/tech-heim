"use client";

import ProductCard from "../ProductCard";
import { ProductCardDto } from "@/lib/prisma-types";

type ProductsGridProps = {
  products: ProductCardDto[];
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
