"use client";

import { useCheckoutStore } from "@/store/checkout-store";
import { CartItemType } from "@/types/cart";

function TotalPrice({ items }: { items: CartItemType[] }) {
  const shippingMethod = useCheckoutStore((state) => state.shippingMethod);

  const productsTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const discountTotal = items.reduce(
    (total, item) =>
      total +
      (item.compareAtPrice
        ? (item.compareAtPrice - item.price) * item.quantity
        : 0),
    0,
  );

  const payableNow = items.reduce((total, item) => {
    if (item.payment?.type === "installment") {
      return total + (item.payment.installmentPrice ?? 0) * item.quantity;
    }

    return total + item.price * item.quantity;
  }, 0);

  const remainingInstallments = items.reduce((total, item) => {
    if (
      item.payment?.type === "installment" &&
      item.payment.months &&
      item.payment.installmentPrice
    ) {
      return (
        total +
        item.payment.installmentPrice *
          (item.payment.months - 1) *
          item.quantity
      );
    }

    return total;
  }, 0);

  const grandTotal = payableNow + 25;

  return (
    <div className="space-y-2 p-2">
      <div className="flex items-center justify-between font-light text-xs text-gray-600">
        <span>Subtotal</span>
        <span className="text-gray-800">${productsTotal.toFixed(2)}</span>
      </div>

      {discountTotal > 0 && (
        <div className="flex items-center justify-between font-light text-xs text-gray-600">
          <span>Discount</span>
          <span className="text-gray-800">-${discountTotal.toFixed(2)}</span>
        </div>
      )}

      <div className="flex items-center justify-between font-light text-xs text-gray-600">
        <span>Pay now</span>
        <span className="text-gray-800">${payableNow.toFixed(2)}</span>
      </div>

      {remainingInstallments > 0 && (
        <div className="flex items-center justify-between font-light text-xs text-gray-600">
          <span>Remaining installments</span>
          <span className="text-gray-800">
            ${remainingInstallments.toFixed(2)}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between font-light text-xs text-gray-600">
        <span>Shipment cost</span>
        <span className="text-gray-800">
          ${shippingMethod?.price.toFixed(2) ?? (25).toFixed(2)}
        </span>
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
