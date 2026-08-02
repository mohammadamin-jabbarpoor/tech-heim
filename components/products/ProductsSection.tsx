"use client";

import { useMemo, useState } from "react";

import { CategoryFilter } from "@/lib/filter-config";
import { PriceRange, ProductCardDto } from "@/lib/prisma-types";
import ProductsToolbar from "./toolbar/ProductsToolbar";
import EmptyProducts from "./grid/EmptyProducts";
import ProductsGrid from "./grid/ProductsGrid";
import { SortValue } from "@/data/sortOptions";

type ProductsSectionProps = {
  products: ProductCardDto[];
  filters: CategoryFilter[];
  priceRange: PriceRange;
  hasFilters: boolean;
  onClear: () => void;
};

export default function ProductsSection({
  products,
  filters,
  priceRange,
  hasFilters,
  onClear,
}: ProductsSectionProps) {
  const [selectedSort, setSelectedSort] = useState<SortValue>("relevant");

  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (selectedSort) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);

      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);

      case "newest":
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

      default:
        return sorted;
    }
  }, [products, selectedSort]);

  return (
    <>
      <ProductsToolbar
        productsCount={products.length}
        filters={filters}
        priceRange={priceRange}
        hasFilters={hasFilters}
        onClear={onClear}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />

      {sortedProducts.length === 0 ? (
        <EmptyProducts />
      ) : (
        <ProductsGrid products={sortedProducts} />
      )}
    </>
  );
}
