"use client";

import Image from "next/image";
import { useCountdown } from "@/app/hooks/useCountdown";
import TimerBox from "./TimerBox";
import Link from "next/link";
import { ShoppingCart } from "iconsax-react";

function Banners() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    "2026-07-24T16:46:00",
  );

  if (isExpired) {
    return <p>Offer ended</p>;
  }

  return (
    <section className="flex-col gap-4 lg:gap-6 md:flex-row flex items-center justify-between mt-6 lg:mt-12">
      <div className="relative overflow-hidden">
        <Image src="/iphone-banner.svg" alt="iphone" width={756} height={420} />
        <div className="hidden md:block">
          <Image
            className="absolute top-4.5 -left-17.5"
            src="/ellipse-3.svg"
            alt="ellipse"
            width={118}
            height={118}
          />
          <Image
            className="absolute -top-14.25 left-70"
            src="/ellipse-3.svg"
            alt="ellipse"
            width={118}
            height={118}
          />
          <Image
            className="absolute -bottom-7 -right-6"
            src="/ellipse-3.svg"
            alt="ellipse"
            width={118}
            height={118}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-end xl:mr-8">
          <div className="w-[45%] pr-[6%] max-w-75 flex flex-col gap-2 xs:gap-4 xl:gap-6">
            <div className="w-full flex justify-between">
              <TimerBox value={days} label="Days" />
              <TimerBox value={hours} label="Hours" />
              <TimerBox value={minutes} label="Min" />
              <TimerBox value={seconds} label="Sec" />
            </div>
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-4 xl:gap-6 items-center">
              <div className="flex flex-col gap-1 lg:gap-2">
                <h3 className="font-medium text-[8px] xs:text-xs sm:text-base md:text-xs lg:text-lg xl:text-xl">
                  It feels good to be the first
                </h3>
                <p className="lg:pl-3 font-light text-[6.5px] xs:text-[9px] sm:text-sm md:text-[10px] lg:text-sm xl:text-base">
                  Get ready for the future of smartphones.Experience innovation
                  like never before. Stay tuned for the big iPhone 15 sale.
                </p>
              </div>
              <Link
                href="/products"
                className="group hidden lg:flex items-center justify-center gap-0 lg:w-30 lg:hover:w-36 xl:w-33.5 xl:hover:w-41.5 py-3.5 bg-primary hover:bg-primary-600 text-white lg:text-sm xl:text-base rounded-lg transition-all duration-300"
              >
                <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                  Register Now
                </span>

                <ShoppingCart
                  variant="Linear"
                  size={24}
                  color="white"
                  className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-2"
                />
              </Link>
              <Link
                href="/products"
                className="w-full flex lg:hidden items-center justify-center mt-2 text-sm bg-primary px-4 py-3 rounded-lg text-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden relative">
        <Image
          src="/play-mobile-banner.svg"
          alt="ps5-banner"
          width={356}
          height={197.77}
          className="block xs:hidden"
        />
        <Image
          src="/play-mobile-banner.svg"
          alt="ps5-banner"
          width={636}
          height={197.77}
          className="hidden xs:block"
        />
        <div className="absolute inset-0 flex items-end xl:mr-8">
          <div className="pl-[13%] pb-[4%] xs:pb-[6%] sm:pb-[9%]">
            <Link
              href="/products"
              className="w-26 px-4 py-2.5 xs:w-32 xs:py-3.5 sm:w-53 sm:py-3.5 flex lg:hidden items-center justify-center mt-2 text-sm bg-primary rounded-lg text-white"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block relative">
        <Image
          src="/play-banner.svg"
          alt="play-station"
          width={444}
          height={420}
        />
        <div className="absolute inset-0 flex items-end xl:mr-8">
          <div className="pl-[12%] pb-[6%]">
            <Link
              href="/products"
              className="group hidden lg:flex items-center justify-center gap-0 w-30 py-2 lg:w-36 lg:py-3 bg-primary hover:bg-primary-600 text-white rounded-lg transition-all duration-300"
            >
              <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                Buy Now
              </span>

              <ShoppingCart
                variant="Linear"
                size={24}
                color="white"
                className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-2"
              />
            </Link>

            <Link
              href="/products"
              className="lg:hidden flex items-center justify-center w-32 py-2.5 bg-primary text-white rounded-lg"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banners;
