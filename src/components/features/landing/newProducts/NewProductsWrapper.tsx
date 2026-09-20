import { getNewProducts } from "@/src/features/products/queries/getNewProducts";
import NewProductSlider from "./NewProductSlider";

async function NewProductsWrapper() {
  const products = await getNewProducts();
  return <NewProductSlider products={products} />;
}

export default NewProductsWrapper;
