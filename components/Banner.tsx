import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <section className="hidden lg:block relative mt-12">
      <Image src="/banner.svg" alt="banner" width={1224} height={420} />
      <div className="absolute w-82.5 inset-0 left-16 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h4 className="font-medium text-[44px] text-white">SMART WATCH</h4>
          <p className="font-light text-2xl text-white">
            Various designs and brands
          </p>
        </div>
        <Link
          href="/products"
          className=" px-4 py-2 bg-[#FF6951] hover:bg-[#dc523d] text-[#223949] transition-all duration-300 rounded-lg cursor-pointer"
        >
          view
        </Link>
      </div>
    </section>
  );
}

export default Banner;
