import Image from "next/image";
import Link from "next/link";

function BannerSection() {
  return (
    <section className="relative mt-6 xl:mt-12 overflow-hidden">
      <Image
        className="hidden xs:block w-full h-auto"
        src="/banner.svg"
        alt="banner"
        width={1224}
        height={420}
      />

      <div className="xs:hidden block relative w-full aspect-2/1">
        <Image
          className="object-cover"
          src="/mobile-banner.svg"
          alt="banner"
          fill
        />
      </div>

      <div className="absolute top-1/2 left-[3%] -translate-y-1/2 flex flex-col items-center justify-center gap-5 xs:left-[5%] xs:gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:left-[7%] xl:gap-10">
        <div className="flex flex-col items-center justify-center gap-1 xs:gap-2 sm:gap-3 lg:gap-4">
          <h4 className="font-medium text-white text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[44px] whitespace-nowrap">
            SMART WATCH
          </h4>

          <p className="font-light text-white text-[9px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl whitespace-nowrap">
            Various designs and brands
          </p>
        </div>

        <Link
          href="/products"
          className="rounded-lg bg-[#FF6951] text-[#223949] transition-all duration-300 hover:bg-[#dc523d] px-3 py-1 text-xs xs:px-4 xs:py-1.5 xs:text-sm sm:px-5 sm:py-2 sm:text-base lg:px-6 lg:py-2.5"
        >
          View
        </Link>
      </div>
    </section>
  );
}

export default BannerSection;
