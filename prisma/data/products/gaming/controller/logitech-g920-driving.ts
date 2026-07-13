import { ProductSeed } from "@/prisma/types/product-seed";

export const logG920Driving: ProductSeed = {
  title: "Logitech G920 Driving Force Racing Wheel",
  slug: "logitech-g920-driving",
  description:
    "Immersive Gaming Experience: Perfect for Xbox and PC gaming titles, the Driving Force simulates the feeling of driving a real car with precision steering and pressure-sensitive pedals.",
  price: "299.00",
  stock: 4,
  category: "gaming",
  isNew: true,

  images: [
    {
      path: "products/gaming/controller/logitech-g920-driving-force-racing-wheel/1-G920-Driving-Force-Racing-Wheel-860.webp",
      alt: "1 Logitech G920 Driving",
      isPrimary: true,
      sortOrder: 1,
    },
    {
      path: "products/gaming/controller/logitech-g920-driving-force-racing-wheel/2-G920-Driving-Force-Racing-Wheel-860.webp",
      alt: "2 Logitech G920 Driving",
      sortOrder: 2,
    },
    {
      path: "products/gaming/controller/logitech-g920-driving-force-racing-wheel/3-G920-Driving-Force-Racing-Wheel-860.webp",
      alt: "3 Logitech G920 Driving",
      sortOrder: 3,
    },
    {
      path: "products/gaming/controller/logitech-g920-driving-force-racing-wheel/4-G920-Driving-Force-Racing-Wheel-860.webp",
      alt: "4 Logitech G920 Driving",
      sortOrder: 4,
    },
  ],

  specifications: [
    {
      title: "Brand",
      value: "Logitech",
      sortOrder: 1,
    },
    {
      title: "Model",
      value: "Logitech G920",
      sortOrder: 2,
    },
    {
      title: "Unit Count",
      value: "20.64 Ounce",
      sortOrder: 3,
    },
    {
      title: "Best Sellers Rank",
      value: "#95 in Video Games",
      sortOrder: 4,
    },
  ],
};
