import { shippingMethods } from "@/data/shipping-methods";
import { create } from "zustand";

type ShippingMethod = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type CheckoutStore = {
  shippingMethod: ShippingMethod | null;

  setShippingMethod: (method: ShippingMethod) => void;
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  shippingMethod: shippingMethods.find((method) => method.id === "express")!,

  setShippingMethod: (method) =>
    set({
      shippingMethod: method,
    }),
}));
