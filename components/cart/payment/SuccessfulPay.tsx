"use client";

import { useAddressStore } from "@/store/address-store";
import { useCartStore } from "@/store/cart-store";
import { useCheckoutStore } from "@/store/checkout-store";
import { CartItemType } from "@/types/cart";
import { CloseCircle, TickCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

type SuccessfulPayProps = {
  open: boolean;
  onClose: () => void;
  items: CartItemType[];
};

function SuccessfulPay({ open, onClose, items }: SuccessfulPayProps) {
  if (!open) return null;

  const { clearCart } = useCartStore();

  const { address } = useAddressStore();

  const shippingMethod = useCheckoutStore((state) => state.shippingMethod);

  const subTotal = items.reduce(
    (total, item) =>
      total + (item.compareAtPrice ?? item.price) * item.quantity,
    0,
  );

  const discount = items.reduce(
    (total, item) =>
      total +
      (item.compareAtPrice
        ? (item.compareAtPrice - item.price) * item.quantity
        : 0),
    0,
  );

  const shippingCost = shippingMethod?.price ?? 0;

  const grandTotal = subTotal - discount + shippingCost;

  const modalItems = [
    { title: "Payment type", value: "Net Banking" },
    { title: "Phone number", value: address?.phone ?? "09123456789" },
    { title: "Email", value: `${address?.fullName ?? "example"}@gmail.com` },
    {
      title: "Transaction id",
      value: Math.floor(1000000000 + Math.random() * 9000000000),
    },
    { title: "Amount Paid", value: `$${grandTotal.toFixed(2)}` },
  ];

  const successPayment = () => {
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-black/40 p-6">
      <div className="w-130 bg-white p-6 rounded-lg">
        <div className="w-full flex flex-col gap-7">
          <div>
            <button onClick={onClose} className="w-full flex justify-end">
              <CloseCircle size={24} color="#444" />
            </button>
            <div className="flex flex-col items-center justify-center">
              <Image src="/tick.png" alt="tick" width={140} height={140} />
              <p className="font-medium text-3xl text-success">
                Successful Payment
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {modalItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between"
              >
                <span className="font-light text-gray-600">{item.title}</span>
                <span className="font-light text-gray-700">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="w-ful flex justify-end">
            <Link
              href="/products"
              onClick={successPayment}
              className="w-47 flex items-center justify-center py-3.5 bg-primary text-white rounded-lg"
            >
              Order Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulPay;
