import Image from "next/image";

const servicesItems = [
  {
    id: "tech",
    image: "/services/tech.svg",
    title: "Latest and Greatest Tech",
    alt: "tech",
    width: 40,
    height: 33.63,
    moWidth: 24.97,
    moHeight: 21,
  },
  {
    id: "guarantee",
    image: "/services/guarantee.svg",
    title: "Guarantee",
    alt: "guarantee",
    width: 40,
    height: 43.77,
    moWidth: 24.67,
    moHeight: 27,
  },
  {
    id: "shipping",
    image: "/services/shipping.svg",
    title: "Free Shipping over 1000$",
    alt: "shipping",
    width: 62,
    height: 30.56,
    moWidth: 32.46,
    moHeight: 16,
  },
  {
    id: "support",
    image: "/services/support.svg",
    title: "24/7 Support",
    alt: "support",
    width: 40,
    height: 45.02,
    moWidth: 24,
    moHeight: 27,
  },
];

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
