import { ProductSeed } from "@/prisma/types/product-seed";

export const xiaomi17UltraScreenProtector: ProductSeed = {
  title: "Xiaomi 17 Ultra PanzerGlass Screen Protector",
  slug: "xiaomi-17-ultra-screen-protector",
  description:
    "This glass screen protector is ONLY compatible with Xiaomi 17 Ultra.",
  price: "15.00",
  stock: 41,
  category: "accessories",

  images: [
    {
      path: "products/accessories/screen-protectors/xiaomi-17-ultra-panzerglass-screen-protector/panzerglass-screen-protector-860.webp",
      alt: "xiaomi-17-ultra-screen-protector",
      isPrimary: true,
      sortOrder: 1,
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "Panzer",
      sortOrder: 1,
    },
    {
      title: "Compatible",
      value: "Xiaomi 17 Ultra",
      sortOrder: 2,
    },
    {
      title: "Type",
      value: "Second Glass",
      sortOrder: 3,
    },
    {
      title: "Design",
      value: "Tempered Glass, Edge-to-Edge",
      sortOrder: 4,
    },
  ],
};
