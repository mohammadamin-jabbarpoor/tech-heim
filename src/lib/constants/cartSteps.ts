import { BagHappy, Card, Truck } from "iconsax-react";

export const cartSteps = [
  {
    title: "cart",
    path: "/cart",
    icon: BagHappy,
  },
  {
    title: "Checkout",
    path: "/checkout",
    icon: Truck,
  },
  {
    title: "Payment",
    path: "/payment",
    icon: Card,
  },
];

export type StepStatus = "completed" | "current" | "upcoming";
