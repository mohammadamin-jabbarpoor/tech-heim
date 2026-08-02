import Breadcrumb from "@/components/ui/BreadCrumb";
import Services from "@/components/home/services/Services";
import ProductsList from "@/components/products/ProductsList";

import { getFiltersByCategory } from "@/lib/services/filter.service";
import {
  getFilteredProducts,
  getPriceRangeByCategory,
} from "@/lib/services/product.service";

import { parseSelectedFilters } from "@/lib/utils/filter";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
    sale?: string;
    minPrice?: string;
    maxPrice?: string;
    [key: string]: string | undefined;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  const { category, sale, minPrice, maxPrice, ...filterParams } = params;

  const selectedFilters = parseSelectedFilters(filterParams);

  const [products, priceRange, filters] = await Promise.all([
    getFilteredProducts({
      category,
      filters: selectedFilters,
      sale: sale === "true",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    }),

    getPriceRangeByCategory(category),

    category ? getFiltersByCategory(category) : Promise.resolve([]),
  ]);

  const title = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  return (
    <div>
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
              label: title,
              href: `/products?category=${category}`,
            },
          ]}
        />
      </div>

      <ProductsList
        products={products}
        filters={filters}
        priceRange={priceRange}
      />

      <Services />
    </div>
  );
}
