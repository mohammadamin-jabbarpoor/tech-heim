import { getBestProducts } from "@/src/features/products/queries/getBestProducts";
import BestSellersSlider from "./BestSellersSlider";

async function BestSellersWrapper() {
  const products = await getBestProducts();
  return <BestSellersSlider products={products} />;
}

export default BestSellersWrapper;
