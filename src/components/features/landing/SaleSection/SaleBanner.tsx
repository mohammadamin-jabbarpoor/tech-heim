import { ArrowRight2 } from "iconsax-react";

function SaleBanner() {
  return (
    <div
      className="relative z-10 shrink-0 basis-32 xl:basis-80
      pl-2 pr-4
      sm:pl-3 sm:pr-8
      md:pl-4 md:pr-12
      lg:pl-6 lg:pr-16
      xl:pl-8 xl:pr-20.5
      flex flex-col items-center justify-between md:p-4.5 md:gap- xl:gap-22"
    >
      <div className="w-29 md:w-51 space-y-2 text-center text-white">
        <h3 className="w-full text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-medium">
          Products On Sale
        </h3>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-light">
          Shop Now!
        </p>
      </div>

      <button className="group flex items-center gap-1 text-sm xl:text-base lg:mb-4.5 font-light text-white">
        <p className="group-hover:underline underline-offset-4 cursor-pointer decoration-0">
          View
        </p>
        <span className="hidden md:block">all</span>
        <ArrowRight2 variant="Linear" size={12} color="white" />
      </button>
    </div>
  );
}

export default SaleBanner;
