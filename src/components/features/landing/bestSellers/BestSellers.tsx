import { Suspense } from "react";
import SectionHeader from "../SectionHeader";
import Line from "@/src/components/shared/ui/Line";
import BestSellersSkeleton from "./BestSellersSkeleton";
import BestSellersWrapper from "./BestSellersWrapper";

async function BestSellers() {
  return (
    <div className="block mt-6 xl:mt-12">
      <SectionHeader value="New Products" />
      <Line />

      <Suspense fallback={<BestSellersSkeleton />}>
        <BestSellersWrapper />
      </Suspense>
    </div>
  );
}

export default BestSellers;
