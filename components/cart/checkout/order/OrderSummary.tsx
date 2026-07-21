"use client";

import { CartItemType } from "@/types/cart";
import Link from "next/link";
import TotalPrice from "../../cart/TotalPrice";
import OrderItemsList from "./OrderItemsList";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SuccessfulPay from "../../payment/SuccessfulPay";

function OrderSummary({ items }: { items: CartItemType[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col gap-10 justify-between p-6 prounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
        <div className="space-y-4">
          <p className="font-medium text-2xl">Your Order</p>
          <div className="space-y-4">
            {items.map((item) => (
              <OrderItemsList key={item.cartItemId} item={item} />
            ))}
          </div>
        </div>
        <TotalPrice items={items} />
        {pathname === "/payment" ? (
          <Link
            href=""
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center py-3.5 bg-primary text-white rounded-lg"
          >
            Continue to pay
          </Link>
        ) : (
          <Link
            href="/payment"
            className="flex items-center justify-center py-3.5 bg-primary text-white rounded-lg"
          >
            Continue to pay
          </Link>
        )}
      </div>

      {isOpen && (
        <SuccessfulPay
          open={isOpen}
          onClose={() => setIsOpen(false)}
          items={items}
        />
      )}
    </>
  );
}

export default OrderSummary;
