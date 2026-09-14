import Breadcrumb from "@/src/components/features/faq/Breadcrumb";
import Services from "@/src/components/features/landing/Services";
import ProductsContent from "@/src/components/features/products/ProductsContent";
import { getCategoryFilters } from "@/src/features/products/queries/getCategoryFilters";
import { getProducts } from "@/src/features/products/queries/getProducts";

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category;
  const products = await getProducts(category);
  const filters = category ? await getCategoryFilters(category) : [];
  console.log(category);

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

      <ProductsContent products={products} filters={filters} />

      <Services />
    </>
  );
}

export default ProductsPage;
