"use client";

import ProductsCategories from "../categories/ProductsCategories";
import ProductsSection from "./ProductsSection";
import SelectedFilterBar from "./filter/SelectedFilterBar";

import { useProductFilters } from "@/lib/hooks/useProductFilters";
import { CategoryFilter } from "@/lib/filter-config";
import { ProductCardDto, PriceRange } from "@/lib/prisma-types";
import FilterSidebar from "./filter/FilterSidebar";

type ProductsListProps = {
  products: ProductCardDto[];
  filters: CategoryFilter[];
  priceRange: PriceRange;
};

export default function ProductsList({
  products,
  filters,
  priceRange,
}: ProductsListProps) {
  const { hasFilters, clearFilters } = useProductFilters();

  return (
    <>
      <ProductsCategories />

      <SelectedFilterBar />

      <div className="mt-6 w-full flex justify-between gap-6">
        <aside className="hidden lg:block lg:flex-6">
          <FilterSidebar
            filters={filters}
            priceRange={priceRange}
            hasFilters={hasFilters}
            onClear={clearFilters}
          />
        </aside>

        <main className="w-full lg:flex-19">
          <ProductsSection
            products={products}
            filters={filters}
            priceRange={priceRange}
            hasFilters={hasFilters}
            onClear={clearFilters}
          />
        </main>
      </div>
    </>
  );
}
