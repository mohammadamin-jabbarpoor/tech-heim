import { ProductSeed } from "@/prisma/types/product-seed";

export const iphone15PlusMagsafe: ProductSeed = {
  title: "iPhone 15 Plus MagSafe Clear Case",
  slug: "iphone-15-plus-magsafe",
  description:
    "Crafted with a blend of optically clear polycarbonate and flexible materials, the case fits right over the buttons for easy use.",
  price: "59.00",
  stock: 235,
  category: "accessories",

  images: [
    {
      path: "products/accessories/phone-case/iphone-15-plus-magsafe-clear-case/1-iphone-15-plus-clear-case-with-magsafe-860.webp",
      alt: "1 iPhone 15 Plus MagSafe Clear Case",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/accessories/phone-case/iphone-15-plus-magsafe-clear-case/2-iphone-15-plus-clear-case-with-magsafe-860.webp",
      alt: "2 iPhone 15 Plus MagSafe Clear Case",
      sortOrder: 2,
    },
    {
      path: "products/accessories/phone-case/iphone-15-plus-magsafe-clear-case/3-iphone-15-plus-clear-case-with-magsafe-860.webp",
      alt: "3 iPhone 15 Plus MagSafe Clear Case",
      sortOrder: 3,
    },
    {
      path: "products/accessories/phone-case/iphone-15-plus-magsafe-clear-case/4-iphone-15-plus-clear-case-with-magsafe-860.webp",
      alt: "4 iPhone 15 Plus MagSafe Clear Case",
      sortOrder: 4,
    },
    {
      path: "products/accessories/phone-case/iphone-15-plus-magsafe-clear-case/5-iphone-15-plus-clear-case-with-magsafe-860.webp",
      alt: "5 iPhone 15 Plus MagSafe Clear Case",
      sortOrder: 5,
    },
  ],

  specifications: [
    {
      title: "Compatible",
      value: "Apple iPhone 15 Plus",
      sortOrder: 1,
    },
    {
      title: "Color",
      value: "Transparent",
      sortOrder: 2,
    },
    {
      title: "Brand",
      value: "Apple",
      sortOrder: 3,
    },
    {
      title: "Material",
      value: "Silicone",
      sortOrder: 4,
    },
    {
      title: "Type",
      value: "Case",
      sortOrder: 5,
    },
  ],
};
