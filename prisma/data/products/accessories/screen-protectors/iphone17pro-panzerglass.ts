import { ProductSeed } from "@/prisma/types/product-seed";

export const iphone17ProScreenProtector: ProductSeed = {
  title: "iPhone 17 Pro PanzerGlass Ceramic II Screen Protector",
  slug: "iphone-17-pro-screen-protector",
  description:
    "This latest screen protector features Ohara ceramic glass, offers 5x higher impact resistance, enhanced edge strength, improved transmittance, and high scratch resistance, ensuring maximum protection for your phone.",
  price: "34.30",
  stock: 83,
  category: "accessories",

  images: [
    {
      path: "products/accessories/screen-protectors/iphone-17-pro-panzerglass-ceramic-II-screen-protector/panzerglass-ceramic-ii-easy-aligner-ultra-wide-fit-860.webp",
      alt: "iPhone 17 Pro PanzerGlass",
      isPrimary: true,
      sortOrder: 1,
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "PanzerGlass",
      sortOrder: 1,
    },
    {
      title: "Compatible",
      value: "Apple iPhone 17 Pro",
      sortOrder: 2,
    },
    {
      title: "Type",
      value: "Second Glass",
      sortOrder: 3,
    },
    {
      title: "Warranty Description",
      value: "No Warranty",
      sortOrder: 4,
    },
  ],
};
