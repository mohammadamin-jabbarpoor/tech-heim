import { ProductSeed } from "@/prisma/types/product-seed";

export const westernDigital: ProductSeed = {
  title: "Western Digital MicroSDHC",
  slug: "western-digital-microsdhc",
  description:
    "Western Digital’s WD Purple microSD card is designed specifically for the mainstream security camera market.",
  price: "25.00",
  stock: 28,
  category: "accessories",
  images: [
    {
      path: "products/accessories/memory-card/western-digital-microsdhc/32-gb/Western-Digital-MicroSDHC-32GB-860.webp",
      alt: "Western Digital MicroSDHC",
      isPrimary: true,
      sortOrder: 1,
    },
  ],
  options: [
    {
      type: "memory",
      name: "32 GB",
      value: "",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/accessories/memory-card/western-digital-microsdhc/32-gb/Western-Digital-MicroSDHC-32GB-860.webp",
          alt: "Western Digital MicroSDHC",
          isPrimary: true,
          sortOrder: 1,
        },
      ],
    },
    {
      type: "memory",
      name: "64 GB",
      value: "",
      isDefault: false,
      sortOrder: 2,
      images: [
        {
          path: "products/accessories/memory-card/western-digital-microsdhc/64-gb/Western-Digital-MicroSDXC-64GB-860.webp",
          alt: "Western Digital MicroSDHC",
          isPrimary: true,
          sortOrder: 1,
        },
      ],
    },
    {
      type: "memory",
      name: "128 GB",
      value: "",
      isDefault: false,
      sortOrder: 3,
      images: [
        {
          path: "products/accessories/memory-card/western-digital-microsdhc/128-gb/Western-Digital-MicroSDXC-128GB-860.webp",
          alt: "Western Digital MicroSDHC",
          isPrimary: true,
          sortOrder: 1,
        },
      ],
    },
  ],

  specifications: [
    {
      title: "Capacity",
      value: "32/64/128 GB",
      sortOrder: 1,
    },
    {
      title: "Form Factor",
      value: "microSDXC™",
      sortOrder: 2,
    },
    {
      title: "Interface",
      value: "SDA 6.0",
      sortOrder: 3,
    },
    {
      title: "Warranty",
      value: "3-Year Limited Warranty",
      sortOrder: 4,
    },
    {
      title: "Model Number",
      value: "WDD064G1P0C",
      sortOrder: 5,
    },
  ],
};
