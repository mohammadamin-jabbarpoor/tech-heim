import { ProductSeed } from "@/prisma/types/product-seed";

export const cellularlineElite: ProductSeed = {
  title: "Cellularline Elite 20000",
  slug: "cellularline-elite-20000",
  description:
    "Elite 20000 is a portable charger with a capacity of 20000mAh that provides up to 144 hours of extra charging for all smartphones.",
  price: "69.49",
  stock: 17,
  category: "accessories",

  images: [
    {
      path: "products/accessories/power-bank/cellularline-elite-20000/1-cellularline-elite-20000-860.webp",
      alt: "1 Cellularline Elite 20000",
      isPrimary: true,
      sortOrder: 1,
    },
  ],

  specifications: [
    {
      title: "Colour",
      value: "Black",
      sortOrder: 1,
    },
    {
      title: "Maximum output power",
      value: "20W",
      sortOrder: 2,
    },
    {
      title: "USB Ports",
      value: "3",
      sortOrder: 3,
    },
    {
      title: "Technology",
      value: "Power Delivery",
      sortOrder: 4,
    },
    {
      title: "Tipologia Porta",
      value: "USB / USB-C",
      sortOrder: 5,
    },
  ],
};
