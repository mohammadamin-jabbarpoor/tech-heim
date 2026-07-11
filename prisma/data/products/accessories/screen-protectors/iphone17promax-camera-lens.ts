import { ProductSeed } from "@/prisma/types/product-seed";

export const iphone17ProMaxCameraLens: ProductSeed = {
  title: "iPhone 17 Pro / Pro Max Cellularline Camera Lens Rings",
  slug: "iphone-17-pro-max-camera-lens",
  description:
    "Tempered glass for camera protection.",
  price: "15.00",
  stock: 42,
  category: "accessories",

  images: [
    {
      path: "products/accessories/screen-protectors/iphone-17-pro-max-cellularline-camera-lens-rings/iphone-pro-pro-max-cellularline-camera-lens-ring-860.webp",
      alt: "iPhone 17 Pro / Pro Max Camera Lens",
      isPrimary: true,
      sortOrder: 1,
    },
  ],

  specifications: [
    {
      title: "Material",
      value: "Glass",
      sortOrder: 1,
    },
    {
      title: "Tipologia Prodotto",
      value: "Vetri fotocamera",
      sortOrder: 2,
    },
    {
      title: "Tipologia Device",
      value: "Smartphone",
      sortOrder: 3,
    },
    {
      title: "Caratteristiche Speciali",
      value: "Protezione",
      sortOrder: 4,
    },
  ],
};
