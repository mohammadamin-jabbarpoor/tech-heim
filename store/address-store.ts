import { create } from "zustand";
import { Address } from "@/types/address";

type AddressStore = {
  address: Address | null;
  setAddress: (address: Address) => void;
  clearAddress: () => void;
};

export const useAddressStore = create<AddressStore>((set) => ({
  address: null,

  setAddress: (address) => set({ address }),

  clearAddress: () => set({ address: null }),
}));
