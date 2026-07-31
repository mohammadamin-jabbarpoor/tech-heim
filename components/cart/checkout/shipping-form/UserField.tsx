"use client";

import { useAddressStore } from "@/store/address-store";
import { Edit } from "iconsax-react";
import { useState } from "react";
import AddressModal from "./address-modal/AddressModal";

function UserField() {
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useAddressStore();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-800 lg:text-black text-base md:text-lg lg:text-xl mb-2 lg:mb-3">
        User
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full h-12 flex items-center justify-between px-2 rounded-md bg-gray-50 border border-gray-100 cursor-pointer"
      >
        <input
          value={address?.fullName ?? "Full Name"}
          readOnly
          className="w-full pr-2.5 font-light text-sm text-gray-900 outline-none pointer-events-none"
        />
        <Edit variant="Outline" size={24} color="#0C68F4" />
      </button>
      {isOpen && (
        <AddressModal open={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default UserField;
