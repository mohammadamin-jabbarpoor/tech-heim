import { Suspense } from "react";
import SectionHeader from "../SectionHeader";
import Line from "@/src/components/shared/ui/Line";
import NewProdutSkeleton from "./NewProdutSkeleton";
import NewProductsWrapper from "./NewProductsWrapper";

async function NewProducts() {
  return (
    <div className="block mt-6 xl:mt-12">
      <SectionHeader value="New Products" />
      <Line />

      <Suspense fallback={<NewProdutSkeleton />}>
        <NewProductsWrapper />
      </Suspense>
    </div>
  );
}

export default NewProducts;
