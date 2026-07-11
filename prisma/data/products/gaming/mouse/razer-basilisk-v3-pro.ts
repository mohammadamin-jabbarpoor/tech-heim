import { ProductSeed } from "@/prisma/types/product-seed";

export const razerBasilikV3Pro: ProductSeed = {
  title: "Razer Basilisk V3 Pro",
  slug: "razer-basilisk-v3-pro",
  description:
    "Choose between tactile cycling and smooth, free-spin scrolling, or auto-switch between them based on the scroll speed in Smart-Reel mode—now configurable on Synapse.",
  price: "188.00",
  stock: 60,
  category: "gaming",

  images: [
    {
      path: "products/gaming/mouse/razer-basilisk-v3-pro/1-razer-basilisk-v3-pro-white-860.webp",
      alt: "1 Razer Basilisk V3 Pro",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/mouse/razer-basilisk-v3-pro/2-razer-basilisk-v3-pro-white-860.webp",
      alt: "2 Razer Basilisk V3 Pro",
      sortOrder: 2,
    },
    {
      path: "products/gaming/mouse/razer-basilisk-v3-pro/3-razer-basilisk-v3-pro-white-860.webp",
      alt: "3 Razer Basilisk V3 Pro",
      sortOrder: 3,
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "Razer",
      sortOrder: 1,
    },
    {
      title: "Number of key",
      value: "11",
      sortOrder: 2,
    },
    {
      title: "Mouse sensitivity DPI",
      value: "30000",
      sortOrder: 3,
    },
    {
      title: "Backlight",
      value: "Yes",
      sortOrder: 4,
    },
    {
      title: "Warranty ",
      value: "2 Year",
      sortOrder: 5,
    },
  ],
};
