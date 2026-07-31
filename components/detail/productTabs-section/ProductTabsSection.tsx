import { ProductDetailDto } from "@/lib/prisma-types";
import DetailTable from "./DetailTable";
import Tabs from "./Tabs";

function ProductTabsSection({ product }: { product: ProductDetailDto }) {
  return (
    <div className="w-full lg:w-202 mt-12">
      <Tabs />
      <DetailTable product={product} />
    </div>
  );
}

export default ProductTabsSection;
