import { ProductSeed } from "@/prisma/types/product-seed";

export const asusRogKeris: ProductSeed = {
  title: "Asus ROG Keris II Origin",
  slug: "asus-rog-keris-II-origin",
  description:
    "Pro-Tested Ergonomic Design: Ergo, lightweight 65-gram design with a shape tested by professional FPS players, optimized for PC or Mac gaming.",
  price: "169.00",
  stock: 36,
  category: "gaming",

  images: [
    {
      path: "products/gaming/mouse/asus-rog-keris-II-origin/1-asus-rog-keris-ii-origin-860.webp",
      alt: "1 Asus ROG Keris II Origin",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/mouse/asus-rog-keris-II-origin/2-asus-rog-keris-ii-origin-860.webp",
      alt: "2 Asus ROG Keris II Origin",
      sortOrder: 2,
    },
    {
      path: "products/gaming/mouse/asus-rog-keris-II-origin/3-asus-rog-keris-ii-origin-860.webp",
      alt: "3 Asus ROG Keris II Origin",
      sortOrder: 3,
    },
    {
      path: "products/gaming/mouse/asus-rog-keris-II-origin/4-asus-rog-keris-ii-origin-860.webp",
      alt: "4 Asus ROG Keris II Origin",
      sortOrder: 4,
    },
    {
      path: "products/gaming/mouse/asus-rog-keris-II-origin/5-asus-rog-keris-ii-origin-860.webp",
      alt: "5 Asus ROG Keris II Origin",
      sortOrder: 5,
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Asus",
      sortOrder: 1,
    },
    {
      title: "Model",
      value: "ROG Keris II Origin",
      sortOrder: 2,
    },
    {
      title: "Mouse sensitivity DPI",
      value: "42000",
      sortOrder: 3,
    },
    {
      title: "Backlight",
      value: "Yes",
      sortOrder: 4,
    },
    {
      title: "Warranty ",
      value: "1 Year",
      sortOrder: 5,
    },
  ],
};
