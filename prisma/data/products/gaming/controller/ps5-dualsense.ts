import { ProductSeed } from "@/prisma/types/product-seed";

export const ps5Dualsense: ProductSeed = {
  title: "Sony Playstation 5 Dualsense",
  slug: "ps5-dualsense",
  description:
    "Find your voice, share your passion - Chat online through the built-in microphone. Connect a headset directly via the 3.5mm jack. Record and broadcast your epic gaming moments with the create button.",
  price: "74.00",
  stock: 19,
  category: "accessories",
  images: [
    {
      path: "products/gaming/controller/ps5-dualsense/black/1-sony-playstation-5-dualsense-2025-black-860.webp",
      alt: "1 Sony Playstation 5 Dualsense",
      isPrimary: true,
      sortOrder: 1,
    },
  ],
  options: [
    {
      type: "color",
      name: "Black",
      value: "#0f0f0f",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/gaming/controller/ps5-dualsense/black/1-sony-playstation-5-dualsense-2025-black-860.webp",
          alt: "1 Sony Playstation 5 Dualsense",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/black/2-sony-playstation-5-dualsense-2025-black-860.webp",
          alt: "2 Sony Playstation 5 Dualsense",
          sortOrder: 2,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/black/3-sony-playstation-5-dualsense-2025-black-860.webp",
          alt: "3 Sony Playstation 5 Dualsense",
          sortOrder: 3,
        },
      ],
    },
    {
      type: "color",
      name: "White",
      value: "#ffffff",
      sortOrder: 2,
      images: [
        {
          path: "products/gaming/controller/ps5-dualsense/white/1-sony-playstation-5-dualsense-2025-white-860.webp",
          alt: "1 Sony Playstation 5 Dualsense",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/white/2-sony-playstation-5-dualsense-2025-white-860.webp",
          alt: "2 Sony Playstation 5 Dualsense",
          sortOrder: 2,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/white/3-sony-playstation-5-dualsense-2025-white-860.webp",
          alt: "3 Sony Playstation 5 Dualsense",
          sortOrder: 3,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/white/4-sony-playstation-5-dualsense-2025-white-860.webp",
          alt: "4 Sony Playstation 5 Dualsense",
          sortOrder: 4,
        },
      ],
    },
    {
      type: "color",
      name: "Gray Camo",
      value: "#595151",
      sortOrder: 3,
      images: [
        {
          path: "products/gaming/controller/ps5-dualsense/gray-camo/1-sony-playstation-5-dualsense-2025-grey-camo-860.webp",
          alt: "1 Sony Playstation 5 Dualsense",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/gray-camo/2-sony-playstation-5-dualsense-2025-grey-camo-860.webp",
          alt: "2 Sony Playstation 5 Dualsense",
          sortOrder: 2,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/gray-camo/3-sony-playstation-5-dualsense-2025-grey-camo-860.webp",
          alt: "3 Sony Playstation 5 Dualsense",
          sortOrder: 3,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/gray-camo/4-sony-playstation-5-dualsense-2025-grey-camo-860.webp",
          alt: "4 Sony Playstation 5 Dualsense",
          sortOrder: 4,
        },
      ],
    },
    {
      type: "color",
      name: "Red",
      value: "#fa0a0a",
      sortOrder: 4,
      images: [
        {
          path: "products/gaming/controller/ps5-dualsense/red/1-sony-playstation-5-dualsense-2025-red-860.webp",
          alt: "1 Sony Playstation 5 Dualsense",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/red/2-sony-playstation-5-dualsense-2025-red-860.webp",
          alt: "2 Sony Playstation 5 Dualsense",
          sortOrder: 2,
        },
        {
          path: "products/gaming/controller/ps5-dualsense/red/3-sony-playstation-5-dualsense-2025-red-860.webp",
          alt: "3 Sony Playstation 5 Dualsense",
          sortOrder: 3,
        },
      ],
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "Sony",
      sortOrder: 1,
    },
    {
      title: "Model",
      value: "Playstation 5 Dualsense",
      sortOrder: 2,
    },
    {
      title: "Warranty",
      value: "1 Year",
      sortOrder: 3,
    },
    {
      title: "Best Sellers Rank",
      value: "#75 in Video Games",
      sortOrder: 4,
    },
  ],
};
