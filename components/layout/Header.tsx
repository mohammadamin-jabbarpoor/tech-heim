import Image from "next/image";

function Header() {
  return (
    <>
      <section className="mt-6 flex sm:hidden">
        <div className="relative">
          <div className="absolute top-4 w-max">
            <h1 className="text-2xl font-semibold text-primary-700">
              Tech Heim
            </h1>
            <p className="absolute top-9 text-[9px] font-medium text-primary-700">
              "Join the{" "}
              <span className="font-medium text-secondary">
                digital revolution
              </span>
              "
            </p>
          </div>
          <button className="absolute w-23 top-29 text-[10px] px-3 py-2.5 bg-secondary text-white rounded-[4.5px]">
            Explore More
          </button>
        </div>

        <div className="ml-auto">
          <Image
            src="/mobile-header-banner.svg"
            alt="banner"
            width={209}
            height={157}
            loading="eager"
          />
        </div>
      </section>
      <section className="hidden sm:flex">
        <div className=" flex-[0.4] flex flex-col justify-center sm:gap-16 lg:gap-24 xl:gap-27.5">
          <div className="flex flex-col sm:gap-3 md:gap-5 lg:gap-8 xl:gap-12.5">
            <h1 className="sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[64px] font-semibold text-primary-700">
              Tech Heim
            </h1>
            <p className="sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[32px] font-medium text-primary-700">
              "Join the{" "}
              <span className="sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[32px] font-medium text-secondary">
                digital revolution
              </span>
              "
            </p>
          </div>
          <button className="self-start sm:text-xs md:text-sm lg:text-base sm:px-8 md:px-12 lg:px-18 xl:px-23.5 sm:py-2 md:py-2.5 lg:py-3.5 xl:py-4.5 bg-secondary hover:bg-secondary-500 transition-all duration-300 text-white rounded-[5px] md:rounded-lg cursor-pointer">
            Explore More
          </button>
        </div>

        <div className="flex-[0.6] flex justify-end">
          <Image
            src="/mobile-header-banner.svg"
            alt="banner"
            width={209}
            height={157}
            loading="eager"
            className="block sm:hidden"
          />
          <Image
            src="/header-banner.svg"
            alt="banner"
            width={728}
            height={443}
            loading="eager"
            className="hidden sm:block"
          />
        </div>
      </section>
    </>
  );
}

export default Header;
