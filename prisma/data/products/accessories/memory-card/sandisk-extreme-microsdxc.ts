import { ProductSeed } from "@/prisma/types/product-seed";

export const sandiskExtreme: ProductSeed = {
  title: "SanDisk Extreme microSDXC 190MBs",
  slug: "sandisk-extreme-microsdxc",
  description:
    "The SanDisk Extreme microSDXC memory card lets you save time transferring media with read speeds of up to 190MB/s powered by SanDisk QuickFlow Technology.",
  price: "45.00",
  stock: 15,
  category: "accessories",
  isBestSeller: true,
  images: [
    {
      path: "products/accessories/memory-card/sandisk-extreme-microsdxc-190mbs/128-gb/1-SanDisk-Extreme-microSDXC-128GB-860.webp",
      alt: "1 SanDisk Extreme microSDXC",
      isPrimary: true,
      sortOrder: 1,
    },
  ],
  options: [
    {
      type: "memory",
      name: "128 GB",
      value: "",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/accessories/memory-card/sandisk-extreme-microsdxc-190mbs/128-gb/1-SanDisk-Extreme-microSDXC-128GB-860.webp",
          alt: "1 SanDisk Extreme microSDXC",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/accessories/memory-card/sandisk-extreme-microsdxc-190mbs/128-gb/2-SanDisk-Extreme-microSDXC-128GB-860.webp",
          alt: "2 SanDisk Extreme microSDXC",
          sortOrder: 2,
        },
      ],
    },
    {
      type: "memory",
      name: "256 GB",
      value: "",
      isDefault: false,
      sortOrder: 2,
      images: [
        {
          path: "products/accessories/memory-card/sandisk-extreme-microsdxc-190mbs/256-gb/1-SanDisk-Extreme-microSDXC-256GB-860.webp",
          alt: "1 SanDisk Extreme microSDXC",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/accessories/memory-card/sandisk-extreme-microsdxc-190mbs/256-gb/2-SanDisk-Extreme-microSDXC-256GB-860.webp",
          alt: "2 SanDisk Extreme microSDXC",
          sortOrder: 2,
        },
      ],
    },
  ],

  specifications: [
    {
      title: "Capacity",
      value: "128/256 GB",
      sortOrder: 1,
    },
    {
      title: "Form Factor",
      value: "microSDXC™",
      sortOrder: 2,
    },
    {
      title: "Interface",
      value: "UHS-I",
      sortOrder: 3,
    },
    {
      title: "Warranty",
      value: "Lifetime Limited Warranty",
      sortOrder: 4,
    },
    {
      title: "Weight",
      value: "4.54gms",
      sortOrder: 5,
    },
  ],
};
