"use client";

import { Edit } from "iconsax-react";
import { useState } from "react";
import AddressModal from "./AddressModal";
import { useAddressStore } from "@/store/address-store";

function AddressSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useAddressStore();

  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-xl">Ship to</label>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full h-12 flex items-center justify-between px-2 rounded-lg bg-gray-50 border border-gray-100 text-left cursor-pointer"
        >
          <input
            value={
              address
                ? `${address.address}, ${address.city}, ${address.country}`
                : "Enter your address"
            }
            readOnly
            className="w-150 font-light text-sm text-gray-900 outline-none pointer-events-none"
          />

          <Edit variant="Outline" size={24} color="#0C68F4" />
        </button>
      </div>

      {isOpen && (
        <AddressModal open={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default AddressSelector;
