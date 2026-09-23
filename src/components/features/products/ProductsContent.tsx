"use client";

import { LandingProductCards } from "@/src/features/products/types/productTypes";
import ProductsCategories from "./productCategory/ProductsCategories";
import ProductsSection from "./ProductsSection";
import FilterSidebar from "./FilterSidebar";
import SelectedFilterBar from "./SelectedFilterBar";
import { useProductFilters } from "@/src/lib/hooks/useProductFilters";
import Pagination from "./Pagination";

type CategoryFiltersProps = {
  id: string;
  name: string;
  options: {
    id: string;
    name: string;
    value: string;
  }[];
  slug: string;
};

type PriceRange = {
  min: number;
  max: number;
};

type Pagination = {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  productsPerPage: number;
};

type ProductsListProps = {
  products: LandingProductCards[];
  filters: CategoryFiltersProps[];
  priceRange: PriceRange;
  pagination: Pagination;
};

export default function ProductsContent({
  products,
  filters,
  priceRange,
  pagination,
}: ProductsListProps) {
  const { selectedFilters, handleFilterChange, clearAllFilters } =
    useProductFilters();

  return (
    <>
      <ProductsCategories />

      <SelectedFilterBar
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
      />

      <div className="mt-6 w-full flex justify-between gap-6">
        <aside className="hidden lg:block lg:flex-5">
          <FilterSidebar
            filters={filters}
            priceRange={priceRange}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
            clearAllFilters={clearAllFilters}
          />
        </aside>

        <main className="w-full lg:flex-20">
          <ProductsSection
            products={products}
            filters={filters}
            priceRange={priceRange}
          />

          {pagination.totalPages > 1 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
            />
          )}
        </main>
      </div>
    </>
  );
}
