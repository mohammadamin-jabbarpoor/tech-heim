import { ProductSeed } from "@/prisma/types/product-seed";

export const s26UltraCarbonCase: ProductSeed = {
  title: "Samsung Galaxy S26 Carbon Magnet Case",
  slug: "s26-ultra-carbon-magnet-case",
  description:
    "Made with Aramid,a highly durable carbon synthetic fibre material, the Carbon Magnet Case resists scratches and maintains its refined finish over time.",
  price: "80.00",
  compareAtPrice: "90.00",
  stock: 61,
  category: "accessories",
  images: [
    {
      path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/black/1-samsung-galaxy-s26-ultra-ef-ks948snegww-carbon-magnet-black-860.webp",
      alt: "1 Samsung Galaxy S26 Carbon Magnet Case",
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
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/black/1-samsung-galaxy-s26-ultra-ef-ks948snegww-carbon-magnet-black-860.webp",
          alt: "1 Samsung Galaxy S26 Carbon Magnet Case",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/black/2-samsung-galaxy-s26-ultra-ef-ks948snegww-carbon-magnet-black-860.webp",
          alt: "2 Samsung Galaxy S26 Carbon Magnet Case",
          sortOrder: 2,
        },
      ],
    },
    {
      type: "color",
      name: "Coralred",
      value: "#de5a5a",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/coralred/1-samsung-galaxy-s26-ultra-ef-ks948sregww-carbon-magnet-coralred-860.webp",
          alt: "1 Samsung Galaxy S26 Carbon Magnet Case",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/coralred/2-samsung-galaxy-s26-ultra-ef-ks948sregww-carbon-magnet-coralred-860.webp",
          alt: "2 Samsung Galaxy S26 Carbon Magnet Case",
          sortOrder: 2,
        },
      ],
    },
    {
      type: "color",
      name: "Gray",
      value: "#a8a6a6",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/gray/1-samsung-galaxy-s26-ultra-ef-ks948ssegww-carbon-magnet-gray-860.webp",
          alt: "1 Samsung Galaxy S26 Carbon Magnet Case",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/gray/2-samsung-galaxy-s26-ultra-ef-ks948ssegww-carbon-magnet-gray-860.webp",
          alt: "2 Samsung Galaxy S26 Carbon Magnet Case",
          sortOrder: 2,
        },
      ],
    },
    {
      type: "color",
      name: "Bluevoilet",
      value: "#8784ad",
      isDefault: true,
      sortOrder: 1,
      images: [
        {
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/bluevoilet/1-samsung-galaxy-s26-ultra-ef-ks948scegww-carbon-magnet-blueviolet-860.webp",
          alt: "1 Samsung Galaxy S26 Carbon Magnet Case",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/accessories/phone-case/s26-ultra-carbon-magnet-case/bluevoilet/2-samsung-galaxy-s26-ultra-ef-ks948scegww-carbon-magnet-blueviolet-860.webp",
          alt: "2 Samsung Galaxy S26 Carbon Magnet Case",
          sortOrder: 2,
        },
      ],
    },
  ],

  specifications: [
    {
      title: "Compatible",
      value: "Samsung Galaxy S26 Ultra",
      sortOrder: 1,
    },
    {
      title: "Brand",
      value: "Samsung",
      sortOrder: 2,
    },
    {
      title: "Material",
      value: "Carbon",
      sortOrder: 3,
    },
    {
      title: "Type",
      value: "Case",
      sortOrder: 4,
    },
  ],
};
