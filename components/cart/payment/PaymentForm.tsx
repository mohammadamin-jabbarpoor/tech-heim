"use client";

import { useAddressStore } from "@/store/address-store";
import Image from "next/image";
import Link from "next/link";

function PaymentForm() {
  const { address } = useAddressStore();

  return (
    <>
      <div className="w-full space-y-4 py-6 px-8 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xl">Payment</label>
          <div className="w-full h-12 flex items-center px-2 rounded-lg bg-gray-50 border border-gray-100 text-left cursor-pointer">
            <input type="radio" checked readOnly className="mr-3 w-5 h-5" />
            <Image src="/paypal.svg" alt="" width={49.81} height={12.9} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xl">Billing address</label>

          <button
            type="button"
            className="w-full h-12 flex items-center justify-between px-2 rounded-lg bg-gray-50 border border-gray-100 text-left cursor-pointer"
          >
            <input
              value={
                address
                  ? `${address.address}, ${address.city}, ${address.country}`
                  : "Same as shipping address"
              }
              readOnly
              className="w-150 font-light text-sm text-gray-900 outline-none pointer-events-none"
            />
          </button>
        </div>
      </div>
      <div className="mt-3.5">
        <Link href="/cart" className="px-7.5 py-3.5 text-primary">
          Return to checkout
        </Link>
      </div>
    </>
  );
}

export default PaymentForm;
