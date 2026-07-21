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
  shippingMethod: null,

  setShippingMethod: (method) =>
    set({
      shippingMethod: method,
    }),
}));
