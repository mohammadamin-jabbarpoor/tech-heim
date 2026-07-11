import { ProductSeed } from "@/prisma/types/product-seed";

export const nintendoSwitch2: ProductSeed = {
  title: "Nintendo Switch 2",
  slug: "nintendo-switch-2",
  description:
    "Connect the Nintendo Switch 2 station to a TV and immerse yourself in high-resolution game worlds in resolutions up to 4K (TV and game must support 4K resolution.)",
  price: "599.00",
  stock: 9,
  category: "gaming",

  images: [
    {
      path: "products/gaming/console/nintendo-switch-2/1-nitendo-switch-2-860.webp",
      alt: "1 Nintendo Switch 2",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/console/nintendo-switch-2/2-nitendo-switch-2-860.webp",
      alt: "2 Nintendo Switch 2",
      sortOrder: 2,
    },
    {
      path: "products/gaming/console/nintendo-switch-2/3-nitendo-switch-2-860.webp",
      alt: "3 Nintendo Switch 2",
      sortOrder: 3,
    },
    {
      path: "products/gaming/console/nintendo-switch-2/4-nitendo-switch-2-860.webp",
      alt: "4 Nintendo Switch 2",
      sortOrder: 4,
    },
    {
      path: "products/gaming/console/nintendo-switch-2/5-nitendo-switch-2-860.webp",
      alt: "5 Nintendo Switch 2",
      sortOrder: 5,
    },
    {
      path: "products/gaming/console/nintendo-switch-2/6-nitendo-switch-2-860.webp",
      alt: "6 Nintendo Switch 2",
      sortOrder: 6,
    },
  ],

  specifications: [
    {
      title: "Brand Name",
      value: "Nintendo",
      sortOrder: 1,
    },
    {
      title: "Warranty",
      value: "1 Year",
      sortOrder: 2,
    },
    {
      title: "Weight",
      value: "150 gr",
      sortOrder: 3,
    },
    {
      title: "Best Sellers Rank",
      value: "#14 in Video Games",
      sortOrder: 4,
    },
  ],
};
