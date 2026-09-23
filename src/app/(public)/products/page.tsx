import Services from "@/src/components/features/landing/Services";
import ProductsContent from "@/src/components/features/products/ProductsContent";
import Breadcrumb from "@/src/components/shared/ui/Breadcrumb";
import { getCategoryFilters } from "@/src/features/products/queries/getCategoryFilters";
import {
  getProductPriceRange,
  getProducts,
} from "@/src/features/products/queries/getProducts";

type SearchParams = {
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  page?: string;
  [key: string]: string | undefined;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category;
  const productsData = await getProducts(params);
  const filters = category ? await getCategoryFilters(category) : [];
  const priceRange = await getProductPriceRange(category);

  return (
    <>
      <div className="mt-6 flex">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Products",
              href: "/products",
            },
            {
              label: category,
              href: `/products?category=${category}`,
            },
          ]}
        />
      </div>

      <ProductsContent
        products={productsData.products}
        filters={filters}
        priceRange={priceRange}
        pagination={productsData.pagination}
      />

      <Services />
    </>
  );
}

export default ProductsPage;
