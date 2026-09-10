import { topBrandsImages } from "@/src/lib/constants/topBrandsImages";
import Image from "next/image";
import Line from "../../shared/ui/Line";

function TopBrands() {
  return (
    <section className="mt-6 xl:mt-12">
      <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[26px] xl:text-[32px]">
        Top Brands
      </p>
      <Line />
      <div className="xs:hidden flex w-full h-17.5 items-center justify-between">
        {topBrandsImages.slice(0, -2).map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={item.moWidth}
            height={item.moHeight}
          />
        ))}
      </div>
      <div className="hidden xs:flex md:hidden w-full h-17.5 items-center justify-between">
        {topBrandsImages.slice(0, -1).map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={item.moWidth}
            height={item.moHeight}
          />
        ))}
      </div>
      <div className="hidden md:flex lg:hidden w-full h-27.5 items-center justify-between">
        {topBrandsImages.slice(0, -2).map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
      <div className="hidden lg:flex w-full h-38.75 items-center justify-between">
        {topBrandsImages.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </section>
  );
}

export default TopBrands;
