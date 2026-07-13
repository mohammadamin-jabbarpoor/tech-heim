"use client";

import { useState } from "react";
import { ProductCardType } from "@/lib/prisma-types";
import ProductsCategories from "../categories/ProductsCategories";

import ProductsSection from "./ProductsSection";
import FiltersSidbar from "../filter/FiltersSidbar";
import { CategoryFilter, SelectedFilters } from "@/lib/filter-config";
import { useRouter, useSearchParams } from "next/navigation";
import { getSelectedFiltersFromSearchParams } from "@/lib/utils/filter";
import { useProductFilters } from "@/lib/hooks/useProductFilters";

type ProductsContentProps = {
  products: ProductCardType[];
  filters: CategoryFilter[];
};

function ProductsContent({ products, filters }: ProductsContentProps) {
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

export default ProductsContent;
