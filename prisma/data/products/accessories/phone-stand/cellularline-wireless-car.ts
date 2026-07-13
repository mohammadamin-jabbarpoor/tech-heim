import { ProductSeed } from "@/prisma/types/product-seed";

export const cellularlineMagCar: ProductSeed = {
  title: "Cellularline Mag Wireless Car Charger",
  slug: "cellularline-mag-wireless-car",
  description: "Magnetic car mount compatible with MagSafe wireless charging.",
  price: "34.00",
  stock: 54,
  category: "accessories",

  images: [
    {
      path: "products/accessories/phone-stand/cellularline-mag-wireless-car-charger/1-cellularline-mag-wireless-car-charger-860.webp",
      alt: "1 Cellularline Mag Wireless Car Charger",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/accessories/phone-stand/cellularline-mag-wireless-car-charger/2-cellularline-mag-wireless-car-charger-860.webp",
      alt: "2 Cellularline Mag Wireless Car Charger",
      sortOrder: 2,
    },
    {
      path: "products/accessories/phone-stand/cellularline-mag-wireless-car-charger/3-cellularline-mag-wireless-car-charger-860.webp",
      alt: "3 Cellularline Mag Wireless Car Charger",
      sortOrder: 3,
    },
    {
      path: "products/accessories/phone-stand/cellularline-mag-wireless-car-charger/4-cellularline-mag-wireless-car-charger-860.webp",
      alt: "4 Cellularline Mag Wireless Car Charger",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Support Type",
      value: "Magnetic",
      sortOrder: 1,
    },
    {
      title: "Maximum output power",
      value: "7.5W",
      sortOrder: 2,
    },
    {
      title: "Tipologia Prodotto",
      value: "Support with Charging",
      sortOrder: 3,
    },
    {
      title: "Certifications",
      value: "NO",
      sortOrder: 4,
    },
    {
      title: "Tipologia Device",
      value: "Smartphone",
      sortOrder: 5,
    },
  ],
};
