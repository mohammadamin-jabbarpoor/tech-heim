import { Suspense } from "react";
import SectionHeader from "../SectionHeader";
import Line from "@/src/components/shared/ui/Line";
import NewProductSkeleton from "./NewProductSkeleton";
import NewProductsWrapper from "./NewProductsWrapper";

async function NewProducts() {
  return (
    <div className="block mt-6 xl:mt-12">
      <SectionHeader value="New Products" />
      <Line />

      <Suspense fallback={<NewProductSkeleton />}>
        <NewProductsWrapper />
      </Suspense>
    </div>
  );
}

export default NewProducts;
