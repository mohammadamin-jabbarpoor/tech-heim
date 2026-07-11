import Image from "next/image";
import Line from "./Line";

const brandsImages = [
  {
    id: "apple",
    image: "/brands/apple.svg",
    alt: "apple",
    width: 45.85,
    height: 56.32,
    moWidth: 26.86,
    moHeight: 33,
  },
  {
    id: "sony",
    image: "/brands/sony.svg",
    alt: "sony",
    width: 198.93,
    height: 34.81,
    moWidth: 62,
    moHeight: 10.85,
  },
  {
    id: "samsung",
    image: "/brands/samsung.svg",
    alt: "samsung",
    width: 213.07,
    height: 32.53,
    moWidth: 60.81,
    moHeight: 9.28,
  },
  {
    id: "canon",
    image: "/brands/canon.svg",
    alt: "canon",
    width: 173.83,
    height: 29.34,
    moWidth: 58.52,
    moHeight: 10,
  },
  {
    id: "huawei",
    image: "/brands/huawei.svg",
    alt: "huawei",
    width: 89.87,
    height: 67.7,
    moWidth: 34,
    moHeight: 26,
  },
  {
    id: "lenovo",
    image: "/brands/lenovo.svg",
    alt: "lenovo",
    width: 152.61,
    height: 49.03,
    moWidth: 58,
    moHeight: 19,
  },
];

function TopBrands() {
  return (
    <section className="mt-6 xl:mt-12">
      <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[26px] xl:text-[32px]">
        Top Brands
      </p>
      <Line />
      <div className="xs:hidden flex w-full h-17.5 items-center justify-between">
        {brandsImages.slice(0, -2).map((item) => (
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
        {brandsImages.slice(0, -1).map((item) => (
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
        {brandsImages.slice(0, -2).map((item) => (
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
        {brandsImages.map((item) => (
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
