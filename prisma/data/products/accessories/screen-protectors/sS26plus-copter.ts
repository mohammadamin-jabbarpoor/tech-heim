import { ProductSeed } from "@/prisma/types/product-seed";

export const s26PlusScreenProtector: ProductSeed = {
  title: "Samsung Galaxy S26+ Copter Exoglass Screen Protector",
  slug: "s26-plus-copter-exoglass-screen-protector",
  description:
    "Copter Exoglass Privacy for Samsung Galaxy S26+ (Plus) - flat edition.",
  price: "15.00",
  stock: 67,
  category: "accessories",

  images: [
    {
      path: "products/accessories/screen-protectors/s26-plus-copter-exoglass-screen-protector/copter-exoglass-flat-860.webp",
      alt: "Samsung Galaxy S26+ Copter",
      isPrimary: true,
      sortOrder: 1,
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Copter",
      sortOrder: 1,
    },
    {
      title: "Compatible",
      value: "Samsung Galaxy S26+",
      sortOrder: 2,
    },
    {
      title: "Type",
      value: "Second Glass",
      sortOrder: 3,
    },
    {
      title: "Accessories type",
      value: "Flat",
      sortOrder: 4,
    },
  ],
};
