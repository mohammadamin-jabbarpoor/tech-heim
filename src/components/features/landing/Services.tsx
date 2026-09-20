import { servicesItems } from "@/src/lib/constants/servicesItems";
import Image from "next/image";

function Services() {
  return (
    <>
      <section className="w-full lg:h-25 hidden md:grid gap-4 grid-cols-3 lg:grid-cols-4 justify-items-start lg:justify-items-center mt-6 mb-5 lg:mt-14">
        {servicesItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center gap-2 lg:gap-4"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
            <p className="font-medium text-sm sm:font-normal sm:text-base">
              {item.title}
            </p>
          </div>
        ))}
      </section>
      <section className="w-full lg:h-25 md:hidden grid grid-cols-1 gap-4 xs:grid-cols-2 justify-items-start xs:justify-items-center mt-6 mb-5">
        {servicesItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center gap-2 lg:gap-4"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={item.moWidth}
              height={item.moHeight}
            />
            <p className="font-medium text-sm sm:font-normal sm:text-base">
              {item.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Services;
