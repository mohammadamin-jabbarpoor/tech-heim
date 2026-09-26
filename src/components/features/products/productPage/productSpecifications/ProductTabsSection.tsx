import { ProductPage } from "@/src/features/products/types/productTypes";
import Tabs from "./Tabs";
import DetailTable from "./DetailTable";

function ProductTabsSection({ product }: { product: ProductPage }) {
  return (
    <div className="w-full lg:w-202 mt-12">
      <Tabs />
      <DetailTable product={product} />
    </div>
  );
}

export default ProductTabsSection;
