"use client";

import EmptyCart from "@/components/cart/cart/EmptyCart";
import PaymentLayout from "@/components/cart/payment/PaymentLayout";
import Stepper from "@/components/cart/Stepper";
import { useCartStore } from "@/store/cart-store";

function page() {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      {items.length ? (
        <div>
          <Stepper />
          <PaymentLayout items={items} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default page;
