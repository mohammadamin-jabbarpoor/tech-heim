import Line from "@/components/ui/Line";
import NewProductCard from "./NewProductCard";
import { getNewProducts } from "@/lib/services/product.service";
import SectionHeader from "@/components/ui/SectionHeader";

async function NewProducts() {
  const products = await getNewProducts();

  return (
    <div className="block mt-6 xl:mt-12">
      <SectionHeader value="New Products" />
      <Line />
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <NewProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default NewProducts;
