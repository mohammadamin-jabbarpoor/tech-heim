import { ProductSeed } from "@/prisma/types/product-seed";

export const xiaomiLite: ProductSeed = {
  title: "Xiaomi Power Bank 10000mAh 22.5W Lite",
  slug: "xiaomi-power-bank-10000-lite",
  description:
    "One of its most popular offerings is the Xiaomi power bank, which provides a portable and reliable source of energy for smartphones and other devices.",
  price: "20.00",
  stock: 17,
  category: "accessories",

  images: [
    {
      path: "products/accessories/power-bank/xiaomi-power-bank-10000mah-22.5w-lite/1-xiaomi-power-bank-10000mah-225w-lite-860.webp",
      alt: "1 Xiaomi Power Bank 10000 Lite",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/accessories/power-bank/xiaomi-power-bank-10000mah-22.5w-lite/2-xiaomi-power-bank-10000mah-225w-lite-860.webp",
      alt: "2 Xiaomi Power Bank 10000 Lite",
      sortOrder: 2,
    },
  ],

  specifications: [
    {
      title: "Color",
      value: "White",
      sortOrder: 1,
    },
    {
      title: "Weight",
      value: "227 g",
      sortOrder: 2,
    },
    {
      title: "Battery capacity",
      value: "10000 mAh",
      sortOrder: 3,
    },
    {
      title: "Supports fast charge",
      value: "Yes",
      sortOrder: 4,
    },
    {
      title: "Connection type",
      value: "USB-A/USB-C",
      sortOrder: 5,
    },
  ],
};
