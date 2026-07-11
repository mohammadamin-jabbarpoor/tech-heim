import { ProductSeed } from "@/prisma/types/product-seed";

export const xiaomiIntegrated: ProductSeed = {
  title: "Xiaomi 20000 mAh 33W Power Bank with Integrated Cable",
  slug: "xiaomi-20000-mah-33w",
  description:
    "Xiaomi Power Bank 20000 22.5W also supports low-current charging for smaller devices and integrates multiple safety protections to prevent overcurrent, overheating and fires.",
  price: "32.00",
  stock: 19,
  category: "accessories",
  images: [
    {
      path: "products/accessories/power-bank/xiaomi-20000-mah-33w-power-bank-with-integrated-cable/beige/xiaomi-33w-integrated-cable-20000-mah-tan-860.webp",
      alt: "1 Xiaomi 20000 mAh 33W Power Bank",
      isPrimary: true,
      sortOrder: 1,
    },
  ],
  options: [
    {
      type: "color",
      name: "Beige",
      value: "#fff6d9",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/accessories/power-bank/xiaomi-20000-mah-33w-power-bank-with-integrated-cable/beige/xiaomi-33w-integrated-cable-20000-mah-tan-860.webp",
          alt: "1 Xiaomi 20000 mAh 33W Power Bank",
          isPrimary: true,
          sortOrder: 1,
        },
      ],
    },
    {
      type: "color",
      name: "blue",
      value: "#5582cf",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/accessories/power-bank/xiaomi-20000-mah-33w-power-bank-with-integrated-cable/blue/xiaomi-33w-integrated-cable-20000-mah-blue-860.webp",
          alt: "1 iPhone 17 Pro Max TechWoven MagSafe Case",
          isPrimary: true,
          sortOrder: 1,
        },
      ],
    },
  ],

  specifications: [
    {
      title: "Size",
      value: "127 x 70.5 x 30.5 mm",
      sortOrder: 1,
    },
    {
      title: "Power",
      value: "33 W",
      sortOrder: 2,
    },
    {
      title: "Supports fast charge",
      value: "Yes",
      sortOrder: 3,
    },
    {
      title: "Connection type",
      value: "USB-A/USB-C",
      sortOrder: 4,
    },
  ],
};
