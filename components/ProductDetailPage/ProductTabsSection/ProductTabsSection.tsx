import { ProductDetail } from "@/lib/prisma-types";
import DetailTable from "./DetailTable";
import Tabs from "./Tabs";

function ProductTabsSection({product}: {product: ProductDetail}) {
  return (
    <div className="w-202 mt-12">
      <Tabs />
      <DetailTable product={product} />
    </div>
  );
}

export default ProductTabsSection;
