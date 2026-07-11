import { ProductSeed } from "@/prisma/types/product-seed";

export const universalTableStand: ProductSeed = {
  title: "Universal table stand smartphones and tablets",
  slug: "universauniversal-table-stand-smartphones-and-tablets",
  description:
    "Foldable table stand for smartphones and tablets.",
  price: "12.00",
  compareAtPrice: "16.99",
  stock: 54,
  category: "accessories",

  images: [
    {
      path: "products/accessories/phone-stand/universal-table-stand-smartphones-and-tablets/1-cellularline-universal-table-stand-phones-and-tablets-860.webp",
      alt: "1 Universal table stand",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/accessories/phone-stand/universal-table-stand-smartphones-and-tablets/2-cellularline-universal-table-stand-phones-and-tablets-860.webp",
      alt: "2 Universal table stand",
      sortOrder: 2,
    },
    {
      path: "products/accessories/phone-stand/universal-table-stand-smartphones-and-tablets/3-cellularline-universal-table-stand-phones-and-tablets-860.webp",
      alt: "3 Universal table stand",
      sortOrder: 3,
    },
    {
      path: "products/accessories/phone-stand/universal-table-stand-smartphones-and-tablets/4-cellularline-universal-table-stand-phones-and-tablets-860.webp",
      alt: "4 Universal table stand",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Colour",
      value: "Gray",
      sortOrder: 1,
    },
    {
      title: "Technology",
      value: "No",
      sortOrder: 2,
    },
    {
      title: "Tipologia Prodotto",
      value: "Support",
      sortOrder: 3,
    },
    {
      title: "Certifications",
      value: "NO",
      sortOrder: 4,
    },
    {
      title: "Manufacturer",
      value: "Cellularline",
      sortOrder: 5,
    },
  ],
};
