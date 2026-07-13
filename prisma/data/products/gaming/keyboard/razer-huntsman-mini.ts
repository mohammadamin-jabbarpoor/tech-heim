import { ProductSeed } from "@/prisma/types/product-seed";

export const razerHuntsmanMini: ProductSeed = {
  title: "Razer Huntsman Mini",
  slug: "razer-huntsman-mini",
  description:
    "Gain ultra-fast repeated inputs with Gen‑2 Razer Analog Optical Switches featuring Rapid Trigger and a 0.1–4.0 mm adjustable actuation range for competitive FPS and esports play.",
  price: "129.00",
  stock: 26,
  category: "gaming",
  isBestSeller: true,

  images: [
    {
      path: "products/gaming/keyboard/razer-huntsman-mini/1-Razer_Huntsman_Mini_Purple_Switch_US_Layout_front_bottom-860.webp",
      alt: "1 Razer Huntsman Mini",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/keyboard/razer-huntsman-mini/2-Razer_Huntsman_Mini_Purple_Switch_US_Layout_front_left-860.webp",
      alt: "2 Razer Huntsman Mini",
      sortOrder: 2,
    },
    {
      path: "products/gaming/keyboard/razer-huntsman-mini/3-Razer_Huntsman_Mini_Purple_Switch_US_Layout_front_right-860.webp",
      alt: "3 Razer Huntsman Mini",
      sortOrder: 3,
    },
    {
      path: "products/gaming/keyboard/razer-huntsman-mini/4-Razer_Huntsman_Mini_Purple_Switch_US_Layout_front-860.webp",
      alt: "4 Razer Huntsman Mini",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Razer",
      sortOrder: 1,
    },
    {
      title: "Color",
      value: "Black",
      sortOrder: 2,
    },
    {
      title: "Type",
      value: "Keyboard",
      sortOrder: 3,
    },
    {
      title: "Key type",
      value: "Mechanical",
      sortOrder: 4,
    },
    {
      title: "Warranty ",
      value: "1 Year",
      sortOrder: 5,
    },
  ],
};
