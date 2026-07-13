import { ProductSeed } from "@/prisma/types/product-seed";

export const razerDeathAdderV4Pro: ProductSeed = {
  title: "Razer DeathAdder V4 Pro",
  slug: "razer-deathadder-v4-pro",
  description:
    "Weighs just 56g with re-engineered ergonomic shape, enabling faster swipes and precise tracking for FPS, esports tournaments, and competitive gaming performance.",
  price: "225.00",
  stock: 59,
  category: "gaming",
  images: [
    {
      path: "products/gaming/mouse/razer-deathadder-v4-pro/black/1-razer-deathadder-v4-pro-black-860.webp",
      alt: "Razer DeathAdder V4 Pro",
      isPrimary: true,
      sortOrder: 1,
    },
  ],
  options: [
    {
      type: "color",
      name: "Black",
      value: "#0f0f0f",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/gaming/mouse/razer-deathadder-v4-pro/black/1-razer-deathadder-v4-pro-black-860.webp",
          alt: "Razer DeathAdder V4 Pro",
          isPrimary: true,
          sortOrder: 1,
        },
      ],
    },
    {
      type: "color",
      name: "White",
      value: "#ffffff",
      sortOrder: 2,
      images: [
        {
          path: "products/gaming/mouse/razer-deathadder-v4-pro/white/1-razer-deathadder-v4-pro-white-860.webp",
          alt: "Razer DeathAdder V4 Pro",
          isPrimary: true,
          sortOrder: 1,
        },
      ],
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Razer",
      sortOrder: 1,
    },
    {
      title: "Model",
      value: "Razer DeathAdder V4 Pro",
      sortOrder: 2,
    },
    {
      title: "Warranty",
      value: "2 Year",
      sortOrder: 3,
    },
    {
      title: "Antenna Location",
      value: "Gaming",
      sortOrder: 4,
    },
  ],
};
