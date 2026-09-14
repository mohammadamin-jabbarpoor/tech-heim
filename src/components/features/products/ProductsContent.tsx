"use client";

import { LandingProductCards } from "@/src/features/products/types/product.types";
import ProductsCategories from "./ProductsCategories";
import ProductsSection from "./ProductsSection";
import FilterSidebar from "./FilterSidebar";

type CategoryFiltersProps = {
  id: string;
  name: string;
  options: {
    id: string;
    slug: string;
    value: string;
  }[];
  slug: string;
};

type ProductsListProps = {
  products: LandingProductCards[];
  filters: CategoryFiltersProps[];
};

export default function ProductsContent({
  products,
  filters,
}: ProductsListProps) {
  return (
    <>
      <ProductsCategories />

      <div className="mt-6 w-full flex justify-between gap-6">
        <aside className="hidden lg:block lg:flex-5">
          <FilterSidebar filters={filters} />
        </aside>
        <main className="w-full lg:flex-20">
          <ProductsSection products={products} />
        </main>
      </div>
    </>
  );
}
