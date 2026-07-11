import { ProductSeed } from "@/prisma/types/product-seed";

export const appleMagicKeyboard: ProductSeed = {
  title: "Apple Magic Keyboard",
  slug: "apple-magic-keyboard",
  description:
    "The perfect companion for iPad Pro and iPad Air, Magic Keyboard features a great typing experience, a trackpad, backlit keys, a USB‑C port for pass‑through charging, and front and back protection. No charging or pairing required. Simply attach it and start typing.",
  price: "119.50",
  stock: 8,
  category: "gaming",

  images: [
    {
      path: "products/gaming/keyboard/apple-magic-keyboard/1-apple-magic-keyboard-white-int-860.webp",
      alt: "1 Apple Magic Keyboard",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/keyboard/apple-magic-keyboard/2-apple-magic-keyboard-white-int-860.webp",
      alt: "2 Apple Magic Keyboard",
      sortOrder: 2,
    },
    {
      path: "products/gaming/keyboard/apple-magic-keyboard/3-apple-magic-keyboard-white-int-860.webp",
      alt: "3 Apple Magic Keyboard",
      sortOrder: 3,
    },
    {
      path: "products/gaming/keyboard/apple-magic-keyboard/4-apple-magic-keyboard-white-int-860.webp",
      alt: "4 Apple Magic Keyboard",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "Apple",
      sortOrder: 1,
    },
    {
      title: "Colour",
      value: "White",
      sortOrder: 2,
    },
    {
      title: "Size",
      value: "27.89 x 11.49 x 0.41–1.09 cm",
      sortOrder: 3,
    },
    {
      title: "Warranty ",
      value: "1 Year",
      sortOrder: 4,
    },
  ],
};
