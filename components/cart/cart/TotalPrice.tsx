"use client";

import { useCheckoutStore } from "@/store/checkout-store";
import { CartItemType } from "@/types/cart";

function TotalPrice({ items }: { items: CartItemType[] }) {
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

  return (
    <div className="space-y-2 p-2">
      <div className="flex items-center justify-between font-light text-xs text-gray-600">
        <span>Subtotal</span>
        <span className="text-gray-800">${subTotal.toFixed(2)}</span>
      </div>

      {discount > 0 && (
        <div className="flex items-center justify-between font-light text-xs text-gray-600">
          <span>Discount</span>
          <span className="text-gray-800">-${discount.toFixed(2)}</span>
        </div>
      )}

      <div className="flex items-center justify-between font-light text-xs text-gray-600">
        <span>Shipment cost</span>
        <span className="text-gray-800">${shippingCost.toFixed(2)}</span>
      </div>

      <div className="w-full border-b-2 border-b-gray-300 py-1" />

      <div className="flex items-center justify-between font-medium text-gray-900">
        <span>Grand Total</span>
        <span className="text-gray-800">${grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default TotalPrice;
