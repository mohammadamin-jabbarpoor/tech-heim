import Breadcrumb from "@/components/BreadCrumb";
import ProductsContent from "@/components/products/ProductsContent";
import Services from "@/components/Services";
import { getFiltersByCategory } from "@/lib/services/filter.service";
import { getFilteredProducts } from "@/lib/services/product.service";
import { parseSelectedFilters } from "@/lib/utils/filter";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;

  const category = params.category;

  const selectedFilters = parseSelectedFilters(params);

  const products = await getFilteredProducts({
    category,
    filters: selectedFilters,
  });

  const filters = category ? await getFiltersByCategory(category) : [];

  return (
    <div>
      <div className="mt-6 flex">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
          ]}
        />
      </div>
      <ProductsContent products={products} filters={filters} />
      <Services />
    </div>
  );
}

export default ProductsPage;
