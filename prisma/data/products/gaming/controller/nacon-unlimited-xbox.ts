import { ProductSeed } from "@/prisma/types/product-seed";

export const naconXbox: ProductSeed = {
  title: "Nacon Revolution X Unlimited Xbox",
  slug: "nacon-unlimited-xbox",
  description:
    "Joysticks and triggers benefit from greatly enhanced precision and durability through magnetic effect, preventing joystick drift.",
  price: "199.00",
  stock: 5,
  category: "gaming",

  images: [
    {
      path: "products/gaming/controller/nacon-revolution-x-unlimited-xbox/1-nacon-revolution-x-unlimited-xbox-860.webp",
      alt: "1 Nacon Revolution X Unlimited Xbox",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/controller/nacon-revolution-x-unlimited-xbox/2-nacon-revolution-x-unlimited-xbox-860.webp",
      alt: "2 Nacon Revolution X Unlimited Xbox",
      sortOrder: 2,
    },
    {
      path: "products/gaming/controller/nacon-revolution-x-unlimited-xbox/3-nacon-revolution-x-unlimited-xbox-860.webp",
      alt: "3 Nacon Revolution X Unlimited Xbox",
      sortOrder: 3,
    },
    {
      path: "products/gaming/controller/nacon-revolution-x-unlimited-xbox/4-nacon-revolution-x-unlimited-xbox-860.webp",
      alt: "4 Nacon Revolution X Unlimited Xbox",
      sortOrder: 4,
    },
    {
      path: "products/gaming/controller/nacon-revolution-x-unlimited-xbox/5-nacon-revolution-x-unlimited-xbox-860.webp",
      alt: "5 Nacon Revolution X Unlimited Xbox",
      sortOrder: 5,
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Nacon",
      sortOrder: 1,
    },
    {
      title: "Model",
      value: "Revolution X Unlimited Xbox",
      sortOrder: 2,
    },
    {
      title: "Connection type",
      value: "USB-C/Bluetooth",
      sortOrder: 3,
    },
    {
      title: "Compatibility",
      value: "PC/Xbox",
      sortOrder: 4,
    },
    {
      title: "Size",
      value: "200 x 189 x 89 mm",
      sortOrder: 5,
    },
  ],
};
