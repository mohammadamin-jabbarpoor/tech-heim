import { getSaleProducts } from "@/src/features/products/queries/getSaleProducts";
import SaleSlider from "./SaleSlider";

async function SaleSliderWrapper() {
  const products = await getSaleProducts();

  return <SaleSlider products={products} />;
}

export default SaleSliderWrapper;
