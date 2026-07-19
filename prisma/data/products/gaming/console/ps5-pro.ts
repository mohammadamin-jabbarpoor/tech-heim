import { ProductSeed } from "@/prisma/types/product-seed";

export const ps5Pro: ProductSeed = {
  title: "Sony Playstation 5 Pro 2TB",
  slug: "ps5-pro-2tb",
  description:
    "Get Super sharp image clarity on your 4K TV using AI enhanced resolution for ultra-high definition play with astonishing detail. Optimized Console Performance - Reach higher and more consistent frame rates for silky smooth gameplay with support for 60Hz and 120Hz displays.",
  price: "990.00",
  stock: 14,
  category: "gaming",

  images: [
    {
      path: "products/gaming/console/ps5-pro-2tb/1-ps5pro-rgb-withnotice-860.webp",
      alt: "1 Playstation 5 Pro",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/console/ps5-pro-2tb/2-ps5pro-rgb-withnotice-860.webp",
      alt: "2 Playstation 5 Pro",
      sortOrder: 2,
    },
    {
      path: "products/gaming/console/ps5-pro-2tb/3-ps5pro-rgb-withnotice-860.webp",
      alt: "3 Playstation 5 Pro",
      sortOrder: 3,
    },
    {
      path: "products/gaming/console/ps5-pro-2tb/4-ps5pro-rgb-withnotice-860.webp",
      alt: "4 Playstation 5 Pro",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Sony",
      sortOrder: 1,
    },
    {
      title: "Model",
      value: "Playstation 5 Pro 2TB",
      sortOrder: 2,
    },
    {
      title: "Built-in storage",
      value: "2 TB",
      sortOrder: 3,
    },
    {
      title: "Weight",
      value: "3.1 kg",
      sortOrder: 4,
    },
    {
      title: "Size",
      value: "89 x 388 x 216mm",
      sortOrder: 5,
    },
    {
      title: "Wi-Fi version",
      value: "802.11be",
      sortOrder: 6,
    },
    {
      title: "HDMI",
      value: "1",
      sortOrder: 7,
    },
  ],
};
