"use client";

import { ProductCardDto } from "@/lib/prisma-types";
import ProductsCategories from "../categories/ProductsCategories";

import ProductsSection from "./ProductsSection";
import FiltersSidbar from "./filter/FiltersSidbar";
import { CategoryFilter, SelectedFilters } from "@/lib/filter-config";
import { useRouter, useSearchParams } from "next/navigation";
import { getSelectedFiltersFromSearchParams } from "@/lib/utils/filter";
import { useProductFilters } from "@/lib/hooks/useProductFilters";
import SelectedFilterBar from "./filter/SelectedFilterBar";

type ProductsListProps = {
  products: ProductCardDto[];
  filters: CategoryFilter[];
};

function ProductsList({ products, filters }: ProductsListProps) {
  const {
    searchParams,
    router,
    selectedCategory,
    selectedFilters,
    hasFilters,
    clearFilters,
  } = useProductFilters();

  return (
    <>
      <ProductsCategories />

      <SelectedFilterBar />

      <div className="flex gap-6">
        <FiltersSidbar
          filters={filters}
          onClearFilters={clearFilters}
          hasFilters={hasFilters}
        />

        <ProductsSection products={products} />
      </div>
    </>
  );
}

export default ProductsList;
