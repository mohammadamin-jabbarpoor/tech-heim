import { getSaleProducts } from "@/lib/services/product.service";
import SaleBanner from "./SaleBanner";
import SaleSlider from "./SaleSlider";
import Image from "next/image";

async function SaleSection() {
  const products = await getSaleProducts();

  return (
    <section className="relative w-full h-43.5 sm:h-53 md:h-62.5 lg:h-72 xl:h-81.25 mt-6 xl:mt-12 py-4 sm:py-6 md:py-8 lg:py- xl:py-11 flex rounded-lg bg-primary-500 overflow-hidden">
      <Image
        src="/random-shape-3.png"
        alt=""
        width={500}
        height={435}
        className="
        absolute
        w-[270.98px]
        sm:w-[312.14px]
        md:w-[353.31px]
        lg:w-[394.48px]
        xl:w-[435.65px]
        h-auto
        -top-17 -left-24
        sm:-top-17 sm:-left-26
        md:-top-17 md:-left-27
        lg:-top-16 lg:-left-28
        xl:-top-15 xl:-left-29
        opacity-90 rotate-94 sm:rotate-100 pointer-events-none
    "
      />
      <SaleBanner />

      <SaleSlider products={products} />
    </section>
  );
}

export default SaleSection;
