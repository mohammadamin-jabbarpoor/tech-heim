import { LandingProductCards } from "@/src/features/products/types/productTypes";
import ProductsGrid from "./ProductsGrid";
import EmptyProducts from "./EmptyProducts";
import SortProducts from "./SortProducts";
import MobileFiltersBtn from "./mobile/MobileFiltersBtn";

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

type ProductsSectionProps = {
  products: LandingProductCards[];
  filters: CategoryFiltersProps[];
  priceRange: PriceRange;
};

export default function ProductsSection({
  products,
  filters,
  priceRange,
}: ProductsSectionProps) {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 lg:justify-end">
        <div className="block w-1/2 xs:w-fit lg:hidden">
          <MobileFiltersBtn
            productsCount={products.length}
            filters={filters}
            priceRange={priceRange}
          />
        </div>
        <div className="w-1/2 xs:w-fit">
          <SortProducts />
        </div>
      </div>

      {products.length === 0 ? (
        <EmptyProducts />
      ) : (
        <ProductsGrid products={products} />
      )}
    </>
  );
}
