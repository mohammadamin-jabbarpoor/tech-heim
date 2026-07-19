import Breadcrumb from "@/components/ui/BreadCrumb";

import Services from "@/components/home/services/Services";
import { getFiltersByCategory } from "@/lib/services/filter.service";
import { getFilteredProducts } from "@/lib/services/product.service";
import { parseSelectedFilters } from "@/lib/utils/filter";
import ProductsList from "@/components/products/ProductsList";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
    sale?: string;
    minPrice?: string;
    maxPrice?: string;
    [key: string]: string | undefined;
  }>;
};

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;

  const { category, sale, minPrice, maxPrice, ...filterParams } = params;

  const selectedFilters = parseSelectedFilters(filterParams);

  const products = await getFilteredProducts({
    category,
    filters: selectedFilters,
    sale: sale === "true",
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
  });

  const filters = category ? await getFiltersByCategory(category) : [];

  const title = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  return (
    <div>
      <div className="mt-6 flex">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            {
              label: title,
              href: `/products?category=${category}`,
            },
          ]}
        />
      </div>
      <ProductsList products={products} filters={filters} />
      <Services />
    </div>
  );
}

export default ProductsPage;
