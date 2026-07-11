import { ProductSeed } from "@/prisma/types/product-seed";

export const appleMagicMouse: ProductSeed = {
  title: "Apple Magic Mouse Multi-Touch Surface",
  slug: "apple-magic-mouse",
  description:
    "Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk.",
  price: "120.00",
  stock: 23,
  category: "gaming",
  images: [
    {
      path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/black/1-apple-magic-mouse-multi-touch-surface-black-860.webp",
      alt: "1 Apple Magic Mouse Multi-Touch Surface",
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
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/black/1-apple-magic-mouse-multi-touch-surface-black-860.webp",
          alt: "1 Apple Magic Mouse Multi-Touch Surface",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/black/2-apple-magic-mouse-multi-touch-surface-black-860.webp",
          alt: "2 Apple Magic Mouse Multi-Touch Surface",
          sortOrder: 2,
        },
        {
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/black/3-apple-magic-mouse-multi-touch-surface-black-860.webp",
          alt: "3 Apple Magic Mouse Multi-Touch Surface",
          sortOrder: 3,
        },
        {
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/black/4-apple-magic-mouse-multi-touch-surface-black-860.webp",
          alt: "4 Apple Magic Mouse Multi-Touch Surface",
          sortOrder: 4,
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
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/white/1-apple-magic-mouse-multi-touch-surface-white-860.webp",
          alt: "1 Apple Magic Mouse Multi-Touch Surface",
          isPrimary: true,
          sortOrder: 1,
        },
        {
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/white/2-apple-magic-mouse-multi-touch-surface-white-860.webp",
          alt: "2 Apple Magic Mouse Multi-Touch Surface",
          sortOrder: 2,
        },
        {
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/white/3-apple-magic-mouse-multi-touch-surface-white-860.webp",
          alt: "3 Apple Magic Mouse Multi-Touch Surface",
          sortOrder: 3,
        },
        {
          path: "products/gaming/mouse/apple-magic-mouse-multi-touch-surface/white/4-apple-magic-mouse-multi-touch-surface-white-860.webp",
          alt: "4 Apple Magic Mouse Multi-Touch Surface",
          sortOrder: 4,
        },
      ],
    },
  ],

  specifications: [
    {
      title: "Manufacturer",
      value: "Apple",
      sortOrder: 1,
    },
    {
      title: "Model",
      value: "Magic Mouse Multi-Touch Surface",
      sortOrder: 2,
    },
    {
      title: "Warranty",
      value: "1 Year",
      sortOrder: 3,
    },
    {
      title: "Connection type",
      value: "USB-C/Bluetooth/Wireless",
      sortOrder: 4,
    },
  ],
};
