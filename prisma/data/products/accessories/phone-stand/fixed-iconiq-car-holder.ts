import { ProductSeed } from "@/prisma/types/product-seed";

export const fixedCarHolder: ProductSeed = {
  title: "Fixed Iconiq XXL Car Holder",
  slug: "fixed-iconiq-xxl-car-holder",
  description:
    "The FIXED Iconiq XXL universal car holder with the Push and grip quick-release system offers a safe and simple phone attachment that you can handle with one hand.",
  price: "19.99",
  stock: 22,
  category: "accessories",

  images: [
    {
      path: "products/accessories/phone-stand/fixed-iconiq-xxl-car-holder/1-fixed-iconiq-xxl-black-860.webp",
      alt: "1 Fixed Iconiq XXL Car Holder",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/accessories/phone-stand/fixed-iconiq-xxl-car-holder/2-fixed-iconiq-xxl-black-860.webp",
      alt: "2 Fixed Iconiq XXL Car Holder",
      sortOrder: 2,
    },
  ],

  specifications: [
    {
      title: "Width from [mm]",
      value: "53",
      sortOrder: 1,
    },
    {
      title: "Width to [mm]",
      value: "83",
      sortOrder: 2,
    },
    {
      title: "Frame Colour",
      value: "Black",
      sortOrder: 3,
    },
    {
      title: "Item number",
      value: "FIXICQ-XXL-BK",
      sortOrder: 4,
    },
    {
      title: "Manufacturer",
      value: "FIXED",
      sortOrder: 5,
    },
  ],
};
