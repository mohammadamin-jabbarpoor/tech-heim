import { ProductSeed } from "@/prisma/types/product-seed";

export const razerProTypeUltra: ProductSeed = {
  title: "Razer Pro Type Ultra",
  slug: "razer-pro-type-ultra",
  description:
    "The silent mechanical switches and sound dampening foam on this keyboard offer a quiet, distraction-free experience when at the office or WFH, while its super durable design lasts for up to 80 million clicks.Keycaps : ABS plastic - With soft touch coating.",
  price: "194.00",
  stock: 29,
  category: "gaming",

  images: [
    {
      path: "products/gaming/keyboard/razer-pro-type-ultra/1-Razer-Pro-Type-Ultra---US-Layout-860.webp",
      alt: "1 Razer Pro Type Ultra",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/keyboard/razer-pro-type-ultra/2-Razer-Pro-Type-Ultra---US-Layout-860.webp",
      alt: "2 Razer Pro Type Ultra",
      sortOrder: 2,
    },
    {
      path: "products/gaming/keyboard/razer-pro-type-ultra/3-Razer-Pro-Type-Ultra---US-Layout-860.webp",
      alt: "3 Razer Pro Type Ultra",
      sortOrder: 3,
    },
    {
      path: "products/gaming/keyboard/razer-pro-type-ultra/4-Razer-Pro-Type-Ultra---US-Layout-860.webp",
      alt: "4 Razer Pro Type Ultra",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "Razer",
      sortOrder: 1,
    },
    {
      title: "Colour",
      value: "White",
      sortOrder: 2,
    },
    {
      title: "Type",
      value: "Keyboard",
      sortOrder: 3,
    },
    {
      title: "Key type",
      value: "Mechanical",
      sortOrder: 4,
    },
    {
      title: "Warranty ",
      value: "1 Year",
      sortOrder: 5,
    },
  ],
};
