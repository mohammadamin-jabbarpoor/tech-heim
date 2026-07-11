import SectionHeader from "../SectionHeader";
import Line from "../Line";

import BestSellerCard from "./BestSellerCard";
import { getBestSellerProducts } from "@/lib/services/product.service";

async function BestSellers() {
  const products = await getBestSellerProducts();

  return (
    <div className="mt-6 xl:mt-12">
      <SectionHeader value="Best Sellers" />
      <Line />
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
