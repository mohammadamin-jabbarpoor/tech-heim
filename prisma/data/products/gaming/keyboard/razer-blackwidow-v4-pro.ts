import { ProductSeed } from "@/prisma/types/product-seed";

export const razerBlackWidowV4: ProductSeed = {
  title: "Razer BlackWidow V4 Pro",
  slug: "razer-blackwidow-v4-pro",
  description:
    "Enjoy instant, rapid-fire smooth inputs that are just as quiet thanks to built-in sound dampeners.",
  price: "231.00",
  compareAtPrice: "269.00",
  stock: 36,
  category: "gaming",

  images: [
    {
      path: "products/gaming/keyboard/razer-blackwidow-v4-pro/1-Razer_BlackWidow_V4_Pro-860.webp",
      alt: "1 Razer BlackWidow V4 Pro",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/keyboard/razer-blackwidow-v4-pro/2-Razer_BlackWidow_V4_Pro-860.webp",
      alt: "2 Razer BlackWidow V4 Pro",
      sortOrder: 2,
    },
    {
      path: "products/gaming/keyboard/razer-blackwidow-v4-pro/3-Razer_BlackWidow_V4_Pro-860.webp",
      alt: "3 Razer BlackWidow V4 Pro",
      sortOrder: 3,
    },
    {
      path: "products/gaming/keyboard/razer-blackwidow-v4-pro/4-Razer_BlackWidow_V4_Pro-860.webp",
      alt: "4 Razer BlackWidow V4 Pro",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Razer",
      sortOrder: 1,
    },
    {
      title: "Color",
      value: "Black",
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
