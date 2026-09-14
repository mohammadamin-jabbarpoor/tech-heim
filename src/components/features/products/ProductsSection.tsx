import { LandingProductCards } from "@/src/features/products/types/product.types";
import ProductsGrid from "./ProductsGrid";
import EmptyProducts from "./EmptyProducts";

type ProductsSectionProps = {
  products: LandingProductCards[];
};

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <>
      {products.length === 0 ? (
        <EmptyProducts />
      ) : (
        <ProductsGrid products={products} />
      )}
    </>
  );
}
