import { ProductSeed } from "@/prisma/types/product-seed";

export const nintendoCintroller: ProductSeed = {
  title: "Nintendo Joy-Con 2 controllers",
  slug: "nintendo-joy-con-2",
  description:
    "Two Joy Con can be used independently in each hand, or together as 1 game controller when attached to the Joy Con grip.",
  price: "95.99",
  stock: 14,
  category: "gaming",

  images: [
    {
      path: "products/gaming/controller/nintendo-joy-con-2-controllers/1-nintendo-joy-con-2-pair-860.webp",
      alt: "1 Nintendo Joy-Con 2 controllers",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/controller/nintendo-joy-con-2-controllers/2-nintendo-joy-con-2-pair-860.webp",
      alt: "2 Nintendo Joy-Con 2 controllers",
      sortOrder: 2,
    },
    {
      path: "products/gaming/controller/nintendo-joy-con-2-controllers/3-nintendo-joy-con-2-pair-860.webp",
      alt: "3 Nintendo Joy-Con 2 controllers",
      sortOrder: 3,
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "Nintendo",
      sortOrder: 1,
    },
    {
      title: "Compatible",
      value: "Nintendo Switch 2",
      sortOrder: 2,
    },
    {
      title: "Unit Count",
      value: "2.0 Count",
      sortOrder: 3,
    },
    {
      title: "Best Sellers Rank",
      value: "#39 in Video Games",
      sortOrder: 4,
    },
  ],
};
