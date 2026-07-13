import { ProductSeed } from "@/prisma/types/product-seed";

export const cellularlineQi2: ProductSeed = {
  title: "Cellularline 10000 Qi2 15W Wireless Mag Stand",
  slug: "cellularline-10000-qi2",
  description:
    "Power bank compatible with the Qi2 ecosystem, 10,000 mAh and 15W, with integrated stand and soft-touch finish for a complete and comfortable wireless charging experience.",
  price: "69.49",
  stock: 17,
  category: "accessories",

  images: [
    {
      path: "products/accessories/power-bank/cellularline-10000-qi2-15w-wireless-mag-stand/1-cellularline-10000-qi2-15w-wireless-mag-stand-860.webp",
      alt: "1 Cellularline 10000 Qi2",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/accessories/power-bank/cellularline-10000-qi2-15w-wireless-mag-stand/2-cellularline-10000-qi2-15w-wireless-mag-stand-860.webp",
      alt: "2 Cellularline 10000 Qi2",
      sortOrder: 2,
    },
    {
      path: "products/accessories/phone-stand/cellularline-10000-qi2-15w-wireless-mag-stand/3-cellularline-10000-qi2-15w-wireless-mag-stand-860.webp",
      alt: "3 Cellularline 10000 Qi2",
      sortOrder: 3,
    },
  ],

  specifications: [
    {
      title: "Color",
      value: "Black",
      sortOrder: 1,
    },
    {
      title: "Maximum output power",
      value: "20W",
      sortOrder: 2,
    },
    {
      title: "Technology",
      value: "Power Delivery",
      sortOrder: 3,
    },
    {
      title: "Certifications",
      value: "No",
      sortOrder: 4,
    },
    {
      title: "Tipologia Porta",
      value: "USB-C",
      sortOrder: 5,
    },
  ],
};
